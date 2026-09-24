# CustomColorThemesSettingsRequestsDto
The custom colour theme being saved, the theme being selected, or both.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **theme** | [**CustomColorThemesSettingsItem**](custom-color-themes-settings-item.md) | The theme to store, with its accent and button colours for the interface and for the text on it. An `id` that matches a stored custom theme replaces it, an unknown `id` appends a new one, and an `id` belonging to a built-in theme is treated as a request for a new custom theme rather than overwriting the built-in one. Once the plan limit on custom themes is reached a new theme is silently not added, so compare the returned themes against `limit` instead of assuming it was saved. Leave it out to change only the selection. | [optional] |
| **selected** | **Integer** (int32) | The theme the whole portal switches to, by theme ID. An ID matching no stored theme is ignored rather than refused, and leaving it out keeps the selection as it is. | [optional] [example: `1`] [nullable] |
