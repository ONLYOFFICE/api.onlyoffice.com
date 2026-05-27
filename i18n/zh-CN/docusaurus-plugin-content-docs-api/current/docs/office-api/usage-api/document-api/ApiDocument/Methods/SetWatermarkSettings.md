# SetWatermarkSettings

设置当前文档中的水印设置。

## 语法

```javascript
expression.SetWatermarkSettings(Settings);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Settings | 必需 | [ApiWatermarkSettings](../../ApiWatermarkSettings/ApiWatermarkSettings.md) |  | 表示水印设置的对象。 |

## 返回值

[ApiDrawing](../../ApiDrawing/ApiDrawing.md)

## 示例

在文档中应用具有自定义字体和颜色设置的样式文字水印。

```javascript editor-docx
// How do I add a watermark with specific text and formatting to a document?

// Brand or protect pages by stamping them with a formatted watermark that uses bold, italic, and underline styles.

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
