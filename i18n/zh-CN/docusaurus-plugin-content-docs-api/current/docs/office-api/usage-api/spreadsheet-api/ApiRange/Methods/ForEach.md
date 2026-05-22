# ForEach

为每个单元格执行一次提供的函数。

## 语法

```javascript
expression.ForEach(fCallback);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fCallback | 必需 | function |  | 将为每个单元格执行的函数。 |

## 返回值

boolean

## 示例

在电子表格中对范围内的每个单元格运行自定义操作。

```javascript editor-xlsx
// How do I apply the same operation to each cell in a selection in a spreadsheet?

// Loop over a group of cells and bold any that do not contain a specific value.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let range = worksheet.GetRange("A1:C1");
range.ForEach(function (range) {
    let value = range.GetValue();
    if (value != "1") {
        range.SetBold(true);
    }
});
```
