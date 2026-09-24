# ClientResponse
The whole stored record of an OAuth2 client, including the secret and every address the client is allowed to use.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The display name shown to the user on the consent screen, between 3 and 256 characters. | [optional] [example: `Example Name`] |
| **description** | **String** | The free-text description shown next to the name on the consent screen, at most 255 characters. | [optional] [example: `Example Description`] |
| **tenant** | **Long** (int64) | The identifier of the portal the client belongs to. A client is visible only inside its own tenant, apart from the unauthenticated public info read. | [optional] [example: `1`] |
| **scopes** | **Set** | The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here. | [optional] |
| **enabled** | **Boolean** | Whether the client may currently obtain tokens. A disabled client keeps its registration and the tokens already issued to it, but new authorization requests for it are refused. | [optional] [example: `true`] |
| **client\_id** | **String** | The generated identifier of the client, sent as client_id in every OAuth2 request. It is assigned when the client is registered and never changes afterwards. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **client\_secret** | **String** | The client secret, which the client presents at the token endpoint when it authenticates with client_secret_post. It is omitted from the response rather than sent as null when the client has none. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **website\_url** | **String** | The URL of the client home page, offered to the user before they consent. | [optional] [example: `http://example.com`] |
| **terms\_url** | **String** | The URL of the client terms of service, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **policy\_url** | **String** | The URL of the client privacy policy, linked from the consent screen. | [optional] [example: `http://example.com`] |
| **logo** | **String** | The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted, the whole string may not exceed 2000000 characters and the decoded image may not exceed 256000 bytes. | [optional] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==`] |
| **authentication\_methods** | **Set** | How the client authenticates itself at the token endpoint: client_secret_post for a confidential client that sends its secret, none for a public client that proves itself with PKCE instead. | [optional] |
| **redirect\_uris** | **Set** | The URIs an authorization code may be delivered to. An authorization request naming any other URI is refused, and the set holds between 1 and 12 addresses. | [optional] |
| **allowed\_origins** | **Set** | The web origins allowed to call the portal on behalf of this client, used for the CORS check. The set holds between 1 and 12 addresses. | [optional] |
| **logout\_redirect\_uris** | **Set** | The URIs the user may be sent back to once they have logged out. | [optional] |
| **created\_on** | **Date** (date-time) | When the client was registered, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **created\_by** | **String** | The identifier of the user who registered the client. A plain user may read and change only the clients where this is their own identifier. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **modified\_on** | **Date** (date-time) | When the client was last changed, as an ISO-8601 timestamp with a zone offset. | [optional] [example: `2024-04-04T12:00:00Z`] |
| **modified\_by** | **String** | The identifier of the user who last changed the client. | [optional] [example: `6c7cf17b-1bd3-47d5-94c6-be2d3570e168`] |
| **is\_public** | **Boolean** | Whether the client is offered to third-party tenants rather than only to the tenant that registered it. | [optional] [example: `false`] |
