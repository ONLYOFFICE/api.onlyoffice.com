# LogoConfigDto
The logo the editor shows, resolved for the file type and the layout of this opening.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **image** | **String** | The logo for the current layout and file type, as the portal branding defines it. | [optional] [example: `https://portal.example.com/logo/editor.png`] [nullable] |
| **imageDark** | **String** | The variant for a dark interface theme. | [optional] [example: `https://portal.example.com/logo/editor-dark.png`] [nullable] |
| **imageLight** | **String** | The variant for a light interface theme. | [optional] [example: `https://portal.example.com/logo/editor-light.png`] [nullable] |
| **imageEmbedded** | **String** | The variant for the framed viewer. It is empty in every layout but the embedded one. | [optional] [example: `https://portal.example.com/logo/editor-embedded.png`] [nullable] |
| **url** | **String** | Where clicking the logo takes the user. | [optional] [example: `https://portal.example.com`] [nullable] |
| **visible** | **Boolean** | Whether the logo is shown at all; the mobile layout hides it. | [optional] [example: `true`] |
