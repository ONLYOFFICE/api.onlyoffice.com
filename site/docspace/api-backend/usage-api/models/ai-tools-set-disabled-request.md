# AiToolsSetDisabledRequest

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **serverType** | **String** |  | [required] |
| **toolNames** | **List** | Tool names to disable. | [required] |
| **entityId** | **String** |  | [optional] |
| **scope** | [**AiChatToolPrefsScope**](ai-chat-tool-prefs-scope.md) | The list the write lands in; omitted means the caller's own. | [optional] [enum: `user`, `tenant`] |
