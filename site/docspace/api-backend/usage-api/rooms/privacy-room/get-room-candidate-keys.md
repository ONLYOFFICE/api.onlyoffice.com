# getRoomCandidateKeys

> EncryptionKeyArrayWrapper getRoomCandidateKeys(roomId, userIds)

`GET /api/2.0/privacyroom/{roomId}/access/candidates`

Get public keys of room invitees

Returns the public encryption keys of users that you plan to invite to a private room. Use them to encrypt the file keys of the room for these users before you invite them. Requires the right to change the access of the room, which the room owner and room managers have. Other callers get 403. A DocSpace admin who is not a member also gets 403. It also returns 403 for an archived room. The call is read-only and invites nobody. To invite the users, use `PUT api/2.0/files/rooms/{id}/share`. The answer has one entry per key and never includes `privateKeyEnc`, even for the caller. It has no entry for a user without a key, a guest, a disabled user, or an unknown user. A user without a key must first create one with `POST api/2.0/privacyroom/keys`. The call counts a repeated user ID once. Without `userIds`, it returns an empty list. To get the keys of current members, use `GET api/2.0/privacyroom/{roomId}/access`. The call returns 400 if the room is not private or `roomId` is a folder inside a room. A malformed user ID also returns 400. If the room is unknown, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **roomId** | path | **Integer** (int32) | The private room the people are invited to. Take it from the `id` of the room returned by `POST api/2.0/files/rooms` or listed by `GET api/2.0/files/rooms`. | [required] [example: `1234`] |
| **userIds** | query | **List** (uuid) | The people to read the keys of, repeated once per user (`userIds=...&userIds=...`). Take each from the `id` of a user returned by `GET api/2.0/people`. | [optional] [example: `["9924256B-447C-4F19-9dbd-8ad8c39e8ff5"]`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The public encryption keys of the listed users who can be invited | [**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The room is not a private room, or a user ID is malformed | - | - |
| **403** | The caller has no read access to the room or cannot change its access | - | - |
| **404** | The room is not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EncryptionKeyArrayWrapper**](../../models/encryption-key-array-wrapper.md)

## Authorization

[Basic](../rooms.md#basic), [OAuth2](../rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](../rooms.md#apikeybearer), [asc_auth_key](../rooms.md#asc_auth_key), [Bearer](../rooms.md#bearer), [OpenId](../rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
