# SetColor

设置当前文本块的文本颜色。

继承自 [ApiRichTextPr.SetColor](../../ApiRichTextPr/Methods/SetColor.md)。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiRichRun](../ApiRichRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

[ApiRichTextPr](../../ApiRichTextPr/ApiRichTextPr.md)

## 示例

在 PDF 中更改自由文本注释中文本的颜色。

```javascript editor-pdf
// How do I change text color in a PDF?

// Apply a color to text formatting in a PDF.

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
textPr.SetColor(Api.RGB(255, 0, 0));

let color = textPr.GetColor();

console.log(`We set color to {r:${color["r"]}, g:${color["g"]}, b:${color["b"]}} for rich text properties`);
```
