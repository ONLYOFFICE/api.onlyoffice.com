# InsertParagraph

在指定位置插入段落。

## 语法

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | 必需 | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | 文本或段落。 |
| sPosition | 必需 | string |  | 将插入文本或段落的位置（指定绘图的“before”或“after”）。 |
| beRNewPara | 必需 | boolean |  | 定义此方法是返回新段落（true）还是当前 ApiDrawing（false）。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## 示例

在文档中将段落插入到绘图的内容区域。

```javascript editor-docx
// How do I add text inside a shape in a document?

// Place a labeled paragraph inside a rectangle to annotate the shape in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This graphic object with paragraph.");
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a new paragraph.");
drawing.InsertParagraph(paragraph);
```
