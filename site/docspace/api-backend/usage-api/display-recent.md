# displayRecent

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper displayRecent(DisplayRequestDto)

`PUT /api/2.0/files/displayrecent`

Show the Recent section

Stores whether the Recent section is offered to the calling account, and returns the value that is now stored. The setting belongs to that account alone: every authenticated role down to a guest may change its own copy, and an unauthenticated caller is refused. Hiding the section removes it from the list of section roots returned by `GET api/2.0/files/@root`, and the document editor stops offering the recent-files entry; the section itself keeps being maintained, and `GET api/2.0/files/recent` still returns its contents. Pass `set=true` to show it again. The same value is published as `recentSection` by `GET api/2.0/files/settings`, which is the only way to read it back. Repeating the call with the same value writes it again and is safe. A new account starts with the section shown. Hiding it neither clears the recent history nor stops it being recorded, so showing the section again brings the same entries back.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DisplayRequestDto** | body | [**DisplayRequestDto**](../files.md#model-displayrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | true if the Recent section is offered to the caller | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to change this setting | - | - |
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
