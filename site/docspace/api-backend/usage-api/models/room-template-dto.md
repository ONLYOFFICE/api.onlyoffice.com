# RoomTemplateDto
The parameters of a room template built from an existing room.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomId** | **Integer** (int32) | The identifier of the room the template is built from. Take it from the room listing of `GET api/2.0/files/rooms`; a folder identifier is not accepted. | [required] [example: `1234`] |
| **title** | **String** | The title the template is saved under in the Templates section. Characters that a folder name cannot contain are replaced with an underscore on save, and two templates may share a title. | [required] [example: `Sales agreement room`] [minLength: 0] [maxLength: 400] |
| **logo** | [**LogoRequest**](logo-request.md) | A picture of the caller's own for the template, cropped out of an image already placed in the temporary storage. | [optional] |
| **copyLogo** | **Boolean** | Whether the template takes over the picture already set on the source room. When false the template gets no picture from that room. | [optional] [example: `true`] |
| **share** | **List** | The email addresses of the portal members who are granted read access to the finished template. | [optional] [example: `[user1@example.com, user2@example.com]`] [nullable] |
| **groups** | **List** (uuid) | The identifiers of the portal groups whose members are granted read access to the finished template. | [optional] [example: `[9924256a-739c-462b-af15-e652a3b1b6eb]`] [nullable] |
| **public** | **Boolean** | Whether the finished template is shared with everyone allowed to create rooms. When false it stays reachable only for the recipients named for it. | [optional] [example: `true`] |
| **tags** | **List** | The labels attached to the template and shown next to it in listings. | [optional] [example: `[Contracts, Sales]`] [nullable] |
| **color** | **String** | The accent colour of the generated cover, written as six hexadecimal digits with no leading hash sign. When it is left empty a colour is picked at random. | [optional] [example: `FF5733`] [minLength: 0] [maxLength: 6] [nullable] |
| **cover** | **String** | The identifier of a built-in cover picture, as listed by `GET api/2.0/files/rooms/covers`. When it is left empty the template gets no cover. | [optional] [example: `bookmark`] [minLength: 0] [maxLength: 50] [nullable] |
| **quota** | **Long** (int64) | The storage limit assigned to the template, in bytes. When it is not set the template keeps the limit of the source room. | [optional] [example: `10485760`] [nullable] |
