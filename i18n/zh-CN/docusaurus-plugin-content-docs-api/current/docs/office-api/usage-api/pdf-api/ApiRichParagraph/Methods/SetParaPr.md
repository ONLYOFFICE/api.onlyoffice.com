# SetParaPr

设置段落属性。

## 语法

```javascript
expression.SetParaPr(paraPr);
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraPr | 必需 | [ApiRichParaPr](../../ApiRichParaPr/ApiRichParaPr.md) |  | 要应用的段落属性。 |

## 返回值

boolean

## 示例

在 PDF 中为段落应用格式设置。

```javascript editor-pdf
// How do I configure paragraph appearance in a PDF?

// Assign custom formatting rules to a paragraph in a PDF.

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

let paraPr = Api.CreateRichParaPr();
paraPr.SetJc("right");
para.SetParaPr(paraPr);

console.log(`We set new rich paragraph properties to rich paragraph`);
```
