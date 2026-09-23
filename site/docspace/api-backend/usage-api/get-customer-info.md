# getCustomerInfo

Referenced types are defined in the [full reference](../api.md).

> CustomerInfoWrapper getCustomerInfo(refresh)

`GET /api/2.0/portal/payment/customerinfo`

Get the customer information

Returns the billing customer behind the portal: the e-mail its billing account is registered to, whether a payment method is stored for it, and the portal user who is the payer of that account. Only a DocSpace administrator may read it, and the call is read-only. The answer is empty in two ordinary cases - the installation has no billing service configured at all, and the portal has never been a customer - so an empty body is not an error. `payer` is filled in only when the billing e-mail belongs to a portal user; when it does not, the e-mail is still shown but the field stays empty, and that is what makes every payer-only operation of this group unreachable for everybody. `refresh=true` re-reads the customer from the billing provider instead of the cache, which is worth doing right after a payment method has been attached.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **refresh** | query | **Boolean** | Whether the answer is fetched from the billing service instead of the portal cache. The cached copy is what a start-up needs and costs nothing; asking for a fresh one makes a remote call, so use it right after a purchase or a top-up and not on every read. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The billing customer with its payer, or an empty result when the portal has no customer or billing is not configured | [**CustomerInfoWrapper**](../api.md#model-customerinfowrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomerInfoWrapper**](../api.md#model-customerinfowrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
