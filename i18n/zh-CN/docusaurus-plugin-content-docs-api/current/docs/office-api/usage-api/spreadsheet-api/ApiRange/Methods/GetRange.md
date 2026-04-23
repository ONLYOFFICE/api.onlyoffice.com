# GetRange

返回表示单元格或单元格范围的 Range 对象。
当应用于 Range 对象时，该属性相对于该 Range 对象。

## 语法

```javascript
expression.GetRange(cell1, cell2);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| cell1 | 必需 | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | 第一个单元格地址（例如「A1」或「A1:B2」）。 |
| cell2 | 可选 | string \| [ApiRange](../../ApiRange/ApiRange.md) |  | 第二个单元格地址（可选，与「cell1」一起定义角落）。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例演示如何从现有范围获取子范围。

```javascript editor-xlsx
// How to get a range within a range.

// Get a range, access subranges and fill them with different colors.

let worksheet = Api.GetActiveSheet();
let parentRange = worksheet.GetRange("B2:F6");
parentRange.SetValue("Parent Range");
parentRange.SetBorders("xlEdgeTop", "xlThick", Api.CreateColorFromRGB(255, 111, 61));

let subRange1 = parentRange.GetRange("A1:B2");
subRange1.SetValue("Sub 1");
subRange1.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

let subRange2 = parentRange.GetRange("C3:D4");
subRange2.SetValue("Sub 2");
subRange2.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

// Test two-parameter syntax: define range by specifying two corners
let subRange3 = parentRange.GetRange("B1", "D2");
subRange3.SetValue("Sub 3");
subRange3.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

```
