# updateWebhook

> WebhooksConfigWrapper updateWebhook(UpdateWebhooksConfigRequestDto)

`PUT /api/2.0/settings/webhook`

Update a webhook

Changes all parameters of a webhook subscription that the body names by `id`. The call overwrites every stored field with the body. So a left-out `enabled`, `triggers`, or `targetId` becomes `false`, 0, or empty. First read the current values with `GET api/2.0/settings/webhook`. Then send back the values that must stay. Two fields are exceptions. An empty `secretKey` keeps the stored secret. A left-out `ssl` keeps the stored setting. So pass `ssl` when you move the target between `http` and `https`. Any signed-in user can call it, except a guest. A guest gets 403. The portal owner and DocSpace admins can change any subscription. Other users can change only the subscriptions they created and get 403 for others. If the portal restricts the developer tools, users who are not DocSpace admins get 403 too. The call changes data. You can repeat it with the same body. A missing `name` or `uri` returns 400 before any other check. If no subscription has this `id`, the call returns 404 before the access check. Then the call checks the body as `POST api/2.0/settings/webhook` does. It checks the triggers against the role of the subscription's creator, not of the caller. If a check fails, the call returns 400. To turn a subscription on or off only, use `PUT api/2.0/settings/webhook/enable`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateWebhooksConfigRequestDto** | body | [**UpdateWebhooksConfigRequestDto**](../../models/update-webhooks-config-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The updated webhook subscription, without its secret key | [**WebhooksConfigWrapper**](../../models/webhooks-config-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `id`, `name` or `uri` is missing or empty, `name` or `secretKey` is longer than 50 characters or `targetId` longer than 255, the target URL is unusable or answers the HEAD request with a non-success code, or the secret key, a trigger flag or the `targetId` of user or group events was rejected: no user or group the subscription's creator may see has that ID | - | - |
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
