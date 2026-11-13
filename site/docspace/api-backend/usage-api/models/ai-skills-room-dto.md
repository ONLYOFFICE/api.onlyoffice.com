# AiSkillsRoomDto
An Instructions room with its skills.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | ID of the room. | [required] [example: `17001`] |
| **title** | **String** | Room title. | [required] [example: `Brand voice`] [nullable] |
| **logo** | [**LogoDto**](logo-dto.md) | Room logo. | [required] |
| **skills** | [**List**](ai-skill-dto.md) | Skills of the room, sorted by file title. | [required] [example: `[{id=9911, name=brand-voice, description=Writes marketing texts in the brand voice.}]`] [nullable] |
