# deleteGroup

> deleteGroup(id)

`DELETE /api/2.0/group/{id}`

Delete a group

Deletes a group and removes its access to rooms, folders, and files. Members who had access only through the group lose it. The call keeps the accounts of the members. Requires a DocSpace admin. Other callers get 403. The deletion cannot be undone. A repeated call returns 404. The call returns 204 with no body. If no group has this ID, the call returns 404. To empty a group without deleting it, use `DELETE api/2.0/group/{id}/members`.  Raises the `group.deleted` webhook once for the deleted group, without `user.*` webhooks for its former members.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group to delete, taken from the route. It has to be a group that has not been deleted already, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **204** | The group is deleted. No content is returned | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](group.md#basic), [OAuth2](group.md#oauth2) (scopes: read, write), [ApiKeyBearer](group.md#apikeybearer), [asc_auth_key](group.md#asc_auth_key), [Bearer](group.md#bearer), [OpenId](group.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
