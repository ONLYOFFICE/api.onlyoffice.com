# getUserById

> PortalUserWrapper getUserById(userId)

`GET /api/2.0/portal/users/{userId}`

Get a portal user

Returns an account of the current portal by its ID, in the internal user format. Any signed-in user can read their own profile. A DocSpace admin can read any account. A room admin can read any account except a guest they have no relation with. A user or a guest can read only their own profile. Other callers get 403, even for an ID that does not exist. The call is read-only. It returns 404 for an unknown ID or a system account. To read your own profile, use `GET api/2.0/people/@self`. To get the account in the People format, with groups, quota, and access data, use `GET api/2.0/people/{userId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | path | **UUID** (uuid) | The portal account the operation acts on, by user ID as `GET api/2.0/people` reports it. An ID belonging to no account of this portal and an ID of an internal system account are both answered as not found. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The account of this portal, in the internal user format | [**PortalUserWrapper**](../../models/portal-user-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to view this account: a user or a guest gets it for any ID but their own, whether the account exists or not, and a room administrator gets it for a guest they have no relation with | - | - |
| **404** | No account with this ID exists on the portal, or the ID belongs to a system account | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**PortalUserWrapper**](../../models/portal-user-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
