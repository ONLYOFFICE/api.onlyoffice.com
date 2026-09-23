# sendPaymentRequest

Referenced types are defined in the [full reference](../api.md).

> sendPaymentRequest(SalesRequestsDto)

`POST /api/2.0/portal/payment/request`

Contact the sales team

Sends the portal's message to the ONLYOFFICE sales team - the contact-sales form behind a request for a quote, an invoice or a plan that cannot be bought online. `email` has to be a well-formed address and is where the answer will go, while `userName` and `message` say who is asking and what for; all three are required and none may be empty. Only a DocSpace administrator may call it. Nothing on the portal changes: no plan, no quota and no payment is touched, a message is mailed out and the request is written to the portal audit trail. There is no response body - status 200 means the message was handed to the mail service - and the call is not idempotent, so a repeat sends a second message. It is limited to ten requests a minute per user by default and answers 429 above that.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SalesRequestsDto** | body | [**SalesRequestsDto**](../api.md#model-salesrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message has been handed to the mail service; the response carries no content | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | `email` is not a well-formed address, or one of the required fields is empty | - | - |
| **403** | The caller is not a DocSpace administrator | - | - |
| **429** | This user has made more than ten requests in a minute | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
