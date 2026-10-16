# SetVertAlign

指定将应用于文本域内容的对齐方式，相对于文本域文本的默认外观：

继承自 [ApiRichTextPr.SetVertAlign](../../ApiRichTextPr/Methods/SetVertAlign.md)。

## 语法

```javascript
expression.SetVertAlign(type);
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [TextVertAlign](../../Enumeration/TextVertAlign.md) |  | 应用于文本内容的垂直对齐类型。 |

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

在 PDF 中将文本垂直定位为上标或下标。

```javascript editor-pdf
// How do I raise or lower text vertically in a PDF?

// Apply vertical alignment to text in a PDF.

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
textPr.SetVertAlign("superscript");

console.log(`We set vert align property to ${textPr.GetVertAlign()} for rich text properties`);
```
