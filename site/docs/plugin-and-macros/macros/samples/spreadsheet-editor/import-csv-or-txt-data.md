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
        var arrAllRows = data.split(/\r?\n|\r/);
        var oWorksheet = Api.GetActiveSheet();

        //reference point
        var i = 1;
        var j = 1;

        for (var singleRow = 0; singleRow < arrAllRows.length; singleRow++) {
            var rowCells = arrAllRows[singleRow].split(',');
            for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
               oWorksheet.GetCells(i,j).SetValue(rowCells[rowCell]);
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

Methods used: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), SetV[SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)alue

## Result

![Import CSV/text data](/assets/images/plugins/import-csv-macro.png#gh-light-mode-only)![Import CSV/text data](/assets/images/plugins/import-csv-macro.dark.png#gh-dark-mode-only)
