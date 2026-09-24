# RoomGroupRequestDto
The name, the icon and the rooms of a room group to create.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The name to show the group under. Surrounding spaces are trimmed before it is stored, a name that is blank once trimmed is refused, and the name does not have to differ from the names of the caller's other groups. | [required] [example: `Client projects`] [minLength: 0] [maxLength: 128] |
| **icon** | **String** | The icon of the group, given as the identifier of one of the built-in covers listed by `GET api/2.0/files/rooms/covers`. An uploaded image cannot be used, and any value that is not one of those identifiers is refused. | [required] [example: `star`] [minLength: 0] [maxLength: 50] |
| **rooms** | [**List**](duplicate-request-dto-file-ids.md) | The rooms to gather in the group, each given as a number for a room stored in the portal or as a string for a room on a connected third-party account. Every identifier has to name a room the caller can read; repeats are collapsed, and an element of any other shape - a decimal number, a number sent as a string, null - is refused. | [required] [example: `[12, 15, folder-123-abc]`] |
