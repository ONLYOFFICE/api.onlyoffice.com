# GetFontFamily

从当前文本属性返回字体系列。

如果字体是通过主题设置的，此方法会自动从主题计算字体。

## 语法

```javascript
expression.GetFontFamily();
```

`expression` - 表示 [ApiRichTextPr](../ApiRichTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null \| undefined

## 示例

查明 PDF 中文本应用了哪种字体。

```javascript editor-pdf
// How do I check what typeface a text uses in a PDF?

// Read the font selection for formatted text in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some example text");

let textPr = run.GetTextPr();

console.log(`The font family property is: ${textPr.GetFontFamily()}`);
```
