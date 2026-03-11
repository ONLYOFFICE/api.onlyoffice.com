# GetTextPr

返回当前运行的文本属性。

## 语法

```javascript
expression.GetTextPr();
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

此示例从富文本运行对象获取富文本属性并为其设置一些属性。

```javascript editor-pdf
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
textPr.SetBold(true);
textPr.SetUnderline(true);

console.log(`We set some properties to rich text properties from rich run object`);
```
