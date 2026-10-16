# GetColor

从当前文本属性获取 RGB 颜色。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiRichTextPr](../ApiRichTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null \| undefined

## 示例

检索 PDF 中文本的颜色值。

```javascript editor-pdf
// How do I see what color the text has been set to in a PDF?

// Extract color information from formatted text in a PDF.

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
textPr.SetColor(Api.RGB(255, 0, 0));

let color = textPr.GetColor();

console.log(`The color property is {r:${color["r"]}, g:${color["g"]}, b:${color["b"]}}`);
```
