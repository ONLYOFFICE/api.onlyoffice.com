# GetCurrentParagraph

返回光标所在的当前段落。

## 语法

```javascript
expression.GetCurrentParagraph();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例返回文档内容中的当前段落。

```javascript editor-pdf
const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(200, 191, 231));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();

const paragraph = docContent.GetElement(0);
paragraph.AddText('First paragraph inside the shape.');

const newParagraph = Api.CreateParagraph();
newParagraph.AddText('Second paragraph inside the shape.');
docContent.Push(newParagraph);

const currentParagraph = docContent.GetCurrentParagraph();
if (currentParagraph) {
  currentParagraph.AddText(' (Current paragraph detected!)');
}
page.AddObject(shape);

```
