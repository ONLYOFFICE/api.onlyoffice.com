# HideConfirmConvertRequestDto
The body of the conversion prompt switch: which of the two prompts to hide.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **save** | **Boolean** | Chooses the prompt to hide rather than the state to store: true hides the prompt that offers to keep a copy in the original format when a document is converted, false hides the prompt that offers to open the conversion result. Each of the two flags is stored separately for the calling account, and both are one-way - the portal can hide a prompt but has no way to show it again. | [optional] [example: `true`] |
