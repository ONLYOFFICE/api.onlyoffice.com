# SetVerticalTextAlign

设置可以插入段落或文本运行的形状内容的垂直对齐方式。

## 语法

```javascript
expression.SetVerticalTextAlign(VerticalAlign);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| VerticalAlign | 必需 | [VerticalTextAlign](../../Enumeration/VerticalTextAlign.md) |  | 形状内部内容的垂直对齐类型。 |

## 返回值

boolean

## 示例

此示例设置可以插入段落或文本运行的形状内容的垂直对齐方式。

```javascript editor-docx
// How to align the text of the shape to top.

// Set vertical text align to top.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetContent();
let classType = drawing.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
docContent.AddElement(0, paragraph);
drawing.SetVerticalTextAlign("top");
```
