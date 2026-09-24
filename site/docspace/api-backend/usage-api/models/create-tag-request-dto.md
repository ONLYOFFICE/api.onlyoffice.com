# CreateTagRequestDto
The parameters for adding a custom tag to the portal catalog of room tags.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The name of the tag to create, which is also its identity: tags are addressed by name everywhere, there is no separate identifier. It is stored exactly as sent, spacing and case included, and a name that is already in the catalog gives back that tag instead of a second one. | [required] [example: `Important`] [minLength: 0] [maxLength: 255] [nullable] |
