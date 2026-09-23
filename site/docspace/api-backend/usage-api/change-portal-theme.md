# changePortalTheme

Referenced types are defined in the [full reference](../people.md).

> DarkThemeSettingsWrapper changePortalTheme(DarkThemeSettingsRequestDto)

`PUT /api/2.0/people/theme`

Change the portal theme

Sets the interface theme of the calling account to `Base` for the light theme, `Dark` for the dark one, or `System` to follow whatever the operating system asks for. The setting belongs to the account and not to the portal, despite the name of the route, so it changes nothing for anybody else and cannot be set on another account. It needs no permission, takes effect at once and is idempotent - sending the theme that is already in use changes nothing. The answer echoes the theme that was stored, which is the value the request asked for. The same value is reported as `theme` by `GET api/2.0/people/@self`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DarkThemeSettingsRequestDto** | body | [**DarkThemeSettingsRequestDto**](../people.md#model-darkthemesettingsrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The interface theme that was stored | [**DarkThemeSettingsWrapper**](../people.md#model-darkthemesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DarkThemeSettingsWrapper**](../people.md#model-darkthemesettingswrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
