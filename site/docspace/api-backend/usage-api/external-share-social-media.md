# externalShareSocialMedia

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper externalShareSocialMedia(DisplayRequestDto)

`PUT /api/2.0/files/settings/externalsocialmedia`

Change the external sharing ability on social networks

Turns the social-network sharing buttons on or off for the whole portal and returns the value that is now in force. Only the portal owner and a DocSpace administrator may change it; a room administrator, a member or a guest is refused, and so is an unauthenticated caller. The requested value is combined with the state of external sharing itself: while that is off, enabling this setting has no effect and the response comes back false, so turn external sharing on with `PUT api/2.0/files/settings/external` first and only then this one. Turning external sharing off later switches this setting off again on its own. The value is published as `externalShareSocialMedia` by `GET api/2.0/files/settings`. Sending the same value again is safe. Read the response instead of assuming the requested value was stored. The setting governs the share-to-network buttons offered next to an external link; it neither creates nor revokes links, and the links themselves keep working either way.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DisplayRequestDto** | body | [**DisplayRequestDto**](../files.md#model-displayrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if sharing on social networks is now in force | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../files.md#model-booleanwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
