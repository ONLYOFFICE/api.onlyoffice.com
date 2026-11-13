# docRegisterPusnNotificationDevice

> FirebaseDeviceWrapper docRegisterPusnNotificationDevice(FirebaseRequestDto)

`POST /api/2.0/settings/push/docregisterdevice`

Register a push device

Registers a mobile device of the calling user for push notifications of the Documents app. First get the device's Firebase token on the device. The call stores the token with the initial `isSubscribed` state. Any signed-in user can call it, including a guest. Each registration belongs to the caller and the current portal. The call changes data, and you can repeat it with the same body. If the token is already registered, the call returns the stored registration unchanged. It then ignores `isSubscribed`. To turn an existing registration on or off, use `PUT api/2.0/settings/push/docsubscribe`. In the response, `application` is always `doc`. Only a subscribed device gets room activity messages, such as an invitation to a room or a new document. The installation also needs Firebase credentials to send them. Send a token of at most 255 characters.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **FirebaseRequestDto** | body | [**FirebaseRequestDto**](../../models/firebase-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored device registration of the calling user, with the Firebase token, the `doc` application and the subscription state as they are kept | [**FirebaseDeviceWrapper**](../../models/firebase-device-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
