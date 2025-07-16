# Adding image watermark

Create a document with an image watermark with custom settings:

- create an empty page with a watermark ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument/InsertWatermark](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertWatermark.md));
- edit watermark sewatermarkSettingsttings, set an image, specify size, direction and opacity ([ApiWatermarkSettings](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/ApiWatermarkSettings.md));

``` ts editor-docx zoom=60
let doc = Api.GetDocument();
doc.InsertWatermark("Watermark", true);
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(40 * 36_000, 40 * 36_000);
watermarkSettings.SetDirection("horizontal");
watermarkSettings.SetOpacity(100);
doc.SetWatermarkSettings(watermarkSettings);
```
