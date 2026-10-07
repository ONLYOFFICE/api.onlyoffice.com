# CustomColorThemeRequestDto
A colour theme to store.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The id of the custom theme to replace, or an id no stored theme has to add a new one. | [optional] [example: `1`] |
| **name** | **String** | Accepted for compatibility with earlier clients and not read: a custom theme is always stored without a name. | [optional] [example: `Custom theme`] [nullable] |
| **main** | [**ColorThemeColorsRequestDto**](color-theme-colors-request-dto.md) | The accent and button colours of the interface. Left out, a stored theme keeps its own. | [optional] |
| **text** | [**ColorThemeColorsRequestDto**](color-theme-colors-request-dto.md) | The colours of the text shown on the accent and on the buttons. Left out, a stored theme keeps its own. | [optional] |
