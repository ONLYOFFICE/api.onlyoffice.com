# SetText

设置文档中水印的文本。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 水印文本。 |

## 返回值

boolean

## 示例

此示例设置水印参数并将其应用于文档。

```javascript editor-docx
// How to set the text of the watermark.

// Add text to the watermark using its settings.

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
