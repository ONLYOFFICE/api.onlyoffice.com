# addGroup

> GroupWrapper addGroup(GroupRequestDto)

`POST /api/2.0/group`

Add a new group

Creates a group with a name and, optionally, a manager and members. The manager also becomes a member. Requires a DocSpace admin. Other callers get 403. A room admin can read groups but also gets 403 here. The call changes data. Do not repeat it. Group names are not unique, so each call creates another group. The response is the new group with its members. The call returns 400 if the name is missing, blank, or too long. It also returns 400 if the manager or any member is a guest, a disabled account, or an unknown ID. In that case, the call creates nothing.  Raises the `group.created` webhook once for the new group, without `user.*` webhooks for its members.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **GroupRequestDto** | body | [**GroupRequestDto**](../models/group-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new group, with its members | [**GroupWrapper**](../models/group-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `groupName`, the group name is `null`, blank or longer than 128 characters, or one of the listed members or the manager is a guest, is disabled or does not exist | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupWrapper**](../models/group-wrapper.md)

## Authorization

[Basic](group.md#basic), [OAuth2](group.md#oauth2) (scopes: read, write), [ApiKeyBearer](group.md#apikeybearer), [asc_auth_key](group.md#asc_auth_key), [Bearer](group.md#bearer), [OpenId](group.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
