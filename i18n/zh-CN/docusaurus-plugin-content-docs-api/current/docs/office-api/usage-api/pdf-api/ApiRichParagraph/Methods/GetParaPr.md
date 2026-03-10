# GetParaPr

返回段落属性。

## 语法

```javascript
expression.GetParaPr();
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichParaPr](../../ApiRichParaPr/ApiRichParaPr.md)

## 示例

This example gets rich paragraph properties from rich paragraph.

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
para.AddText("Example text");

let paraPr = para.GetParaPr();
paraPr.SetJc("right");

console.log(`We got rich paragraph properties from rich paragraph and set justification to it`);
```
