# TenantAiAccessSettingsDto
Whether AI functionality is available on the portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Whether AI is available on the portal at all - chat, agents and vectorization together. Switching it off hides the AI Agents folder and makes every AI endpoint unreachable for all members at once, not only for the caller, and the change is pushed to connected clients rather than waiting for their next request. | [optional] [example: `false`] |
