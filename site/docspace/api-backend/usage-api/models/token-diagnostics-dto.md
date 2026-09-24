# TokenDiagnosticsDto
What the current token carries, for diagnostics.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The name of the authenticated identity. | [optional] [example: `user@example.com`] [nullable] |
| **claims** | **List** | The claims of the identity, each formatted as type:value. | [optional] [example: `[http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name:user@example.com]`] [nullable] |
