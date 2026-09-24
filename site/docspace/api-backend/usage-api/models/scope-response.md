# ScopeResponse
One scope from the tenant scope catalogue, as it may be requested by a client.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The scope exactly as it is written in an authorization request, for example files:read or openid. | [optional] [example: `files:read`] |
| **group** | **String** | The area of the portal the scope belongs to, which is what groups the scopes on the consent screen: files, rooms, contacts, profiles or openid. | [optional] [example: `files`] |
| **type** | **String** | What the scope allows inside its group: read for read-only access, write for changes, and openid for the identity scope itself. | [optional] [example: `read`] |
