# Import CSV/TXT data

Imports data from remote CSV/TXT files into the spreadsheet.

> This macro is operational only with the desktop versions of the ONLYOFFICE editors.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function() 
{
    function LoadFile() {
        $.ajax({
            url: 'your url',
            dataType: 'text',
        }).done(successFunction);
    }
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
    }
    LoadFile();
    let reload = setInterval(function(){
        Api.asc_calculate(Asc.c_oAscCalculateType.All);
    });
})();
```

Methods used: [GetActiveSheet](/docs/office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetCells](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## Result

![Import CSV/text data](/assets/images/plugins/import-csv-macro.png#gh-light-mode-only)![Import CSV/text data](/assets/images/plugins/import-csv-macro.dark.png#gh-dark-mode-only)
