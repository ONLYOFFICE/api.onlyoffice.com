# SetPublicDto
The public access to set on a room template.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The identifier of the room template. Take it from `templateId` of `GET api/2.0/files/roomtemplate/status`, or from the folder list of `GET api/2.0/files/rooms` called with `searchArea` set to 4; an identifier of an ordinary room is not accepted. | [required] [example: `1234`] [min: 1] [max: 2147483647] |
| **public** | **Boolean** | Whether the Everyone group keeps read access to the template. True shares it with every member allowed to create rooms; false leaves it reachable only for its owner. | [optional] [example: `true`] |
