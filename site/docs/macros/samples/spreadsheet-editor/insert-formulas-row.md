---
hide_table_of_contents: true
description: Insert formulas into a row of cells.
tags: ["Docs", "Macros", "Spreadsheets"]
---

import Video from '@site/src/components/Video/Video';

# Insert formulas row

Copies formulas and number formats from the row above into the currently active row. Select the desired row and run the macro.

```ts
(function () {
  let sheet = Api.GetActiveSheet();
  let rowNum = sheet.GetActiveCell().GetRow();
  let sourceRow = sheet.GetRange((rowNum - 1) + ":" + (rowNum - 1));
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

Methods used: [GetActiveSheet](../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetActiveCell](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetActiveCell.md), [GetRow](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md), [GetRange](../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [Copy](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Copy.md), [PasteSpecial](../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/PasteSpecial.md)

## Result

<Video src="/assets/video/macros/spreadsheet-editor/insert-formulas-row" dark />
