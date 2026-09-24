# LinkAccountRequestDto
The request parameters for linking accounts.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **serializedProfile** | **String** | The profile a completed provider authorization produced, in the serialized form the login flow hands back. Pass that value unchanged; it carries the provider, the third-party account ID and the authorization result, and a hand-written object is not accepted. | [optional] [example: `{"provider":"google","id":"123456"}`] [nullable] |
