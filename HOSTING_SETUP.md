# HOSTING CONFIGURATION GUIDE FOR ASTRODARBAR

## The Issue:
Google Search Console shows "Redirect error" when trying to access www.astrodarbar.in
This means the www to non-www redirect is not working properly at the server level.

## Required Actions:

### 1. DNS Configuration
In your DNS provider (wherever you manage astrodarbar.in domain):

#### A Records:
- astrodarbar.in → [Your Server IP]
- www.astrodarbar.in → [Your Server IP] (should point to same IP)

#### CNAME (Alternative to A record for www):
- www → astrodarbar.in

### 2. Hosting Provider Configuration

#### If using Cloudflare:
1. Go to Cloudflare Dashboard
2. Navigate to "Rules" → "Page Rules" or "Redirect Rules"
3. Create rule: www.astrodarbar.in/* → https://astrodarbar.in/$1 (301 redirect)

#### If using cPanel/Apache:
1. Ensure .htaccess file is in the public root directory
2. Make sure mod_rewrite is enabled on server
3. Test redirect manually

#### If using Nginx:
Add to server block:
```
server {
    server_name www.astrodarbar.in;
    return 301 https://astrodarbar.in$request_uri;
}
```

#### If using Vercel:
1. Add custom domain: astrodarbar.in
2. Add redirect domain: www.astrodarbar.in → astrodarbar.in
3. Configure in vercel.json or next.config.js (already done)

#### If using Netlify:
Add to _redirects file:
```
https://www.astrodarbar.in/* https://astrodarbar.in/:splat 301!
```

### 3. SSL Certificate
Ensure SSL certificate covers both:
- astrodarbar.in
- www.astrodarbar.in

### 4. Testing Commands
Test redirects using curl:
```bash
curl -I http://www.astrodarbar.in
curl -I https://www.astrodarbar.in
curl -I http://astrodarbar.in
```

Expected results:
- All should return 301 redirect to https://astrodarbar.in
- Final URL should be https://astrodarbar.in

### 5. Google Search Console
After fixing redirects:
1. Test both URLs in URL Inspection Tool
2. Request indexing for https://astrodarbar.in
3. Do NOT request indexing for www.astrodarbar.in (it should redirect)

### 6. Common Issues
- Cloudflare "Always Use HTTPS" + Page Rules can conflict
- Multiple redirect rules causing chains
- DNS propagation delays (24-48 hours)
- SSL certificate not covering www subdomain

## Testing URLs:
- https://astrodarbar.in/redirect-test.html
- https://www.astrodarbar.in/redirect-test.html (should redirect to non-www)

The second URL should automatically redirect to the first.
