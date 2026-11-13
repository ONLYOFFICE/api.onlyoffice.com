# subscribeDocumentsPushNotification

> FirebaseDeviceWrapper subscribeDocumentsPushNotification(FirebaseRequestDto)

`PUT /api/2.0/settings/push/docsubscribe`

Set push subscription

Changes the push subscription of one registered device of the calling user in the Documents app. Send the device's Firebase token with `isSubscribed` true to turn notifications on, or false to turn them off. First register the device with `POST api/2.0/settings/push/docregisterdevice`. Any signed-in user can call it, including a guest. The call matches only registrations of the caller on the current portal. It changes only the subscription state, never the token. The call changes data, and you can repeat it with the same body. It returns the updated registration. An empty response means that no registration of the caller has this token. Then nothing changes, so register the device and call again. A device that is turned off keeps its token but gets no messages. Other devices of the same account do not change. The kinds of notification an account gets are a separate setting, returned by `GET api/2.0/settings/notification/{type}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **FirebaseRequestDto** | body | [**FirebaseRequestDto**](../../models/firebase-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The device registration as it stands after the change, or an empty response when no registration of the calling user carries the token that was sent | [**FirebaseDeviceWrapper**](../../models/firebase-device-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FirebaseDeviceWrapper**](../../models/firebase-device-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
