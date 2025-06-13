# Text field transformer: clean, extract, and validate text

This macro finds the "Text" column and applies a wide range of transformations and checks, writing each result into a new adjacent column. It helps clean text, extract parts of it, calculate properties, and validate email format.
Transformations include:
- Uppercase / lowercase / capitalized words
- Trimmed and normalized whitespace
- Extracting first/last word
- Counting characters
- Extracting digits
- Getting email domain
- Email format validation (returns true/false)

```ts
(function () {
  const sheet = Api.GetActiveSheet();
  const HEADER_ROW = 0;
  const MAX_COLS = 30;
  let textCol = -1;

  // === Step 1: Find "Text" column
  for (let c = 0; c < MAX_COLS; c++) {
    const header = sheet.GetRangeByNumber(HEADER_ROW, c).GetText().trim().toLowerCase();
    if (header === "text") {
      textCol = c;
      break;
    }
  }
  if (textCol === -1) {
    sheet.GetRange("A1").SetValue("Header 'Text' not found");
    return;
  }

  // === Step 2: Count rows
  let rowCount = 0;
  while (true) {
    const val = sheet.GetRangeByNumber(rowCount + 1, textCol).GetText().trim();
    if (!val) break;
    rowCount++;
  }

  // === Step 3: Initialize offset tracker
  let currentOffset = 1;

  // === Step 4: Run all transformations
  toUpperCase(textCol, rowCount);
  toLowerCase(textCol, rowCount);
  capitalizeWords(textCol, rowCount);
  trimSpaces(textCol, rowCount);
  normalizeSpaces(textCol, rowCount);
  extractFirstWord(textCol, rowCount);
  extractLastWord(textCol, rowCount);
  getTextLength(textCol, rowCount);
  extractDigits(textCol, rowCount);
  extractEmailDomain(textCol, rowCount);
  checkIsEmail(textCol, rowCount);

  // === Transformations ===

  function toUpperCase(col, rows) {
    addCol("UPPERCASE", col, rows, (txt) => txt.toUpperCase());
  }

  function toLowerCase(col, rows) {
    addCol("lowercase", col, rows, (txt) => txt.toLowerCase());
  }

  function capitalizeWords(col, rows) {
    addCol("Capitalized", col, rows, (txt) =>
      txt.replace(/\w\S*/g, (word) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
    );
  }

  function trimSpaces(col, rows) {
    addCol("Trimmed", col, rows, (txt) => txt.trim());
  }

  function normalizeSpaces(col, rows) {
    addCol("Cleaned spaces", col, rows, (txt) =>
      txt.trim().replace(/\s+/g, " ")
    );
  }

  function extractFirstWord(col, rows) {
    addCol("First word", col, rows, (txt) =>
      txt.trim().split(/\s+/)[0] || ""
    );
  }

  function extractLastWord(col, rows) {
    addCol("Last word", col, rows, (txt) => {
      const parts = txt.trim().split(/\s+/);
      return parts[parts.length - 1] || "";
    });
  }

  function getTextLength(col, rows) {
    addCol("Length", col, rows, (txt) => txt.length);
  }

  function extractDigits(col, rows) {
    addCol("Digits only", col, rows, (txt) => {
      const digits = txt.match(/\d+/g);
      return digits ? digits.join("") : "";
    });
  }

  function extractEmailDomain(col, rows) {
    addCol("Email domain", col, rows, (txt) => {
      const match = txt.match(/@([\w.-]+)/);
      return match ? match[1] : "";
    });
  }

  function checkIsEmail(col, rows) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    addCol("Is email", col, rows, (txt) => emailRegex.test(txt));
  }

  // === Utility: write column label and populate data
  function addCol(label, col, rows, transformFn) {
    const offset = getNextOffset();
    sheet.GetRangeByNumber(HEADER_ROW, col + offset).SetValue(label);
    for (let r = 1; r <= rows; r++) {
      const txt = sheet.GetRangeByNumber(r, col).GetText();
      const cell = sheet.GetRangeByNumber(r, col + offset);
      cell.SetValue(transformFn(txt));
    }
  }

  function getNextOffset() {
    return currentOffset++;
  }

})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [GetText](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetText.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)
 
## Result


