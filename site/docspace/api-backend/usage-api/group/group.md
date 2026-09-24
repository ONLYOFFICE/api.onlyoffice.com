# ONLYOFFICE DocSpace Group API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Group

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**addGroup**](add-group.md) | **POST** /api/2.0/group | Add a new group |
| [**addMembersTo**](add-members-to.md) | **PUT** /api/2.0/group/\{id\}/members | Add group members |
| [**deleteGroup**](delete-group.md) | **DELETE** /api/2.0/group/\{id\} | Delete a group |
| [**getGroup**](get-group.md) | **GET** /api/2.0/group/\{id\} | Get a group |
| [**getGroupByUserId**](get-group-by-user-id.md) | **GET** /api/2.0/group/user/\{userid\} | Get user groups |
| [**getGroups**](get-groups.md) | **GET** /api/2.0/group | Get groups |
| [**moveMembersTo**](move-members-to.md) | **PUT** /api/2.0/group/\{fromId\}/members/\{toId\} | Move group members |
| [**removeMembersFrom**](remove-members-from.md) | **DELETE** /api/2.0/group/\{id\}/members | Remove group members |
| [**setGroupManager**](set-group-manager.md) | **PUT** /api/2.0/group/\{id\}/manager | Set a group manager |
| [**setMembersTo**](set-members-to.md) | **POST** /api/2.0/group/\{id\}/members | Replace group members |
| [**updateGroup**](update-group.md) | **PUT** /api/2.0/group/\{id\} | Update a group |

## Search

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getGroupsWithFilesShared**](search/get-groups-with-files-shared.md) | **GET** /api/2.0/group/file/\{id\} | Search groups for a file |
| [**getGroupsWithFoldersShared**](search/get-groups-with-folders-shared.md) | **GET** /api/2.0/group/folder/\{id\} | Search groups for a folder |
| [**getGroupsWithRoomsShared**](search/get-groups-with-rooms-shared.md) | **GET** /api/2.0/group/room/\{id\} | Search groups for a room |

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

