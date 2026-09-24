# DefaultProductRequestDto
The section the calling user's account opens into after signing in.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **defaultFolderType** | [**FolderType**](folder-type.md) | The section to land on. Only the folder types the client offers as a landing page are accepted - the rooms list, My documents, shared with me, favorites, recent, forms and the AI agents folder - and anything else is refused. My documents is refused for a guest as well, since a guest has no personal storage. | [required] [enum: `0`, `1`, `2`, `3`, `5`, `6`, `8`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `19`, `20`, `21`, `22`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`] |
