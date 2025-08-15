# 下一空白行

查找工作表中下一个可用的空白行。该宏可帮助你定位数据末尾的空白行（而非数据中间的空白行）。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function () 
{
    // 获取当前活动工作表
    let activeSheet = Api.ActiveSheet;
    // 最小行索引
    let indexRowMin = 0;
    // 最大行索引
    let indexRowMax = 1048576;
    // 列 “A”
    let indexCol = 0;
    // 用于查找空单元格的行索引
    let indexRow = indexRowMax;
    for (; indexRow >= indexRowMin; --indexRow) {
        // 获取单元格
        let range = activeSheet.GetRangeByNumber(indexRow, indexCol);
        // 检查单元格的值
        if (range.GetValue() && indexRow !== indexRowMax) {
            range = activeSheet.GetRangeByNumber(indexRow + 1, indexCol);
            range.Select();
            break;
        }
    }
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRangeByNumber](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md), [Select](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/Select.md)

## 参考 Microsoft VBA 宏代码

[这个 VBA 宏](https://www.teachexcel.com/excel-tutorial/find-the-next-blank-row-with-vba-macros-in-excel_1261.html)被当做基准使用。

``` vb
Sub example()
    Range("A" & Rows.Count).End(xlUp).Offset(1).Select
End Sub
```

## 结果

![Next blank row](/assets/images/plugins/next-blank-row.png#gh-light-mode-only)![Next blank row](/assets/images/plugins/next-blank-row.dark.png#gh-dark-mode-only)
