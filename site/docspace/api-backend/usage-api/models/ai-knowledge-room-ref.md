# AiKnowledgeRoomRef
One Knowledge room a round searches: the account and room ID from `GET api/2.0/ai/context/get-knowledge-folders`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **cloud** | **String** | The account the room belongs to; `docspace` for a room of this portal. | [required] [example: `docspace`] |
| **id** | **String** | The room ID; anything that is not a positive integer is ignored. | [required] [example: `1234`] |
