const SPREADSHEET_ID = "1LJAoyeyp-Gz6HhmAQay7PbaPSX--oIfjleX_2FSd2I8";
const SHEET_NAME = "Signups";

function doPost(e) {
  const raw = (e && e.postData && e.postData.contents) ? e.postData.contents : "";
  let data = {};

  try {
    data = raw ? JSON.parse(raw) : {};
  } catch (error) {
    data = (e && e.parameter) ? e.parameter : {};
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
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
