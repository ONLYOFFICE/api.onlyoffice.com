# SetRelativeWidth

设置对象（图像、形状、图表）边界框的相对宽度。

## 语法

```javascript
expression.SetRelativeWidth(sRelativeFrom, nPercent);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRelativeFrom | 可选 | [RelFromV](../../Enumeration/RelFromV.md) | "page" | 将作为对象宽度参考点的文档元素。 |
| nPercent | 必需 | [percentage](../../Enumeration/percentage.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example demonstrates relative width shape sizing to page dimensions.

```javascript editor-docx
// How to set shape width and height as percentages of the page.

// Create a responsive rectangle that scales with page size.
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
