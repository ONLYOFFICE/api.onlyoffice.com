# deleteGroup

Referenced types are defined in the [full reference](../people.md).

> deleteGroup(id)

`DELETE /api/2.0/group/{id}`

Delete a group

Deletes a group and withdraws the access it had been granted to rooms, folders and files. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. The removal is permanent and cannot be undone, and it affects sharing: everything that was shared with the group loses that share, so members who had access only through this group lose it too. The accounts themselves are kept - only their membership disappears. The call answers 204 with no body and raises a `GroupDeleted` webhook; a second call with the same ID answers 404 rather than succeeding again. To empty a group without deleting it, move its members away with `PUT api/2.0/group/{fromId}/members/{toId}` or remove them through `DELETE api/2.0/group/{id}/members`.

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
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
