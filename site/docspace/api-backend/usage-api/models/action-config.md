# ActionConfig
An anchor inside a document, as the editor writes it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **data** | **String** | The anchor value produced by the editor, opaque to the portal: it names the comment, the mention or the place the document is scrolled to. | [optional] [example: `section-42`] [minLength: 0] [maxLength: 256] [nullable] |
| **type** | **String** | What the anchor points at, as the editor names it - a comment thread, for instance. | [optional] [example: `comment`] [minLength: 0] [maxLength: 128] [nullable] |
