# SetDescription

设置当前绘图对象的描述。

继承自 [ApiDrawing.SetDescription](../../ApiDrawing/Methods/SetDescription.md)。

## 语法

```javascript
expression.SetDescription(description);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | 必需 | string |  | 要为当前绘图对象设置的描述。 |

## 返回值

boolean

## 示例

在电子表格中设置绘图对象的描述。

```javascript editor-xlsx
// Useful for assigning the alternative text of a drawing.

// Create a drawing and set its description.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
worksheet.SetColumnWidth(0, 30);
worksheet.GetRange("A1").SetValue("Drawing description: " + description);
```
