# CoverRequestDto
The picture and the colour a room is drawn with while it has no logo.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **color** | **String** | The background colour the room is drawn with while it has no logo, as six hexadecimal digits with no leading number sign. An empty value restores the default colour of the room type. | [optional] [example: `FF5733`] [pattern: `/^[A-Fa-f0-9]{6}$/`] [nullable] |
| **cover** | **String** | The picture drawn on the room while it has no logo, named by an identifier from `GET api/2.0/files/rooms/covers`. Any other value is rejected, and an empty value leaves the room without a cover. | [optional] [example: `bookmark`] [nullable] |
