# AiUserSettingsDto
The per-user AI settings.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **chatRecommendedModelVisible** | **Boolean** | Indicates whether the recommended model banner is visible in the AI chat for the current user. | [optional] [example: `true`] |
| **toolPermissionMode** | [**AiToolPermissionMode**](ai-tool-permission-mode.md) | How tool calls made by the model are approved for the current user. The default applies while the user has stored nothing. | [optional] [enum: `0`, `1`, `2`] |
