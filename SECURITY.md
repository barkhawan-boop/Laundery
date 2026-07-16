# Security Notes

This app now includes browser-side hardening for the GitHub Pages/PWA build:

- Content Security Policy blocks third-party scripts, objects, external styles, and unexpected network connections.
- Referrer policy prevents app URLs/data from being sent to outside links.
- Admin sessions are not restored from local storage after closing/reopening the app.
- Phone links are sanitized before creating `tel:` URLs.
- External map links use `rel="noopener noreferrer"`.
- User-entered text is escaped before rendering.

## Important for App Store release

The current GitHub Pages version is suitable as a prototype/PWA, but it is not enough for production App Store security because all data and codes live on the user's device.

Before publishing a real iOS app, move these features to a secure backend:

- Owner, customer, and admin login with server-side authentication.
- Laundry/customer/order database with per-user permissions.
- Admin actions protected by server rules, not a PIN stored in app code.
- Push notifications sent from a trusted backend.
- Payment/activation status checked by the backend.
- Encrypted backups and audit logs for owner/admin actions.

Recommended backend options: Firebase, Supabase, or a custom API.
