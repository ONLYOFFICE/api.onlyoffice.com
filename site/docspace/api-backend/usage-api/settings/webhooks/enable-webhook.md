# enableWebhook

> WebhooksConfigWrapper enableWebhook(UpdateWebhooksConfigRequestDto)

`PUT /api/2.0/settings/webhook/enable`

Switch a webhook on or off

Turns a webhook subscription on or off and keeps its other parameters. The call reads only `id` and `enabled` from the body. The schema still requires `name` and `uri`, but the call ignores their values. To change other fields, use `PUT api/2.0/settings/webhook`. Any signed-in user can call it, except a guest. A guest gets 403. The portal owner and DocSpace admins can switch any subscription. Other users can switch only the subscriptions they created and get 403 for others. If the portal restricts the developer tools, users who are not DocSpace admins get 403 too. The call changes data. You can repeat it with the same body. If no subscription has this `id`, the call returns 404 before the access check. Turning a subscription off checks nothing. Turning it on checks the stored values again. The call sends a HEAD request to the stored address. It checks the stored secret against the current password rules. It checks the stored triggers against the current role of the subscription's creator. If any of these checks fails, the call returns 400. So you cannot turn on a subscription whose address no longer answers. A deleted `targetId` is not checked. Update the subscription first.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateWebhooksConfigRequestDto** | body | [**UpdateWebhooksConfigRequestDto**](../../models/update-webhooks-config-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The webhook subscription in its new state, without its secret key | [**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `id`, `name` or `uri` is missing or empty, `name` or `secretKey` is longer than 50 characters or `targetId` longer than 255, although this call reads only `id` and `enabled`, or on switching on the saved target answers the HEAD request with a non-success code or the saved secret no longer passes the password rules, or a saved trigger is no longer open to the creator's role | - | - |
| **403** | The subscription belongs to another member, or the caller may not use webhooks at all | - | - |
| **404** | No webhook subscription with this ID exists in the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
