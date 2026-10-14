# GetDescription

获取当前绘图对象的描述。

继承自 [ApiDrawing.GetDescription](../../ApiDrawing/Methods/GetDescription.md)。

## 语法

```javascript
expression.GetDescription();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取电子表格中绘图对象的描述。

```javascript editor-xlsx
// Needed when reading the alternative text of a drawing.

// Create a drawing, set its description, and read it back.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
worksheet.SetColumnWidth(0, 30);
worksheet.GetRange("A1").SetValue("Drawing description: " + description);
```
