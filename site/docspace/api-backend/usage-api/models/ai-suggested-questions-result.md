# AiSuggestedQuestionsResult
The starter questions of an attached form, and whether they are ready.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **status** | **String** | `ready` - the questions are there; `pending` - they are being generated and arrive over the socket, ask again later; `unavailable` - the attachment is not a form that can have any. | [required] [enum: `ready`, `pending`, `unavailable`] |
| **questions** | [**List**](ai-suggested-question.md) | The questions; empty unless `status` is `ready`. | [required] |
