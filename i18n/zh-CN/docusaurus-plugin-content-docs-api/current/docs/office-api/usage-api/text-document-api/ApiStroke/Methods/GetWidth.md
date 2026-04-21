# GetWidth

获取笔触的宽度（以英制度量单位）。

## 语法

```javascript
expression.GetWidth();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[EMU](../../Enumeration/EMU.md) \| null

## 示例

获取笔触的 EMU 宽度。在文档中创建具有不同边框宽度的形状并显示其宽度。

```javascript editor-docx
// How do I get the width in a document?

// Get the width using a stroke object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Shape with 1pt border
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke1 = Api.CreateStroke(1 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape1 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke1);
paragraph.AddDrawing(shape1);
let width1 = shape1.GetLine().GetWidth();
paragraph.AddText("Border 1: " + width1 + " EMU (" + (width1 / 12700).toFixed(2) + " pt)");
paragraph.AddLineBreak();

// Shape with 2.5pt border
let stroke2 = Api.CreateStroke(2.5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(255, 0, 0)));
let shape2 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke2);
paragraph.AddDrawing(shape2);
let width2 = shape2.GetLine().GetWidth();
paragraph.AddText("Border 2: " + width2 + " EMU (" + (width2 / 12700).toFixed(2) + " pt)");
paragraph.AddLineBreak();

// Shape with 5pt border
let stroke3 = Api.CreateStroke(5 * 12700, Api.CreateSolidFill(Api.CreateRGBColor(0, 255, 0)));
let shape3 = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke3);
paragraph.AddDrawing(shape3);
let width3 = shape3.GetLine().GetWidth();
paragraph.AddText("Border 3: " + width3 + " EMU (" + (width3 / 12700).toFixed(2) + " pt)");
```
