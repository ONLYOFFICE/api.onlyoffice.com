# GetCurrentRun

返回光标所在的当前文本域。

## 语法

```javascript
expression.GetCurrentRun();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

从文档中的文档内容获取当前文本块。

```javascript editor-docx
// How to get current run for a document content?

// Get current run and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgb = Api.CreateRGBColor(100, 150, 200);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetDocContent();
const currentParagraph = docContent.GetCurrentParagraph();

const newRun = Api.CreateRun();
newRun.AddText("<NEW_RUN />");
currentParagraph.AddElement(newRun);

const currentRun = docContent.GetCurrentRun();
currentRun.AddText("<CURRENT_RUN />");
```
