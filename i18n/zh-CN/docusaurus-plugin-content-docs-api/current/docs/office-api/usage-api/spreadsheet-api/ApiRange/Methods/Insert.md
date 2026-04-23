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
| shift | 可选 | string |  | 指定移动单元格的方向（「right」、「down」）。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例将单元格或单元格范围插入工作表或宏表，并移动其他单元格以腾出空间。

```javascript editor-xlsx
// How to insert a range or a cell into a worksheet.

// Insert a range or a cell into a worksheet specifying its shift direction.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Insert("down");

```
