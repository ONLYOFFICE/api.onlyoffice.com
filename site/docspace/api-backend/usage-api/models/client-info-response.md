# ClientInfoResponse
The consent-facing subset of a client: everything needed to render a consent screen, and nothing that would let a caller act as the client.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The display name shown to the user on the consent screen, between 3 and 256 characters. | [optional] [example: `Example Name`] |
| **description** | **String** | The free-text description shown next to the name on the consent screen, at most 255 characters. | [optional] [example: `Example Description`] |
| **scopes** | **Set** | The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here. | [optional] |
| **client\_id** | **String** | The generated identifier of the client, sent as client_id in every OAuth2 request. It is assigned when the client is registered and never changes afterwards. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **website\_url** | **String** | The URL of the client home page, offered to the user before they consent. | [optional] [example: `http://example.com`] |
| **terms\_url** | **String** | The URL of the client terms of service, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **policy\_url** | **String** | The URL of the client privacy policy, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **logo** | **String** | The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted, the whole string may not exceed 2000000 characters and the decoded image may not exceed 256000 bytes. | [optional] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==`] |
| **authentication\_methods** | **Set** | How the client authenticates itself at the token endpoint: client_secret_post for a confidential client that sends its secret, none for a public client that proves itself with PKCE instead. | [optional] |
| **created\_on** | **Date** (date-time) | When the client was registered, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **created\_by** | **String** | The identifier of the user who registered the client. A plain user may read and change only the clients where this is their own identifier. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **modified\_on** | **Date** (date-time) | When the client was last changed, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **modified\_by** | **String** | The identifier of the user who last changed the client. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **is\_public** | **Boolean** | Whether the client is offered to third-party tenants rather than only to the tenant that registered it. | [optional] [example: `false`] |
