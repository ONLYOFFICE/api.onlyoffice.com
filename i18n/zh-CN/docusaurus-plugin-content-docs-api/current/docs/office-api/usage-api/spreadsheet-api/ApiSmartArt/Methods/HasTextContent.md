# HasTextContent

检查当前绘图对象是否具有文本主体。

继承自 [ApiDrawing.HasTextContent](../../ApiDrawing/Methods/HasTextContent.md)。

## 语法

```javascript
expression.HasTextContent();
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在操作之前检查工作表上的图形对象是否可以包含文本。

```javascript editor-xlsx
// Images and tables have no text body, so the check tells a text drawing from the others.

// Write the answer into cells before and after the text body is created.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

worksheet.GetRange("A1").SetValue("before: " + shape.HasTextContent());

shape.GetTextRange().SetText("Sample");

worksheet.GetRange("A2").SetValue("after: " + shape.HasTextContent());
```
