# Adding text watermark

Create a document with a "Confidential" text watermark for marking document confidentiality level. The watermark appears in the background as semi-transparent text and is applied to reports, contracts, and internal memos:

- insert "Confidential" text watermark ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument/InsertWatermark](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertWatermark.md));
- configure watermark appearance with light red color and large font size ([ApiWatermarkSettings](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/ApiWatermarkSettings.md));
- set diagonal direction for better visibility across the page ([ApiWatermarkSettings/SetDirection](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetDirection.md));
- apply high transparency to avoid interfering with main text readability ([ApiWatermarkSettings/SetOpacity](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetOpacity.md));
- ensure global application to all pages for consistent document marking ([ApiDocument/SetWatermarkSettings](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SetWatermarkSettings.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();
doc.InsertWatermark("Confidential", true);
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("text");
watermarkSettings.SetText("Confidential");
let textPr = watermarkSettings.GetTextPr();
textPr.SetFontSize(120);
textPr.SetFontFamily("Arial");
textPr.SetColor(255, 0, 0, false);
watermarkSettings.SetTextPr(textPr);
watermarkSettings.SetDirection("diagonal");
watermarkSettings.SetOpacity(100);
doc.SetWatermarkSettings(watermarkSettings);
```
