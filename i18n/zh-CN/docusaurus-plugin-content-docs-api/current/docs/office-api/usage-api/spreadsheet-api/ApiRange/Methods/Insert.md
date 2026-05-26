# Insert

将单元格或单元格范围插入工作表或宏表，并移动其他单元格以腾出空间。

## 语法

```javascript
expression.Insert(shift);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shift | 可选 | string |  | 指定移动单元格的方向（“right”、“down”）。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中添加新单元格或范围并将现有单元格推到一边腾出空间。

```javascript editor-xlsx
// How do I insert a blank cell into a filled area and shift the surrounding data in a spreadsheet?

// Make space for new data by inserting a cell and choosing which direction the neighbors move in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Insert("down");
```
