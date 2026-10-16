# ONLYOFFICE DocSpace People API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Endpoints

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *ApiKeysApi* | [**createApiKey**](#createapikey) | **POST** /api/2.0/keys | Create a user API key |
| *ApiKeysApi* | [**deleteApiKey**](#deleteapikey) | **DELETE** /api/2.0/keys/\{keyId\} | Delete an API key |
| *ApiKeysApi* | [**getAllPermissions**](#getallpermissions) | **GET** /api/2.0/keys/permissions | Get API key permissions |
| *ApiKeysApi* | [**getApiKey**](#getapikey) | **GET** /api/2.0/keys/@self | Get the current API key |
| *ApiKeysApi* | [**getApiKeys**](#getapikeys) | **GET** /api/2.0/keys | Get the API keys |
| *ApiKeysApi* | [**updateApiKey**](#updateapikey) | **PUT** /api/2.0/keys/\{keyId\} | Update an API key |
| *GroupApi* | [**addGroup**](#addgroup) | **POST** /api/2.0/group | Add a new group |
| *GroupApi* | [**addMembersTo**](#addmembersto) | **PUT** /api/2.0/group/\{id\}/members | Add group members |
| *GroupApi* | [**deleteGroup**](#deletegroup) | **DELETE** /api/2.0/group/\{id\} | Delete a group |
| *GroupApi* | [**getGroup**](#getgroup) | **GET** /api/2.0/group/\{id\} | Get a group |
| *GroupApi* | [**getGroupByUserId**](#getgroupbyuserid) | **GET** /api/2.0/group/user/\{userid\} | Get user groups |
| *GroupApi* | [**getGroups**](#getgroups) | **GET** /api/2.0/group | Get groups |
| *GroupApi* | [**moveMembersTo**](#movemembersto) | **PUT** /api/2.0/group/\{fromId\}/members/\{toId\} | Move group members |
| *GroupApi* | [**removeMembersFrom**](#removemembersfrom) | **DELETE** /api/2.0/group/\{id\}/members | Remove group members |
| *GroupApi* | [**setGroupManager**](#setgroupmanager) | **PUT** /api/2.0/group/\{id\}/manager | Set a group manager |
| *GroupApi* | [**setMembersTo**](#setmembersto) | **POST** /api/2.0/group/\{id\}/members | Replace group members |
| *GroupApi* | [**updateGroup**](#updategroup) | **PUT** /api/2.0/group/\{id\} | Update a group |
| *GroupSearchApi* | [**getGroupsWithFilesShared**](#getgroupswithfilesshared) | **GET** /api/2.0/group/file/\{id\} | Search groups for a file |
| *GroupSearchApi* | [**getGroupsWithFoldersShared**](#getgroupswithfoldersshared) | **GET** /api/2.0/group/folder/\{id\} | Search groups for a folder |
| *GroupSearchApi* | [**getGroupsWithRoomsShared**](#getgroupswithroomsshared) | **GET** /api/2.0/group/room/\{id\} | Search groups for a room |
| *PeopleEmailApi* | [**changeUserEmail**](#changeuseremail) | **PUT** /api/2.0/people/\{userid\}/email | Change a user email |
| *PeopleEmailApi* | [**sendEmailChangeInstructions**](#sendemailchangeinstructions) | **POST** /api/2.0/people/email | Send instructions to change email |
| *PeopleGuestsApi* | [**approveGuestShareLink**](#approveguestsharelink) | **POST** /api/2.0/people/guests/share/approve | Approve a guest sharing link |
| *PeopleGuestsApi* | [**deleteGuests**](#deleteguests) | **DELETE** /api/2.0/people/guests | Remove guest relations |
| *PeoplePasswordApi* | [**changeUserPassword**](#changeuserpassword) | **PUT** /api/2.0/people/\{userid\}/password | Change a user password |
| *PeoplePasswordApi* | [**sendUserPassword**](#senduserpassword) | **POST** /api/2.0/people/password | Remind a user password |
| *PeoplePhotosApi* | [**createMemberPhotoThumbnails**](#creatememberphotothumbnails) | **POST** /api/2.0/people/\{userid\}/photo/thumbnails | Create photo thumbnails |
| *PeoplePhotosApi* | [**deleteMemberPhoto**](#deletememberphoto) | **DELETE** /api/2.0/people/\{userid\}/photo | Delete a user photo |
| *PeoplePhotosApi* | [**getMemberPhoto**](#getmemberphoto) | **GET** /api/2.0/people/\{userid\}/photo | Get a user photo |
| *PeoplePhotosApi* | [**updateMemberPhoto**](#updatememberphoto) | **PUT** /api/2.0/people/\{userid\}/photo | Update a user photo |
| *PeoplePhotosApi* | [**uploadMemberPhoto**](#uploadmemberphoto) | **POST** /api/2.0/people/\{userid\}/photo | Upload a user photo |
| *PeopleProfilesApi* | [**addMember**](#addmember) | **POST** /api/2.0/people | Add a user |
| *PeopleProfilesApi* | [**checkUserExistsByEmail**](#checkuserexistsbyemail) | **GET** /api/2.0/people/exists | Check whether an email is taken |
| *PeopleProfilesApi* | [**deleteMember**](#deletemember) | **DELETE** /api/2.0/people/\{userid\} | Delete a user |
| *PeopleProfilesApi* | [**deleteProfile**](#deleteprofile) | **DELETE** /api/2.0/people/@self | Close my own profile |
| *PeopleProfilesApi* | [**getAllProfiles**](#getallprofiles) | **GET** /api/2.0/people | Get the active profiles |
| *PeopleProfilesApi* | [**getClaims**](#getclaims) | **GET** /api/2.0/people/tokendiagnostics | Get user claims |
| *PeopleProfilesApi* | [**getProfileByEmail**](#getprofilebyemail) | **GET** /api/2.0/people/email | Get a profile by user email |
| *PeopleProfilesApi* | [**getProfileByUserId**](#getprofilebyuserid) | **GET** /api/2.0/people/\{userid\} | Get a profile by user ID |
| *PeopleProfilesApi* | [**getSelfProfile**](#getselfprofile) | **GET** /api/2.0/people/@self | Get my profile |
| *PeopleProfilesApi* | [**inviteUsers**](#inviteusers) | **POST** /api/2.0/people/invite | Invite users |
| *PeopleProfilesApi* | [**removeUsers**](#removeusers) | **PUT** /api/2.0/people/delete | Delete users |
| *PeopleProfilesApi* | [**resendUserInvites**](#resenduserinvites) | **PUT** /api/2.0/people/invite | Resend activation emails |
| *PeopleProfilesApi* | [**updateMember**](#updatemember) | **PUT** /api/2.0/people/\{userid\} | Update a user |
| *PeopleProfilesApi* | [**updateMemberCulture**](#updatememberculture) | **PUT** /api/2.0/people/\{userid\}/culture | Update a user culture |
| *PeopleQuotaApi* | [**resetUsersQuota**](#resetusersquota) | **PUT** /api/2.0/people/resetquota | Reset a user quota limit |
| *PeopleQuotaApi* | [**updateUserQuota**](#updateuserquota) | **PUT** /api/2.0/people/userquota | Change a user quota limit |
| *PeopleSearchApi* | [**getAccountsEntriesWithFilesShared**](#getaccountsentrieswithfilesshared) | **GET** /api/2.0/accounts/file/\{id\}/search | Search accounts for a file |
| *PeopleSearchApi* | [**getAccountsEntriesWithFoldersShared**](#getaccountsentrieswithfoldersshared) | **GET** /api/2.0/accounts/folder/\{id\}/search | Search accounts for a folder |
| *PeopleSearchApi* | [**getAccountsEntriesWithRoomsShared**](#getaccountsentrieswithroomsshared) | **GET** /api/2.0/accounts/room/\{id\}/search | Search accounts for a room |
| *PeopleSearchApi* | [**getSearch**](#getsearch) | **GET** /api/2.0/people/@search/\{query\} | Search users |
| *PeopleSearchApi* | [**getSimpleByFilter**](#getsimplebyfilter) | **GET** /api/2.0/people/simple/filter | Filter users in brief |
| *PeopleSearchApi* | [**getUsersWithFilesShared**](#getuserswithfilesshared) | **GET** /api/2.0/people/file/\{id\} | Search users for a file |
| *PeopleSearchApi* | [**getUsersWithFoldersShared**](#getuserswithfoldersshared) | **GET** /api/2.0/people/folder/\{id\} | Search users for a folder |
| *PeopleSearchApi* | [**getUsersWithRoomShared**](#getuserswithroomshared) | **GET** /api/2.0/people/room/\{id\} | Search users for a room |
| *PeopleSearchApi* | [**searchUsersByExtendedFilter**](#searchusersbyextendedfilter) | **GET** /api/2.0/people/filter | Filter users in detail |
| *PeopleSearchApi* | [**searchUsersByQuery**](#searchusersbyquery) | **GET** /api/2.0/people/search | Search users by query |
| *PeopleSearchApi* | [**searchUsersByStatus**](#searchusersbystatus) | **GET** /api/2.0/people/status/\{status\}/search | Search users by status filter |
| *PeopleThemeApi* | [**changePortalTheme**](#changeportaltheme) | **PUT** /api/2.0/people/theme | Change the portal theme |
| *PeopleThemeApi* | [**getPortalTheme**](#getportaltheme) | **GET** /api/2.0/people/theme | Get the portal theme |
| *PeopleThirdPartyAccountsApi* | [**getThirdPartyAuthProviders**](#getthirdpartyauthproviders) | **GET** /api/2.0/people/thirdparty/providers | Get third-party providers |
| *PeopleThirdPartyAccountsApi* | [**linkThirdPartyAccount**](#linkthirdpartyaccount) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-party account |
| *PeopleThirdPartyAccountsApi* | [**signupThirdPartyAccount**](#signupthirdpartyaccount) | **POST** /api/2.0/people/thirdparty/signup | Sign up with a provider |
| *PeopleThirdPartyAccountsApi* | [**unlinkThirdPartyAccount**](#unlinkthirdpartyaccount) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-party account |
| *PeopleUserDataApi* | [**getDeletePersonalFolderProgress**](#getdeletepersonalfolderprogress) | **GET** /api/2.0/people/delete/personal/progress | Get the personal folder deletion progress |
| *PeopleUserDataApi* | [**getReassignProgress**](#getreassignprogress) | **GET** /api/2.0/people/reassign/progress/\{userid\} | Get the reassignment progress |
| *PeopleUserDataApi* | [**getRemoveProgress**](#getremoveprogress) | **GET** /api/2.0/people/remove/progress/\{userid\} | Get the deletion progress |
| *PeopleUserDataApi* | [**necessaryReassign**](#necessaryreassign) | **GET** /api/2.0/people/reassign/necessary | Check data for reassignment need |
| *PeopleUserDataApi* | [**sendInstructionsToDelete**](#sendinstructionstodelete) | **PUT** /api/2.0/people/self/delete | Send the deletion instructions |
| *PeopleUserDataApi* | [**startDeletePersonalFolder**](#startdeletepersonalfolder) | **POST** /api/2.0/people/delete/personal/start | Delete the personal folder |
| *PeopleUserDataApi* | [**startReassign**](#startreassign) | **POST** /api/2.0/people/reassign/start | Start the data reassignment |
| *PeopleUserDataApi* | [**startRemove**](#startremove) | **POST** /api/2.0/people/remove/start | Start the data deletion |
| *PeopleUserDataApi* | [**terminateReassign**](#terminatereassign) | **PUT** /api/2.0/people/reassign/terminate | Terminate the data reassignment |
| *PeopleUserDataApi* | [**terminateRemove**](#terminateremove) | **PUT** /api/2.0/people/remove/terminate | Terminate the data deletion |
| *PeopleUserStatusApi* | [**getByStatus**](#getbystatus) | **GET** /api/2.0/people/status/\{status\} | Get profiles by status |
| *PeopleUserStatusApi* | [**updateUserActivationStatus**](#updateuseractivationstatus) | **PUT** /api/2.0/people/activationstatus/\{activationstatus\} | Set my activation status |
| *PeopleUserStatusApi* | [**updateUserStatus**](#updateuserstatus) | **PUT** /api/2.0/people/status/\{status\} | Change a user status |
| *PeopleUserTypeApi* | [**getUserTypeUpdateProgress**](#getusertypeupdateprogress) | **GET** /api/2.0/people/type/progress/\{userid\} | Get the user type change progress |
| *PeopleUserTypeApi* | [**startUserTypeUpdate**](#startusertypeupdate) | **POST** /api/2.0/people/type | Start updating user type |
| *PeopleUserTypeApi* | [**terminateUserTypeUpdate**](#terminateusertypeupdate) | **PUT** /api/2.0/people/type/terminate | Terminate updating user type |
| *PeopleUserTypeApi* | [**updateUserType**](#updateusertype) | **PUT** /api/2.0/people/type/\{type\} | Change a user type |
| *PortalGuestsApi* | [**getGuestSharingLink**](#getguestsharinglink) | **GET** /api/2.0/people/guests/\{userid\}/share | Get a guest sharing link |



## ApiKeysApi

### createApiKey

> ApiKeyResponseWrapper createApiKey(CreateApiKeyRequestDto)

`POST /api/2.0/keys`

Create a user API key

Creates an API key that authenticates requests as the calling account, and is the only operation that ever returns the secret. Any portal member except a guest may create one; when the portal limits developer tools to administrators, only a DocSpace administrator may call it. The call is not idempotent - every call issues a new key - and it is throttled, so a client that retries on a timeout can end up with several keys. The answer carries the full secret in `key`: it is shown here and never again, later reads expose only the last four characters in `keyPostfix`, so store it now. Pass the scopes the key may use in `permissions`, taking the values from `GET api/2.0/keys/permissions`; pass `*` or omit the field to record a key without scope restrictions, and set `expiresInDays` to make it expire, otherwise it stays valid until it is deleted. An empty `permissions` array and an unknown scope are both rejected with 400. Send the key in the `Authorization` header as `Bearer sk-...` to use it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateApiKeyRequestDto** | body | [**CreateApiKeyRequestDto**](#model-createapikeyrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new API key, with the full secret in the key field | [**ApiKeyResponseWrapper**](#model-apikeyresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The permissions array is empty or contains a scope the portal does not know | - | - |
| **403** | The caller is a guest, or the portal limits developer tools to administrators | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**ApiKeyResponseWrapper**](#model-apikeyresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### deleteApiKey

> BooleanWrapper deleteApiKey(keyId)

`DELETE /api/2.0/keys/{keyId}`

Delete an API key

Deletes the API key with the ID given in the route, so that it stops authenticating requests immediately. The caller may delete a key they created themselves, and a DocSpace administrator may delete any key of the portal. The removal is permanent and cannot be undone: the secret was only ever readable at creation time, so a deleted key cannot be restored and a new one has to be issued through `POST api/2.0/keys`. To stop a key temporarily instead, set `isActive` to false through `PUT api/2.0/keys/{keyId}`. The answer is a plain boolean reporting whether the key was removed.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **keyId** | path | **UUID** (uuid) | The ID of the key to delete, taken from the route. Read it from the `id` of an entry of `GET api/2.0/keys` - it is not the secret and not the `keyPostfix`. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the key was removed | [**BooleanWrapper**](#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The key belongs to another member and the caller is not a DocSpace admin | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**BooleanWrapper**](#model-booleanwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getAllPermissions

> STRINGArrayWrapper getAllPermissions()

`GET /api/2.0/keys/permissions`

Get API key permissions

Returns every scope value the portal accepts in the `permissions` array of an API key. Read it before `POST api/2.0/keys` or `PUT api/2.0/keys/{keyId}`, because any other value is rejected with 400. Any portal member except a guest may call it, and the call is read-only. The answer is a flat list sorted alphabetically, holding the per-area scopes such as `accounts:read`, `files:write` and `rooms:write`, the portal-wide `*:read` and `*:write`, and `*` which stands for a key without scope restrictions. The list is fixed for the portal and identical for every caller, so it can be cached by the client.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The scope values accepted in the permissions array of an API key | [**STRINGArrayWrapper**](#model-stringarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**STRINGArrayWrapper**](#model-stringarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getApiKey

> ApiKeyResponseWrapper getApiKey()

`GET /api/2.0/keys/@self`

Get the current API key

Returns the API key that authenticated this very request, letting the holder of a key find out what it is allowed to do without knowing its ID. The key is identified by the `Authorization` header of the call itself, so the request has to be sent as `Bearer sk-...`; a session authenticated in any other way has no key to report and this operation is not usable for it. The call is read-only and returns one entry, with the same fields as `GET api/2.0/keys` and without the secret - read `permissions` for the granted scopes, `expiresAt` for the expiry and `isActive` for the state. To look at a key other than the one in use, call `GET api/2.0/keys` instead.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The API key that authenticated this request | [**ApiKeyResponseWrapper**](#model-apikeyresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**ApiKeyResponseWrapper**](#model-apikeyresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getApiKeys

> ApiKeyResponseArrayWrapper getApiKeys()

`GET /api/2.0/keys`

Get the API keys

Returns the API keys the caller is allowed to see, which is not the same set for everybody: a DocSpace administrator gets every key of the portal, while any other member gets only the keys they created themselves. Any portal member except a guest may call it, and the call is read-only. The secrets are not returned - each entry identifies its key by `id` and by the last four characters in `keyPostfix`, and a secret can only be read once, at the moment `POST api/2.0/keys` creates it. Expired and deactivated keys stay in the list, so check `expiresAt` against the current time and read `isActive` before treating an entry as usable. An empty list means the caller has created no keys, not that the portal has none.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every key of the portal for a DocSpace admin, or the keys created by the caller for anybody else | [**ApiKeyResponseArrayWrapper**](#model-apikeyresponsearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**ApiKeyResponseArrayWrapper**](#model-apikeyresponsearraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### updateApiKey

> BooleanWrapper updateApiKey(keyId, UpdateApiKeyRequest)

`PUT /api/2.0/keys/{keyId}`

Update an API key

Renames an API key, replaces the scopes it may use, or activates and deactivates it, without changing the secret. The caller may update a key they created themselves, and a DocSpace administrator may update any key of the portal. Take the values for `permissions` from `GET api/2.0/keys/permissions`; an unknown scope or an empty array is rejected with 400, and the fields that are left out keep their current values. The answer is a plain boolean: true when the key was changed, and false when it was not - which is also what an already expired key returns, because such a key is left untouched instead of being reported as an error. Deactivating a key through `isActive` stops it from authenticating while keeping it in the list, so use it when the key may be needed again and `DELETE api/2.0/keys/{keyId}` when it may not.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **keyId** | path | **UUID** (uuid) | The ID of the key to update, taken from the route. Read it from the `id` of an entry of `GET api/2.0/keys` - it is not the secret and not the `keyPostfix`. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateApiKeyRequest** | body | [**UpdateApiKeyRequest**](#model-updateapikeyrequest) | The fields to change. Every field is optional and the ones that are left out keep their current values, so an empty object changes nothing. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the key was changed, false if it was left untouched because it has already expired | [**BooleanWrapper**](#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The permissions array is empty or contains a scope the portal does not know | - | - |
| **403** | The key belongs to another member and the caller is not a DocSpace admin | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**BooleanWrapper**](#model-booleanwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## GroupApi

### addGroup

> GroupWrapper addGroup(GroupRequestDto)

`POST /api/2.0/group`

Add a new group

Creates a group with the given name and, optionally, a manager and a first set of members. The caller needs the permissions to edit groups and to add and remove users. The name is required and cannot be blank, and unlike the operations that add members later, this one checks every listed account upfront and rejects the whole call with 400 if any of them is unusable - a guest, a disabled account or an ID that matches nobody. The call is not idempotent: names are not unique, so repeating it creates a second group with the same name. Creating a group raises a `GroupCreated` webhook, and the answer holds the new group with its members included. Members can be changed afterwards through `PUT api/2.0/group/{id}` or the dedicated member operations.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **GroupRequestDto** | body | [**GroupRequestDto**](#model-grouprequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new group, with its members | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The group name is empty, or one of the listed accounts is a guest, is disabled or does not exist | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### addMembersTo

> GroupWrapper addMembersTo(id, MembersRequest)

`PUT /api/2.0/group/{id}/members`

Add group members

Adds the listed accounts to a group, keeping the members it already has. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. Accounts that cannot be group members - a guest, a disabled account or an ID that matches nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was sent to see what was actually applied. The call is idempotent for an account that is already a member, and it does not change who manages the group; use `PUT api/2.0/group/{id}/manager` for that. The answer is the group with its members after the addition. To replace the whole list instead of extending it, use `POST api/2.0/group/{id}/members`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose members are changed, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **MembersRequest** | body | [**MembersRequest**](#model-membersrequest) | The accounts to add, replace with, or remove. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with its members after the addition | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### deleteGroup

> deleteGroup(id)

`DELETE /api/2.0/group/{id}`

Delete a group

Deletes a group and withdraws the access it had been granted to rooms, folders and files. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. The removal is permanent and cannot be undone, and it affects sharing: everything that was shared with the group loses that share, so members who had access only through this group lose it too. The accounts themselves are kept - only their membership disappears. The call answers 204 with no body and raises a `GroupDeleted` webhook; a second call with the same ID answers 404 rather than succeeding again. To empty a group without deleting it, move its members away with `PUT api/2.0/group/{fromId}/members/{toId}` or remove them through `DELETE api/2.0/group/{id}/members`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group to delete, taken from the route. It has to be a group that has not been deleted already, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **204** | The group is deleted. No content is returned | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

null (empty response body)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getGroup

> GroupWrapper getGroup(id, includeMembers)

`GET /api/2.0/group/{id}`

Get a group

Returns one group by its ID, with its name, its manager and - when asked for - the accounts that belong to it. The caller needs the permission to read groups, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. The call is read-only, and the member list is left out unless `includeMembers` is set to true, so ask for it only when the members are actually needed. Use `GET api/2.0/group` to look a group up by name or to page through them all.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group to read, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **includeMembers** | query | **Boolean** | Whether to fill in the member list of the group. It defaults to true, so set it to false when only the name and the manager are needed and the group may be large. | [optional] [example: `true`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group, with its members when includeMembers was set | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getGroupByUserId

> GroupSummaryArrayWrapper getGroupByUserId(userid)

`GET /api/2.0/group/user/{userid}`

Get user groups

Returns every group the account with the ID in the route belongs to, as a flat list of ID and name pairs. The caller needs the permission to read groups. The call is read-only, is not paged, and answers an empty list both for an account that belongs to no group and for an ID that matches no account, so an empty answer does not prove the account exists. The entries are summaries and carry neither the manager nor the members - read `GET api/2.0/group/{id}` for the full picture of one of them.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the account whose groups are listed, taken from the route. An ID that matches no account yields an empty list rather than 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The groups the account belongs to, as ID and name pairs | [**GroupSummaryArrayWrapper**](#model-groupsummaryarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupSummaryArrayWrapper**](#model-groupsummaryarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getGroups

> GroupArrayWrapper getGroups(userId, manager, count, startIndex, sortBy, sortOrder, filterValue)

`GET /api/2.0/group`

Get groups

Returns the groups of the portal, one page at a time, with the summary information about each of them - the ID, the name and the manager - but without the member list. The caller needs the permission to read groups. The call is read-only, and the number of groups that match the filters is reported in the total count of the response, so a client can page through them with `count` and `startIndex`. Narrow the result with `filterValue` on the group name, with `userId` to keep only the groups that account belongs to, and with `manager` set to true to keep only the groups it manages; order it with `sortBy` and `sortOrder`, and an unknown `sortBy` falls back to sorting by title. The entries carry no members - read `GET api/2.0/group/{id}` with `includeMembers` for one group, or `GET api/2.0/group/user/{userid}` to find the groups of a single account.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userId** | query | **UUID** (uuid) | Keeps only the groups the account with this ID takes part in. Omit it to search every group of the portal. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **manager** | query | **Boolean** | Narrows `userId` down to the groups that account manages, instead of every group it belongs to. It has no effect on its own and defaults to false. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **sortBy** | query | **String** | What to order the groups by: `Title`, `Manager` or `MembersCount`, compared without regard to case. Any other value, and omitting the field, orders by title. | [optional] [example: `Title`] |
| **sortOrder** | query | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | [optional] [example: `Ascending`] [enum: `0`, `1`] |
| **filterValue** | query | **String** | The text to match against the group name. Omit it to get every group. | [optional] [example: `Marketing`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching groups, with their summary information | [**GroupArrayWrapper**](#model-grouparraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupArrayWrapper**](#model-grouparraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### moveMembersTo

> GroupWrapper moveMembersTo(fromId, toId)

`PUT /api/2.0/group/{fromId}/members/{toId}`

Move group members

Moves every member of one group into another group, emptying the first one. The caller needs the permissions to edit groups and to add and remove users, and both IDs have to belong to groups that have not been deleted, otherwise the operation answers 404. The source group is kept, only without members, so delete it separately through `DELETE api/2.0/group/{id}` if it is no longer needed. Members that cannot be group members any more are silently skipped rather than failing the call, and an account that already belongs to the destination is simply left there. The answer is the destination group with its members, not the source one. To move a chosen few instead of everybody, use `PUT api/2.0/group/{id}/members` and `DELETE api/2.0/group/{id}/members`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **fromId** | path | **UUID** (uuid) | The ID of the group the members are taken from. It is emptied but not deleted, and it has to be a group that has not been deleted already. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **toId** | path | **UUID** (uuid) | The ID of the group the members are moved into. It is the group the answer describes, and it has to be a group that has not been deleted already. | [required] [example: `11111111-1111-1111-1111-111111111111`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The destination group with its members | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has one of the specified IDs | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### removeMembersFrom

> GroupWrapper removeMembersFrom(id, MembersRequest)

`DELETE /api/2.0/group/{id}/members`

Remove group members

Removes the listed accounts from a group, leaving the rest of its members in place. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. The accounts themselves are kept; only their membership in this group ends, together with the access they had through it. The call is idempotent and forgiving: an ID that is not a member, and one that matches no account at all, are both skipped without an error, and an empty list simply changes nothing. The answer is the group with the members that remain. Emptying a group cannot be done through `POST api/2.0/group/{id}/members`, which needs at least one valid account, so list every member here, or move them away with `PUT api/2.0/group/{fromId}/members/{toId}`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose members are changed, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **MembersRequest** | body | [**MembersRequest**](#model-membersrequest) | The accounts to add, replace with, or remove. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with the members that remain | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### setGroupManager

> GroupWrapper setGroupManager(id, SetManagerRequest)

`PUT /api/2.0/group/{id}/manager`

Set a group manager

Makes an account the manager of a group, replacing whoever managed it before. The caller needs the permissions to edit groups and to add and remove users. Both the group and the account have to exist: the operation answers 404 when the ID in the route matches no live group and also when `userId` matches no account, so the message of the error says which of the two was not found. The account is added to the group at the same time, so a manager does not have to be a member beforehand, and the previous manager stays in the group as an ordinary member. A group has one manager, which makes the call idempotent when it names the account that manages it already. The answer is the group with its new manager. To change the members rather than the manager, use `PUT api/2.0/group/{id}/members`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose manager is set, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **SetManagerRequest** | body | [**SetManagerRequest**](#model-setmanagerrequest) | The account to make the manager of the group. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with its new manager | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID, or no account has the specified userId | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### setMembersTo

> GroupWrapper setMembersTo(id, MembersRequest)

`POST /api/2.0/group/{id}/members`

Replace group members

Replaces the whole member list of a group with the accounts given in the request, removing everybody who is not in that list. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. At least one of the listed accounts has to be usable as a group member, otherwise the call is rejected with 400 and the group is left untouched; the accounts that cannot be members - a guest, a disabled account or an ID that matches nobody - are then silently skipped while the rest are applied. The replacement is not atomic: the current members are removed first and the new ones added afterwards, so a failure in between can leave the group empty. The answer is the group with the members it ends up with, which is why it should be read instead of assuming the request was applied verbatim. To add or remove a few accounts without touching the others, use `PUT api/2.0/group/{id}/members` and `DELETE api/2.0/group/{id}/members`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group whose members are changed, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **MembersRequest** | body | [**MembersRequest**](#model-membersrequest) | The accounts to add, replace with, or remove. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group with the members it ends up with | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | None of the listed accounts can be a group member | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### updateGroup

> GroupWrapper updateGroup(id, UpdateGroupRequest)

`PUT /api/2.0/group/{id}`

Update a group

Changes the name and the manager of a group and adds or removes members, in one call. The caller needs the permissions to edit groups and to add and remove users, and the ID has to belong to a group that has not been deleted, otherwise the operation answers 404. Every field is optional and the ones that are left out are kept: omitting `groupName` keeps the current name, and omitting `groupManager` keeps the current manager rather than clearing it. Accounts in `membersToAdd` that cannot be group members - a guest, a disabled account or an ID that matches nobody - are silently skipped instead of failing the call, so compare the members in the answer with what was sent to see what was actually applied. Members are added first and removed afterwards, an account listed in both lists therefore ends up removed, and removing an account that is not a member changes nothing. The change raises a `GroupUpdated` webhook, and the answer holds the group as it is after the update.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **UUID** (uuid) | The ID of the group to update, taken from the route. It has to be a group that has not been deleted, otherwise the operation answers 404. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateGroupRequest** | body | [**UpdateGroupRequest**](#model-updategrouprequest) | The fields to change. Every field is optional and the ones that are left out keep their current values, so an empty object changes nothing. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The group as it is after the update | [**GroupWrapper**](#model-groupwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No group has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupWrapper**](#model-groupwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## GroupSearchApi

### getGroupsWithFilesShared

> GroupArrayWrapper getGroupsWithFilesShared(id, excludeShared, count, startIndex, filterValue)

`GET /api/2.0/group/file/{id}`

Search groups for a file

Returns the groups that can be given access to the file with the ID given in the route, and reports for each of them whether it already has access to that file. The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file, so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing. The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty returns every group instead of nothing, and a value narrows the result by group name. The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the response. Pass `excludeShared` to keep only the groups that have no access to the file yet, which is the set to offer when adding new ones; without it every matching group comes back and `shared` tells them apart. To search users and groups together, use `GET api/2.0/accounts/file/{id}/search`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **excludeShared** | query | **Boolean** | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting access. Every returned entry then has `shared` set to false; without the flag every matching group comes back and `shared` tells them apart. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterValue** | query | **String** | The text to match against the group name. Omit it to get every group the caller may grant access to. | [optional] [example: `Marketing`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching groups, each with its access state for the file | [**GroupArrayWrapper**](#model-grouparraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No file has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupArrayWrapper**](#model-grouparraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getGroupsWithFoldersShared

> GroupArrayWrapper getGroupsWithFoldersShared(id, excludeShared, count, startIndex, filterValue)

`GET /api/2.0/group/folder/{id}`

Search groups for a folder

Returns the groups that can be given access to the folder with the ID given in the route, and reports for each of them whether it already has access to that folder. The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches nothing. The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty returns every group instead of nothing, and a value narrows the result by group name. The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the response. Pass `excludeShared` to keep only the groups that have no access to the folder yet, which is the set to offer when adding new ones; without it every matching group comes back and `shared` tells them apart. To search users and groups together, use `GET api/2.0/accounts/folder/{id}/search`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **excludeShared** | query | **Boolean** | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting access. Every returned entry then has `shared` set to false; without the flag every matching group comes back and `shared` tells them apart. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterValue** | query | **String** | The text to match against the group name. Omit it to get every group the caller may grant access to. | [optional] [example: `Marketing`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching groups, each with its access state for the folder | [**GroupArrayWrapper**](#model-grouparraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No folder has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupArrayWrapper**](#model-grouparraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getGroupsWithRoomsShared

> GroupArrayWrapper getGroupsWithRoomsShared(id, excludeShared, count, startIndex, filterValue)

`GET /api/2.0/group/room/{id}`

Search groups for a room

Returns the groups that can be given access to the room with the ID given in the route, and reports for each of them whether it already has access to that room. The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room, so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing. The call is read-only and, unlike the account search, works without a filter: leaving `filterValue` empty returns every group instead of nothing, and a value narrows the result by group name. The result is paged by `count` and `startIndex`, with the number of matching groups in the total count of the response. Pass `excludeShared` to keep only the groups that have no access to the room yet, which is the set to offer when adding new ones; without it every matching group comes back and `shared` tells them apart. To search users and groups together, use `GET api/2.0/accounts/room/{id}/search`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **excludeShared** | query | **Boolean** | Keeps only the groups that do not have access to the entry yet, which is the set to offer when granting access. Every returned entry then has `shared` set to false; without the flag every matching group comes back and `shared` tells them apart. | [optional] [example: `false`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matching groups to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterValue** | query | **String** | The text to match against the group name. Omit it to get every group the caller may grant access to. | [optional] [example: `Marketing`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching groups, each with its access state for the room | [**GroupArrayWrapper**](#model-grouparraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No room has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**GroupArrayWrapper**](#model-grouparraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## PeopleEmailApi

### changeUserEmail

> EmployeeFullWrapper changeUserEmail(userid, ChangeEmailRequest)

`PUT /api/2.0/people/{userid}/email`

Change a user email

Sets a new email address on an account, which is the step that completes an email change. The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an expired or already used token is answered with 401. The account has to exist and be `Active`, and only the portal owner may change the owner's own address. Pass the address either in plain text as `email` or, as it arrives inside the confirmation link, encrypted as `encEmail`; an empty or malformed address answers 400. An address equal to the current one is accepted and changes nothing, while a new one is stored in lowercase and marks the account `Activated`, because following the link proves the address works. The answer is the profile with its new address. The change is requested through `POST api/2.0/people/email`, which is what sends the link.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the account whose address is set, taken from the route. It has to match the account the confirmation token was issued for, and the account has to be active. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **ChangeEmailRequest** | body | [**ChangeEmailRequest**](#model-changeemailrequest) | The new address, in plain text or in the encrypted form the confirmation link carries. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile with its new address | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The user ID is empty, or the address is missing or malformed | - | - |
| **403** | The account is not active, or only its owner may change this address | - | - |
| **404** | No account has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### sendEmailChangeInstructions

> StringWrapper sendEmailChangeInstructions(UpdateMemberRequestDto)

`POST /api/2.0/people/email`

Send instructions to change email

Starts changing the email address of an account, and what it actually does depends on who calls it. A caller acting on their own account only gets a confirmation letter sent to the new address, and the address stays unchanged until that link is followed, which lands on `PUT api/2.0/people/{userid}/email`. A DocSpace administrator acting on somebody else changes the address immediately instead: the account is marked as not activated, every session of it is ended, and activation instructions are sent to the new address - and passing the address the account already has is then rejected with 400. A caller who is not an administrator may only address their own account, nobody but the owner may change the owner's address, and only the owner may change the address of another DocSpace administrator. The target has to be an account that is neither disabled nor a pending invitation, otherwise the operation answers 404, and an address that already belongs to somebody answers 400. The answer is a ready-to-display message naming the address the letter was sent to.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMemberRequestDto** | body | [**UpdateMemberRequestDto**](#model-updatememberrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating which address the letter was sent to | [**StringWrapper**](#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The user ID is empty, the address is missing, malformed, already taken, or equal to the current one | - | - |
| **403** | The caller may not change the address of that account | - | - |
| **404** | The account does not exist, is disabled, or is a pending invitation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**StringWrapper**](#model-stringwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeopleGuestsApi

### approveGuestShareLink

> EmployeeFullWrapper approveGuestShareLink(EmailMemberRequestDto)

`POST /api/2.0/people/guests/share/approve`

Approve a guest sharing link

Accepts a guest that another member shared, which links that guest to the calling account and makes it visible in the caller's list of guests. Everything the operation needs comes from the confirmation token of the link produced by `GET api/2.0/people/guests/{userid}/share`: the request body is not read at all, so there is nothing to fill in, and an expired or already used token is answered with 401. The caller has to be a room admin or a DocSpace admin; a member or a guest gets 403. The account the token names has to exist and still be a guest, otherwise the operation answers 404 or 400. The call is idempotent: a guest that is already linked to the caller is simply returned again. The answer is the full profile of the guest.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailMemberRequestDto** | body | [**EmailMemberRequestDto**](#model-emailmemberrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profile of the guest now linked to the caller | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The account named by the token is not a guest | - | - |
| **403** | The caller is a member or a guest | - | - |
| **404** | The account named by the token no longer exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### deleteGuests

> deleteGuests(UpdateMembersRequestDto)

`DELETE /api/2.0/people/guests`

Remove guest relations

Removes the listed guests from the caller's own list of guests and withdraws the access the caller had granted them. It does not delete the accounts: each guest keeps its profile and any access other members gave it, and only the link to the caller and the caller's own shares disappear. The caller has to be a room admin or a DocSpace admin, and every listed account has to exist, be an active guest and be one of the caller's own guests - a single entry that is not rejects the whole call with 403 and changes nothing. The call returns no body; read `GET api/2.0/people/filter` with `area` set to `Guests` to see what is left. To delete a guest account for good, disable it and then use `DELETE api/2.0/people/{userid}`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](#model-updatemembersrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The guests are no longer linked to the caller. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The userIds field is missing | - | - |
| **403** | The caller is not an admin, or an entry is not an active guest of the caller | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

null (empty response body)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeoplePasswordApi

### changeUserPassword

> EmployeeFullWrapper changeUserPassword(userid, ChangePasswordRequest)

`PUT /api/2.0/people/{userid}/password`

Change a user password

Sets a new password on an account, which is the step that completes a password change or a password recovery. The request has to carry the confirmation token from the emailed link rather than an ordinary session, and an expired or already used token is answered with 401. The account has to exist and be `Active`, so the password of a disabled account or of an open invitation cannot be set, and only the portal owner may set the owner's own password. Send either `passwordHash`, which is taken as it is, or a plain `password`, which is checked against the portal password policy; sending neither, or a password the policy rejects, answers 400. The change ends every other session of that account and emails it a notice that the password was changed. The answer is the profile, which does not carry the password in any form. To have the recovery link sent in the first place, use `POST api/2.0/people/password`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the account whose password is set, taken from the route. It has to match the account the confirmation token was issued for, and the account has to be active. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **ChangePasswordRequest** | body | [**ChangePasswordRequest**](#model-changepasswordrequest) | The new password, sent either in plain text or already hashed. Exactly one of the two fields is needed. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile whose password was changed | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The user ID is empty, no password was sent, or the password does not meet the portal policy | - | - |
| **403** | The account is not active, or only its owner may change this password | - | - |
| **404** | No account has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### sendUserPassword

> StringWrapper sendUserPassword(EmailMemberRequestDto)

`POST /api/2.0/people/password`

Remind a user password

Emails a password recovery link to an address, and is the entry point of the recovery flow rather than the operation that changes anything. It needs no authentication, which is how a person who cannot sign in uses it; when the portal has a CAPTCHA configured, an unauthenticated request has to pass it and answers 403 if it does not. An unauthenticated caller always gets the same success message, whether or not the address belongs to an account, so the answer cannot be used to find out which addresses are registered. An authenticated caller does get told: a failure is answered with 403, and asking for somebody else requires DocSpace administrator rights, while the owner's password can be asked for by the owner alone and another administrator's only by the owner. The link that is sent leads to `PUT api/2.0/people/{userid}/password`, which is where the new password is set; no password is ever sent by email despite the wording of the message. Repeated calls are throttled.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **EmailMemberRequestDto** | body | [**EmailMemberRequestDto**](#model-emailmemberrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating that the recovery link was sent to the address | [**StringWrapper**](#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The CAPTCHA was not passed, or an authenticated caller may not ask for that account | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**StringWrapper**](#model-stringwrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeoplePhotosApi

### createMemberPhotoThumbnails

> ThumbnailsDataWrapper createMemberPhotoThumbnails(userid, ThumbnailsRequest)

`POST /api/2.0/people/{userid}/photo/thumbnails`

Create photo thumbnails

Crops the avatar of a profile to the rectangle given in the request and rebuilds all of its thumbnail sizes, which is the second step of changing an avatar by hand. It works in two modes: with `tmpFile` it takes the temporary image `POST api/2.0/people/{userid}/photo` produced with `autosave` off, makes the cropped result the main photo and then discards the temporary file, and without `tmpFile` it re-crops the photo the profile already has. A caller may only do this to their own profile - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The call replaces the stored photo, so the previous crop is lost, and it can be repeated with new coordinates as often as needed. Passing `width` and `height` as 0 together with `tmpFile` keeps the whole uploaded image instead of cropping it. The answer holds the URLs of every generated size, the same shape `GET api/2.0/people/{userid}/photo` returns.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar is cropped, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **ThumbnailsRequest** | body | [**ThumbnailsRequest**](#model-thumbnailsrequest) | The crop rectangle, and optionally the temporary image to crop. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the rebuilt photo sizes | [**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The ID in the route is not the calling account, or the account may not edit its own profile | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### deleteMemberPhoto

> ThumbnailsDataWrapper deleteMemberPhoto(userid)

`DELETE /api/2.0/people/{userid}/photo`

Delete a user photo

Removes the avatar of a profile, so that the profile falls back to the default placeholder image. A caller may only do this to their own profile - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The removal is permanent and cannot be undone: the stored image and all of its sizes are deleted, and a new avatar has to be uploaded through `POST api/2.0/people/{userid}/photo` to replace it. The call is idempotent, so removing an avatar from a profile that has none succeeds as well, and it raises a `UserUpdated` webhook. The answer still holds the URLs of every size, now pointing at the default image.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its user name is accepted. Reading a photo works for any account the caller may see, while deleting one only works for the calling account itself. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of every photo size, now pointing at the default image | [**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The ID in the route is not the calling account, or the account may not edit its own profile | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getMemberPhoto

> ThumbnailsDataWrapper getMemberPhoto(userid)

`GET /api/2.0/people/{userid}/photo`

Get a user photo

Returns the URLs of the avatar of a profile in every size the portal keeps: the original, the retina and the maximum variants, and the big, medium and small thumbnails. Unlike the operations that change an avatar, this one may be called for another account, as long as the caller is allowed to see that account - a guest, for instance, only sees the accounts it is related to. The call is read-only and always answers with a full set of URLs: a profile that has no avatar of its own gets the URLs of the default placeholder image rather than an empty answer. The URLs are portal paths meant to be requested directly and may be replaced when the avatar changes, so they should not be stored for a long time. To change the avatar use `POST api/2.0/people/{userid}/photo` for an uploaded file, `PUT api/2.0/people/{userid}/photo` for one taken from a URL, and `DELETE api/2.0/people/{userid}/photo` to drop it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar the operation addresses, taken from the route. Either the ID of the account or its user name is accepted. Reading a photo works for any account the caller may see, while deleting one only works for the calling account itself. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the photo in every size, or of the default image when the profile has no photo | [**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to see the requested account | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### updateMemberPhoto

> ThumbnailsDataWrapper updateMemberPhoto(userid, UpdatePhotoMemberRequest)

`PUT /api/2.0/people/{userid}/photo`

Update a user photo

Sets the avatar of a profile from an image the portal downloads itself from the URL given in `files`, which is the way to reuse a picture that is already published somewhere. A caller may only do this to their own profile - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The URL has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came over HTTP; an address the portal refuses to fetch, and a download that does not succeed, both answer 403. Passing the URL the profile already uses is a no-op, and an empty `files` is rejected with 400, so use `DELETE api/2.0/people/{userid}/photo` to remove an avatar rather than sending an empty value. The downloaded image replaces the stored avatar and all of its sizes at once, raises a `UserUpdated` webhook, and is subject to the portal limit on image size. To send the bytes instead of a URL, upload the file through `POST api/2.0/people/{userid}/photo`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar is replaced, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdatePhotoMemberRequest** | body | [**UpdatePhotoMemberRequest**](#model-updatephotomemberrequest) | The address of the image to use as the new avatar. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The URLs of the photo sizes built from the downloaded image | [**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The files field is empty | - | - |
| **403** | The ID in the route is not the calling account, the account may not edit its own profile, or the URL was refused or could not be downloaded | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**ThumbnailsDataWrapper**](#model-thumbnailsdatawrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### uploadMemberPhoto

> FileUploadResultWrapper uploadMemberPhoto(userid, File, Autosave)

`POST /api/2.0/people/{userid}/photo`

Upload a user photo

Uploads an image as multipart form data and either makes it the avatar of a profile straight away or keeps it as a temporary file to be cropped afterwards. With `autosave` set to true the image becomes the avatar immediately, all of its sizes are built and their URLs come back in `data`, each with a `hash` query parameter that changes whenever the avatar does, so a client can cache them safely. With `autosave` left false the image is only stored as a temporary file and `data` holds its name, which has to be passed as `tmpFile` to `POST api/2.0/people/{userid}/photo/thumbnails` to choose the crop; nothing changes on the profile until that second call succeeds. A caller may only do this to their own profile, the ID in the route has to be the calling account, and the image has to be a format the portal can read and stay within the portal limit on image size. This operation reports every problem in the body instead of as a status code: it answers 200 with `success` set to false and a human-readable `message`, and it does so for a missing file, an unreadable format, an oversized image and a rejected permission alike, so a client has to check `success` and must not rely on the status alone. A successful upload raises a `UserUpdated` webhook only in the `autosave` case.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The profile whose avatar is uploaded, taken from the route. Either the ID of the account or its user name is accepted, and it has to be the calling account, because a profile photo can only be changed by its owner. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **File** | form | **File** (binary) | The image itself, sent as a multipart form field. It has to be a raster format the portal can read and stay within the portal limit on image size; sending no file makes the operation answer with `success` false rather than an error status. | [required] |
| **Autosave** | form | **Boolean** | Set it to true to make the uploaded image the avatar right away. With the default false the image is only stored as a temporary file whose name comes back in `data`, and it has to be passed to `POST api/2.0/people/{userid}/photo/thumbnails` to take effect. | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The upload result: on success the photo URLs or the temporary file name in data, and on failure success set to false with the reason in message | [**FileUploadResultWrapper**](#model-fileuploadresultwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**FileUploadResultWrapper**](#model-fileuploadresultwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## PeopleProfilesApi

### addMember

> EmployeeFullWrapper addMember(MemberRequestDto)

`POST /api/2.0/people`

Add a user

Creates a portal profile, either by an administrator adding somebody directly or by a person accepting an invitation link, which is why the operation accepts both an authenticated session and an invitation confirmation token. Set `fromInviteLink` to true and pass the invitation `key` for the second case: the resulting type then comes from the link and the `type` in the request is ignored, and an invalid or expired link answers 403. Without a link the caller needs the permission to add users of the requested type, cannot create a guest through this operation at all, has to be a DocSpace admin to create a room admin and the portal owner to create another DocSpace admin; either way the portal has to allow inviting members, or guests when the link says so. The password is optional: `passwordHash` is taken as it is, a plain `password` is checked against the portal password policy and rejected with 400 when it is too weak, and when both are omitted a random password is generated and the account is created without anybody knowing it. When the portal has no free paid seat the account is still created, silently as a `User` instead of the requested type, so read the `type` in the answer rather than assuming the request was honoured. Creating a profile raises a `UserCreated` webhook, downloads the avatar named in `files` if one is given, and answers with the new profile including its ID. To invite several people by email at once instead, use `POST api/2.0/people/invite`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **MemberRequestDto** | body | [**MemberRequestDto**](#model-memberrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new profile with its detailed information | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The password does not meet the portal password policy | - | - |
| **403** | The invitation link is invalid or has expired, the portal does not allow inviting this kind of account, or the caller may not create an account of the requested type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### checkUserExistsByEmail

> UserExistsResponseWrapper checkUserExistsByEmail(email, encemail, culture)

`GET /api/2.0/people/exists`

Check whether an email is taken

Reports whether an email address already belongs to a portal profile, and in what state that profile is. It is meant for the invitation and sign-up screens, which is why it accepts a confirmation token as well as an ordinary session, and why it is available on an unpaid portal. Pass the address either in plain text as `email` or, when it arrived inside an invitation link, encrypted as `encemail`; one of the two is required and a malformed or overlong address answers 400. The call is read-only, and the answer carries `exists` plus the `status` of the profile - `Active`, `Terminated` or `Pending` - which is left out entirely when nothing matches, so a pending invitation can be told apart from a working account and from a free address. It reveals only that an address is taken and not who owns it - read `GET api/2.0/people/email` for the profile itself, which needs the right to see that account.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **email** | query | **String** (email) | The user email address. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] |
| **encemail** | query | **String** | The user encrypted email address. | [optional] [example: `encrypted_email_string`] |
| **culture** | query | **String** | Culture | [optional] [example: `en-US`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the address is taken, and the status of the profile that holds it | [**UserExistsResponseWrapper**](#model-userexistsresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Both email and encemail are missing, or the address is malformed or longer than 255 characters | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**UserExistsResponseWrapper**](#model-userexistsresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### deleteMember

> EmployeeFullWrapper deleteMember(userid)

`DELETE /api/2.0/people/{userid}`

Delete a user

Deletes a portal profile and queues the erasure of the data behind it. The account has to be disabled first - set the `Terminated` status through `PUT api/2.0/people/status/{status}`, otherwise the operation answers 403 - and it must not be a system account or one imported from LDAP. The caller needs the permission to add and remove users, and has to be the portal owner to delete a DocSpace administrator. The profile disappears at once, together with its avatar, its group memberships, its file shares and its OAuth clients, while the data it owned is erased by a queued job afterwards, which can be watched through `GET api/2.0/people/remove/progress/{userid}`. The removal is permanent and cannot be undone, so hand the rooms and the shared files over first through `POST api/2.0/people/reassign/start` - an account whose reassignment has not finished cannot be deleted. The call raises a `UserDeleted` webhook and answers with the profile as it was just before it was removed. To delete several accounts at once use `PUT api/2.0/people/delete`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile as it was just before it was deleted | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The account is not disabled, is a system or an LDAP account, or the caller may not delete a DocSpace administrator | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### deleteProfile

> EmployeeFullWrapper deleteProfile()

`DELETE /api/2.0/people/@self`

Close my own profile

Closes the calling account at its owner's request: it does not erase the profile, it disables it, ends every session it has and tells the portal administrators that the account asked to be removed. It is the second step of the self-service removal - the first is `PUT api/2.0/people/self/delete`, which mails the confirmation link - so the request has to carry the confirmation token from that link rather than an ordinary session. It always acts on the calling account and takes no parameters; the portal owner and an account imported from LDAP cannot close themselves and get 403. After the call the account has the `Terminated` status and can no longer sign in, but its rooms, files and group memberships are untouched, which is why an administrator still has to erase it through `DELETE api/2.0/people/{userid}` - that operation requires exactly this disabled state. The step is reversible until then: re-enabling the account through `PUT api/2.0/people/status/{status}` restores it. The call raises a `UserUpdated` webhook, not a delete one, and answers with the profile in its new state.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile of the caller with the Terminated status | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is the portal owner, an LDAP account or a system account | - | - |
| **404** | The calling account no longer exists | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getAllProfiles

> EmployeeFullArrayWrapper getAllProfiles(count, startIndex, filterBy, sortBy, sortOrder, filterSeparator, filterValue)

`GET /api/2.0/people`

Get the active profiles

Returns a page of the working accounts of the portal, with the full profile of each of them. It reports only the accounts whose status is `Active`, so disabled accounts and open invitations are never listed - use `GET api/2.0/people/status/{status}` for those, or `GET api/2.0/people/filter` to search across every state. The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403. The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports the number of matches in the total count of the response. Narrow it with `filterValue` on the name and the email, and with `filterBy` set to `group` to keep only the members of the group whose ID is passed in `filterValue`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **sortBy** | query | **String** | What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`, `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`. | [optional] [example: `DisplayName`] |
| **sortOrder** | query | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | [optional] [example: `Ascending`] [enum: `0`, `1`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the name and the email of the account, case-insensitively. Omit it to apply no text filter. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A page of active accounts, with their full profiles | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a member or a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getClaims

> TokenDiagnosticsWrapper getClaims()

`GET /api/2.0/people/tokendiagnostics`

Get user claims

Returns the identity the current request was authenticated with, as the portal sees it: the account name and the full list of claims attached to the token or the cookie. It is a diagnostics operation meant for working out why a call is rejected - which account a token really belongs to, and which scopes and roles it carries - rather than a source of profile data. It needs no permission of its own and reports on the caller only, so it cannot be used to inspect another account. The call is read-only, and every claim comes back as a single `type:value` string, in the order the authentication produced them. An account name of `Unknown Name` means the identity carries no name claim, not that the request is unauthenticated. For the profile behind the identity, read `GET api/2.0/people/@self`.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The account name and the claims of the current identity | [**TokenDiagnosticsWrapper**](#model-tokendiagnosticswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TokenDiagnosticsWrapper**](#model-tokendiagnosticswrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getProfileByEmail

> EmployeeFullWrapper getProfileByEmail(email, encemail, culture)

`GET /api/2.0/people/email`

Get a profile by user email

Returns the full profile of the account that owns an email address. Pass the address either in plain text as `email` or, when it arrived inside an invitation link, encrypted as `encemail`; one of the two is required and a malformed or overlong address answers 400. The caller has to be allowed to see that account - a guest, for instance, only sees the accounts it is related to - and an address that belongs to nobody answers 404. The call is read-only, and `culture` changes nothing about the profile: it only picks the language of the error message when the lookup fails. To find out whether an address is taken without the right to see its owner, use `GET api/2.0/people/exists`, and to look an account up by its ID or user name use `GET api/2.0/people/{userid}`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **email** | query | **String** (email) | The user email address. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] |
| **encemail** | query | **String** | The user encrypted email address. | [optional] [example: `encrypted_email_string`] |
| **culture** | query | **String** | Culture | [optional] [example: `en-US`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profile of the account that owns the address | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | Both email and encemail are missing, or the address is malformed or longer than 255 characters | - | - |
| **403** | The caller is not allowed to see that account | - | - |
| **404** | No account owns the specified address | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getProfileByUserId

> EmployeeFullWrapper getProfileByUserId(userid)

`GET /api/2.0/people/{userid}`

Get a profile by user ID

Returns the profile of one account, looked up by its user name first and by its ID if the name matches nothing, so both forms work in the route. The caller has to be allowed to see that account - a guest, for instance, only sees the accounts it is related to - and a value that matches neither a name nor an ID answers 404. A request authenticated with an invitation link is treated differently: it skips that visibility check and gets a reduced profile with the identifying fields only, which is what an invitation page needs. The call is read-only and is available on an unpaid portal. To read the calling account use `GET api/2.0/people/@self`, and to look an account up by address use `GET api/2.0/people/email`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profile, or a reduced one for a request authenticated with an invitation link | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not allowed to see that account | - | - |
| **404** | No account has the specified ID or user name | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getSelfProfile

> EmployeeFullWrapper getSelfProfile()

`GET /api/2.0/people/@self`

Get my profile

Returns the profile of the account the request is authenticated as, together with the session details only this operation reports. It takes no parameters, needs no permission and always describes the caller, so it is the operation to call right after signing in to find out who the token belongs to and what that account may do. The call is read-only and available on an unpaid portal. Beyond the ordinary profile fields it fills in four that stay empty everywhere else: `theme` with the interface theme the account chose, `loginEventId` with the identifier of the current session, `hasPersonalFolder` with whether the account has a personal folder, and `authCookieLifetime` with the seconds the session has left - the last one only when less than a day remains or the portal is configured to expose it, so an absent value means neither, not an endless session. To read somebody else use `GET api/2.0/people/{userid}`, which reports none of these four.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile of the caller, with the theme, the session and the personal folder details | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### inviteUsers

> EmployeeArrayWrapper inviteUsers(InviteUsersRequestDto)

`POST /api/2.0/people/invite`

Invite users

Invites people to the portal by email, creating a pending profile for each address and mailing it an invitation link. The caller has to be a room admin or a DocSpace admin - a member or a guest is rejected - the portal has to allow inviting members, and inviting a room admin additionally requires DocSpace admin rights while inviting another DocSpace admin requires the portal owner; a `Guest` type is not accepted here at all. An address that already belongs to a profile is not mailed again: the existing account is only related to the caller, and its type is raised when the invitation asks for a higher one, while a disabled account rejects the whole call with 400. The whole call is rejected before anything is sent when the invitations would need more paid seats than the tariff has left, and a malformed or punycode address is rejected with 400, so the list is validated as a batch but applied one address at a time - a failure partway through leaves the earlier invitations sent. The answer is not the result of this call: it lists every profile of the portal that is still pending and that the caller may see, so previously invited people appear in it as well. Each newly invited profile raises a `UserInvited` webhook, and repeated calls are throttled. Use `PUT api/2.0/people/invite` to send the invitation email again, and `POST api/2.0/people` to create a profile without mailing anybody.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **InviteUsersRequestDto** | body | [**InviteUsersRequestDto**](#model-inviteusersrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every pending profile the caller may see, not only the ones just invited | [**EmployeeArrayWrapper**](#model-employeearraywrapper) | - |
| **400** | An address is malformed or written in punycode, or it belongs to a disabled account | - | - |
| **402** | The invitations would need more paid seats than the tariff has left | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeArrayWrapper**](#model-employeearraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### removeUsers

> EmployeeFullArrayWrapper removeUsers(UpdateMembersRequestDto)

`PUT /api/2.0/people/delete`

Delete users

Deletes several portal profiles in one call and queues the erasure of the data behind each of them. Every listed account has to be disabled already - set the `Terminated` status through `PUT api/2.0/people/status/{status}` first, because a single account that is still active rejects the whole call with 403 - and the caller needs the permission to add and remove users. System and LDAP accounts are dropped from the list without an error, and so are the accounts the caller may not delete: a room admin when the caller is not a DocSpace admin, and a DocSpace admin when the caller is not the portal owner. The answer lists every account that was asked for, including the ones that were skipped, so it is not proof that an account was deleted - read `GET api/2.0/people/{userid}` for that, which then answers 404. The removal is permanent and cannot be undone, and each deleted account raises a `UserDeleted` webhook while its data is erased by a queued job that can be watched through `GET api/2.0/people/remove/progress/{userid}`. Hand the rooms and the shared files over first through `POST api/2.0/people/reassign/start` - an account with an unfinished reassignment cannot be deleted.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](#model-updatemembersrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Every account that was asked for, including the ones that were skipped | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The userIds field is missing | - | - |
| **403** | No permissions to perform this action, or one of the listed accounts is not disabled | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### resendUserInvites

> EmployeeFullArrayWrapper resendUserInvites(UpdateMembersRequestDto)

`PUT /api/2.0/people/invite`

Resend activation emails

Sends the invitation or activation email again to the accounts that have not finished joining the portal. Set `resendAll` to true to reach every pending account of the portal, in which case `userIds` is ignored and the caller has to be a room admin or a DocSpace admin; with the default false only the listed accounts are reached, and a member or a guest may then list nothing but their own ID. Which email goes out depends on the state of each account: a pending invitation gets a fresh invitation link, while an account that exists but has not confirmed its address gets activation instructions instead. Accounts that are already active or that are disabled are skipped, and so are the pending accounts the caller has no right to invite, without an error. The answer lists only the targeted accounts the caller is allowed to see, so it can be shorter than the request and is not a delivery report. Repeated calls are throttled, and each call issues new links that make the previously sent ones useless. To invite an address that has no profile yet, use `POST api/2.0/people/invite`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](#model-updatemembersrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The targeted accounts the caller is allowed to see | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | A member or a guest asked for resendAll, or listed an account other than their own | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### updateMember

> EmployeeFullWrapper updateMember(userid, UpdateMemberRequestDto)

`PUT /api/2.0/people/{userid}`

Update a user

Updates a portal profile, and which fields it accepts depends on whose profile it is - the two halves of this operation do not overlap. On the caller's own profile it applies `firstName`, `lastName`, `location`, `comment`, `spam`, `contacts`, `department` and the avatar named in `files`, while `disable` and `isUser` are ignored; on somebody else's profile only `disable` and `isUser` are applied and every descriptive field is ignored, so an administrator cannot rename another account through this operation. The caller needs the permission to edit that profile, cannot touch the portal owner, and has to be the portal owner to touch another DocSpace administrator; on an account imported from LDAP or SSO the name and the location are silently left alone even on one's own profile. Omitted fields keep their current values, an unusable pair of names answers 400, and `disable` set to true gives the account the `Terminated` status and ends every session it has, which is the state `DELETE api/2.0/people/{userid}` then requires. The `isUser` flag turns the account into a guest when true and back into a member when false, both of which can answer 402 because either direction takes a seat; a request to make the portal owner, a DocSpace administrator or a module administrator a guest is ignored without an error. A change raises a `UserUpdated` webhook and the answer holds the profile as it is afterwards, so read it instead of assuming the request was applied. For the language use `PUT api/2.0/people/{userid}/culture`, for the type `PUT api/2.0/people/type/{type}`, and for the status of several accounts at once `PUT api/2.0/people/status/{status}`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **UpdateMemberRequestDto** | body | [**UpdateMemberRequestDto**](#model-updatememberrequestdto) | The request parameters for updating the user information. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile as it is after the update | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The first and last name pair is not a valid user name | - | - |
| **402** | The tariff or the user quota does not allow the requested guest or member seat | - | - |
| **403** | The account is the portal owner or a system account, the caller may not edit it, or only the portal owner may edit a DocSpace administrator | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### updateMemberCulture

> EmployeeFullWrapper updateMemberCulture(userid, Culture)

`PUT /api/2.0/people/{userid}/culture`

Update a user culture

Changes the interface language of a profile, which decides the language of the portal for that account and of the emails it receives. The culture has to be one the portal has enabled, otherwise the operation answers 400; read the enabled list from the portal settings rather than guessing a code. A caller may only change their own language - the ID in the route has to be the calling account, and an administrator gets 403 for anybody else - and the account must be allowed to edit its own profile. The change takes effect immediately, raises a `UserUpdated` webhook, and answers with the profile carrying the new `cultureName`. Other profile fields are not touched here; use `PUT api/2.0/people/{userid}` for those.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **String** | The user ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **Culture** | body | [**Culture**](#model-culture) | The culture name parameters. | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile with its new culture | [**EmployeeFullWrapper**](#model-employeefullwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The specified culture is not enabled on the portal | - | - |
| **403** | The ID in the route is not the calling account, or the account may not edit its own profile | - | - |
| **404** | No user has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullWrapper**](#model-employeefullwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeopleQuotaApi

### resetUsersQuota

> EmployeeFullArrayWrapper resetUsersQuota(UpdateMembersQuotaRequestDto)

`PUT /api/2.0/people/resetquota`

Reset a user quota limit

Drops the personal storage limit of the listed accounts, so that each of them follows the portal default again. The caller needs the permission to edit the portal settings, which in practice means a DocSpace administrator or the portal owner. On a hosted portal the tariff has to include the storage statistics feature, otherwise the operation answers 402; a standalone installation has no such condition. It takes only `userIds` - the `quota` field of the request body is not read here - and system accounts are dropped from the list without an error. The accounts are processed one by one and the answer holds the ones that were reached, each already showing the portal default as its limit. Nothing is deleted and no space is freed; only the limit that applies changes. Use `PUT api/2.0/people/userquota` to give an account its own limit instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersQuotaRequestDto** | body | [**UpdateMembersQuotaRequestDto**](#model-updatemembersquotarequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts that now follow the portal default limit | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The tariff of a hosted portal does not include the storage statistics feature | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### updateUserQuota

> EmployeeFullArrayWrapper updateUserQuota(UpdateMembersQuotaRequestDto)

`PUT /api/2.0/people/userquota`

Change a user quota limit

Gives the listed accounts their own storage limit, replacing the portal default for each of them. The caller needs the permission to edit the portal settings, which in practice means a DocSpace administrator or the portal owner. `quota` is a whole number of bytes: a value of 0 or more becomes the personal limit, while any negative value switches the personal limit off and hands the account back to the portal default. The value has to fit the portal: a limit larger than the total storage the tariff allows, or larger than the portal-wide quota on a standalone installation, is rejected with 400, and so is a value that is not a whole number. System accounts are dropped from the list without an error, the accounts are processed one by one, and the answer holds the ones that were reached. Setting a limit does not free any space and does not delete anything: an account already over its new limit simply cannot add more. Use `PUT api/2.0/people/resetquota` to return accounts to the portal default.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UpdateMembersQuotaRequestDto** | body | [**UpdateMembersQuotaRequestDto**](#model-updatemembersquotarequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The accounts whose limit was changed | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The value is not a whole number of bytes, or it exceeds the storage the portal allows | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeopleSearchApi

### getAccountsEntriesWithFilesShared

> IAccountEntryArrayWrapper getAccountsEntriesWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue)

`GET /api/2.0/accounts/file/{id}/search`

Search accounts for a file

Searches the portal users and groups that can be given access to the file with the ID given in the route, and reports for each of them whether it already has access to that file. The caller has to be allowed to manage the access of that file, and the ID has to belong to an existing file, so the operation answers 403 for a file the caller cannot share and 404 for an ID that matches nothing. The search is read-only and needs `filterValue`: while it is empty the operation returns an empty list and a total of 0 instead of every account, so it cannot be used to enumerate the portal. `filterValue` is matched case-insensitively against the first name, the last name and the email; without `filterSeparator` it is split on spaces and every term has to match, and with a separator it is split on that separator and any term may match. Matching groups are streamed first and users after them, both paged together by `count` and `startIndex`, while the number of matches is reported in the total count of the response. Pass `excludeShared` to keep only the accounts that have no access yet, `includeShared` to keep only those that already have it, and neither to get both kinds with the `shared` field telling them apart.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the users in the given account state: `Active` for a working account, `Terminated` for a disabled one and `Pending` for one that has not accepted its invitation yet. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the users whose activation is in the given state: `NotActivated` for an account that has never been activated, `Activated` for one that completed the activation, `Pending` for one whose invitation is still open, and `AutoGenerated` for an account created by the portal itself. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **excludeShared** | query | **Boolean** | Keeps only the accounts that do not have access to the entry yet, which is the set to offer when adding new members. It takes precedence over `includeShared`, and every returned entry has `shared` set to false. | [optional] [example: `false`] |
| **includeShared** | query | **Boolean** | Keeps only the accounts that already have access to the entry, which is the set to offer when changing or revoking access. Every returned entry has `shared` set to true, and the flag is ignored when `excludeShared` is also set. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the users invited by the caller when true, and only the users invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the users invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only - and for a caller who is not a DocSpace administrator, only the guests that caller is related to. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **employeeTypes** | query | [**List**](#model-employeetype) | Keeps only the users of the listed types, combined as alternatives. An empty list, which is the default, searches every type. | [optional] [example: `[RoomAdmin, Guest]`] |
| **count** | query | **Integer** (int32) | The size of the page, counting groups and users together. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts, counted over the groups and users together. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to search for, matched case-insensitively against the first name, the last name and the email. It is required in practice: while it is empty the search returns nothing at all rather than every account. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching users and groups, each with its access state for the file | [**IAccountEntryArrayWrapper**](#model-iaccountentryarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No file has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**IAccountEntryArrayWrapper**](#model-iaccountentryarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getAccountsEntriesWithFoldersShared

> IAccountEntryArrayWrapper getAccountsEntriesWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue)

`GET /api/2.0/accounts/folder/{id}/search`

Search accounts for a folder

Searches the portal users and groups that can be given access to the folder with the ID given in the route, and reports for each of them whether it already has access to that folder. The caller has to be allowed to manage the access of that folder, and the ID has to belong to an existing folder, so the operation answers 403 for a folder the caller cannot share and 404 for an ID that matches nothing. The search is read-only and needs `filterValue`: while it is empty the operation returns an empty list and a total of 0 instead of every account, so it cannot be used to enumerate the portal. `filterValue` is matched case-insensitively against the first name, the last name and the email; without `filterSeparator` it is split on spaces and every term has to match, and with a separator it is split on that separator and any term may match. Matching groups are streamed first and users after them, both paged together by `count` and `startIndex`, while the number of matches is reported in the total count of the response. Pass `excludeShared` to keep only the accounts that have no access yet, `includeShared` to keep only those that already have it, and neither to get both kinds with the `shared` field telling them apart.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the users in the given account state: `Active` for a working account, `Terminated` for a disabled one and `Pending` for one that has not accepted its invitation yet. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the users whose activation is in the given state: `NotActivated` for an account that has never been activated, `Activated` for one that completed the activation, `Pending` for one whose invitation is still open, and `AutoGenerated` for an account created by the portal itself. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **excludeShared** | query | **Boolean** | Keeps only the accounts that do not have access to the entry yet, which is the set to offer when adding new members. It takes precedence over `includeShared`, and every returned entry has `shared` set to false. | [optional] [example: `false`] |
| **includeShared** | query | **Boolean** | Keeps only the accounts that already have access to the entry, which is the set to offer when changing or revoking access. Every returned entry has `shared` set to true, and the flag is ignored when `excludeShared` is also set. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the users invited by the caller when true, and only the users invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the users invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only - and for a caller who is not a DocSpace administrator, only the guests that caller is related to. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **employeeTypes** | query | [**List**](#model-employeetype) | Keeps only the users of the listed types, combined as alternatives. An empty list, which is the default, searches every type. | [optional] [example: `[RoomAdmin, Guest]`] |
| **count** | query | **Integer** (int32) | The size of the page, counting groups and users together. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts, counted over the groups and users together. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to search for, matched case-insensitively against the first name, the last name and the email. It is required in practice: while it is empty the search returns nothing at all rather than every account. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching users and groups, each with its access state for the folder | [**IAccountEntryArrayWrapper**](#model-iaccountentryarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No folder has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**IAccountEntryArrayWrapper**](#model-iaccountentryarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getAccountsEntriesWithRoomsShared

> IAccountEntryArrayWrapper getAccountsEntriesWithRoomsShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue)

`GET /api/2.0/accounts/room/{id}/search`

Search accounts for a room

Searches the portal users and groups that can be given access to the room with the ID given in the route, and reports for each of them whether it already has access to that room. The caller has to be allowed to manage the access of that room, and the ID has to belong to an existing room, so the operation answers 403 for a room the caller cannot share and 404 for an ID that matches nothing. The search is read-only and needs `filterValue`: while it is empty the operation returns an empty list and a total of 0 instead of every account, so it cannot be used to enumerate the portal. `filterValue` is matched case-insensitively against the first name, the last name and the email; without `filterSeparator` it is split on spaces and every term has to match, and with a separator it is split on that separator and any term may match. Matching groups are streamed first and users after them, both paged together by `count` and `startIndex`, while the number of matches is reported in the total count of the response. Pass `excludeShared` to keep only the accounts that have no access yet, `includeShared` to keep only those that already have it, and neither to get both kinds with the `shared` field telling them apart.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file whose access the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the users in the given account state: `Active` for a working account, `Terminated` for a disabled one and `Pending` for one that has not accepted its invitation yet. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the users whose activation is in the given state: `NotActivated` for an account that has never been activated, `Activated` for one that completed the activation, `Pending` for one whose invitation is still open, and `AutoGenerated` for an account created by the portal itself. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **excludeShared** | query | **Boolean** | Keeps only the accounts that do not have access to the entry yet, which is the set to offer when adding new members. It takes precedence over `includeShared`, and every returned entry has `shared` set to false. | [optional] [example: `false`] |
| **includeShared** | query | **Boolean** | Keeps only the accounts that already have access to the entry, which is the set to offer when changing or revoking access. Every returned entry has `shared` set to true, and the flag is ignored when `excludeShared` is also set. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the users invited by the caller when true, and only the users invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the users invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only - and for a caller who is not a DocSpace administrator, only the guests that caller is related to. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **employeeTypes** | query | [**List**](#model-employeetype) | Keeps only the users of the listed types, combined as alternatives. An empty list, which is the default, searches every type. | [optional] [example: `["RoomAdmin","Guest"]`] |
| **count** | query | **Integer** (int32) | The size of the page, counting groups and users together. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts, counted over the groups and users together. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to search for, matched case-insensitively against the first name, the last name and the email. It is required in practice: while it is empty the search returns nothing at all rather than every account. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching users and groups, each with its access state for the room | [**IAccountEntryArrayWrapper**](#model-iaccountentryarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **404** | No room has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**IAccountEntryArrayWrapper**](#model-iaccountentryarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getSearch

> EmployeeFullArrayWrapper getSearch(query, filterBy, filterValue)

`GET /api/2.0/people/@search/{query}`

Search users

Searches the active accounts of the portal by a term taken from the path, and is the same search as `GET api/2.0/people/search`, which takes the term in the query string instead. Only a DocSpace administrator may call it; every other account, including a room admin, gets 403. Only accounts with the `Active` status are searched, so a pending invitation and a disabled account are never found - use `GET api/2.0/people/filter` to search across states. The call is read-only and is not paged: every match is streamed, without a total. `filterBy` set to `group` turns `text` into a group ID and keeps only the members of that group, so `text` then has to be a valid identifier. The answer holds full profiles.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **query** | path | **String** | The term to look for, taken from the route. Only accounts with the `Active` status are searched. | [required] [example: `John`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which turns `filterValue` into a group ID and keeps only the members of that group. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **filterValue** | query | **String** | The group ID to keep the members of, used only when `filterBy` is `group`. It has to be a valid identifier - a group name is not accepted. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profiles of the matching active accounts | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getSimpleByFilter

> EmployeeArrayWrapper getSimpleByFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue)

`GET /api/2.0/people/simple/filter`

Filter users in brief

Returns a page of portal accounts selected by the full set of account filters, with the short profile of each of them - the identifying fields, the avatar and the display name, without the contacts, the groups or the quota. The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403. The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports the number of matches in the total count of the response. It accepts exactly the same filters as `GET api/2.0/people/filter` and differs only in how much of each profile comes back, so prefer this one for pickers, mentions and any list that shows names, and switch to the other only when the full profile is needed. Filters combine as conditions that all have to hold, and the same interactions apply: `withoutGroup` makes `groupId` irrelevant, `employeeType` wins over `employeeTypes`, and `area` cancels the type filters that contradict it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the accounts in the given state: `Active` for working accounts, `Terminated` for disabled ones and `Pending` for open invitations. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **groupId** | query | **UUID** (uuid) | Keeps only the members of this group, or excludes them when `excludeGroup` is true. It is ignored when `withoutGroup` is set. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the accounts whose activation is in the given state: `NotActivated`, `Activated`, `Pending` or `AutoGenerated`. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **employeeType** | query | **EmployeeType** | Keeps only the accounts of this single type: `DocSpaceAdmin`, `RoomAdmin`, `User` or `Guest`. When it is sent it wins over `employeeTypes`, and a type that contradicts `area` is dropped. | [optional] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **employeeTypes** | query | **List** | Keeps the accounts of any of the listed types, combined as alternatives. It is ignored when `employeeType` is also sent. | [optional] [example: `[RoomAdmin, Guest]`] [enum: `0`, `1`, `2`, `3`, `4`] |
| **isAdministrator** | query | **Boolean** | Set it to true to keep only the DocSpace administrators and the module administrators. Setting it to false is the same as omitting it and does not exclude administrators. | [optional] [example: `false`] |
| **payments** | query | **Payments** | Keeps only the accounts that take a paid seat when `Paid`, or only the guests and members that do not when `Free`. Omit it to search both. | [optional] [example: `Paid`] [enum: `0`, `1`] |
| **accountLoginType** | query | **AccountLoginType** | Keeps only the accounts that sign in this way: `SSO`, `LDAP`, or `Standart` for an ordinary portal password. Omit it to search all of them. | [optional] [example: `Standart`] [enum: `0`, `1`, `2`] |
| **quotaFilter** | query | **QuotaFilter** | Keeps only the accounts whose storage quota is the portal default when `Default`, or set individually when `Custom`. `All`, which is the same as omitting the field, searches both. | [optional] [example: `Custom`] [enum: `0`, `1`, `2`] |
| **withoutGroup** | query | **Boolean** | Set it to true to keep only the accounts that belong to no group at all, which makes `groupId` and `excludeGroup` irrelevant. | [optional] [example: `false`] |
| **excludeGroup** | query | **Boolean** | Inverts `groupId`: with true the members of that group are left out instead of being the only ones kept. It has no effect without `groupId`. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the accounts invited by the caller when true, and only those invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the accounts invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only. It also cancels the type filters that contradict it. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **sortBy** | query | **String** | What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`, `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`. | [optional] [example: `DisplayName`] |
| **sortOrder** | query | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | [optional] [example: `Ascending`] [enum: `0`, `1`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the first name, the last name and the email, case-insensitively. Omit it to apply no text filter at all. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A page of matching accounts, with their short profiles | [**EmployeeArrayWrapper**](#model-employeearraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a member or a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeArrayWrapper**](#model-employeearraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getUsersWithFilesShared

> EmployeeFullArrayWrapper getUsersWithFilesShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue)

`GET /api/2.0/people/file/{id}`

Search users for a file

Returns the accounts that are relevant to the file with the ID given in the route, and reports for each of them whether it already has access to that file. The caller only needs read access to the file, not the right to manage its access, but a guest may not call it at all; an ID that matches no file answers 404. The call is read-only, works without a filter - leaving `filterValue` empty returns every matching account rather than nothing - and is paged by `count` and `startIndex`, with the number of matches in the total count of the response. Pass `excludeShared` to keep only the accounts that have no access yet, `includeShared` to keep only those that already have it, and neither to get both kinds with the `shared` field telling them apart. A DocSpace administrator additionally sees the guests that are not related to the caller. To search users and groups together, or to build an access dialog that needs the right to manage sharing, use `GET api/2.0/accounts/file/{id}/search` instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the accounts in the given state: `Active` for working accounts, `Terminated` for disabled ones and `Pending` for open invitations. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the accounts whose activation is in the given state: `NotActivated`, `Activated`, `Pending` or `AutoGenerated`. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **excludeShared** | query | **Boolean** | Keeps only the accounts that do not have access to the entry yet, which is the set to offer when granting access. It takes precedence over `includeShared`, and every returned entry has `shared` set to false. | [optional] [example: `false`] |
| **includeShared** | query | **Boolean** | Keeps only the accounts that already have access to the entry, which is the set to offer when changing or revoking access. Every returned entry has `shared` set to true, and the flag is ignored when `excludeShared` is also set. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the accounts invited by the caller when true, and only those invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the accounts invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only - and for a caller who is not a DocSpace administrator, only the guests that caller is related to. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **employeeTypes** | query | [**List**](#model-employeetype) | Keeps only the accounts of the listed types, combined as alternatives. An empty list, which is the default, searches every type. | [optional] [example: `[RoomAdmin, Guest]`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the first name, the last name and the email, case-insensitively. Omit it to get every account the caller may offer access to. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching accounts, each with its access state for the file | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest or cannot read the file | - | - |
| **404** | No file has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getUsersWithFoldersShared

> EmployeeFullArrayWrapper getUsersWithFoldersShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue)

`GET /api/2.0/people/folder/{id}`

Search users for a folder

Returns the accounts that are relevant to the folder with the ID given in the route, and reports for each of them whether it already has access to that folder. The caller only needs read access to the folder, not the right to manage its access, but a guest may not call it at all; an ID that matches no folder answers 404. The call is read-only, works without a filter - leaving `filterValue` empty returns every matching account rather than nothing - and is paged by `count` and `startIndex`, with the number of matches in the total count of the response. Pass `excludeShared` to keep only the accounts that have no access yet, `includeShared` to keep only those that already have it, and neither to get both kinds with the `shared` field telling them apart. A DocSpace administrator additionally sees the guests that are not related to the caller. To search users and groups together, or to build an access dialog that needs the right to manage sharing, use `GET api/2.0/accounts/folder/{id}/search` instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the accounts in the given state: `Active` for working accounts, `Terminated` for disabled ones and `Pending` for open invitations. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the accounts whose activation is in the given state: `NotActivated`, `Activated`, `Pending` or `AutoGenerated`. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **excludeShared** | query | **Boolean** | Keeps only the accounts that do not have access to the entry yet, which is the set to offer when granting access. It takes precedence over `includeShared`, and every returned entry has `shared` set to false. | [optional] [example: `false`] |
| **includeShared** | query | **Boolean** | Keeps only the accounts that already have access to the entry, which is the set to offer when changing or revoking access. Every returned entry has `shared` set to true, and the flag is ignored when `excludeShared` is also set. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the accounts invited by the caller when true, and only those invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the accounts invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only - and for a caller who is not a DocSpace administrator, only the guests that caller is related to. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **employeeTypes** | query | [**List**](#model-employeetype) | Keeps only the accounts of the listed types, combined as alternatives. An empty list, which is the default, searches every type. | [optional] [example: `[RoomAdmin, Guest]`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the first name, the last name and the email, case-insensitively. Omit it to get every account the caller may offer access to. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching accounts, each with its access state for the folder | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest or cannot read the folder | - | - |
| **404** | No folder has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getUsersWithRoomShared

> EmployeeFullArrayWrapper getUsersWithRoomShared(id, employeeStatus, activationStatus, excludeShared, includeShared, invitedByMe, inviterId, area, employeeTypes, count, startIndex, filterSeparator, filterValue)

`GET /api/2.0/people/room/{id}`

Search users for a room

Returns the accounts that are relevant to the room with the ID given in the route, and reports for each of them whether it already has access to that room. The caller only needs read access to the room, not the right to manage its access, but a guest may not call it at all; an ID that matches no room answers 404. The call is read-only, works without a filter - leaving `filterValue` empty returns every matching account rather than nothing - and is paged by `count` and `startIndex`, with the number of matches in the total count of the response. Pass `excludeShared` to keep only the accounts that have no access yet, `includeShared` to keep only those that already have it, and neither to get both kinds with the `shared` field telling them apart. A DocSpace administrator additionally sees the guests that are not related to the caller. To search users and groups together, or to build an access dialog that needs the right to manage sharing, use `GET api/2.0/accounts/room/{id}/search` instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The ID of the room, folder or file the search is run against, taken from the route. It is an integer for an entry stored in DocSpace and a provider-specific string for an entry in a connected third-party storage. | [required] [example: `1234`] |
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the accounts in the given state: `Active` for working accounts, `Terminated` for disabled ones and `Pending` for open invitations. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the accounts whose activation is in the given state: `NotActivated`, `Activated`, `Pending` or `AutoGenerated`. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **excludeShared** | query | **Boolean** | Keeps only the accounts that do not have access to the entry yet, which is the set to offer when granting access. It takes precedence over `includeShared`, and every returned entry has `shared` set to false. | [optional] [example: `false`] |
| **includeShared** | query | **Boolean** | Keeps only the accounts that already have access to the entry, which is the set to offer when changing or revoking access. Every returned entry has `shared` set to true, and the flag is ignored when `excludeShared` is also set. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the accounts invited by the caller when true, and only those invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the accounts invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only - and for a caller who is not a DocSpace administrator, only the guests that caller is related to. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **employeeTypes** | query | [**List**](#model-employeetype) | Keeps only the accounts of the listed types, combined as alternatives. An empty list, which is the default, searches every type. | [optional] [example: `[RoomAdmin, Guest]`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the first name, the last name and the email, case-insensitively. Omit it to get every account the caller may offer access to. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The matching accounts, each with its access state for the room | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a guest or cannot read the room | - | - |
| **404** | No room has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### searchUsersByExtendedFilter

> EmployeeFullArrayWrapper searchUsersByExtendedFilter(employeeStatus, groupId, activationStatus, employeeType, employeeTypes, isAdministrator, payments, accountLoginType, quotaFilter, withoutGroup, excludeGroup, invitedByMe, inviterId, area, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue)

`GET /api/2.0/people/filter`

Filter users in detail

Returns a page of portal accounts selected by the full set of account filters, with the complete profile of each of them. The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403, and a DocSpace admin additionally sees the accounts an ordinary admin does not. The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports the number of matches in the total count of the response. Filters combine as conditions that all have to hold, with three interactions worth knowing: `withoutGroup` makes `groupId` irrelevant, `employeeType` wins over `employeeTypes` when both are sent, and `area` set to `Guests` or `People` cancels the type filters that contradict it. `GET api/2.0/people/simple/filter` accepts exactly the same filters and returns the short profile instead, so use that one for pickers and lists and this one when the full profile is really needed. It is available on an unpaid portal.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **employeeStatus** | query | **EmployeeStatus** | Keeps only the accounts in the given state: `Active` for working accounts, `Terminated` for disabled ones and `Pending` for open invitations. Omit it to search every state. | [optional] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **groupId** | query | **UUID** (uuid) | Keeps only the members of this group, or excludes them when `excludeGroup` is true. It is ignored when `withoutGroup` is set. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **activationStatus** | query | **EmployeeActivationStatus** | Keeps only the accounts whose activation is in the given state: `NotActivated`, `Activated`, `Pending` or `AutoGenerated`. Omit it to search every state. | [optional] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **employeeType** | query | **EmployeeType** | Keeps only the accounts of this single type: `DocSpaceAdmin`, `RoomAdmin`, `User` or `Guest`. When it is sent it wins over `employeeTypes`, and a type that contradicts `area` is dropped. | [optional] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **employeeTypes** | query | **List** | Keeps the accounts of any of the listed types, combined as alternatives. It is ignored when `employeeType` is also sent. | [optional] [example: `["RoomAdmin","Guest"]`] [enum: `0`, `1`, `2`, `3`, `4`] |
| **isAdministrator** | query | **Boolean** | Set it to true to keep only the DocSpace administrators and the module administrators. Setting it to false is the same as omitting it and does not exclude administrators. | [optional] [example: `false`] |
| **payments** | query | **Payments** | Keeps only the accounts that take a paid seat when `Paid`, or only the guests and members that do not when `Free`. Omit it to search both. | [optional] [example: `Paid`] [enum: `0`, `1`] |
| **accountLoginType** | query | **AccountLoginType** | Keeps only the accounts that sign in this way: `SSO`, `LDAP`, or `Standart` for an ordinary portal password. Omit it to search all of them. | [optional] [example: `Standart`] [enum: `0`, `1`, `2`] |
| **quotaFilter** | query | **QuotaFilter** | Keeps only the accounts whose storage quota is the portal default when `Default`, or set individually when `Custom`. `All`, which is the same as omitting the field, searches both. | [optional] [example: `Custom`] [enum: `0`, `1`, `2`] |
| **withoutGroup** | query | **Boolean** | Set it to true to keep only the accounts that belong to no group at all, which makes `groupId` and `excludeGroup` irrelevant. | [optional] [example: `false`] |
| **excludeGroup** | query | **Boolean** | Inverts `groupId`: with true the members of that group are left out instead of being the only ones kept. It has no effect without `groupId`. | [optional] [example: `false`] |
| **invitedByMe** | query | **Boolean** | Keeps only the accounts invited by the caller when true, and only those invited by somebody else when false. Omit it to search regardless of who sent the invitation. | [optional] [example: `false`] |
| **inviterId** | query | **UUID** (uuid) | Keeps only the accounts invited by the account with this ID. Omit it to search regardless of who sent the invitation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **area** | query | **Area** | The part of the portal to search in: `All`, the default, searches members and guests together, `People` leaves the guests out, and `Guests` returns guests only. It also cancels the type filters that contradict it. | [optional] [example: `All`] [enum: `0`, `1`, `2`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **sortBy** | query | **String** | What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`, `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`. | [optional] [example: `DisplayName`] |
| **sortOrder** | query | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | [optional] [example: `Ascending`] [enum: `0`, `1`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the first name, the last name and the email, case-insensitively. Omit it to apply no text filter at all. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A page of matching accounts, with their full profiles | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a member or a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### searchUsersByQuery

> EmployeeFullArrayWrapper searchUsersByQuery(query)

`GET /api/2.0/people/search`

Search users by query

Searches the active accounts of the portal by a term passed in the query string, and is the same search as `GET api/2.0/people/@search/{query}`, which takes the term in the path instead. Only a DocSpace administrator may call it; every other account, including a room admin, gets 403. Only accounts with the `Active` status are searched, so a pending invitation and a disabled account are never found - use `GET api/2.0/people/filter` to search across states. The call is read-only and is not paged: every match is streamed, without a total. It takes the search term and nothing else - the group filter of `GET api/2.0/people/@search/{query}` is not reachable here, because the handler forwards only `query` - so use that operation when the result has to be narrowed to one group. The answer holds full profiles, because the handler passes the request on to the operation that builds the complete profile.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **query** | query | **String** | The term to look for. Only accounts with the `Active` status are searched, and this is the only parameter the operation reads. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profiles of the matching active accounts | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### searchUsersByStatus

> EmployeeFullArrayWrapper searchUsersByStatus(status, query, filterBy, filterValue)

`GET /api/2.0/people/status/{status}/search`

Search users by status filter

Searches the accounts that are in one particular state - the status is taken from the route - and whose name, user name, email or contacts contain the search term. Only a DocSpace administrator may call it; every other account, including a room admin, gets 403. The call is read-only and is not paged: it matches in memory over every account of that status and streams all of them, so it is meant for administrative lookups rather than for a user-facing list - use `GET api/2.0/people/filter` when a page and a total are needed. The term is matched as a case-insensitive substring and is required; `filterBy` set to `group` turns `text` into a group ID and keeps only the members of that group, so `text` then has to be a valid identifier. The answer holds full profiles, in no particular order.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **status** | path | **EmployeeStatus** | The account state to search in, taken from the route: `Active` for working accounts, `Terminated` for disabled ones, `Pending` for open invitations, or `All` for every state. | [required] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **query** | query | **String** | The term to look for, matched as a case-insensitive substring of the first name, the last name, the user name, the email and the contacts. It is required in practice, because the search cannot run without it. | [optional] [example: `John`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which turns `filterValue` into a group ID and keeps only the members of that group. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **filterValue** | query | **String** | The group ID to keep the members of, used only when `filterBy` is `group`. It has to be a valid identifier - a group name is not accepted. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The full profiles of the matching accounts | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## PeopleThemeApi

### changePortalTheme

> DarkThemeSettingsWrapper changePortalTheme(DarkThemeSettingsRequestDto)

`PUT /api/2.0/people/theme`

Change the portal theme

Sets the interface theme of the calling account to `Base` for the light theme, `Dark` for the dark one, or `System` to follow whatever the operating system asks for. The setting belongs to the account and not to the portal, despite the name of the route, so it changes nothing for anybody else and cannot be set on another account. It needs no permission, takes effect at once and is idempotent - sending the theme that is already in use changes nothing. The answer echoes the theme that was stored, which is the value the request asked for. The same value is reported as `theme` by `GET api/2.0/people/@self`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DarkThemeSettingsRequestDto** | body | [**DarkThemeSettingsRequestDto**](#model-darkthemesettingsrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The interface theme that was stored | [**DarkThemeSettingsWrapper**](#model-darkthemesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**DarkThemeSettingsWrapper**](#model-darkthemesettingswrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### getPortalTheme

> DarkThemeSettingsWrapper getPortalTheme()

`GET /api/2.0/people/theme`

Get the portal theme

Returns the interface theme the calling account has chosen: `Base` for the light theme, `Dark` for the dark one, or `System` to follow whatever the operating system asks for. The setting belongs to the account and not to the portal, despite the name of the route, so it describes the caller alone and cannot be read for anybody else. It needs no permission and is read-only. A caller that has never chosen a theme gets the portal default rather than an empty answer. The same value is also reported as `theme` by `GET api/2.0/people/@self`, so a client that reads the profile on start-up does not need this operation as well.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The interface theme of the calling account | [**DarkThemeSettingsWrapper**](#model-darkthemesettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**DarkThemeSettingsWrapper**](#model-darkthemesettingswrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## PeopleThirdPartyAccountsApi

### getThirdPartyAuthProviders

> AccountInfoArrayWrapper getThirdPartyAuthProviders(inviteView, settingsView, clientCallback, fromOnly)

`GET /api/2.0/people/thirdparty/providers`

Get third-party providers

Returns the third-party identity providers this portal has enabled, each with the URL that starts the login with it, so a client can render the social sign-in buttons. It needs no authentication and is the operation to call before showing a login or an invitation page; an empty list means the portal has no provider configured, not that the call failed. The call is read-only, and `linked` says whether the provider is already connected to the calling profile - for an anonymous caller there is nothing to compare against, so every entry comes back with false. The order is fixed by the portal, except that a caller located in China gets `weixin` first. Pass `fromOnly` to keep a single provider, `inviteView` to leave out the providers that cannot be used on an invitation page, and `settingsView` or `clientCallback` to get URLs that open in a popup instead of redirecting the desktop application. Use `PUT api/2.0/people/thirdparty/linkaccount` to connect one of these providers to an existing profile and `POST api/2.0/people/thirdparty/signup` to create a profile through one.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **inviteView** | query | **Boolean** | Set it to true when the list is rendered on an invitation page: the providers that cannot be used to accept an invitation, `twitter` and `appleid`, are then left out. It defaults to false, which returns every enabled provider. | [optional] [example: `false`] |
| **settingsView** | query | **Boolean** | Set it to true when the list is rendered on a settings page, to get login URLs that open in a popup window. With the default false the URL still opens in a popup for a desktop browser, and switches to a redirect only for a mobile browser or for the DocSpace desktop application. | [optional] [example: `false`] |
| **clientCallback** | query | **String** | The name of the client-side function the popup calls back when the provider authorization finishes. It is placed into the returned URLs as they are, and it is only used by the popup mode. | [optional] [example: `onAuthCallback`] |
| **fromOnly** | query | **String** | Keeps only the named provider, compared case-insensitively against the lowercase provider names such as `google` or `microsoft`; the special value `openid` selects `google`. Omit it to get every enabled provider. | [optional] [example: `google`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The enabled providers, each with its login URL and its link state for the caller | [**AccountInfoArrayWrapper**](#model-accountinfoarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**AccountInfoArrayWrapper**](#model-accountinfoarraywrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### linkThirdPartyAccount

> linkThirdPartyAccount(LinkAccountRequestDto)

`PUT /api/2.0/people/thirdparty/linkaccount`

Link a third-party account

Connects a third-party identity to the calling profile, so that the account can afterwards sign in through that provider. The profile has to come from a completed provider authorization: pass the serialized `LoginProfile` the login flow started from `GET api/2.0/people/thirdparty/providers` handed back, not a hand-written object. It acts on the authenticated account only, and the portal has to be a standalone installation or have a tariff that includes third-party authorization, otherwise the operation answers 403. The call returns no body and is not idempotent: one third-party identity can be linked to a single portal profile, so repeating it, or linking an identity somebody else already uses, answers 400. A profile whose authorization was cancelled by the user is accepted and ignored, so a cancelled login also answers 200 and links nothing - read `GET api/2.0/people/thirdparty/providers` afterwards and check `linked` to find out whether the link exists. Use `DELETE api/2.0/people/thirdparty/unlinkaccount` to remove a link.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **LinkAccountRequestDto** | body | [**LinkAccountRequestDto**](#model-linkaccountrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The third-party identity is linked to the calling profile. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The third-party identity is already linked to a portal profile | - | - |
| **403** | The portal tariff does not include third-party authorization | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

null (empty response body)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### signupThirdPartyAccount

> EmployeeWrapper signupThirdPartyAccount(SignupAccountRequestDto)

`POST /api/2.0/people/thirdparty/signup`

Sign up with a provider

Creates a portal profile from a third-party identity and joins the invitation the `key` belongs to, which is how a person accepts an invitation by signing in with a provider instead of setting a password. It needs no authentication, but it does need a valid invitation: `key` has to be the key of a live invitation link, and `serializedProfile` has to be the profile a completed provider authorization produced. The resulting type comes from the invitation link itself, and `employeeType` only says which type to look the link up as, defaulting to `RoomAdmin`. When the identity or its email already belongs to a portal profile, that existing profile is returned and the provider is linked to it instead of a second account being created, so the call can be repeated safely. The answer is the profile the caller ends up with - and it is empty, still with status 200, when the provider authorization was cancelled or when the profile could not be created, so check for an empty body instead of relying on the status alone. A `weixin` or `nextcloud` identity carries no email address, so the portal generates one and the profile stays in the `AutoGenerated` activation state; every other provider has to supply an email.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **SignupAccountRequestDto** | body | [**SignupAccountRequestDto**](#model-signupaccountrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile linked to the third-party identity, or an empty body when the authorization was cancelled or the profile could not be created | [**EmployeeWrapper**](#model-employeewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The invitation link is invalid or has expired, or the email already belongs to a profile that has not been activated yet | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeWrapper**](#model-employeewrapper)

#### Authorization

[cookieAuth](#cookieauth), [bearerAuth](#bearerauth)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### unlinkThirdPartyAccount

> unlinkThirdPartyAccount(provider)

`DELETE /api/2.0/people/thirdparty/unlinkaccount`

Unlink a third-party account

Removes the link between the calling profile and the named third-party provider, so that the account can no longer sign in through it. It acts on the authenticated account only and takes the provider name in the query, using the same lowercase values `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`. The call returns no body and is idempotent: unlinking a provider that is not linked answers 200 and changes nothing. The portal profile itself is kept, together with its password, so the account stays usable through the ordinary sign-in; only the third-party route is removed. Link the provider again through `PUT api/2.0/people/thirdparty/linkaccount`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **provider** | query | **String** | The name of the provider to unlink, in the lowercase form `GET api/2.0/people/thirdparty/providers` returns, such as `google` or `microsoft`. A name that is not linked to the calling profile is accepted and changes nothing. | [optional] [example: `google`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The third-party identity is no longer linked to the calling profile. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

null (empty response body)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## PeopleUserDataApi

### getDeletePersonalFolderProgress

> TaskProgressResponseWrapper getDeletePersonalFolderProgress()

`GET /api/2.0/people/delete/personal/progress`

Get the personal folder deletion progress

Returns the current state of the personal folder deletion queued for the authenticated account. The job must have been queued by `POST api/2.0/people/delete/personal/start` first: when nothing is queued for the caller the operation answers 200 with an empty body. It takes no parameters and reports on the caller only, so an administrator cannot watch the folder deletion of another user through it. The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, and read `error` for the message left by a failed job. A queued personal folder deletion cannot be cancelled, so the only outcome to wait for is its completion.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued personal folder deletion, or an empty body when nothing is queued for the caller | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getReassignProgress

> TaskProgressResponseWrapper getReassignProgress(userid)

`GET /api/2.0/people/reassign/progress/{userid}`

Get the reassignment progress

Returns the current state of the data reassignment queued for the user with the ID specified in the request. A reassignment must have been queued by `POST api/2.0/people/reassign/start` first: when nothing is queued for that user the operation answers 200 with an empty body. The caller needs the permission to edit users, and only the portal owner may track a reassignment whose source user is a DocSpace administrator. The call is read-only and is the polling operation of the reassignment flow - repeat it until `isCompleted` is true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job. Use `PUT api/2.0/people/reassign/terminate` to cancel a job that is still running.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the same ID that was passed when the job was started. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued reassignment, or an empty body when nothing is queued for the user | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### getRemoveProgress

> TaskProgressResponseWrapper getRemoveProgress(userid)

`GET /api/2.0/people/remove/progress/{userid}`

Get the deletion progress

Returns the current state of the data deletion queued for the user with the ID specified in the request. A deletion must have been queued by `POST api/2.0/people/remove/start` first: when nothing is queued for that user the operation answers 200 with an empty body. The caller needs the permission to edit users. The call is read-only and is the polling operation of the deletion flow - repeat it until `isCompleted` is true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job. Use `PUT api/2.0/people/remove/terminate` to cancel a job that is still running.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the same ID that was passed when the job was started. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued deletion, or an empty body when nothing is queued for the user | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### necessaryReassign

> BooleanWrapper necessaryReassign(UserId, Type)

`GET /api/2.0/people/reassign/necessary`

Check data for reassignment need

Reports whether the rooms and the shared files of a user have to be reassigned before that user can be removed or changed to the type passed in `type`. Call it before `DELETE api/2.0/people/{userid}` or before a type change to find out whether `POST api/2.0/people/reassign/start` has to run first. The caller needs the permission to add and remove users of the requested type, and must be the portal owner when the checked user is a DocSpace administrator. The call is read-only and answers true when the user owns at least one room, or - when `type` is `Guest` - when the user still has shared files. A false answer means the user can be removed or converted without a reassignment.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **UserId** | query | **UUID** (uuid) | The ID of the user whose rooms and shared files are checked. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **Type** | query | **EmployeeType** | The type the user is about to be changed to, which decides what counts as data that has to be reassigned: `RoomAdmin`, `DocSpaceAdmin` and `User` are checked for owned rooms only, while `Guest` is also checked for files that are still shared. The default is `All`, which checks owned rooms only. | [optional] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the data of the user has to be reassigned before the removal or the type change | [**BooleanWrapper**](#model-booleanwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**BooleanWrapper**](#model-booleanwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### sendInstructionsToDelete

> StringWrapper sendInstructionsToDelete()

`PUT /api/2.0/people/self/delete`

Send the deletion instructions

Emails the caller a confirmation link that lets them delete their own profile, and is the first step of the self-service profile removal. It acts on the authenticated account only and takes no parameters, so it cannot be used to remove somebody else - an administrator removes another user through `DELETE api/2.0/people/{userid}`. The caller has to be a regular portal account: the portal owner and an account imported from LDAP are rejected, because neither can delete itself. The call sends mail and does not change the profile; the deletion happens later, when the caller follows the emailed link and the client calls `DELETE api/2.0/people/@self` with the confirmation token from it. The answer is a ready-to-display message naming the address the link was sent to, and the address is wrapped in bold HTML markup, so strip the markup before showing it outside a web page. Repeated calls are throttled, and each one sends a new link.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The message stating which address the confirmation link was sent to | [**StringWrapper**](#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is the portal owner or an LDAP account and cannot delete their own profile | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**StringWrapper**](#model-stringwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### startDeletePersonalFolder

> TaskProgressResponseWrapper startDeletePersonalFolder()

`POST /api/2.0/people/delete/personal/start`

Delete the personal folder

Queues an asynchronous job that empties the personal folder of the authenticated account. The operation takes no parameters and always acts on the caller, so it cannot be used to empty the folder of another user. Only an account whose type is `Guest` may call it; every other type is rejected, because only a guest has a personal folder that can be emptied this way. The job does not finish within this call: poll `GET api/2.0/people/delete/personal/progress` until `isCompleted` is true. The job deletes the files permanently and cannot be undone or cancelled - there is no terminate operation for this flow, unlike the user data deletion.

#### Parameters
This endpoint does not need any parameter.

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued personal folder deletion | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a guest, so there is no personal folder to empty | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### startReassign

> TaskProgressResponseWrapper startReassign(StartReassignRequestDto)

`POST /api/2.0/people/reassign/start`

Start the data reassignment

Queues an asynchronous job that transfers the rooms and the shared files owned by one portal user to another. The source user must already have the `Terminated` status - disable the account through `PUT api/2.0/people/status/{status}` before calling this - and the destination user must be an active room admin or DocSpace admin, so a guest, a system account or a disabled account is rejected. The caller needs the permission to edit users, cannot reassign their own data, and must be the portal owner to reassign the data of another DocSpace administrator or of a People module administrator. The transfer does not finish within this call: poll `GET api/2.0/people/reassign/progress/{userid}` with the source user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/reassign/terminate`. Pass `deleteProfile` as true to delete the source profile once the transfer succeeds, otherwise the emptied profile is kept. Use `GET api/2.0/people/reassign/necessary` first to find out whether the user owns anything that has to be reassigned at all.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartReassignRequestDto** | body | [**StartReassignRequestDto**](#model-startreassignrequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued reassignment | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The destination user is not an active room or DocSpace admin, or the source user is a system account, the portal owner, the caller, or is not disabled | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### startRemove

> TaskProgressResponseWrapper startRemove(TerminateRequestDto)

`POST /api/2.0/people/remove/start`

Start the data deletion

Queues an asynchronous job that erases the data of the user with the ID specified in the request. The account must already have the `Terminated` status - disable it through `PUT api/2.0/people/status/{status}` first - and it cannot be the portal owner or the caller. The caller needs the permission to edit users, has to be a DocSpace admin to erase the data of a room admin, and has to be the portal owner to erase the data of another DocSpace admin. The erasure does not finish within this call: poll `GET api/2.0/people/remove/progress/{userid}` with the same user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/remove/terminate`. This operation destroys the data and cannot be undone; to keep the rooms and the shared files of the account instead, transfer them first through `POST api/2.0/people/reassign/start`. An unknown ID and a rejected precondition both answer 400 and name the ID they rejected.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](#model-terminaterequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued deletion | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | No user has the specified ID, or the account is the portal owner, the caller, or is not disabled | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### terminateReassign

> TaskProgressResponseWrapper terminateReassign(TerminateRequestDto)

`PUT /api/2.0/people/reassign/terminate`

Terminate the data reassignment

Cancels the data reassignment queued for the user with the ID specified in the request. The caller needs the permission to edit users, and only the portal owner may cancel a reassignment whose source user is a DocSpace administrator. The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and repeating it on an already cancelled job changes nothing. Cancelling removes the job from the queue and does not undo the transfers it has already made, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/reassign/start`. The returned progress reports `status` as `Canceled` and `isCompleted` as true.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](#model-terminaterequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the cancelled reassignment, or an empty body when nothing was queued for the user | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### terminateRemove

> terminateRemove(TerminateRequestDto)

`PUT /api/2.0/people/remove/terminate`

Terminate the data deletion

Cancels the data deletion queued for the user with the ID specified in the request. The caller needs the permission to edit users. The operation is idempotent and returns no body: it drops the job from the queue, and doing so when nothing is queued, or when the job has already finished, changes nothing and still answers 200. Cancelling does not restore the data the job has already erased, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/remove/start`. To find out whether the job is still running, read `GET api/2.0/people/remove/progress/{userid}` before and after this call.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](#model-terminaterequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued deletion is cancelled, or there was nothing to cancel. No content is returned | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

null (empty response body)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeopleUserStatusApi

### getByStatus

> EmployeeFullArrayWrapper getByStatus(status, filterBy, count, startIndex, sortBy, sortOrder, filterSeparator, filterValue)

`GET /api/2.0/people/status/{status}`

Get profiles by status

Returns a page of the accounts that are in one particular state - the status is taken from the route - with the full profile of each of them. The caller has to be a room admin, a DocSpace admin or a People module admin; a member or a guest gets 403. The call is read-only, paged by `count` and `startIndex`, ordered by `sortBy` and `sortOrder`, and reports the number of matches in the total count of the response. Narrow it with `filterValue` on the name and the email; setting `filterBy` to `group` makes the same `filterValue` the ID of the group to keep the members of, and because the value is then applied as the text filter as well, that combination normally matches nothing - use `GET api/2.0/people/filter` with `groupId` to filter by group. `GET api/2.0/people` is the same operation fixed to the `Active` status.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **status** | path | **EmployeeStatus** | The account state to list, taken from the route: `Active` for working accounts, `Terminated` for disabled ones, `Pending` for open invitations, or `All` for every state. | [required] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **filterBy** | query | **String** | The only recognised value is `group`, which makes `filterValue` the ID of the group to keep the members of. Any other value, and omitting the field, applies no group filter. | [optional] [example: `group`] |
| **count** | query | **Integer** (int32) | The size of the page. It defaults to 100, which is also the largest value the operation accepts. | [optional] [example: `25`] [min: 1] [max: 100] |
| **startIndex** | query | **Integer** (int32) | The number of matches to skip before the page starts. It defaults to 0, and the total number of matches is reported in the total count of the response. | [optional] [example: `0`] |
| **sortBy** | query | **String** | What to order the accounts by, compared without regard to case: `FirstName`, `LastName`, `DisplayName`, `Type`, `Email`, `Department`, `UsedSpace`, `CreatedBy` or `RegistrationDate`. | [optional] [example: `DisplayName`] |
| **sortOrder** | query | **SortOrder** | The direction of the ordering: `Ascending`, which is the default, or `Descending`. | [optional] [example: `Ascending`] [enum: `0`, `1`] |
| **filterSeparator** | query | **String** | The character that splits `filterValue` into several terms, of which any one may match. Omit it to split the value on spaces instead, in which case every term has to match. | [optional] [example: `,`] |
| **filterValue** | query | **String** | The text to match against the name and the email of the account, case-insensitively. Omit it to apply no text filter. | [optional] [example: `John`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A page of accounts in the requested state, with their full profiles | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is a member or a guest | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### updateUserActivationStatus

> EmployeeFullArrayWrapper updateUserActivationStatus(activationstatus, UpdateMembersRequestDto)

`PUT /api/2.0/people/activationstatus/{activationstatus}`

Set my activation status

Sets the activation state of the calling account, which is how a person finishes confirming their email address after following the link they were sent. The request has to carry the confirmation token from that link rather than an ordinary session, and the account must be allowed to edit its own profile. Despite taking a list, it accepts exactly one ID and that ID has to be the calling account: an empty list, more than one entry, or somebody else's ID is answered with 400, so it cannot be used to activate other people. Setting `Activated` on the portal owner sends the administrator welcome email, once per portal. The change raises a `UserUpdated` webhook, and the answer holds the profile in its new state - or nothing at all when the account has meanwhile disappeared, which is skipped without an error. The account status is a different thing and is changed through `PUT api/2.0/people/status/{status}`.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **activationstatus** | path | **EmployeeActivationStatus** | The activation state to set on the calling account, taken from the route: `NotActivated`, `Activated`, `Pending` or `AutoGenerated`. | [required] [example: `Activated`] [enum: `0`, `1`, `2`, `4`] |
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](#model-updatemembersrequestdto) | The account to change. Only `userIds` is read, it has to hold exactly one entry, and that entry has to be the calling account; `resendAll` is ignored here. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The profile of the caller in its new activation state | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The list is empty, holds more than one ID, or names an account other than the caller | - | - |
| **403** | The account may not edit its own profile | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### updateUserStatus

> EmployeeFullArrayWrapper updateUserStatus(status, UpdateMembersRequestDto)

`PUT /api/2.0/people/status/{status}`

Change a user status

Enables or disables several portal accounts at once, which is the way to suspend somebody without deleting them and to bring them back later. Only `Active` and `Terminated` are accepted in the route; any other status answers 400. The caller needs the permission to edit users, and the whole list is checked before anything is applied: a system account, an LDAP account, the portal owner, the caller themselves, or - unless the caller is the portal owner - a DocSpace administrator rejects the entire call with 403 and changes nothing. Disabling ends every session of the account and takes its seat back, while enabling takes a seat again and can therefore answer 402 when the tariff or the user quota has none left; the accounts are then processed one by one, so a quota failure partway through leaves the earlier ones enabled. Enabling only affects accounts that were disabled, and an account that had never filled in its name comes back as `Pending` rather than `Active` when it still has an unused invitation, so read the `status` in the answer instead of assuming it matches the request. Each changed account raises a `UserUpdated` webhook, and disabling is what `DELETE api/2.0/people/{userid}` requires before it will delete an account.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **status** | path | **EmployeeStatus** | The state to put the listed accounts into, taken from the route. Only `Active`, which enables an account, and `Terminated`, which disables it, are accepted; any other value is rejected with 400. | [required] [example: `Active`] [enum: `1`, `2`, `4`, `5`, `7`] |
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](#model-updatemembersrequestdto) | The accounts to enable or disable. Only `userIds` is read by this operation; `resendAll` belongs to the invitation operations and is ignored here. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The listed accounts with their statuses after the change | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The requested status is neither Active nor Terminated | - | - |
| **402** | The tariff or the user quota does not allow enabling one more account | - | - |
| **403** | No permissions to perform this action, or the list names a system, LDAP, owner, self or DocSpace admin account | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PeopleUserTypeApi

### getUserTypeUpdateProgress

> TaskProgressResponseWrapper getUserTypeUpdateProgress(userid)

`GET /api/2.0/people/type/progress/{userid}`

Get the user type change progress

Returns the current state of the user type change queued for the user with the ID specified in the request. A conversion must have been queued by `POST api/2.0/people/type` first: when nothing is queued for that user the operation answers 200 with an empty body. The caller needs the permission to add and remove users. The call is read-only and is the polling operation of this flow - repeat it until `isCompleted` is true, reading `percentage` for the 0 to 100 progress and `error` for the message left by a failed job. Use `PUT api/2.0/people/type/terminate` to cancel a conversion that is still running.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the user the operation applies to, taken from the route. For a progress operation it has to be the same ID that was passed when the job was started. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued user type change, or an empty body when nothing is queued for the user | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### startUserTypeUpdate

> TaskProgressResponseWrapper startUserTypeUpdate(StartUpdateUserTypeDto)

`POST /api/2.0/people/type`

Start updating user type

Queues an asynchronous job that converts one account to `Guest` or `User` and, in the same job, hands the rooms and the shared files of that account over to another administrator. Only `Guest` and `User` are accepted here, because they are the types that cannot own rooms; for any other type use `PUT api/2.0/people/type/{type}`, which converts immediately and transfers nothing. The caller needs the permission to add and remove users of the requested type, has to be the portal owner to convert a DocSpace administrator, and converting to `Guest` also requires the portal to allow inviting guests. The account being converted has to be active and cannot be the caller, and the recipient - `reassignUserId`, or the caller when it is omitted - has to be an active room admin or DocSpace admin other than that account. The conversion does not finish within this call: poll `GET api/2.0/people/type/progress/{userid}` with the converted user ID until `isCompleted` is true, and cancel it through `PUT api/2.0/people/type/terminate`. A failure inside the running job is reported in the `error` field of the progress, not as a status code here.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartUpdateUserTypeDto** | body | [**StartUpdateUserTypeDto**](#model-startupdateusertypedto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued user type change | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The requested type is neither Guest nor User, the account is a system account, disabled or the caller, the recipient is the same account or is not an active admin, or a non-owner tried to convert a DocSpace admin | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### terminateUserTypeUpdate

> TaskProgressResponseWrapper terminateUserTypeUpdate(TerminateRequestDto)

`PUT /api/2.0/people/type/terminate`

Terminate updating user type

Cancels the user type change queued for the user with the ID specified in the request. The caller needs the permission to add and remove users. The operation is idempotent: when nothing is queued for that user it answers 200 with an empty body, and repeating it on an already cancelled job changes nothing. Cancelling removes the job from the queue and does not undo the type change or the transfers it has already made, and a cancelled job cannot be resumed - start a new one through `POST api/2.0/people/type`. The returned progress reports `status` as `Canceled` and `isCompleted` as true.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TerminateRequestDto** | body | [**TerminateRequestDto**](#model-terminaterequestdto) |  | [optional] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the cancelled user type change, or an empty body when nothing was queued for the user | [**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**TaskProgressResponseWrapper**](#model-taskprogressresponsewrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### updateUserType

> EmployeeFullArrayWrapper updateUserType(type, UpdateMembersRequestDto)

`PUT /api/2.0/people/type/{type}`

Change a user type

Changes the type of the existing portal users listed in `userIds` to the type given in the route, in one call. The caller needs the permission to add and remove users of the requested type, cannot change their own type or the type of the portal owner, and cannot use this operation at all while being a guest; changing somebody to `Guest` additionally requires the portal to allow inviting guests. Every listed account has to be visible to the caller and must not be disabled. The change is applied immediately: each converted user gets a notification email and raises a `UserUpdated` webhook, and the accounts are processed one by one, so a rejection in the middle leaves the users before it already converted - re-read them before retrying. The answer streams the converted users with their detailed information, in the order they were processed. Converting somebody to a paid type takes a paid seat, so the operation answers 402 when the tariff or the paid-user quota does not allow one more. This operation only moves the type and leaves the rooms and the shared files of the account where they are - to hand them over to another admin in the same step, use `POST api/2.0/people/type` instead.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **type** | path | **EmployeeType** | The type to convert the listed accounts to, taken from the route: `User`, `Guest`, `RoomAdmin` or `DocSpaceAdmin`. `RoomAdmin` and `DocSpaceAdmin` take a paid seat. | [required] [example: `RoomAdmin`] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **UpdateMembersRequestDto** | body | [**UpdateMembersRequestDto**](#model-updatemembersrequestdto) | The accounts to convert. Only `userIds` is read by this operation; `resendAll` belongs to the invitation operations and is ignored here. | [required] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The converted users with their detailed information | [**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The tariff or the paid-user quota does not allow one more paid user | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**EmployeeFullArrayWrapper**](#model-employeefullarraywrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## PortalGuestsApi

### getGuestSharingLink

> StringWrapper getGuestSharingLink(userid)

`GET /api/2.0/people/guests/{userid}/share`

Get a guest sharing link

Builds a link that lets another member of the portal take over the caller's guest, so that the guest becomes visible to them as well. The account in the route has to exist and be a guest - any other type is rejected with 400 - and the caller has to be able to see it and must not be a guest itself. The call is read-only: it only mints the link and changes nothing, and it can be repeated as often as needed. The answer is a shortened confirmation URL as plain text; hand it to the person who should get the guest, and their client completes the hand-over with `POST api/2.0/people/guests/share/approve`. The link carries a confirmation token and therefore expires, so mint it when it is about to be used rather than storing it.

#### Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **userid** | path | **UUID** (uuid) | The ID of the guest to be handed over, taken from the route. The account has to exist, has to be a guest, and has to be one the caller can see. | [required] [example: `00000000-0000-0000-0000-000000000000`] |

#### Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The shortened confirmation link, as plain text | [**StringWrapper**](#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The account is not a guest | - | - |
| **403** | The caller is a guest, or is not allowed to see that account | - | - |
| **404** | No account has the specified ID | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

#### Return type

[**StringWrapper**](#model-stringwrapper)

#### Authorization

[Basic](#basic), [OAuth2](#oauth2) (scopes: read, write), [ApiKeyBearer](#apikeybearer), [asc_auth_key](#asc_auth_key), [Bearer](#bearer), [OpenId](#openid)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## Models


### Model AccountInfoArrayWrapper
The successful API response containing the list of AccountInfoDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-accountinfodto) | The list of AccountInfoDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model AccountInfoDto
The account information parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **provider** | **String** | The name of the identity provider, in lowercase, as every other operation of this group expects it: `google`, `zoom`, `linkedin`, `facebook`, `twitter`, `microsoft`, `appleid`, `weixin` or `nextcloud`. | [required] [example: `google`] [nullable] |
| **url** | **URI** (uri) | The URL that starts the login with this provider. Open it as it is - it already carries the provider and the popup or redirect mode the request asked for. | [required] [example: `/login.ashx?auth=google&mode=popup&callback=onAuthCallback`] [nullable] |
| **linked** | **Boolean** | Whether this provider is already linked to the calling profile. It is always false for an anonymous caller, because there is no profile to compare against. | [required] [example: `true`] |


### Model AccountLoginType

Possible values:

- `0` — SSO (`SSO`)
- `1` — LDAP (`LDAP`)
- `2` — Standart (`Standart`)


### Model ApiDateTime
The API date and time parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **utcTime** | **Date** (date-time) | The time in UTC format. | [optional] [example: `2018-01-01T00:00:00.0000000Z`] |
| **timeZoneOffset** | **String** (date-span) | The time zone offset. | [optional] [example: `00:00:00`] |


### Model ApiKeyResponseArrayWrapper
The successful API response containing the list of ApiKeyResponseDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-apikeyresponsedto) | The list of ApiKeyResponseDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model ApiKeyResponseDto
The response data for the API key operations.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The ID of the key. This is the value to pass to `PUT api/2.0/keys/{keyId}` and `DELETE api/2.0/keys/{keyId}`. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **name** | **String** | The label given to the key when it was created or last updated. | [required] [example: `My API Key`] [nullable] |
| **key** | **String** | The secret to send in the `Authorization` header as `Bearer sk-...`. It is filled in only by the answer of `POST api/2.0/keys` and cannot be read again afterwards, so it has to be stored at that moment. | [required] [example: `sk-0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`] [nullable] |
| **keyPostfix** | **String** | The last four characters of the secret. It is the only part of the secret that later reads expose, and it is meant for telling keys apart in a list. | [optional] [example: `cdef`] [nullable] |
| **permissions** | **List** | The scopes the key may use, as accepted by `GET api/2.0/keys/permissions`. An empty list means the key has no scope restrictions. | [required] [example: `[rooms:read, files:write]`] [nullable] |
| **lastUsed** | [**ApiDateTime**](#model-apidatetime) | The UTC moment the key was last used to authenticate a request. It is empty for a key that has never been used. | [optional] |
| **createOn** | [**ApiDateTime**](#model-apidatetime) | The UTC moment the key was created. | [optional] |
| **createBy** | [**EmployeeDto**](#model-employeedto) | The portal member who created the key, and whose access the key acts with. | [optional] |
| **expiresAt** | [**ApiDateTime**](#model-apidatetime) | The UTC moment the key stops working. It is empty for a key created without `expiresInDays`, which never expires. | [optional] |
| **isActive** | **Boolean** | Whether the key may authenticate requests. A key deactivated through `PUT api/2.0/keys/{keyId}` stays in the list with this field set to false. | [required] [example: `true`] |


### Model ApiKeyResponseWrapper
The successful API response containing the ApiKeyResponseDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**ApiKeyResponseDto**](#model-apikeyresponsedto) | The ApiKeyResponseDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model Area

Possible values:

- `0` — All (`All`)
- `1` — People (`People`)
- `2` — Guests (`Guests`)


### Model BooleanWrapper
The successful API response containing the boolean value.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | **Boolean** | The boolean value returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model BooleanWrapper.links item

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **href** | **String** | URL of the link | [optional] |
| **action** | **String** | Action associated with the link | [optional] |


### Model ChangeEmailRequest
The request parameters for updating a user email.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The new address in plain text, up to 255 characters. It is stored in lowercase, and one of this field and `encEmail` is required. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **encEmail** | **String** | The new address in the encrypted form the confirmation link carries. Pass the value from the link unchanged; it is used only when `email` is empty. | [optional] [example: `encrypted_email_string`] [nullable] |


### Model ChangePasswordRequest
The request parameters for updating a user password.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **password** | **String** | The new password in plain text. It is checked against the portal password policy and rejected with 400 when it is too weak, then hashed by the portal. Send it only over a secure connection, and prefer `passwordHash` when the client can compute it. | [optional] [example: `P@ssw0rd`] [nullable] |
| **passwordHash** | **String** | The new password already hashed by the client, which is what the portal stores. It is a PBKDF2-HMACSHA256 hash of the plain password, computed with the salt, the iteration count and the key size the portal settings publish, and written as lowercase hexadecimal. When it is sent, `password` is ignored and the password policy is not applied. | [optional] [example: `c1ba1a0bcbe0f0f42b6c86e1b41a1b4a4a9b4b0e3f2b7d2c1a0e9f8d7c6b5a49`] [nullable] |


### Model Contact
The contact information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **String** | The contact type. | [optional] [example: `GTalk`] [nullable] |
| **value** | **String** | The contact value. | [optional] [example: `my@gmail.com`] [nullable] |


### Model CreateApiKeyRequestDto
The request parameters for creating a new API key.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The label that tells this key apart in the key list. It is required, may be up to 30 characters long, and does not have to be unique. | [required] [example: `My API Key`] [minLength: 0] [maxLength: 30] |
| **permissions** | **List** | The scopes the key may use. Every value has to come from `GET api/2.0/keys/permissions`, an unknown value or an empty array is rejected, and passing `*` or omitting the field records a key without scope restrictions. | [optional] [example: `[rooms:read, files:write]`] [nullable] |
| **expiresInDays** | **Integer** (int32) | The lifetime of the key in days, counted from the moment it is created, from 1 to 365. Omit it to create a key that never expires. | [optional] [example: `30`] [min: 1] [max: 365] [nullable] |


### Model Culture
The culture name parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **cultureName** | **String** | The user culture name (en-US, de, fr, es, ...). | [required] [example: `en-US`] [minLength: 0] [maxLength: 85] |


### Model DarkThemeSettings
The theme parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **theme** | [**DarkThemeSettingsType**](#model-darkthemesettingstype) | The theme type. | [optional] [enum: `Base`, `Dark`, `System`] |
| **lastModified** | **Date** (date-time) | The last modified date. | [optional] [example: `2020-01-15T00:00:00Z`] |


### Model DarkThemeSettingsRequestDto
The theme settings request parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **theme** | [**DarkThemeSettingsType**](#model-darkthemesettingstype) | The portal theme settings type. | [required] [enum: `Base`, `Dark`, `System`] |


### Model DarkThemeSettingsType

Possible values:

- `Base` — Base
- `Dark` — Dark
- `System` — System


### Model DarkThemeSettingsWrapper
The successful API response containing the DarkThemeSettings object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**DarkThemeSettings**](#model-darkthemesettings) | The DarkThemeSettings object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model DistributedTaskStatus

Possible values:

- `0` — Created (`Created`)
- `1` — Running (`Running`)
- `2` — Completed (`Completed`)
- `3` — Canceled (`Canceled`)
- `4` — Failted (`Failted`)


### Model EmailInvitationDto
The email invitation parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address of somebody who has no portal account yet. An invitation is sent to it and an account is created once it is accepted, so this is the field to use instead of an account identifier when the person is new to the portal. | [optional] [example: `jane.doe@example.com`] [maxLength: 255] [nullable] |


### Model EmailMemberRequestDto
The request parameters for the user email.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address to send the password recovery link to. It is required and validated even by `POST api/2.0/people/guests/share/approve`, which then ignores its value and takes the account from the confirmation token instead. | [required] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] |
| **recaptchaType** | [**RecaptchaType**](#model-recaptchatype) | Which CAPTCHA the `recaptchaResponse` comes from: `Default` for the web reCAPTCHA, `AndroidV2` or `iOSV2` for the mobile ones, and `hCaptcha` when the portal is configured with hCaptcha. It matters only for an unauthenticated request on a portal that has a CAPTCHA. | [optional] [enum: `0`, `1`, `2`, `3`] |
| **recaptchaResponse** | **String** | The user's response to the CAPTCHA challenge. | [optional] [example: `03AGdBq27...`] [nullable] |


### Model EmployeeActivationStatus

Possible values:

- `0` — Not activated (`NotActivated`)
- `1` — Activated (`Activated`)
- `2` — Pending (`Pending`)
- `4` — Auto generated (`AutoGenerated`)


### Model EmployeeArrayWrapper
The successful API response containing the list of EmployeeDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-employeedto) | The list of EmployeeDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model EmployeeDto
The user parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The user ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **displayName** | **String** | The HTML-encoded user's display name formatted according to the default format for the current culture. | [optional] [example: `Mike Zanyatski`] [nullable] |
| **avatar** | **String** | The user avatar. | [optional] [example: `https://example.com/avatar.jpg`] [nullable] |
| **avatarOriginal** | **String** | The user original size avatar. | [optional] [example: `https://example.com/avatar_original.jpg`] [nullable] |
| **avatarMax** | **String** | The user maximum size avatar. | [optional] [example: `https://example.com/avatar_max.jpg`] [nullable] |
| **avatarMedium** | **String** | The user medium size avatar. | [optional] [example: `https://example.com/avatar_medium.jpg`] [nullable] |
| **avatarSmall** | **String** | The user small size avatar. | [optional] [example: `https://example.com/avatar_small.jpg`] [nullable] |
| **profileUrl** | **String** | The user profile URL. | [optional] [example: `https://example.com/profile/user123`] [nullable] |
| **hasAvatar** | **Boolean** | Specifies if the user has an avatar or not. | [optional] [example: `true`] |
| **isAnonim** | **Boolean** | Specifies if the user is anonymous or not. | [optional] [example: `false`] |


### Model EmployeeFullArrayWrapper
The successful API response containing the list of EmployeeFullDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-employeefulldto) | The list of EmployeeFullDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model EmployeeFullDto
The full list of user parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The user ID. | [optional] |
| **displayName** | **String** | The HTML-encoded user's display name formatted according to the default format for the current culture. | [optional] |
| **avatar** | **String** | The user avatar. | [optional] |
| **avatarOriginal** | **String** | The user original size avatar. | [optional] |
| **avatarMax** | **String** | The user maximum size avatar. | [optional] |
| **avatarMedium** | **String** | The user medium size avatar. | [optional] |
| **avatarSmall** | **String** | The user small size avatar. | [optional] |
| **profileUrl** | **String** | The user profile URL. | [optional] |
| **hasAvatar** | **Boolean** | Specifies if the user has an avatar or not. | [optional] |
| **isAnonim** | **Boolean** | Specifies if the user is anonymous or not. | [optional] |
| **firstName** | **String** | The user first name. | [optional] [nullable] |
| **lastName** | **String** | The user last name. | [optional] [nullable] |
| **userName** | **String** | The user username. | [optional] [nullable] |
| **email** | **String** (email) | The user email. | [optional] [nullable] |
| **contacts** | [**List**](#model-contact) | The list of user contacts. | [optional] [nullable] |
| **status** | [**EmployeeStatus**](#model-employeestatus) | The user status. | [optional] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | [**EmployeeActivationStatus**](#model-employeeactivationstatus) | The user activation status. | [optional] [enum: `0`, `1`, `2`, `4`] |
| **terminated** | [**ApiDateTime**](#model-apidatetime) | The date when the user account was terminated. | [optional] |
| **department** | **String** | The user department. | [optional] [nullable] |
| **groups** | [**List**](#model-groupsummarydto) | The list of user groups. | [optional] [nullable] |
| **location** | **String** | The user location. | [optional] [nullable] |
| **notes** | **String** | The user notes. | [optional] [nullable] |
| **isAdmin** | **Boolean** | Specifies if the user is an administrator or not. | [optional] |
| **isRoomAdmin** | **Boolean** | Specifies if the user is a room administrator or not. | [optional] |
| **isLDAP** | **Boolean** | Specifies if the LDAP settings are enabled for the user or not. | [optional] |
| **listAdminModules** | **List** | The list of the administrator modules. | [optional] [nullable] |
| **isOwner** | **Boolean** | Specifies if the user is a portal owner or not. | [optional] |
| **isVisitor** | **Boolean** | Specifies if the user is a portal visitor or not. | [optional] |
| **isCollaborator** | **Boolean** | Specifies if the user is a portal collaborator or not. | [optional] |
| **cultureName** | **String** | The user culture code. | [optional] [nullable] |
| **mobilePhone** | **String** | The user mobile phone number. | [optional] [nullable] |
| **mobilePhoneActivationStatus** | [**MobilePhoneActivationStatus**](#model-mobilephoneactivationstatus) | The mobile phone activation status. | [optional] [enum: `0`, `1`] |
| **isSSO** | **Boolean** | Specifies if the SSO settings are enabled for the user or not. | [optional] |
| **theme** | [**DarkThemeSettingsType**](#model-darkthemesettingstype) | The user theme settings. | [optional] [enum: `Base`, `Dark`, `System`] |
| **quotaLimit** | **Long** (int64) | The user quota limit. | [optional] [nullable] |
| **usedSpace** | **Double** (double) | The portal used space of the user. | [optional] [nullable] |
| **shared** | **Boolean** | Specifies if the user has access rights. | [optional] [nullable] |
| **isCustomQuota** | **Boolean** | Specifies if the user has a custom quota or not. | [optional] [nullable] |
| **loginEventId** | **Integer** (int32) | The current login event ID. | [optional] [nullable] |
| **authCookieLifetime** | **Double** (double) | The auth cookie lifetime in seconds. | [optional] [nullable] |
| **createdBy** | [**EmployeeDto**](#model-employeedto) | The user who created the current user. | [optional] |
| **registrationDate** | [**ApiDateTime**](#model-apidatetime) | The user registration date. | [optional] |
| **hasPersonalFolder** | **Boolean** | Specifies if the user has a personal folder or not. | [optional] [nullable] |
| **tfaAppEnabled** | **Boolean** | Indicates whether the user has enabled two-factor authentication (TFA) using an authentication app. | [optional] [nullable] |


### Model EmployeeFullWrapper
The successful API response containing the EmployeeFullDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**EmployeeFullDto**](#model-employeefulldto) | The EmployeeFullDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model EmployeeStatus

Possible values:

- `1` — Active (`Active`)
- `2` — Terminated (`Terminated`)
- `4` — Pending (`Pending`)
- `5` — Default (`Default`)
- `7` — All (`All`)


### Model EmployeeType

Possible values:

- `All` — All
- `RoomAdmin` — Room admin
- `Guest` — Guest
- `DocSpaceAdmin` — DocSpace admin
- `User` — User


### Model EmployeeWrapper
The successful API response containing the EmployeeDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**EmployeeDto**](#model-employeedto) | The EmployeeDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model ErrorApiResponse
The error body returned with every failed request.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **status** | **Integer** (int32) | The response status flag. Always 1 on an error, as opposed to 0 on success. | [optional] |
| **statusCode** | **Integer** (int32) | The HTTP status code of the response, repeated in the body. | [optional] |
| **error** | [**ErrorApiResponse_error**](#model-errorapiresponseerror) |  | [optional] |


### Model ErrorApiResponse.error
What went wrong.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **message** | **String** | The human-readable error message. | [optional] |
| **type** | **String** | The .NET type of the underlying exception. Only sent when stack traces are enabled. | [optional] |
| **stack** | **String** | The stack trace of the underlying exception. Only sent when stack traces are enabled. | [optional] |
| **hresult** | **Integer** (int32) | The HRESULT of the underlying exception. Only sent when stack traces are enabled. | [optional] |


### Model FieldError
Field specific validation error

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **field** | **String** | The name of the field that failed validation | [optional] [example: `policy_url`] |
| **code** | **String** | Error code for localization purposes | [optional] [example: `InvalidPolicyUrl`] |
| **message** | **String** | Human readable error message | [optional] [example: `policy url is expected to be passed as url`] |


### Model FileUploadResultDto
The file upload result.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **success** | **Boolean** | Whether the upload succeeded. This is the field to check: the operation answers 200 even when it fails, and reports the reason in `message` instead of in the status code. | [optional] [example: `true`] |
| **data** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **message** | **String** | The reason the upload failed, ready to be shown to a person. It is empty for a successful upload, and it is the only place where a failure is described, because the status code stays 200. | [optional] [example: `The image size is too large`] [nullable] |


### Model FileUploadResultWrapper
The successful API response containing the FileUploadResultDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**FileUploadResultDto**](#model-fileuploadresultdto) | The FileUploadResultDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model GroupArrayWrapper
The successful API response containing the list of GroupDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-groupdto) | The list of GroupDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model GroupDto
The group parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The group name. | [required] [example: `Marketing Team`] [nullable] |
| **parent** | **UUID** (uuid) | The parent group ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **category** | **UUID** (uuid) | The group category ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **id** | **UUID** (uuid) | The group ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **isLDAP** | **Boolean** | Specifies if the LDAP settings are enabled for the group or not. | [required] [example: `false`] |
| **isSystem** | **Boolean** | Indicates whether the group is a system group. | [optional] [example: `false`] [nullable] |
| **manager** | [**EmployeeFullDto**](#model-employeefulldto) | The group manager full information. | [optional] |
| **members** | [**List**](#model-employeefulldto) | The list of group members. | [optional] [example: `[{displayName=John Doe}]`] [nullable] |
| **shared** | **Boolean** | Specifies whether the group can be shared or not. | [optional] [example: `false`] [nullable] |
| **membersCount** | **Integer** (int32) | The number of group members. | [optional] [example: `0`] |


### Model GroupRequestDto
The group request parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **members** | **List** (uuid) | The accounts to put into the new group. Every one of them has to be an active member that is not a guest, otherwise the whole call is rejected. Omit it to create an empty group. | [optional] [example: `[00000000-0000-0000-0000-000000000000, 11111111-1111-1111-1111-111111111111]`] [nullable] |
| **groupManager** | **UUID** (uuid) | The account to make the manager of the new group. It is added to the group as well, so it does not have to be repeated in `members`. Omit it to create a group without a manager. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **groupName** | **String** | The name of the group, from 1 to 128 characters. It is required, it may not be blank, and it does not have to be unique. | [required] [example: `Marketing Team`] [minLength: 1] [maxLength: 128] [nullable] |


### Model GroupSummaryArrayWrapper
The successful API response containing the list of GroupSummaryDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-groupsummarydto) | The list of GroupSummaryDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model GroupSummaryDto
The group summary parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The group ID. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **name** | **String** | The group name. | [required] [example: `Group Name`] [nullable] |
| **manager** | **String** | The group manager. | [optional] [example: `Jake.Zazhitski`] [nullable] |
| **isSystem** | **Boolean** | Indicates whether the group is a system group. | [optional] [example: `false`] [nullable] |


### Model GroupWrapper
The successful API response containing the GroupDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**GroupDto**](#model-groupdto) | The GroupDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model IAccountEntryArrayWrapper
The successful API response containing the list of IAccountEntryDto objects.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**List**](#model-iaccountentrydto) | The list of IAccountEntryDto objects returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model IAccountEntryDto
One entry of an account search: either a user or a group.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The group ID. | [required] |
| **displayName** | **String** | The HTML-encoded user's display name formatted according to the default format for the current culture. | [optional] [nullable] |
| **avatar** | **String** | The user avatar. | [optional] [nullable] |
| **avatarOriginal** | **String** | The user original size avatar. | [optional] [nullable] |
| **avatarMax** | **String** | The user maximum size avatar. | [optional] [nullable] |
| **avatarMedium** | **String** | The user medium size avatar. | [optional] [nullable] |
| **avatarSmall** | **String** | The user small size avatar. | [optional] [nullable] |
| **profileUrl** | **String** | The user profile URL. | [optional] [nullable] |
| **hasAvatar** | **Boolean** | Specifies if the user has an avatar or not. | [optional] |
| **isAnonim** | **Boolean** | Specifies if the user is anonymous or not. | [optional] |
| **firstName** | **String** | The user first name. | [optional] [nullable] |
| **lastName** | **String** | The user last name. | [optional] [nullable] |
| **userName** | **String** | The user username. | [optional] [nullable] |
| **email** | **String** (email) | The user email. | [optional] [nullable] |
| **contacts** | [**List**](#model-contact) | The list of user contacts. | [optional] [nullable] |
| **status** | [**EmployeeStatus**](#model-employeestatus) | The user status. | [optional] [enum: `1`, `2`, `4`, `5`, `7`] |
| **activationStatus** | [**EmployeeActivationStatus**](#model-employeeactivationstatus) | The user activation status. | [optional] [enum: `0`, `1`, `2`, `4`] |
| **terminated** | [**ApiDateTime**](#model-apidatetime) | The date when the user account was terminated. | [optional] |
| **department** | **String** | The user department. | [optional] [nullable] |
| **groups** | [**List**](#model-groupsummarydto) | The list of user groups. | [optional] [nullable] |
| **location** | **String** | The user location. | [optional] [nullable] |
| **notes** | **String** | The user notes. | [optional] [nullable] |
| **isAdmin** | **Boolean** | Specifies if the user is an administrator or not. | [optional] |
| **isRoomAdmin** | **Boolean** | Specifies if the user is a room administrator or not. | [optional] |
| **isLDAP** | **Boolean** | Specifies if the LDAP settings are enabled for the group or not. | [required] |
| **listAdminModules** | **List** | The list of the administrator modules. | [optional] [nullable] |
| **isOwner** | **Boolean** | Specifies if the user is a portal owner or not. | [optional] |
| **isVisitor** | **Boolean** | Specifies if the user is a portal visitor or not. | [optional] |
| **isCollaborator** | **Boolean** | Specifies if the user is a portal collaborator or not. | [optional] |
| **cultureName** | **String** | The user culture code. | [optional] [nullable] |
| **mobilePhone** | **String** | The user mobile phone number. | [optional] [nullable] |
| **mobilePhoneActivationStatus** | [**MobilePhoneActivationStatus**](#model-mobilephoneactivationstatus) | The mobile phone activation status. | [optional] [enum: `0`, `1`] |
| **isSSO** | **Boolean** | Specifies if the SSO settings are enabled for the user or not. | [optional] |
| **theme** | [**DarkThemeSettingsType**](#model-darkthemesettingstype) | The user theme settings. | [optional] [enum: `Base`, `Dark`, `System`] |
| **quotaLimit** | **Long** (int64) | The user quota limit. | [optional] [nullable] |
| **usedSpace** | **Double** (double) | The portal used space of the user. | [optional] [nullable] |
| **shared** | **Boolean** | Specifies whether the group can be shared or not. | [optional] [nullable] |
| **isCustomQuota** | **Boolean** | Specifies if the user has a custom quota or not. | [optional] [nullable] |
| **loginEventId** | **Integer** (int32) | The current login event ID. | [optional] [nullable] |
| **authCookieLifetime** | **Double** (double) | The auth cookie lifetime in seconds. | [optional] [nullable] |
| **createdBy** | [**EmployeeDto**](#model-employeedto) | The user who created the current user. | [optional] |
| **registrationDate** | [**ApiDateTime**](#model-apidatetime) | The user registration date. | [optional] |
| **hasPersonalFolder** | **Boolean** | Specifies if the user has a personal folder or not. | [optional] [nullable] |
| **tfaAppEnabled** | **Boolean** | Indicates whether the user has enabled two-factor authentication (TFA) using an authentication app. | [optional] [nullable] |
| **name** | **String** | The group name. | [required] [nullable] |
| **parent** | **UUID** (uuid) | The parent group ID. | [optional] [nullable] |
| **category** | **UUID** (uuid) | The group category ID. | [required] |
| **isSystem** | **Boolean** | Indicates whether the group is a system group. | [optional] [nullable] |
| **manager** | [**EmployeeFullDto**](#model-employeefulldto) | The group manager full information. | [optional] |
| **members** | [**List**](#model-employeefulldto) | The list of group members. | [optional] [nullable] |
| **membersCount** | **Integer** (int32) | The number of group members. | [optional] |


### Model InviteUsersRequestDto
The request parameters for inviting users.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **invitations** | [**List**](#model-userinvitationrequestdto) | The list of user invitations. | [required] [example: `[{email=user@example.com, type=1}]`] |
| **culture** | **String** | The culture code of invitations. | [optional] [example: `en-US`] [nullable] |


### Model LinkAccountRequestDto
The request parameters for linking accounts.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **serializedProfile** | **String** | The profile a completed provider authorization produced, in the serialized form the login flow hands back. Pass that value unchanged; it carries the provider, the third-party account ID and the authorization result, and a hand-written object is not accepted. | [optional] [example: `{"provider":"google","id":"123456"}`] [nullable] |


### Model MemberRequestDto
The user request parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **password** | **String** | The password in plain text. It is checked against the portal password policy and rejected with 400 when it is too weak. When neither this field nor `passwordHash` is sent, a random password is generated and nobody learns it, so the account can only be used after a password recovery. | [optional] [example: `P@ssw0rd`] [nullable] |
| **passwordHash** | **String** | The password already hashed by the client, which is what the portal stores. It is a PBKDF2-HMACSHA256 hash of the plain password, computed with the salt, the iteration count and the key size the portal settings publish, and written as lowercase hexadecimal. When it is sent, `password` is ignored and the password policy is not applied. | [optional] [example: `c1ba1a0bcbe0f0f42b6c86e1b41a1b4a4a9b4b0e3f2b7d2c1a0e9f8d7c6b5a49`] [nullable] |
| **email** | **String** (email) | The email address of the new account, up to 255 characters. It is required in practice and has to be a real address, and it becomes the sign-in name of the account. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **type** | [**EmployeeType**](#model-employeetype) | The type of the new account: `User`, `RoomAdmin` or `DocSpaceAdmin`. `Guest` is not accepted here, and the value is ignored entirely when `fromInviteLink` is set, because the invitation link decides the type. When no paid seat is free, the account is created as `User` whatever was asked for. | [optional] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **isUser** | **Boolean** | Only chooses which entry the operation writes to the audit trail - the one for a guest or the one for a member. It does not change the type of the account; `type` and the invitation link do that. | [optional] [example: `true`] [nullable] |
| **firstName** | **String** | The first name, up to 255 characters. It is checked together with `lastName`, and a pair the portal does not accept as a name answers 400. | [optional] [example: `John`] [minLength: 0] [maxLength: 255] [nullable] |
| **lastName** | **String** | The last name, up to 255 characters. It is checked together with `firstName`, and a pair the portal does not accept as a name answers 400. | [optional] [example: `Doe`] [minLength: 0] [maxLength: 255] [nullable] |
| **department** | **List** (uuid) | The groups to put the new account into, by group ID. Read the IDs from `GET api/2.0/group`; an ID that matches no group is skipped without an error. | [optional] [example: `[00000000-0000-0000-0000-000000000000]`] [nullable] |
| **location** | **String** | The free-text location shown on the profile. It is stored as it is given and is not validated. | [optional] [example: `New York`] [nullable] |
| **comment** | **String** | The free-text note kept with the profile, shown to administrators. It is stored as it is given. | [optional] [example: `User comment`] [nullable] |
| **contacts** | [**List**](#model-contact) | The additional ways to reach the person, each as a type and a value pair. The type is a free-text label such as `email`, `phone`, `skype` or `telegram`, and an entry with an empty value is dropped. | [optional] [example: `[{type=email, value=john.doe@example.com}]`] [nullable] |
| **files** | **String** | The address the portal downloads the avatar from. It has to use HTTPS unless the request itself came over HTTP, an address the portal refuses to fetch is rejected, and passing the default avatar path means no avatar is downloaded. | [optional] [example: `https://example.com/avatar.jpg`] [nullable] |
| **fromInviteLink** | **Boolean** | Set it to true when the account is created by somebody accepting an invitation, which makes `key` required and lets the link decide the type. With the default false the caller has to hold the permission to add an account of the requested type. | [optional] [example: `false`] |
| **key** | **String** | The key of the invitation link being accepted, taken from the link itself. It is read only when `fromInviteLink` is true, and an expired or already used key answers 403. | [optional] [example: `user_key_string`] [nullable] |
| **cultureName** | **String** | The interface language of the new account, as a culture code. It is applied whether or not the portal has that culture enabled, so send a code the portal supports. | [optional] [example: `en-US`] [nullable] |
| **target** | **UUID** (uuid) | Not used. The handler reads nothing from this field, and it is kept only so that existing clients keep working. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **spam** | **Boolean** | Whether the account agrees to receive tips, updates and offers. It defaults to false, which means no such mail is sent. | [optional] [example: `false`] [nullable] |


### Model MembersRequest
The accounts a member operation applies to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **members** | **List** (uuid) | The accounts the operation applies to. When adding or replacing members, an account that is a guest, is disabled or does not exist is skipped without an error; when removing them, an ID that is not a member is skipped as well. | [optional] [example: `[00000000-0000-0000-0000-000000000000, 11111111-1111-1111-1111-111111111111]`] [nullable] |


### Model MobilePhoneActivationStatus

Possible values:

- `0` — Not activated (`NotActivated`)
- `1` — Activated (`Activated`)


### Model Payments

Possible values:

- `0` — Paid (`Paid`)
- `1` — Free (`Free`)


### Model ProblemDetail
RFC 7807 problem details returned by the registration API for failed requests.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | **URI** (uri) | A URI reference that identifies the problem type. This service sets it to the DocSpace API getting-started page. | [optional] |
| **title** | **String** | A short, human-readable summary of the problem type, typically the HTTP status reason phrase. | [optional] |
| **status** | **Integer** (int32) | The HTTP status code for this occurrence of the problem. | [optional] |
| **detail** | **String** | A human-readable explanation specific to this occurrence of the problem. | [optional] |
| **instance** | **URI** (uri) | A URI reference that identifies the specific occurrence, set to the request path. | [optional] |
| **properties** | **Map** | Extension members carried on the problem. Usually empty; validation failures also surface as the top-level errors array. | [optional] |
| **errors** | [**List**](#model-fielderror) | Field-specific validation errors. Present when the request body or parameters failed validation, or when a named scope is not in the tenant catalogue. | [optional] |


### Model QuotaFilter

Possible values:

- `0` — All (`All`)
- `1` — Default (`Default`)
- `2` — Custom (`Custom`)


### Model RecaptchaType

Possible values:

- `0` — Default (`Default`)
- `1` — AndroidV2 (`AndroidV2`)
- `2` — iOSV2 (`iOSV2`)
- `3` — hCaptcha (`hCaptcha`)


### Model STRINGArrayWrapper
The successful API response.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | **List** | The response payload. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model SetManagerRequest
The request for setting a group manager.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **UUID** (uuid) | The account to make the manager. It has to exist, otherwise the operation answers 404, and it is added to the group at the same time, so it does not have to be a member beforehand. | [required] [example: `00000000-0000-0000-0000-000000000000`] |


### Model SignupAccountRequestDto
The request parameters for creating a third-party account.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **employeeType** | [**EmployeeType**](#model-employeetype) | The type the invitation link is looked up as, defaulting to `RoomAdmin`. It does not decide the resulting type: the link itself does, and this value only has to match the kind of link that was issued. | [optional] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **key** | **String** | The key of the invitation link being accepted, taken from the link the invitation email or the room invitation contains. An expired or already used key is rejected with 403. | [required] [example: `invite_key_123456`] [nullable] |
| **culture** | **String** | The culture to set on the new profile, as a culture code. It is applied only when the portal has that culture enabled, and otherwise the portal default is kept. | [optional] [example: `en-US`] [nullable] |
| **serializedProfile** | **String** | The profile a completed provider authorization produced, in the serialized form the login flow hands back. Pass that value unchanged; the first name, the last name, the email and the avatar of the new profile are taken from it. | [required] [example: `{"provider":"google","id":"123456"}`] [nullable] |


### Model SortOrder

Possible values:

- `0` — Ascending (`Ascending`)
- `1` — Descending (`Descending`)


### Model StartReassignRequestDto
The request parameters for starting the reassignment process.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **fromUserId** | **UUID** (uuid) | The ID of the user whose rooms and shared files are transferred away. The account has to have the `Terminated` status already, and it cannot be a system account, the portal owner or the caller. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **toUserId** | **UUID** (uuid) | The ID of the user who receives the data. The account has to be an active room admin or DocSpace admin, so a guest, a system account or a disabled account is rejected. | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **deleteProfile** | **Boolean** | Specifies whether to delete the source profile once the transfer succeeds. When false, which is the default, the emptied profile is kept and can be deleted later through `DELETE api/2.0/people/{userid}`. | [optional] [example: `false`] |


### Model StartUpdateUserTypeDto
The parameters for updating the type of the user or guest when reassigning rooms and shared files.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **type** | [**EmployeeType**](#model-employeetype) | The type to convert the account to. Only `Guest` and `User` are accepted, because they are the types that cannot own rooms; `RoomAdmin`, `DocSpaceAdmin` and `All` are rejected here and belong to `PUT api/2.0/people/type/{type}`. | [optional] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |
| **userId** | **UUID** (uuid) | The ID of the account being converted. It has to be an active account other than the caller, and only the portal owner may pass the ID of a DocSpace administrator. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **reassignUserId** | **UUID** (uuid) | The ID of the administrator who receives the rooms and the shared files of the converted account. It has to be an active room admin or DocSpace admin other than the converted account, and when it is omitted the data goes to the caller. | [optional] [example: `11111111-1111-1111-1111-111111111111`] [nullable] |


### Model StringWrapper
The successful API response containing the string value.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | **String** | The string value returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model TaskProgressResponseDto
The task progress response parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The ID of the queued job. It identifies this run of the job and changes every time the job is started again. | [required] [example: `task-123456`] [nullable] |
| **error** | **String** | The message of the error that stopped the job. It is empty while the job is running and after a job that succeeded, and it is the only place where the reason for a failure is reported. | [optional] [example: `An error occurred during processing`] [nullable] |
| **percentage** | **Integer** (int32) | The share of the job that is already done, from 0 to 100. | [required] [example: `75`] |
| **isCompleted** | **Boolean** | Specifies whether the job has stopped running. This is the field to poll: true means the job will not change any more, whether it succeeded, failed or was cancelled, and `status` tells which of the three it is. | [required] [example: `false`] |
| **status** | [**DistributedTaskStatus**](#model-distributedtaskstatus) | The state of the job: `Created` while it waits in the queue, `Running` while it works, `Completed` once it has finished on its own, `Canceled` after a terminate operation, and `Failted` when it stopped on an error, in which case `error` carries the reason. | [required] [enum: `0`, `1`, `2`, `3`, `4`] |


### Model TaskProgressResponseWrapper
The successful API response containing the TaskProgressResponseDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**TaskProgressResponseDto**](#model-taskprogressresponsedto) | The TaskProgressResponseDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model TerminateRequestDto
The request parameters that address the queued job of a single user - a data reassignment, a data deletion or a user type change.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **UUID** (uuid) | The ID of the user whose job is addressed. For a terminate operation it has to be the same ID that was passed when the job was started. | [required] [example: `00000000-0000-0000-0000-000000000000`] |


### Model ThumbnailsDataDto
The thumbnails data parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **original** | **String** | The thumbnail original photo. | [optional] [example: `default_user_photo_size_1280-1280.png`] [nullable] |
| **retina** | **String** | The thumbnail retina. | [optional] [example: `default_user_photo_size_360-360.png`] [nullable] |
| **max** | **String** | The thumbnail maximum size photo. | [optional] [example: `default_user_photo_size_200-200.png`] [nullable] |
| **big** | **String** | The thumbnail big size photo. | [optional] [example: `default_user_photo_size_82-82.png`] [nullable] |
| **medium** | **String** | The thumbnail medium size photo. | [optional] [example: `default_user_photo_size_48-48.png`] [nullable] |
| **small** | **String** | The thumbnail small size photo. | [optional] [example: `default_user_photo_size_32-32.png`] [nullable] |


### Model ThumbnailsDataWrapper
The successful API response containing the ThumbnailsDataDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**ThumbnailsDataDto**](#model-thumbnailsdatadto) | The ThumbnailsDataDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model ThumbnailsRequest
The crop rectangle to apply to an avatar image.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tmpFile** | **String** | The temporary image to crop, as returned in the `data` of an upload made with `autosave` off. Only the file name part of the value is used. Omit it to re-crop the photo the profile already has. | [optional] [example: `photo_temp_123.jpg`] [nullable] |
| **x** | **Integer** (int32) | The distance in pixels from the left edge of the original image to the left edge of the crop rectangle. | [optional] [example: `100`] |
| **y** | **Integer** (int32) | The distance in pixels from the top edge of the original image to the top edge of the crop rectangle. | [optional] [example: `50`] |
| **width** | **Integer** (int32) | The width of the crop rectangle in pixels. Passing 0 together with `height` and `tmpFile` keeps the whole uploaded image instead of cropping it. | [optional] [example: `200`] |
| **height** | **Integer** (int32) | The height of the crop rectangle in pixels. Passing 0 together with `width` and `tmpFile` keeps the whole uploaded image instead of cropping it. | [optional] [example: `200`] |


### Model TokenDiagnosticsDto
What the current token carries, for diagnostics.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The name of the authenticated identity. | [optional] [example: `user@example.com`] [nullable] |
| **claims** | **List** | The claims of the identity, each formatted as type:value. | [optional] [example: `[http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name:user@example.com]`] [nullable] |


### Model TokenDiagnosticsWrapper
The successful API response containing the TokenDiagnosticsDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**TokenDiagnosticsDto**](#model-tokendiagnosticsdto) | The TokenDiagnosticsDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model UpdateApiKeyRequest
The request parameters for updating an existing API key.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | The new label of the key, up to 30 characters. Omit it to keep the current name. | [optional] [example: `Updated API Key`] [minLength: 0] [maxLength: 30] [nullable] |
| **permissions** | **List** | The scopes that replace the current ones. Every value has to come from `GET api/2.0/keys/permissions`, an unknown value or an empty array is rejected, and omitting the field keeps the current scopes. | [optional] [example: `[rooms:read, files:write]`] [nullable] |
| **isActive** | **Boolean** | Whether the key may authenticate requests. Set it to false to stop the key without deleting it and to true to let it work again; omit it to keep the current state. | [optional] [example: `true`] [nullable] |


### Model UpdateGroupRequest
The request for updating a group.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **membersToAdd** | **List** (uuid) | The accounts to add to the group. An account that is a guest, is disabled or does not exist is skipped without an error, so the answer has to be read to see what was applied. | [optional] [example: `[00000000-0000-0000-0000-000000000000]`] [nullable] |
| **membersToRemove** | **List** (uuid) | The accounts to remove from the group. Removals are applied after the additions, so an account named in both lists ends up removed, and an ID that is not a member is skipped without an error. | [optional] [example: `[11111111-1111-1111-1111-111111111111]`] [nullable] |
| **groupManager** | **UUID** (uuid) | The account to make the manager of the group, which also adds it to the group. Omit it to keep the current manager - it cannot be cleared through this operation. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **groupName** | **String** | The new name of the group, up to 128 characters. Omit it to keep the current name. | [optional] [example: `Sales Team`] [minLength: 0] [maxLength: 128] [nullable] |


### Model UpdateMemberRequestDto
The request parameters for updating the user information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userId** | **String** | The account the change applies to. It is read from this body by `POST api/2.0/people/email`, while `PUT api/2.0/people/{userid}` takes the account from the route and ignores this field. | [optional] [example: `00000000-0000-0000-0000-000000000000`] [nullable] |
| **disable** | **Boolean** | Set it to true to give the account the `Terminated` status and end every session it has, and to false to bring it back. It is applied only when the caller edits somebody else, and omitting it keeps the current status. | [optional] [example: `false`] [nullable] |
| **email** | **String** (email) | The new email address, up to 255 characters. It is read only by `POST api/2.0/people/email`, which either mails a confirmation letter or, for an administrator acting on somebody else, applies the address at once; `PUT api/2.0/people/{userid}` ignores it. | [optional] [example: `john.doe@example.com`] [minLength: 0] [maxLength: 255] [nullable] |
| **isUser** | **Boolean** | Set it to true to turn the account into a guest and to false to turn it back into a member. Either direction takes a seat and can answer 402, it is applied only when the caller edits somebody else, and a request to make the portal owner, a DocSpace administrator or a module administrator a guest is ignored. | [optional] [example: `true`] [nullable] |
| **firstName** | **String** | The new first name, up to 255 characters. It is applied only to the caller's own profile, is left alone on an LDAP or SSO account, and a pair the portal does not accept as a name answers 400. | [optional] [example: `John`] [minLength: 0] [maxLength: 255] [nullable] |
| **lastName** | **String** | The new last name, up to 255 characters. It is applied only to the caller's own profile, is left alone on an LDAP or SSO account, and a pair the portal does not accept as a name answers 400. | [optional] [example: `Doe`] [minLength: 0] [maxLength: 255] [nullable] |
| **department** | **List** (uuid) | The groups the profile should belong to, by group ID, replacing the current ones. It is applied only to the caller's own profile. | [optional] [example: `[00000000-0000-0000-0000-000000000000]`] [nullable] |
| **location** | **String** | The new free-text location shown on the profile. It is applied only to the caller's own profile and is left alone on an LDAP or SSO account. | [optional] [example: `New York`] [nullable] |
| **comment** | **String** | The new free-text note kept with the profile. It is applied only to the caller's own profile. | [optional] [example: `User comment`] [nullable] |
| **contacts** | [**List**](#model-contact) | The additional ways to reach the person, replacing the current ones. Each entry is a free-text type such as `email`, `phone`, `skype` or `telegram` and its value, an entry with an empty value is dropped, and the field is applied only to the caller's own profile. | [optional] [example: `[{type=email, value=john.doe@example.com}]`] [nullable] |
| **files** | **String** | The address the portal downloads the new avatar from. It is applied only to the caller's own profile, has to use HTTPS unless the request itself came over HTTP, and passing the address the profile already uses downloads nothing. | [optional] [example: `https://example.com/avatar.jpg`] [nullable] |
| **spam** | **Boolean** | Whether the account agrees to receive tips, updates and offers. It is applied only to the caller's own profile, and omitting it on such a request stores false rather than keeping the current value. | [optional] [example: `false`] [nullable] |


### Model UpdateMembersQuotaRequestDto
The request parameters for updating a user quota.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userIds** | **List** (uuid) | The accounts the operation applies to. System accounts are dropped from the list without an error. | [optional] [example: `[00000000-0000-0000-0000-000000000000, 11111111-1111-1111-1111-111111111111]`] [nullable] |
| **quota** | [**UpdateMembersQuotaRequestDto_quota**](#model-updatemembersquotarequestdtoquota) |  | [optional] |


### Model UpdateMembersQuotaRequestDto.quota
The personal storage limit in bytes, as a whole number. A value of 0 or more becomes the limit, and any negative value switches the personal limit off so that the portal default applies again. It is read only by `PUT api/2.0/people/userquota`.


### Model UpdateMembersRequestDto
The request parameters for updating the user information.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **userIds** | **List** (uuid) | The accounts the operation applies to. System accounts are dropped from the list without an error, and the remaining ones are processed in the order they are given. | [optional] [example: `[00000000-0000-0000-0000-000000000000, 11111111-1111-1111-1111-111111111111]`] [nullable] |
| **resendAll** | **Boolean** | Reaches every pending account of the portal instead of the ones in `userIds`. It is read only by `PUT api/2.0/people/invite` and is ignored by every other operation that binds this body. | [optional] [example: `false`] |


### Model UpdatePhotoMemberRequest
The request parameters for updating a photo.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **files** | **String** | The address the portal downloads the new avatar from. It has to be absolute or relative to the portal, and it has to use HTTPS unless the request itself came over HTTP; an address the portal refuses to fetch is rejected. It is required - an empty value is answered with 400 rather than clearing the avatar. | [optional] [example: `https://example.com/avatar.jpg`] [nullable] |


### Model UserExistsResponseDto
The user existence check response parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **exists** | **Boolean** | Specifies whether the user exists or not. | [required] [example: `true`] |
| **status** | [**EmployeeStatus**](#model-employeestatus) | The user status, if the user exists. | [optional] [enum: `1`, `2`, `4`, `5`, `7`] |


### Model UserExistsResponseWrapper
The successful API response containing the UserExistsResponseDto object.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **response** | [**UserExistsResponseDto**](#model-userexistsresponsedto) | The UserExistsResponseDto object returned by the operation. | [optional] |
| **count** | **Integer** (int32) | The total number of items in the response | [optional] |
| **links** | [**List**](#model-booleanwrapperlinks-item) | List of links related to the response | [optional] |
| **status** | **Integer** (int32) | HTTP status code of the response | [optional] |
| **statusCode** | **Integer** (int32) | HTTP status code of the response (duplicate of status) | [optional] |


### Model UserInvitationRequestDto
The user invitation parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **email** | **String** (email) | The address of somebody who has no portal account yet. An invitation is sent to it and an account is created once it is accepted, so this is the field to use instead of an account identifier when the person is new to the portal. | [optional] [maxLength: 255] |
| **type** | [**EmployeeType**](#model-employeetype) | The user type. | [optional] [enum: `All`, `RoomAdmin`, `Guest`, `DocSpaceAdmin`, `User`] |


## Authorization


### cookieAuth
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 


### bearerAuth

- **Type**: HTTP Bearer Token authentication


### asc_auth_key
- **Type**: API key
- **API key parameter name**: asc_auth_key
- **Location**: 


### Basic

- **Type**: HTTP basic authentication


### Bearer

- **Type**: HTTP Bearer Token authentication (JWT)


### ApiKeyBearer
- **Type**: API key
- **API key parameter name**: ApiKeyBearer
- **Location**: HTTP header


### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: 
- **Scopes**: 
  - read: Read access to protected resources
  - write: Write access to protected resources


### OpenId


### x-signature
- **Type**: API key
- **API key parameter name**: x-signature
- **Location**: 

