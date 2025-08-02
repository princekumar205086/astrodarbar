# 🚨 CRITICAL: GODADDY REDIRECT CONFIGURATION

## PROBLEM IDENTIFIED:
Your domain astrodarbar.in is using GoDaddy nameservers and has a REVERSE redirect:
- astrodarbar.in redirects TO www.astrodarbar.in (WRONG!)
- www.astrodarbar.in redirects TO astrodarbar.in (Correct)

This creates a redirect loop that Google detects as "Redirect error"

## IMMEDIATE GODADDY FIXES:

### 1. Login to GoDaddy Account
- Go to godaddy.com
- Login to your account
- Navigate to "My Products" → "All Products and Services"

### 2. Check Domain Settings
- Find "astrodarbar.in" in your domain list
- Click "DNS" or "Manage DNS"

### 3. Look for Redirect Settings
Check these sections:
- **Forwarding** section
- **Redirects** section  
- **DNS Records** (look for CNAME or A records)

### 4. Fix the Reverse Redirect
You should find a setting that redirects:
❌ astrodarbar.in → www.astrodarbar.in

**CHANGE IT TO:**
✅ www.astrodarbar.in → astrodarbar.in

### 5. DNS Records Should Be:
```
Type: A
Name: @
Value: [Your server IP] (currently 216.198.79.1)

Type: CNAME
Name: www  
Value: astrodarbar.in

OR

Type: A
Name: www
Value: [Same server IP]
```

### 6. Domain Forwarding Settings:
If you have domain forwarding enabled:
- **Primary Domain:** astrodarbar.in
- **Forward www to non-www:** YES
- **Redirect Type:** 301 Permanent

### 7. If Using GoDaddy Web Hosting:
- Go to cPanel or hosting control panel
- Check .htaccess file in public_html/
- Ensure it has the correct redirect rules (use the .htaccess we created)

### 8. Alternative: Change Nameservers
If you're hosting elsewhere (Vercel, Netlify, etc.):
- Change nameservers from GoDaddy to your hosting provider
- Configure redirects at the hosting provider level

## VERIFICATION:
After making changes:
1. Wait 2-4 hours for DNS propagation
2. Test using: https://httpstatus.io/
3. Verify these results:
   - http://www.astrodarbar.in → 301 → https://astrodarbar.in
   - https://www.astrodarbar.in → 301 → https://astrodarbar.in
   - http://astrodarbar.in → 301 → https://astrodarbar.in
   - https://astrodarbar.in → 200 OK (no redirect)

## CONTACT GODADDY SUPPORT:
If you can't find the redirect settings:
- Call GoDaddy support: 1-480-624-2500
- Say: "I need to remove a domain redirect from astrodarbar.in to www.astrodarbar.in"
- Ask them to configure: "www.astrodarbar.in should redirect to astrodarbar.in instead"

This is a common GoDaddy configuration issue and their support can fix it quickly.
