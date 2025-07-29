# 排序范围

自动对选定范围或电子表格中的整个已用范围进行排序。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let worksheet = Api.GetActiveSheet();
    let range;

    // 选项1 - 默认：获取整个已用区域
    range = worksheet.GetUsedRange();

    // 选项2：如果想手动指定范围，请取消下面这行的注释：
    // range = worksheet.GetRange("L19:N25");  // 示例范围，可根据需要修改

    // 选项3：如果想手动选择范围，请取消下面这行的注释：
    // range = Api.GetSelection();

    if (!range) {
        return;
    }

    let values = range.GetValue();
    if (values.length === 0) {
        return;
    }

    let firstColumnIndex = 0;
    let lastRowIndex = values.length - 1;

    // 判断第一列从哪一列开始
    for (let i = 1; i <= values[0].length; i++) {
        if (!values[lastRowIndex][i - 1]) {
            firstColumnIndex++;
        }
    }

    // 排序逻辑：第一列数字排序，第二列字母排序
    values.sort(function (rowA, rowB) {
        let numA = parseFloat(rowA[firstColumnIndex]); // 第一列
        let numB = parseFloat(rowB[firstColumnIndex]);

        if (!isNaN(numA) && !isNaN(numB) && numA !== numB) {
            return numA - numB; // 先按数字排序
        }

        let textA = rowA[firstColumnIndex + 1]
            ? rowA[firstColumnIndex + 1].toString().toLowerCase()
            : "";
        let textB = rowB[firstColumnIndex + 1]
            ? rowB[firstColumnIndex + 1].toString().toLowerCase()
            : "";

        return textA.localeCompare(textB); // 如果数字相同，则按字母排序
    });

    range.SetValue(values); // 将排序后的数据重新写入选定范围
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetUsedRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetUsedRange.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 结果

<!-- imgpath -->

![AutomaticRangeSorter](/assets/images/plugins/automatic-range-sorter.png#gh-light-mode-only)![AutomaticRangeSorter](/assets/images/plugins/automatic-range-sorter.dark.png#gh-dark-mode-only)