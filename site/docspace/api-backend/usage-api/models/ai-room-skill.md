# AiRoomSkill
A skill of an Instructions room: the frontmatter of one Markdown skill file. `name` and `description` are what the model is shown; the body is read through `GET api/2.0/ai/context/get-room-skill`.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The skill's ID, as `GET api/2.0/ai/context/get-room-skill` takes it. | [required] [example: `5678`] |
| **name** | **String** | The skill's name, from its frontmatter. | [required] [example: `contract-review`] |
| **description** | **String** | What the skill is for, from its frontmatter; empty when it declares none. | [required] [example: `How to review a supply contract.`] |
