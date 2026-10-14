# GetTitle

获取当前绘图对象的标题。

继承自 [ApiDrawing.GetTitle](../../ApiDrawing/Methods/GetTitle.md)。

## 语法

```javascript
expression.GetTitle();
```

`expression` - 表示 [ApiGroup](../ApiGroup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取电子表格中绘图对象的标题。

```javascript editor-xlsx
// Needed when reading the alternative text title of a drawing.

// Create a drawing, set its title, and read it back.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("cube", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetTitle("My Drawing Title");
let title = drawing.GetTitle();
worksheet.SetColumnWidth(0, 25);
worksheet.GetRange("A1").SetValue("Drawing title: " + title);
```
