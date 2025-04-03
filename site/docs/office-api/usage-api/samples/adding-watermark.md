# Adding watermark

Create a document with a watermark with custom settings:

- create an empty page with a watermark ([Api](../text-document-api/Api/Api.md), [ApiDocument/InsertWatermark](../text-document-api/ApiDocument/Methods/InsertWatermark.md));
- edit watermark settings, set an image, specify size, direction and opacity ([ApiWatermarkSettings](../text-document-api/ApiWatermarkSettings/ApiWatermarkSettings.md));

```ts document-builder={"documentType": "word", "editorConfig": {"customization": {"zoom": 60}}}
let doc = Api.GetDocument();
doc.InsertWatermark("Watermark", true);
let settings = doc.GetWatermarkSettings();
settings.SetType("image");
settings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
settings.SetImageSize(40 * 36_000, 40 * 36_000);
settings.SetDirection("horizontal");
settings.SetOpacity(100);
doc.SetWatermarkSettings(settings);
```
