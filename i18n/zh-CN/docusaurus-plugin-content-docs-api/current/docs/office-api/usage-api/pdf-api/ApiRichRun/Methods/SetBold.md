# SetBold

为文本字符设置粗体属性。

继承自 [ApiRichTextPr.SetBold](../../ApiRichTextPr/Methods/SetBold.md)。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定文本块的内容显示为粗体。 |

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

在 PDF 中将文本设为粗体。

```javascript editor-pdf
// How do I add bold formatting to text in a PDF?

// Apply bold styling to formatted text in a PDF.

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

console.log(`We set bold to ${textPr.GetBold()} for rich text properties`);
```
