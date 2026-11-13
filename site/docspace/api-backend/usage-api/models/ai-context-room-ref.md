# AiContextRoomRef
One Instructions room a round runs with as context: the account and room ID from `GET api/2.0/ai/context/get-context-folders`, plus the skills of the room the round may use.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **cloud** | **String** | The account the room belongs to; `docspace` for a room of this portal. | [required] [example: `docspace`] |
| **id** | **String** | The room ID. | [required] [example: `1234`] |
| **skills** | [**List**](ai-room-skill.md) | The skills of the room the round may use, as `GET api/2.0/ai/context/get-room-skills` lists them. | [optional] [example: `[]`] |
