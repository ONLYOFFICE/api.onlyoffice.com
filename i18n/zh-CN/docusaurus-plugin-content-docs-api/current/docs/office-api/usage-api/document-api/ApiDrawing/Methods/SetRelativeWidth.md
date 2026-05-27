# SetRelativeWidth

设置对象（图像、形状、图表）边界框的相对宽度。

## 语法

```javascript
expression.SetRelativeWidth(relativeFrom, percent);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| relativeFrom | 可选 | [SizeRelFromH](../../Enumeration/SizeRelFromH.md) | "page" | 将作为对象宽度参考点的文档元素。 |
| percent | 必需 | [percentage](../../Enumeration/percentage.md) |  | 对象宽度占指定元素的百分比。 |

## 返回值

boolean

## 示例

将文档中形状的宽度设置为页面的百分比。

```javascript editor-docx
// How do I make a shape's width span a fixed fraction of the page in a document?

// Stretch a rectangle to half the page width so its layout stays consistent across page sizes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 250, 0));
let stroke = Api.CreateStroke(0.4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(65, 113, 156)));
let drawing = Api.CreateShape("rect", 1 * 36000, 1 * 36000, fill, stroke);
drawing.SetWrappingStyle("inFront");
drawing.SetVerPosition("page", 50 * 36000);
drawing.SetHorPosition("page", 0 * 3600);
drawing.SetRelativeWidth("page", 50);
drawing.SetRelativeHeight("page", 25);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape was created with a width 50% of page width and 25% of height page");
doc.Push(paragraph);
```
