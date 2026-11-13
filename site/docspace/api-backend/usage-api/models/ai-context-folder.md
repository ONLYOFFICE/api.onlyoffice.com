# AiContextFolder
The rooms of one account the caller can connect as context, grouped under the account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **cloud** | **String** | The account the rooms belong to; `docspace` for this portal. | [required] [example: `docspace`] |
| **rooms** | [**List**](ai-context-room.md) | The rooms of that account the caller can connect. | [required] [example: `[]`] |
