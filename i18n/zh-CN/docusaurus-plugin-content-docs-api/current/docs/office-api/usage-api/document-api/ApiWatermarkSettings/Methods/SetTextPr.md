# SetTextPr

设置文档中水印的文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 水印文本属性。 |

## 返回值

boolean

## 示例

在文档中为水印应用自定义文本格式。

```javascript editor-docx
// How do I change the font style and color of a watermark in a document?

// Style the watermark label with a specific font, size, and highlight in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("text");
watermarkSettings.SetText("Example");
let textPr = watermarkSettings.GetTextPr();
textPr.SetFontFamily("Calibri");
textPr.SetFontSize(-1);
textPr.SetDoubleStrikeout(true);
textPr.SetItalic(true);
textPr.SetBold(true);
textPr.SetUnderline(true);
textPr.SetColor(Api.RGB(0, 255, 0));
textPr.SetHighlight("blue");
watermarkSettings.SetTextPr(textPr);
doc.SetWatermarkSettings(watermarkSettings);
```
