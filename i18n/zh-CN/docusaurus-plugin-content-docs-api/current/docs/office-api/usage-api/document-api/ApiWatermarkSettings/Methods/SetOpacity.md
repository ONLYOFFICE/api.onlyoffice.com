# SetOpacity

设置文档中水印的不透明度。

## 语法

```javascript
expression.SetOpacity(nOpacity);
```

`expression` - 表示 [ApiWatermarkSettings](../ApiWatermarkSettings.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nOpacity | 必需 | number |  | 水印不透明度。此值必须在 0 到 255 之间。 |

## 返回值

boolean

## 示例

此示例设置水印参数并将其应用于文档。

```javascript editor-docx
// How to set the image opacity of the watermark.

// Indicate the image opacity in watermark settings.

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
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetOpacity(127);
doc.SetWatermarkSettings(watermarkSettings);
```
