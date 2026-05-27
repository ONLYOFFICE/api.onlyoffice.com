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

访问 PDF 中形状内当前活动的文本段。

```javascript editor-pdf
// How do I find the text segment being edited in a PDF?

// Retrieve the most recent text portion that was added to a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.HexColor('#F5C6AA'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();

const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText('This is a run inside the shape.');
paragraph.AddElement(run);

const currentRun = docContent.GetCurrentRun();
if (currentRun) {
  currentRun.AddText(' (Current run detected!)');
}
page.AddObject(shape);
```
