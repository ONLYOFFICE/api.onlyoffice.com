# SetUnderline

指定文本块的内容显示时在字符正下方有一条线（小于行中字符上下的所有间距）。

继承自 [ApiRichTextPr.SetUnderline](../../ApiRichTextPr/Methods/SetUnderline.md)。

## 语法

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | 必需 | boolean |  | 指定当前文本块的内容显示为带下划线。 |

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

在 PDF 中为自由文本注释中的文本添加下划线。

```javascript editor-pdf
// How do I underline text in a PDF?

// Apply underline formatting in a PDF.

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
textPr.SetUnderline(true);

console.log(`We set underline to ${textPr.GetUnderline()} for rich text properties`);
```
