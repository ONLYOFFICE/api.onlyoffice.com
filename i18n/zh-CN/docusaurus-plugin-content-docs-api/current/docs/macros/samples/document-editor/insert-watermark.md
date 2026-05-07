---
hide_table_of_contents: true
---

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

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument), [GetWatermarkSettings](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetWatermarkSettings), [SetType](../../../../office-api/usage-api/document-api/ApiWatermarkSettings/Methods/SetType), [SetText](../../../../office-api/usage-api/document-api/ApiWatermarkSettings/Methods/SetText), [GetTextPr](../../../../office-api/usage-api/document-api/ApiWatermarkSettings/Methods/GetTextPr), [SetFontFamily](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetFontFamily), [SetFontSize](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetFontSize), [SetDoubleStrikeout](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetDoubleStrikeout), [SetItalic](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetItalic), [SetBold](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetBold), [SetUnderline](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetUnderline), [SetColor](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetColor), [SetHighlight](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetHighlight), [SetTextPr](../../../../office-api/usage-api/document-api/ApiWatermarkSettings/Methods/SetTextPr), [SetWatermarkSettings](../../../../office-api/usage-api/document-api/ApiDocument/Methods/SetWatermarkSettings), [RemoveWatermark](../../../../office-api/usage-api/document-api/ApiDocument/Methods/RemoveWatermark)

## 结果

![WatermarkInserter](/assets/images/plugins/insert-watermark.png#gh-light-mode-only)
![WatermarkInserter](/assets/images/plugins/insert-watermark.dark.png#gh-dark-mode-only)
