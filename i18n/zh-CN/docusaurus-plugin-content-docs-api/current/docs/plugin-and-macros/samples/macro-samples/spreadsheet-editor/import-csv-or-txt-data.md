# 导入 CSV/TXT 数据

从远程 CSV/TXT 文件导入数据到电子表格中。

> 此宏仅适用于 ONLYOFFICE 桌面版编辑器。

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

        //基准点
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

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetCells](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetCells.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 结果

![Import CSV/text data](/assets/images/plugins/import-csv-macro.png#gh-light-mode-only)![Import CSV/text data](/assets/images/plugins/import-csv-macro.dark.png#gh-dark-mode-only)
