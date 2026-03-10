# SetVerAlign

指定浮动对象的垂直对齐方式。

## 语法

```javascript
expression.SetVerAlign(sRelativeFrom, sAlign);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | 可选 | [RelFromV](../../Enumeration/RelFromV.md) | "page" | 将作为对象垂直对齐参考点的文档元素。 |
| sAlign | 可选 | "top" \| "bottom" \| "center" | "top" | 将用于对象垂直对齐的对齐类型。 |

## 返回值

boolean

## 示例

此示例指定浮动对象的垂直对齐方式。

```javascript editor-docx
// How to set the vertical alignment of the drawing.

// Move the shape to the top of the page.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text (horizontally) is half an inch (457200 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(457200, 457200, 457200, 0);
drawing.SetWrappingStyle("square");
drawing.SetVerAlign("page", "top");
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape is aligned to the top of the page.");
doc.Push(paragraph);
```
