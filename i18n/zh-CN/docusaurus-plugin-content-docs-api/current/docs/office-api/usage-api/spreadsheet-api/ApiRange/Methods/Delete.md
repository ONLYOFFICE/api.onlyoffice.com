# Delete

删除 Range 对象。

## 语法

```javascript
expression.Delete(shift);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shift | 可选 | [DeleteShiftDirection](../../Enumeration/DeleteShiftDirection.md) |  | 指定如何移动单元格以替换已删除的单元格。如果省略，方向将自动确定：如果范围的列数多于行数，则为 *"up"*，否则为 *"left"*。 |

## 返回值

此方法不返回任何数据。

## 示例

删除单元格范围并移动剩余数据以填补电子表格中的空白。

```javascript editor-xlsx
// How do I delete a group of cells and choose which direction the surrounding data moves in a spreadsheet?

// Erase selected cells while controlling whether neighboring content slides up or across in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Delete("up");
```
