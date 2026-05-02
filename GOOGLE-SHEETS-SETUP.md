# Google Sheets Signup Tracking

1. Open Google Sheets and create a new sheet.
2. Open `Extensions` > `Apps Script`.
3. Paste the code from `google-sheets-webapp.gs`.
4. Save the project.
5. Deploy it as a web app:
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Copy the deployed web app URL.
7. In `script.js`, set:

```js
window.CW_SHEETS_WEBAPP_URL = "YOUR_WEB_APP_URL";
```

8. Reload the login page and create a test account.

The sheet will store:
- timestamp
- provider
- first name
- surname
- full name
- mobile
- email

Passwords are kept out of Sheets on purpose.
