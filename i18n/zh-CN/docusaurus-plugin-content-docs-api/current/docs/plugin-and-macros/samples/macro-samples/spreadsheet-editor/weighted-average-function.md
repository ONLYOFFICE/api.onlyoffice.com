# 加权平均函数

创建一个用于计算加权平均值的自定义函数。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    // 获取活动工作表。
    let worksheet = Api.GetActiveSheet();

    // 在单元格 H2 中插入公式。
    // 这将调用上面注册的自定义函数 'weightedAverage'。
    worksheet.GetRange("H2").SetValue("=wa(A$2:A$6, B$2:B$6)");

    // 可选：在单元格 G2 中插入标签。
    worksheet.GetRange("G2").SetValue("Average:");
})();

// 自定义函数：

(function () {
    /**
     * 用于计算加权平均值的自定义函数。
     * @customfunction
     * @param {number[][]} values 一个值的数组（或范围）。
     * @param {number[][]} weights 一个权重的数组（或范围）。
     * @returns {number} 加权平均值。
    */

    function wa(values, weights) {
        console.log("start");
        // 如有必要，将数组展平
        if (Array.isArray(values[0])) {
            values = values.map(function (row) { return row[0]; });
        }
        if (Array.isArray(weights[0])) {
            weights = weights.map(function (row) { return row[0]; });
        }
        // 检查长度是否一致
        if (values.length !== weights.length) {
            throw new Error("Values 和 weights 数组的长度必须一致。");
        }
        let weightedSum = 0;
        let totalWeight = 0;
        for (let i = 0; i < values.length; i++) {
            let v = parseFloat(values[i]);
            let w = parseFloat(weights[i]);
            if (!isNaN(v) && !isNaN(w)) {
                weightedSum += v * w;
                totalWeight += w;
            }
        }
        return totalWeight ? weightedSum / totalWeight : 0;
    }
    Api.AddCustomFunction(wa);
})();
```

使用方法: [GetActiveSheet](../../../../office-api/usage-api/spreadsheet-api/Api/Methods/GetActiveSheet.md), [GetRange](../../../../office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRange.md), [SetValue](../../../../office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)

## 结果

<!-- imgpath -->

![WeightedAverageFunction](/assets/images/plugins/weighted-average-function.png#gh-light-mode-only)![WeightedAverageFunction](/assets/images/plugins/weighted-average-function.dark.png#gh-dark-mode-only)