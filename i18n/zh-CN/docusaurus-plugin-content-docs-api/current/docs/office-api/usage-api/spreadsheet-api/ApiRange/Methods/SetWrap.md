# SetWrap

指定单元格中的文字是否必须换行以适应单元格大小。

## 语法

```javascript
expression.SetWrap(isWrap);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isWrap | 必需 | boolean |  | 指定单元格中的文字是否换行以适应单元格大小。 |

## 返回值

boolean

## 示例

在电子表格中将单元格内的文本换行以适应列宽。

```javascript editor-xlsx
// How do I stop text from spilling out of a cell in a spreadsheet?

// Enable word wrap on a cell to keep long content visible without widening the column in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());
```
