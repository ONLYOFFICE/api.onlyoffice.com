# GetCurrentParagraph

返回光标所在的当前段落。

## 语法

```javascript
expression.GetCurrentParagraph();
```

`expression` - 表示 [ApiRichContent](../ApiRichContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## 示例

此示例从富文本内容获取当前段落。

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetCurrentParagraph();
para.AddText("Example text");

console.log(`We added some text to current paragraph`);
```
