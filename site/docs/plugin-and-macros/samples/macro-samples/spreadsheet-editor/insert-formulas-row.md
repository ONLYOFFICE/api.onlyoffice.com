---
hide_table_of_contents: true
---

# Insert formulas row

Copies formulas and number formats from the row above into the currently active row. Select the desired row and run the macro.

```ts
(function () {
  let sheet = Api.GetActiveSheet();
  let rowNum = sheet.GetActiveCell().GetRow();
  let sourceRow = sheet.GetRange(rowNum - 1 + ":" + (rowNum - 1));
  let destRow = sheet.GetRange(rowNum + ":" + rowNum);

  sourceRow.Copy();

  // Paste values and number formats from the source row
  destRow.PasteSpecial(
    "xlPasteValuesAndNumberFormats",
    "xlPasteSpecialOperationNone",
    false,
    false,
  );
  // Paste formulas from the source row
  destRow.PasteSpecial(
    "xlPasteFormulas",
    "xlPasteSpecialOperationNone",
    false,
    false,
  );
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetActiveCell](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetActiveCell.md), [GetRow](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Copy](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Copy.md), [PasteSpecial](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/PasteSpecial.md)

## Result

![Insert formulas row](/assets/images/plugins/insert-formulas-row.png#gh-light-mode-only)![Insert formulas row](/assets/images/plugins/insert-formulas-row.dark.png#gh-dark-mode-only)
