---
hide_table_of_contents: true
---

# 插入公式行

将上方行中的公式和数字格式复制到当前活动行。选择目标行并运行宏。

```ts
(function () {
  let sheet = Api.GetActiveSheet();
  let rowNum = sheet.GetActiveCell().GetRow();
  let sourceRow = sheet.GetRange(rowNum - 1 + ":" + (rowNum - 1));
  let destRow = sheet.GetRange(rowNum + ":" + rowNum);

  sourceRow.Copy();

  // 从源行粘贴值和数字格式
  destRow.PasteSpecial(
    "xlPasteValuesAndNumberFormats",
    "xlPasteSpecialOperationNone",
    false,
    false,
  );
  // 从源行粘贴公式
  destRow.PasteSpecial(
    "xlPasteFormulas",
    "xlPasteSpecialOperationNone",
    false,
    false,
  );
})();
```

所用方法：[GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md)，[GetActiveCell](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetActiveCell.md)，[GetRow](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetRow.md)，[GetRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md)，[Copy](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Copy.md)，[PasteSpecial](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/PasteSpecial.md)

## 结果

![Insert formulas row](/assets/images/plugins/insert-formulas-row.png#gh-light-mode-only)![Insert formulas row](/assets/images/plugins/insert-formulas-row.dark.png#gh-dark-mode-only)
