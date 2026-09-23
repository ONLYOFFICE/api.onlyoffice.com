# addTemplates

Referenced types are defined in the [full reference](../files.md).

> BooleanWrapper addTemplates(TemplatesRequestDto)

`POST /api/2.0/files/templates`

Add template files

Adds the listed files to the personal template list of the calling account, the set the portal offers when a new document is started from an existing one. The list belongs to the account and no other member sees it. Every authenticated member type may manage their own list, a guest is refused, and read access to each file is required. Only formats the portal treats as template documents survive: the accepted extensions arrive in `extsWebTemplate` of `GET api/2.0/files/settings`, and a file of any other format is dropped silently. Only numeric ids are accepted, so a file on a connected third-party account cannot become a template. The answer is `true` whenever the request was understood, which an empty list, an id that does not exist and an unreadable file all achieve, so it confirms nothing about what was added; no operation of this document reads the list back. Repeating the call is safe. Use `DELETE api/2.0/files/templates` to drop a file again.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TemplatesRequestDto** | body | [**TemplatesRequestDto**](../files.md#model-templatesrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always true: the request was understood, which does not mean that anything was added | [**BooleanWrapper**](../files.md#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
