---
hide_table_of_contents: true
description: Import data from CSV or TXT files into a spreadsheet.
tags: ["Docs", "Macros", "Spreadsheets"]
---

# Import CSV/TXT data

Imports data from remote CSV/TXT files into the spreadsheet.

:::note
This macro is operational only with the desktop versions of the ONLYOFFICE editors.
:::

```ts
(function() 
{
    // Load the file from the URL
    function LoadFile() {
        $.ajax({
            url: 'your url',
            dataType: 'text',
        }).done(successFunction);
    }
    // Process the data
    function successFunction(data) {
        let arrAllRows = data.split(/\r?\n|\r/);
        let worksheet = Api.GetActiveSheet();

        //reference point
        let i = 1;
        let j = 1;

        for (let singleRow = 0; singleRow < arrAllRows.length; singleRow++) {
            let rowCells = arrAllRows[singleRow].split(',');
            for (let rowCell = 0; rowCell < rowCells.length; rowCell++) {
               worksheet.GetCells(i,j).SetValue(rowCells[rowCell]);
                j = j + 1;
            }
            i = i + 1;
            j = 1;
        }
        let usedRange = worksheet.GetUsedRange();
        usedRange.AutoFit(true, true);
    }
    LoadFile();
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md), [GetUsedRange](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [AutoFit](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/AutoFit.md)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/import-csv-or-txt-data.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/spreadsheet-editor/import-csv-or-txt-data.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
