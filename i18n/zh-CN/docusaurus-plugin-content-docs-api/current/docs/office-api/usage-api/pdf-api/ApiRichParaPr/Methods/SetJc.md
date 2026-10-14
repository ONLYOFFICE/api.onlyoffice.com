# SetJc

设置富文本段落内容的对齐方式。

## 语法

```javascript
expression.SetJc(jc);
```

`expression` - 表示 [ApiRichParaPr](../ApiRichParaPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| jc | 必需 | [HorTextAlign](../../Enumeration/HorTextAlign.md) |  | 将应用于富文本段落内容的对齐类型。 |

## 返回值

boolean

## 示例

更改 PDF 中段落的文本对齐方式。

```javascript editor-pdf
// How do I align text differently in a PDF?

// Apply a specific alignment option to a paragraph in a PDF.

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
paraPr.SetJc("center");

console.log(`We set "${paraPr.GetJc()}" justification for paragraph properties`);
```
