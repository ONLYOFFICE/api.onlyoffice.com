# 条件格式规则

对所选区域应用多个条件格式规则。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    // 获取所选区域
    let selectedRanges = Api.GetSelection();

    // 指定颜色
    let redColor = Api.CreateColorFromRGB(255, 163, 163);
    let greenColor = Api.CreateColorFromRGB(184, 255, 166);

    selectedRanges.ForEach(function (cellRange) {
        let cellValue = cellRange.GetValue();

        if (!cellValue) {
            return;
        }
        // 如果值在 300 到 1000 之间，填充绿色
        if (cellValue >= 300 && cellValue <= 1000) {
            cellRange.SetFillColor(greenColor);
        } else if (cellValue < 50) {
            // 否则填充红色
            cellRange.SetFillColor(redColor);
        }

        // 如果值为零，给单元格添加注释
        if (cellValue == 0) {
            cellRange.AddComment("检查您的公式或输入，值不应为零");
        }
    });
})();
```

使用方法: [GetSelection](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetSelection.md), [CreateColorFromRGB](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/CreateColorFromRGB.md), [ForEach](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/ForEach.md), [GetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/GetValue.md), [SetFillColor](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [AddComment](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/AddComment.md)

## 结果

<!-- imgpath -->

![Conditional formatting rules](/assets/images/plugins/conditional-formatting-rules.png#gh-light-mode-only)![Conditional formatting rules](/assets/images/plugins/conditional-formatting-rules.dark.png#gh-dark-mode-only)
