# addGroup

Referenced types are defined in the [full reference](../people.md).

> GroupWrapper addGroup(GroupRequestDto)

`POST /api/2.0/group`

Add a new group

Creates a group with the given name and, optionally, a manager and a first set of members. The caller needs the permissions to edit groups and to add and remove users. The name is required and cannot be blank, and unlike the operations that add members later, this one checks every listed account upfront and rejects the whole call with 400 if any of them is unusable - a guest, a disabled account or an ID that matches nobody. The call is not idempotent: names are not unique, so repeating it creates a second group with the same name. Creating a group raises a `GroupCreated` webhook, and the answer holds the new group with its members included. Members can be changed afterwards through `PUT api/2.0/group/{id}` or the dedicated member operations.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **GroupRequestDto** | body | [**GroupRequestDto**](../people.md#model-grouprequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new group, with its members | [**GroupWrapper**](../people.md#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The group name is empty, or one of the listed accounts is a guest, is disabled or does not exist | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**GroupWrapper**](../people.md#model-groupwrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
