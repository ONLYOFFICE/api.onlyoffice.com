# CreateRichRun

创建新的富文本文字部分。

## 语法

```javascript
expression.CreateRichRun();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichRun](../../ApiRichRun/ApiRichRun.md)

## 示例

How to create a rich run and add it to rich paragraph.

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
let newRun = Api.CreateRichRun();
newRun.AddText("New run element");
para.AddElement(newRun, 0);
```
