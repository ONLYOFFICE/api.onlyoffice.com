# GetRange

返回表示当前工作表选定区域的对象。可以是单个单元格 - -**A1**，或单行中的单元格
- -**A1:E1**，或单列中的单元格 - -**A1:A10**，或多行多列中的单元格 - -**A1:E10**。

## 语法

```javascript
expression.GetRange(Range1, Range2);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Range1 | 必需 | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | 当前工作表中的单元格范围。 |
| Range2 | 必需 | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | 当前工作表中的单元格范围。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例展示如何获取表示工作表选定区域的对象。

```javascript editor-xlsx
// How to get a range using address.

// Get range and set its horizontal alignment.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetAlignHorizontal("center");
```
