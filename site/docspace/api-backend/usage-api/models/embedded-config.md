# EmbeddedConfig
The addresses the framed viewer needs. It is reported for the embedded layout only.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **embedUrl** | **String** | The page to put into the frame. It is empty when the opening carries no external share key, since a framed viewer cannot authenticate a portal member. | [optional] [example: `https://portal.example.com/products/files/doceditor?action=embedded&share=HkQd9nT2`] [nullable] |
| **saveUrl** | **String** | Where the download button of the framed viewer leads. | [optional] [example: `https://portal.example.com/filehandler.ashx?action=download&share=HkQd9nT2`] [nullable] |
| **shareLinkParam** | **String** | The query fragment carrying the external share key, ampersand included, out of which the addresses around it are built. | [optional] [example: `&fileid=512&share=HkQd9nT2`] [nullable] |
| **shareUrl** | **String** | The address behind the share button of the framed viewer, the document opened full-screen for reading. It is empty when the opening carries no external share key. | [optional] [example: `https://portal.example.com/products/files/doceditor?action=view&share=HkQd9nT2`] [nullable] |
| **toolbarDocked** | **String** | Where the framed viewer puts its toolbar. The portal always asks for the top. | [optional] [example: `top`] [nullable] |
