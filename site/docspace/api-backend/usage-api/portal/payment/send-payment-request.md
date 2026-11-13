# sendPaymentRequest

> sendPaymentRequest(SalesRequestDto)

`POST /api/2.0/portal/payment/request`

Contact the sales team

Sends a message from the portal to the ONLYOFFICE sales team. Use it to ask for a quote, an invoice, or a plan that cannot be bought online. The team sends the answer to `email`. Requires a DocSpace admin. Other callers get 403. The call queues an email and changes no plan, quota, or payment. Do not repeat it. Each call sends the message again. The response has no body. The call returns 400 if `email` is not a valid address or a field is empty. By default, the limit is 10 calls a minute per user. More calls return 429.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SalesRequestDto** | body | [**SalesRequestDto**](../../models/sales-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message has been handed to the mail service; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `email` is not a well-formed address, or one of the required fields is empty | - | - |
| **403** | The caller is not a DocSpace administrator | - | - |
| **429** | This user has made more than ten requests in a minute | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
