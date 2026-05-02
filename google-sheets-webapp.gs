const SHEET_NAME = "Signups";

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Event",
      "Provider",
      "First Name",
      "Surname",
      "Full Name",
      "Mobile",
      "Email",
    ]);
  }

  sheet.appendRow([
    new Date(),
    data.event || "signup",
    data.provider || "",
    data.firstName || "",
    data.surname || "",
    data.name || "",
    data.phone || "",
    data.email || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("CouponsWorld Sheets webhook is running")
    .setMimeType(ContentService.MimeType.TEXT);
}
