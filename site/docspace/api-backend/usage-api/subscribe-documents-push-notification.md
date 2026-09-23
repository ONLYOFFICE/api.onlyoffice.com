# subscribeDocumentsPushNotification

Referenced types are defined in the [full reference](../api.md).

> FireBaseUserWrapper subscribeDocumentsPushNotification(FirebaseRequestsDto)

`PUT /api/2.0/settings/push/docsubscribe`

Set push subscription

Switches the push notifications of the Documents application on or off for one already registered device of the calling user: send that device's Firebase token together with `isSubscribed` true to let the messages through or false to stop them. The device has to be registered first with `POST api/2.0/settings/push/docregisterdevice`, and only the subscription state is written - the token is matched, never changed. Every signed-in member manages its own devices, whatever its role - owner, administrator, user or guest - and a token that belongs to another member or to another portal is not matched at all, so nothing of theirs can be switched. Repeating the call with the same pair leaves the registration as it is. What comes back is the updated registration, while an empty response means no registration of the caller carries that token and nothing was stored - register the device and call again. A device switched off keeps its token stored but is left out of the delivery, and the other devices of the same member are unaffected. Which kinds of notification the account receives at all is a separate setting, read with `GET api/2.0/settings/notification/{type}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **FirebaseRequestsDto** | body | [**FirebaseRequestsDto**](../api.md#model-firebaserequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The device registration as it stands after the change, or an empty response when no registration of the calling user carries the token that was sent | [**FireBaseUserWrapper**](../api.md#model-firebaseuserwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FireBaseUserWrapper**](../api.md#model-firebaseuserwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SecurityLoginHistoryApi
