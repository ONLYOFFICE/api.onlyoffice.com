# Insert watermark

Inserts or removes a custom watermark on every page of the document.

```ts
(function () {
  let doc = Api.GetDocument();
  let action = "insert"; // Change to "remove" to delete watermark

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

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetWatermarkSettings](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetWatermarkSettings.md), [SetType](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetType.md), [SetText](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetText.md), [GetTextPr](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/GetTextPr.md), [SetFontFamily](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontFamily.md), [SetFontSize](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md), [SetDoubleStrikeout](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetDoubleStrikeout.md), [SetItalic](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetItalic.md), [SetBold](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md), [SetUnderline](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetUnderline.md), [SetColor](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetColor.md), [SetHighlight](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md), [SetTextPr](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetTextPr.md), [SetWatermarkSettings](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SetWatermarkSettings.md), [RemoveWatermark](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/RemoveWatermark.md)

## Result

![WatermarkInserter](/assets/images/plugins/insert-watermark.png#gh-light-mode-only)
![WatermarkInserter](/assets/images/plugins/insert-watermark.dark.png#gh-dark-mode-only)
