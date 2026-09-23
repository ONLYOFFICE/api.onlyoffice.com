# deleteKeys

Referenced types are defined in the [full reference](../files.md).

> deleteKeys(id)

`DELETE /api/2.0/privacyroom/keys/{id}`

Delete an encryption key

Removes one encryption key pair from the calling user's own key set and answers 204 with no body. The pair is named by the `id` of an entry of `GET api/2.0/privacyroom/keys`; the caller's other pairs stay as they are. The call is destructive and cannot be repeated: the key material is gone for good, a second delete of the same `id`, like an `id` that was never stored, is answered with 404, and there is no parameter for another user's keys, so an authenticated member only ever deletes their own while a guest is refused. Deleting the last key the caller holds locks them out of the private rooms they belong to, their own rooms included: the rooms and their content survive untouched and stay listed as private, but `GET api/2.0/privacyroom/{roomId}/access` then refuses the caller until a new key is stored with `POST api/2.0/privacyroom/keys`. Before DocSpace 4.0 the call answered 200 with the caller's remaining keys, so a client that read that list has to call `GET api/2.0/privacyroom/keys` instead.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The pair to delete, taken from the `id` of an entry of `GET api/2.0/privacyroom/keys`. Only the caller's own pairs can be named here. | [required] [example: `9924256B-447C-4F19-9dbd-8ad8c39e8ff5`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **204** | The encryption key is deleted. Answered 200 with the remaining keys before DocSpace 4.0 | - | - |
| **400** | The key identifier is not a valid GUID | - | - |
| **404** | The encryption key is not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
