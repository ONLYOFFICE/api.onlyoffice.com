# UpdateClientRequest
Client update request containing modified client details

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The display name shown to the user on the consent screen. It has to be between 3 and 256 characters long. | [required] [example: `Updated Client`] [minLength: 3] [maxLength: 256] |
| **description** | **String** | The free-text description shown next to the name on the consent screen, at most 255 characters. | [optional] [example: `Updated description of the client`] [minLength: 0] [maxLength: 255] |
| **logo** | **String** | The client logo as a data URI carrying base64 image data, shown on the consent screen. Only png, jpeg, jpg and svg+xml are accepted. | [required] [example: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==`] [minLength: 1] [pattern: `/^data:image\/(?:png\|jpeg\|jpg\|svg\\+xml);base64,.*.{1,}/`] |
| **scopes** | **Set** | The permissions the client may ask for, named as they appear in the tenant scope catalogue - for example files:read, rooms:write or openid. A client cannot request a scope that is not listed here. | [required] |
| **allow\_pkce** | **Boolean** | Whether the client may use PKCE. Turning it on lets the client authenticate with the none method and prove itself with a code verifier instead of sending a secret, which is what a client that cannot keep a secret needs. | [optional] [example: `true`] |
| **allowed\_origins** | **Set** | The web origins allowed to call the portal on behalf of this client, used for the CORS check. The set holds between 1 and 12 addresses. | [required] |
| **redirect\_uris** | **Set** | The URIs an authorization code may be delivered to. An authorization request naming any other URI is refused, and the set holds between 1 and 12 addresses. | [required] |
| **is\_public** | **Boolean** | Whether the client is offered to third-party tenants rather than only to the tenant that registers it. | [optional] [example: `false`] |
