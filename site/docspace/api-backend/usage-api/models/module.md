# Module
The descriptor of a portal module: what it is called, where it starts and how it is pictured.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The identifier of the module. It is the same in every portal and in every language, so use it rather than the title to tell modules apart. | [optional] [example: `e67be73d-f9ae-4ce1-8fec-1880cb518cb4`] |
| **appName** | **String** | The short system name of the module, the one that appears in its addresses and in the portal configuration. Unlike the title it is not translated. | [optional] [example: `files`] [nullable] |
| **title** | **String** | The display name of the module, already translated for the calling account, so it changes with the language and must not be compared against a fixed string. | [optional] [example: `Documents`] [nullable] |
| **link** | **String** | The address of the start page of the module, to be opened in a browser rather than called as an API. | [optional] [example: `https://example.com`] [nullable] |
| **iconUrl** | **String** | The address of the small icon of the module, meant for a menu entry. | [optional] [example: `https://example.com/icon.svg`] [nullable] |
| **imageUrl** | **String** | The address of the large image of the module, meant for a tile or a start screen. | [optional] [example: `https://example.com/image.png`] [nullable] |
| **helpUrl** | **String** | The address of the help section of the module. It is empty when the portal publishes no help for it. | [optional] [example: `https://example.com/help`] [nullable] |
| **description** | **String** | The one-line description of the module shown next to its title, translated for the calling account. | [optional] [example: `File management`] [nullable] |
| **isPrimary** | **Boolean** | Whether the portal opens this module first when no other destination is given. | [optional] [example: `true`] |
