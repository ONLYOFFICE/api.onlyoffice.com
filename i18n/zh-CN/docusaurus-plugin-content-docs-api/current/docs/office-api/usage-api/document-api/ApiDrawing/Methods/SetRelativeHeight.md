# SetRelativeHeight

设置对象（图像、形状、图表）边界框的相对高度。

## 语法

```javascript
expression.SetRelativeHeight(relativeFrom, percent);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| relativeFrom | 可选 | [SizeRelFromV](../../Enumeration/SizeRelFromV.md) | "page" | 将作为对象高度参考点的文档元素。 |
| percent | 必需 | [percentage](../../Enumeration/percentage.md) |  | 对象高度占指定元素的百分比。 |

## 返回值

boolean

## 示例

将文档中形状的高度设置为页面的百分比。

```javascript editor-docx
// How do I make a shape's height scale proportionally with the page in a document?

// Stretch a rectangle to fill a quarter of the page height so it adapts to different page sizes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(91, 155, 213));
let stroke = Api.CreateStroke(0.4 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(65, 113, 156)));
let drawing = Api.CreateShape("rect", 1 * 36000, 1 * 36000, fill, stroke);
drawing.SetWrappingStyle("inFront");
drawing.SetVerPosition("page", 50 * 36000);
drawing.SetHorPosition("page", 0);
drawing.SetRelativeWidth("page", 100);
drawing.SetRelativeHeight("page", 25);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("The shape was created with a width 100% of page width and 25% of height page");
doc.Push(paragraph);
```
