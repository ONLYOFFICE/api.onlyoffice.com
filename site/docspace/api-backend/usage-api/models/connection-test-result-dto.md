# ConnectionTestResultDto
The outcome of a connection test against an external database.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | Specifies whether the connection to the database succeeded. | [optional] [example: `true`] |
| **error** | **String** | The reason the connection failed, or null when it succeeded. | [optional] [example: `Unable to connect to any of the specified MySQL hosts.`] [nullable] |
