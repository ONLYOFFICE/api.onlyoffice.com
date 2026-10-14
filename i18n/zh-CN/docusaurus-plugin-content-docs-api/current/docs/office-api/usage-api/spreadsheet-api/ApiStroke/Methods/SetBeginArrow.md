# SetBeginArrow

设置笔触的起始箭头。

## 语法

```javascript
expression.SetBeginArrow(type, width, length);
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [LineEndType](../../Enumeration/LineEndType.md) |  | 起始箭头的类型。 |
| width | 可选 | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | 起始箭头的宽度。 |
| length | 可选 | [LineEndSize](../../Enumeration/LineEndSize.md) | "medium" | 起始箭头的长度。 |

## 返回值

boolean

## 示例

在电子表格中为形状边框的起点添加箭头。

```javascript editor-xlsx
// How do I set the beginning arrow of a shape's outline in a spreadsheet?

// Create a shape, retrieve its stroke, and apply a triangle arrow to the start of the border line in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetBeginArrow("triangle", "medium", "large");
worksheet.GetRange("A1").SetValue("Begin arrow set: " + result);
```
