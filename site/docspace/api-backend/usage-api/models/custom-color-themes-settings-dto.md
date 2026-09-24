# CustomColorThemesSettingsDto
The colour themes the portal offers, which of them is applied, and how many the plan allows.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **themes** | [**List**](custom-color-themes-settings-item.md) | Every theme the portal can apply, ordered by ID, with the built-in ones first because they were created first. It is never empty - the built-in themes cannot be deleted - and a custom theme is one whose ID is higher than the built-in ones. | [optional] [example: `[{id=1, name=Custom Theme}]`] [nullable] |
| **selected** | **Integer** (int32) | The ID of the theme in `themes` that is currently applied to the whole portal. Deleting the applied theme moves it to the lowest remaining ID, so it can change without anyone having chosen a new one. | [optional] [example: `1`] |
| **limit** | **Integer** (int32) | How many entries `themes` may hold in total, built-in ones included; `0` means the plan caps nothing. Once the cap is reached `PUT api/2.0/settings/colortheme` drops a new theme silently instead of failing, so compare this with the length of `themes` to tell whether a save took effect. | [optional] [example: `1`] |
