# Laundery-Erbil

Mobile-first prototype for laundry owners, customers, and an admin in Erbil.

## What is included

- Language selection at launch: Kurdish, Arabic, English.
- Laundry owner sign-in by laundry name and owner code.
- The latest successful login is remembered on the same device until Log out is pressed.
- Owner dashboard with add-customer form, urgent marking, completion button, and notifications.
- Customer sign-in by laundry and code from 0-500.
- Customer dashboard with welcome name, urgent request button, green ready status, and history.
- Admin dashboard for registering laundries and assigning owner codes.
- Admin can disable a laundry or set an activation period; expired/disabled owners cannot add customers or complete orders until payment is handled.
- Local saved data, installable web app manifest, and service worker.
- Kurdish and Arabic screens use the Sarchia Baran font.
- Urgent requests show read receipts so customers can see when the owner has read the request.

## Demo access

- Admin PIN: `0000`
- Hidden admin URL: `http://localhost:5177/?admin=1`
- Hidden admin gesture: tap the logo/app name 5 times on the launch or role screen.
- Sample owner: `Shanadar Laundry` / `1842`
- Sample customer: `Shanadar Laundry` / customer code `12`

## Run

From this folder:

```powershell
python -m http.server 5177
```

Then open:

```text
http://localhost:5177
```

## Production notes

This first version stores data in the browser. A real iOS release needs a backend database, owner/customer accounts, and Apple push notifications or a push provider so notifications reach different phones.
