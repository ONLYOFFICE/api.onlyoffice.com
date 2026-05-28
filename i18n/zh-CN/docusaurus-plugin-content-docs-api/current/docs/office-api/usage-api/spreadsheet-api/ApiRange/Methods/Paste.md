# Paste

将 Range 对象粘贴到指定范围。

## 语法

```javascript
expression.Paste(rangeFrom);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rangeFrom | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 指定要粘贴到当前范围的范围 |

## 返回值

此方法不返回任何数据。

## 示例

复制一个范围的内容并粘贴到电子表格中的另一个位置。

```javascript editor-xlsx
// How do I duplicate a row of cells and place the copy somewhere else in a spreadsheet?

// Transfer data from a source range to a target range without retyping it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
let rangeFrom = worksheet.GetRange("B4:D4");
let range = worksheet.GetRange("A1:C1");
range.Paste(rangeFrom);
```
