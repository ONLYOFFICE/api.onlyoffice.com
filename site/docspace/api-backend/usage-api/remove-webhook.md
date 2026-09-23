# removeWebhook

Referenced types are defined in the [full reference](../api.md).

> WebhooksConfigWrapper removeWebhook(id)

`DELETE /api/2.0/settings/webhook/{id}`

Remove a webhook

Removes one webhook subscription from the current portal for good, addressed by `id` in the path. Deliveries stop with it: matching events are no longer queued, and there is no undo, so a subscription dropped by mistake has to be created again with `POST api/2.0/settings/webhook`, which gives it a new identifier and needs a new secret key. To pause deliveries without losing the configuration, switch the subscription off with `PUT api/2.0/settings/webhook/enable` instead. A `DocSpaceAdmin` may remove any subscription in the portal, anyone else only the ones they created, and a `Guest` may not use webhooks at all. The response repeats the subscription as it was just before the removal, so the caller can record what disappeared, again without the secret key. An identifier that no longer exists gives 404, which is what a second removal of the same subscription answers as well, so a repeated call is harmless but reports the state truthfully rather than pretending to succeed.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The identifier of the object the operation acts on, as the listing operation of that kind of object reports it. It has to match the shape the route declares - a GUID where the route is typed as one - since a value of another shape does not match the route at all and is answered as not found. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The removed webhook subscription, as it was just before the removal | [**WebhooksConfigWrapper**](../api.md#model-webhooksconfigwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The subscription belongs to another member, or the caller may not use webhooks at all | - | - |
| **404** | No webhook subscription with this ID exists in the portal | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**WebhooksConfigWrapper**](../api.md#model-webhooksconfigwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
