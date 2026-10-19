# SetFontSize

设置当前文本块字符的字体大小。

## 语法

```javascript
expression.SetFontSize(size);
```

`expression` - 表示 [ApiRichTextPr](../ApiRichTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| size | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位测量的文本大小值。 |

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

在 PDF 中调整文本大小。

```javascript editor-pdf
// How do I change how large text appears in a PDF?

// Modify text size in a PDF.

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
textPr.SetFontSize(40);

console.log(`We set font size to ${textPr.GetFontSize()} for rich text properties`);
```
