# SetSize

设置对象（图像、形状、图表）边界框的大小。

## 语法

```javascript
expression.SetSize(nWidth, nHeight);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象宽度，以英制单位测量。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象高度，以英制单位测量。 |

## 返回值

boolean

## 示例

此示例设置形状边界框的大小。

```javascript editor-docx
// How to resize the drawing.

// Set the height and the width of the shape. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetSize(2 * 914400, 2 * 914400);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape was created with a size of 53x39 millimeters, then resized to the size of 2x2 inches.");
doc.Push(paragraph);
```
