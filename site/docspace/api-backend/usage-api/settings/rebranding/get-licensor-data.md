# getLicensorData

> LicensorDetailsArrayWrapper getLicensorData()

`GET /api/2.0/settings/companywhitelabel`

Get the licensor data

Returns the licensor details that the About page and letters show as the vendor. Any signed-in user can call it. The call is read-only. The first item holds the details in effect. A reseller can replace them without marking its details as the licensor. Then a second item holds the built-in ONLYOFFICE details, so the page can show both. A single item means there is nothing else to show. The details apply to the whole installation, so all its portals return the same list. To read the details in the form the settings page edits, use `GET api/2.0/settings/rebranding/company`. To change them, use `POST api/2.0/settings/rebranding/company`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The licensor details in effect, followed by the built-in ONLYOFFICE ones when they have been replaced | [**LicensorDetailsArrayWrapper**](../../models/licensor-details-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**LicensorDetailsArrayWrapper**](../../models/licensor-details-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
