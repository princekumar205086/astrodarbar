# HOSTING PROVIDER IDENTIFICATION SCRIPT
# Run these commands to identify your current setup

Write-Host "=== ASTRODARBAR HOSTING DIAGNOSTIC ===" -ForegroundColor Yellow
Write-Host ""

# Check DNS records
Write-Host "1. DNS Records:" -ForegroundColor Green
try {
    $aRecord = Resolve-DnsName "astrodarbar.in" -Type A -ErrorAction SilentlyContinue
    $wwwRecord = Resolve-DnsName "www.astrodarbar.in" -Type A -ErrorAction SilentlyContinue
    $nsRecords = Resolve-DnsName "astrodarbar.in" -Type NS -ErrorAction SilentlyContinue
    
    Write-Host "astrodarbar.in A record: $($aRecord.IPAddress)" -ForegroundColor White
    Write-Host "www.astrodarbar.in A record: $($wwwRecord.IPAddress)" -ForegroundColor White
    Write-Host "Name servers: $($nsRecords.NameHost -join ', ')" -ForegroundColor White
} catch {
    Write-Host "Could not resolve DNS records" -ForegroundColor Red
}

Write-Host ""

# Check hosting provider based on IP and nameservers
Write-Host "2. Likely Hosting Provider:" -ForegroundColor Green

if ($nsRecords.NameHost -like "*vercel*") {
    Write-Host "VERCEL DETECTED" -ForegroundColor Cyan
    Write-Host "Solution: Configure domain redirects in Vercel Dashboard"
}
elseif ($nsRecords.NameHost -like "*netlify*") {
    Write-Host "NETLIFY DETECTED" -ForegroundColor Cyan
    Write-Host "Solution: Configure redirects in Netlify Dashboard or _redirects file"
}
elseif ($nsRecords.NameHost -like "*cloudflare*") {
    Write-Host "CLOUDFLARE DETECTED" -ForegroundColor Cyan
    Write-Host "Solution: Configure Page Rules or Redirect Rules in Cloudflare"
}
elseif ($nsRecords.NameHost -like "*namecheap*") {
    Write-Host "NAMECHEAP HOSTING DETECTED" -ForegroundColor Cyan
    Write-Host "Solution: Configure redirects in cPanel or hosting dashboard"
}
elseif ($nsRecords.NameHost -like "*godaddy*") {
    Write-Host "GODADDY HOSTING DETECTED" -ForegroundColor Cyan
    Write-Host "Solution: Configure redirects in GoDaddy hosting dashboard"
}
else {
    Write-Host "CUSTOM/OTHER HOSTING" -ForegroundColor Yellow
    Write-Host "Nameservers: $($nsRecords.NameHost -join ', ')"
    Write-Host "Check your hosting provider's documentation for redirect configuration"
}

Write-Host ""

# Test current redirect status
Write-Host "3. Testing Current Redirect Status:" -ForegroundColor Green

$urls = @(
    "http://www.astrodarbar.in",
    "https://www.astrodarbar.in",
    "http://astrodarbar.in",
    "https://astrodarbar.in"
)

foreach ($url in $urls) {
    try {
        Write-Host "Testing: $url" -ForegroundColor White
        $response = Invoke-WebRequest -Uri $url -Method Head -MaximumRedirection 0 -ErrorAction SilentlyContinue
        Write-Host "  Status: $($response.StatusCode)" -ForegroundColor $(if ($response.StatusCode -eq 301) { "Green" } else { "Red" })
        if ($response.Headers.Location) {
            Write-Host "  Redirects to: $($response.Headers.Location)" -ForegroundColor White
        }
    } catch {
        $errorResponse = $_.Exception.Response
        if ($errorResponse) {
            Write-Host "  Status: $($errorResponse.StatusCode)" -ForegroundColor $(if ($errorResponse.StatusCode -eq 301) { "Green" } else { "Red" })
            if ($errorResponse.Headers.Location) {
                Write-Host "  Redirects to: $($errorResponse.Headers.Location)" -ForegroundColor White
            }
        } else {
            Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
    Write-Host ""
}

Write-Host "=== NEXT STEPS ===" -ForegroundColor Yellow
Write-Host "1. Based on the hosting provider identified above, configure redirects"
Write-Host "2. All www URLs should return 301 status and redirect to https://astrodarbar.in"
Write-Host "3. Deploy your updated Next.js application"
Write-Host "4. Wait 24-48 hours for DNS propagation"
Write-Host "5. Re-test in Google Search Console"
Write-Host ""
Write-Host "Need help? Visit: https://astrodarbar.in/redirect-diagnostic.html" -ForegroundColor Green
