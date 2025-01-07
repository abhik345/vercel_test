"use client"

import { ReactLenis } from 'lenis/react'

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      { children }
    </ReactLenis>
  )
}

export default SmoothScrolling








// # DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION BEGIN
// PassengerAppRoot "/home/pramodmaloo/malo"
// PassengerBaseURI "/"
// PassengerNodejs "/home/pramodmaloo/nodevenv/malo/18/bin/node"
// PassengerAppType node
// PassengerStartupFile server.js
// # DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION END

// # Ensure CSS and JS files are served with the correct MIME type
// AddType text/css .css
// AddType application/javascript .js

// # Add MIME types for fonts
// AddType application/font-woff2 .woff2
// AddType application/font-woff .woff

// # Enable Gzip compression for better performance
// <IfModule mod_deflate.c>
//   AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
// </IfModule>

// # Set caching headers for static assets
// <IfModule mod_expires.c>
//   ExpiresActive On
//   ExpiresByType text/css "access plus 1 month"
//   ExpiresByType application/javascript "access plus 1 month"
//   ExpiresByType image/png "access plus 1 year"
//   ExpiresByType image/jpg "access plus 1 year"
//   ExpiresByType image/jpeg "access plus 1 year"
//   ExpiresByType image/gif "access plus 1 year"
//   ExpiresByType image/svg+xml "access plus 1 year"
//   ExpiresByType image/webp "access plus 1 year"
//   ExpiresByType application/font-woff "access plus 1 year"
//   ExpiresByType application/font-woff2 "access plus 1 year"
// </IfModule>

// # Handle rewrite rules for Next.js routing
// <IfModule mod_rewrite.c>
//   RewriteEngine On
//   RewriteBase /

//   # Serve Next.js static assets directly
//   RewriteRule ^_next/static/(.*)$ - [L]
//   RewriteRule ^_next/image/(.*)$ - [L]
//   RewriteRule ^_next/data/(.*)$ - [L] 
//   RewriteRule ^static/(.*)$ - [L]

//   # Allow direct access to all static image files
//   RewriteRule ^(.*\.(png|jpg|jpeg|gif|svg|webp|ico))$ - [L]

//   # Redirect all other requests to the Next.js app
//   RewriteCond %{REQUEST_FILENAME} !-f
//   RewriteCond %{REQUEST_FILENAME} !-d
//   RewriteRule ^(.*)$ /$1 [L]
// </IfModule>

// # Trailing slash handling (optional)
// <IfModule mod_rewrite.c>
//   RewriteCond %{REQUEST_FILENAME} !-f
//   RewriteCond %{REQUEST_URI} !(.*)/$
//   RewriteRule ^(.*[^/])$ /$1/ [L,R=301]
// </IfModule>

// # Custom error pages (optional)
// ErrorDocument 500 /500.html
// ErrorDocument 404 /404.html

// # Security headers (optional for improved security)
// <IfModule mod_headers.c>
//   Header set X-Content-Type-Options "nosniff"
//   Header set X-Frame-Options "SAMEORIGIN"
//   Header set X-XSS-Protection "1; mode=block"
// </IfModule>

// # Prevent directory listing
// Options -Indexes


