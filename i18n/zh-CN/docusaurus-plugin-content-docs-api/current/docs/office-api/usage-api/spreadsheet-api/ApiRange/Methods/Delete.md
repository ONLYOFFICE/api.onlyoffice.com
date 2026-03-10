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
| shift | 可选 | [DeleteShiftDirection](../../Enumeration/DeleteShiftDirection.md) |  | 指定如何移动单元格以替换已删除的单元格。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例删除 Range 对象。

```javascript editor-xlsx
// How to remove a range from the worksheet.

// Get a range from the worksheet and delete it specifying the direction.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Delete("up");
```
