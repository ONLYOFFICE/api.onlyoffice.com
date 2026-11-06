# ConvertDocumentRendererRequest
How the text of a pdf, xps or oxps source is read back when converting from it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **textAssociation** | **String** | The rendering mode: blockChar reads the text by single characters, blockLine by separate lines, plainLine as plain text with a paragraph per line, plainParagraph as plain text with lines combined into paragraphs. | [optional] [example: `plainLine`] [nullable] |
