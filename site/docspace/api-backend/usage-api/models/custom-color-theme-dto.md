# CustomColorThemeDto
One colour theme of the portal interface.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The theme id; the built-in themes have the lowest ids. | [optional] [example: `1`] |
| **name** | **String** | The theme name; empty for a custom theme. | [optional] [example: `blue`] [nullable] |
| **main** | [**ColorThemeColorsDto**](color-theme-colors-dto.md) | The accent and button colours of the interface. | [optional] |
| **text** | [**ColorThemeColorsDto**](color-theme-colors-dto.md) | The colours of the text shown on the accent and on the buttons. | [optional] |
