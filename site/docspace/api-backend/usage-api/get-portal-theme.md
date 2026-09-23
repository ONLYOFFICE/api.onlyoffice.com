# getPortalTheme

Referenced types are defined in the [full reference](../people.md).

> DarkThemeSettingsWrapper getPortalTheme()

`GET /api/2.0/people/theme`

Get the portal theme

Returns the interface theme the calling account has chosen: `Base` for the light theme, `Dark` for the dark one, or `System` to follow whatever the operating system asks for. The setting belongs to the account and not to the portal, despite the name of the route, so it describes the caller alone and cannot be read for anybody else. It needs no permission and is read-only. A caller that has never chosen a theme gets the portal default rather than an empty answer. The same value is also reported as `theme` by `GET api/2.0/people/@self`, so a client that reads the profile on start-up does not need this operation as well.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The interface theme of the calling account | [**DarkThemeSettingsWrapper**](../people.md#model-darkthemesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DarkThemeSettingsWrapper**](../people.md#model-darkthemesettingswrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## PeopleThirdPartyAccountsApi
