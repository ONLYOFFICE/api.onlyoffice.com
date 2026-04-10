# 插入水印

在文档的每一页插入或移除自定义水印。

```ts
(function () {
  let doc = Api.GetDocument();
  let action = "insert"; // 将"insert"修改为 "remove" 以删除水印

  if (action === "insert") {
    let watermarkSettings = doc.GetWatermarkSettings();

    watermarkSettings.SetType("text");
    watermarkSettings.SetText("Example Watermark");

    let textProperties = watermarkSettings.GetTextPr();
    textProperties.SetFontFamily("Calibri");
    textProperties.SetFontSize(48);
    textProperties.SetDoubleStrikeout(true);
    textProperties.SetItalic(true);
    textProperties.SetBold(true);
    textProperties.SetUnderline(true);
    textProperties.SetColor(0, 255, 0, false);
    textProperties.SetHighlight("blue");

    watermarkSettings.SetTextPr(textProperties);
    doc.SetWatermarkSettings(watermarkSettings);
  } else if (action === "remove") {
    doc.RemoveWatermark();
  }
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetWatermarkSettings](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetWatermarkSettings.md), [SetType](../../../../office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetType.md), [SetText](../../../../office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetText.md), [GetTextPr](../../../../office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/GetTextPr.md), [SetFontFamily](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontFamily.md), [SetFontSize](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md), [SetDoubleStrikeout](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetDoubleStrikeout.md), [SetItalic](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetItalic.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [SetUnderline](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetUnderline.md), [SetColor](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetColor.md), [SetHighlight](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md), [SetTextPr](../../../../office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetTextPr.md), [SetWatermarkSettings](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/SetWatermarkSettings.md), [RemoveWatermark](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/RemoveWatermark.md)

## 结果

![WatermarkInserter](/assets/images/plugins/insert-watermark.png#gh-light-mode-only)
![WatermarkInserter](/assets/images/plugins/insert-watermark.dark.png#gh-dark-mode-only)
