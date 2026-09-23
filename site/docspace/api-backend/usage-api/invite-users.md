# inviteUsers

Referenced types are defined in the [full reference](../people.md).

> EmployeeArrayWrapper inviteUsers(InviteUsersRequestDto)

`POST /api/2.0/people/invite`

Invite users

Invites people to the portal by email, creating a pending profile for each address and mailing it an invitation link. The caller has to be a room admin or a DocSpace admin - a member or a guest is rejected - the portal has to allow inviting members, and inviting a room admin additionally requires DocSpace admin rights while inviting another DocSpace admin requires the portal owner; a `Guest` type is not accepted here at all. An address that already belongs to a profile is not mailed again: the existing account is only related to the caller, and its type is raised when the invitation asks for a higher one, while a disabled account rejects the whole call with 400. The whole call is rejected before anything is sent when the invitations would need more paid seats than the tariff has left, and a malformed or punycode address is rejected with 400, so the list is validated as a batch but applied one address at a time - a failure partway through leaves the earlier invitations sent. The answer is not the result of this call: it lists every profile of the portal that is still pending and that the caller may see, so previously invited people appear in it as well. Each newly invited profile raises a `UserInvited` webhook, and repeated calls are throttled. Use `PUT api/2.0/people/invite` to send the invitation email again, and `POST api/2.0/people` to create a profile without mailing anybody.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InviteUsersRequestDto** | body | [**InviteUsersRequestDto**](../people.md#model-inviteusersrequestdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every pending profile the caller may see, not only the ones just invited | [**EmployeeArrayWrapper**](../people.md#model-employeearraywrapper) | - |
| **400** | An address is malformed or written in punycode, or it belongs to a disabled account | - | - |
| **402** | The invitations would need more paid seats than the tariff has left | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../people.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EmployeeArrayWrapper**](../people.md#model-employeearraywrapper)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
