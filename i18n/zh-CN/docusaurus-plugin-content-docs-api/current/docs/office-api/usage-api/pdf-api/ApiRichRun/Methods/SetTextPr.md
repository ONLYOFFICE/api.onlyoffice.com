# SetTextPr

设置当前文本块的文本属性。

## 语法

```javascript
expression.SetTextPr(textPr);
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | 必需 | [ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md) |  | 要设置到当前文本块的文本属性。 |

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

在 PDF 文档中为富文本 run 对象设置富文本属性。

```javascript editor-pdf
// How can I set text pr using a rich text run in a PDF document?

// Set text pr for a rich text run in a PDF document.

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

let textPr = Api.CreateRichTextPr();
textPr.SetBold(true);
textPr.SetUnderline(true);

run.SetTextPr(textPr);

console.log(`We set rich text properties to rich run object`);
```
