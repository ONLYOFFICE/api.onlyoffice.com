# SetItalic

为文本字符设置斜体属性。

继承自 [ApiRichTextPr.SetItalic](../../ApiRichTextPr/Methods/SetItalic.md)。

## 语法

```javascript
expression.SetItalic(isItalic);
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | 必需 | boolean |  | 指定当前文本块的内容显示为斜体。 |

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

在 PDF 中将自由文本注释中的文本设为倾斜。

```javascript editor-pdf
// How do I apply italic formatting to text in a PDF?

// Enable italics for text in a PDF.

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
textPr.SetItalic(true);

console.log(`We set italic to ${textPr.GetItalic()} for rich text properties`);
```
