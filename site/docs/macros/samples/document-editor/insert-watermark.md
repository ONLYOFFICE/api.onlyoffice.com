---
hide_table_of_contents: true
description: Insert a custom text watermark on every page of a document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Insert watermark

Inserts a custom text watermark on every page of the document.

```js
(function () {
  let doc = Api.GetDocument();
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
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetWatermarkSettings](/docs/office-api/usage-api/document-api/ApiDocument/Methods/GetWatermarkSettings.md), [SetType](/docs/office-api/usage-api/document-api/ApiWatermarkSettings/Methods/SetType.md), [SetText](/docs/office-api/usage-api/document-api/ApiWatermarkSettings/Methods/SetText.md), [GetTextPr](/docs/office-api/usage-api/document-api/ApiWatermarkSettings/Methods/GetTextPr.md), [SetFontFamily](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetFontFamily.md), [SetFontSize](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetFontSize.md), [SetDoubleStrikeout](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetDoubleStrikeout.md), [SetItalic](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetItalic.md), [SetBold](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetBold.md), [SetUnderline](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetUnderline.md), [SetColor](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetColor.md), [SetHighlight](/docs/office-api/usage-api/document-api/ApiTextPr/Methods/SetHighlight.md), [SetTextPr](/docs/office-api/usage-api/document-api/ApiWatermarkSettings/Methods/SetTextPr.md), [SetWatermarkSettings](/docs/office-api/usage-api/document-api/ApiDocument/Methods/SetWatermarkSettings.md)

## Result

<Video src="/assets/video/macros/document-editor/insert-watermark" dark />
