# SetAllowOverlap

设置是否允许绘图对象与其他绘图对象重叠。

继承自 [ApiDrawing.SetAllowOverlap](../../ApiDrawing/Methods/SetAllowOverlap.md)。

## 语法

```javascript
expression.SetAllowOverlap(bOverlap);
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bOverlap | 必需 | boolean |  | 指定此绘图对象是否可以与其他绘图对象重叠。 |

## 返回值

void

## 示例

在文档中设置是否允许绘图对象与其他绘图对象重叠。

```javascript editor-docx
// Useful for allowing a drawing to overlap other drawings in a text document.

// Create a shape, enable overlap and display the result.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
drawing.SetAllowOverlap(true);
let docContent = drawing.GetContent();
let allowOverlap = drawing.GetAllowOverlap();
let innerParagraph = Api.CreateParagraph();
innerParagraph.AddText("Allow overlap: " + allowOverlap);
docContent.AddElement(0, innerParagraph);
```
