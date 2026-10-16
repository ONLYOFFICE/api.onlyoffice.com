# IsDefaultWhiteLabelLogosDto
Whether one branding slot still holds the built-in image or wordmark.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The stable name of the slot, matching the `name` of the same slot in `GET api/2.0/settings/whitelabel/logos` - `LightSmall`, `LoginPage`, `Favicon`, `DocsEditor` and the rest, plus `Notification`, which that list leaves out. The wordmark check reports the fixed name `logotext` instead of a slot. | [required] [example: `LightSmall`] [nullable] |
| **default** | **Boolean** | Whether the slot has never been written for this portal, in which case the built-in image is what gets rendered. It turns `false` once an image has been stored, for either the light or the dark theme, and back to `true` after the matching restore operation. For `logotext` it stays `true` when the built-in wordmark itself is saved, because saving that value counts as clearing the setting. | [required] [example: `true`] |
