# ONLYOFFICE DocSpace People API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Email

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**changeUserEmail**](email/change-user-email.md) | **PUT** /api/2.0/people/\{userid\}/email | Change a user email |
| [**sendEmailChangeInstructions**](email/send-email-change-instructions.md) | **POST** /api/2.0/people/email | Send instructions to change email |

## Guests

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**approveGuestShareLink**](guests/approve-guest-share-link.md) | **POST** /api/2.0/people/guests/share/approve | Approve a guest sharing link |
| [**deleteGuests**](guests/delete-guests.md) | **DELETE** /api/2.0/people/guests | Remove guest relations |

## Password

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**changeUserPassword**](password/change-user-password.md) | **PUT** /api/2.0/people/\{userid\}/password | Change a user password |
| [**sendUserPassword**](password/send-user-password.md) | **POST** /api/2.0/people/password | Remind a user password |

## Photos

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**createMemberPhotoThumbnails**](photos/create-member-photo-thumbnails.md) | **POST** /api/2.0/people/\{userid\}/photo/thumbnails | Create photo thumbnails |
| [**deleteMemberPhoto**](photos/delete-member-photo.md) | **DELETE** /api/2.0/people/\{userid\}/photo | Delete a user photo |
| [**getMemberPhoto**](photos/get-member-photo.md) | **GET** /api/2.0/people/\{userid\}/photo | Get a user photo |
| [**updateMemberPhoto**](photos/update-member-photo.md) | **PUT** /api/2.0/people/\{userid\}/photo | Update a user photo |
| [**uploadMemberPhoto**](photos/upload-member-photo.md) | **POST** /api/2.0/people/\{userid\}/photo | Upload a user photo |

## Profiles

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**addMember**](profiles/add-member.md) | **POST** /api/2.0/people | Add a user |
| [**checkUserExistsByEmail**](profiles/check-user-exists-by-email.md) | **GET** /api/2.0/people/exists | Check whether an email is taken |
| [**deleteMember**](profiles/delete-member.md) | **DELETE** /api/2.0/people/\{userid\} | Delete a user |
| [**deleteProfile**](profiles/delete-profile.md) | **DELETE** /api/2.0/people/@self | Close my own profile |
| [**getAllProfiles**](profiles/get-all-profiles.md) | **GET** /api/2.0/people | Get the active profiles |
| [**getClaims**](profiles/get-claims.md) | **GET** /api/2.0/people/tokendiagnostics | Get user claims |
| [**getProfileByEmail**](profiles/get-profile-by-email.md) | **GET** /api/2.0/people/email | Get a profile by user email |
| [**getProfileByUserId**](profiles/get-profile-by-user-id.md) | **GET** /api/2.0/people/\{userid\} | Get a profile by user ID |
| [**getSelfProfile**](profiles/get-self-profile.md) | **GET** /api/2.0/people/@self | Get my profile |
| [**inviteUsers**](profiles/invite-users.md) | **POST** /api/2.0/people/invite | Invite users |
| [**removeUsers**](profiles/remove-users.md) | **PUT** /api/2.0/people/delete | Delete users |
| [**resendUserInvites**](profiles/resend-user-invites.md) | **PUT** /api/2.0/people/invite | Resend activation emails |
| [**updateMember**](profiles/update-member.md) | **PUT** /api/2.0/people/\{userid\} | Update a user |
| [**updateMemberCulture**](profiles/update-member-culture.md) | **PUT** /api/2.0/people/\{userid\}/culture | Update a user culture |

## Quota

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**resetUsersQuota**](quota/reset-users-quota.md) | **PUT** /api/2.0/people/resetquota | Reset a user quota limit |
| [**updateUserQuota**](quota/update-user-quota.md) | **PUT** /api/2.0/people/userquota | Change a user quota limit |

## Search

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getAccountsEntriesWithFilesShared**](search/get-accounts-entries-with-files-shared.md) | **GET** /api/2.0/accounts/file/\{id\}/search | Search accounts for a file |
| [**getAccountsEntriesWithFoldersShared**](search/get-accounts-entries-with-folders-shared.md) | **GET** /api/2.0/accounts/folder/\{id\}/search | Search accounts for a folder |
| [**getAccountsEntriesWithRoomsShared**](search/get-accounts-entries-with-rooms-shared.md) | **GET** /api/2.0/accounts/room/\{id\}/search | Search accounts for a room |
| [**getSearch**](search/get-search.md) | **GET** /api/2.0/people/@search/\{query\} | Search users |
| [**getSimpleByFilter**](search/get-simple-by-filter.md) | **GET** /api/2.0/people/simple/filter | Filter users in brief |
| [**getUsersWithFilesShared**](search/get-users-with-files-shared.md) | **GET** /api/2.0/people/file/\{id\} | Search users for a file |
| [**getUsersWithFoldersShared**](search/get-users-with-folders-shared.md) | **GET** /api/2.0/people/folder/\{id\} | Search users for a folder |
| [**getUsersWithRoomShared**](search/get-users-with-room-shared.md) | **GET** /api/2.0/people/room/\{id\} | Search users for a room |
| [**searchUsersByExtendedFilter**](search/search-users-by-extended-filter.md) | **GET** /api/2.0/people/filter | Filter users in detail |
| [**searchUsersByQuery**](search/search-users-by-query.md) | **GET** /api/2.0/people/search | Search users by query |
| [**searchUsersByStatus**](search/search-users-by-status.md) | **GET** /api/2.0/people/status/\{status\}/search | Search users by status filter |

## Theme

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**changePortalTheme**](theme/change-portal-theme.md) | **PUT** /api/2.0/people/theme | Change the portal theme |
| [**getPortalTheme**](theme/get-portal-theme.md) | **GET** /api/2.0/people/theme | Get the portal theme |

## Third-party accounts

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getThirdPartyAuthProviders**](third-party-accounts/get-third-party-auth-providers.md) | **GET** /api/2.0/people/thirdparty/providers | Get third-party providers |
| [**linkThirdPartyAccount**](third-party-accounts/link-third-party-account.md) | **PUT** /api/2.0/people/thirdparty/linkaccount | Link a third-party account |
| [**signupThirdPartyAccount**](third-party-accounts/signup-third-party-account.md) | **POST** /api/2.0/people/thirdparty/signup | Sign up with a provider |
| [**unlinkThirdPartyAccount**](third-party-accounts/unlink-third-party-account.md) | **DELETE** /api/2.0/people/thirdparty/unlinkaccount | Unlink a third-party account |

## User data

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getDeletePersonalFolderProgress**](user-data/get-delete-personal-folder-progress.md) | **GET** /api/2.0/people/delete/personal/progress | Get the personal folder deletion progress |
| [**getReassignProgress**](user-data/get-reassign-progress.md) | **GET** /api/2.0/people/reassign/progress/\{userid\} | Get the reassignment progress |
| [**getRemoveProgress**](user-data/get-remove-progress.md) | **GET** /api/2.0/people/remove/progress/\{userid\} | Get the deletion progress |
| [**necessaryReassign**](user-data/necessary-reassign.md) | **GET** /api/2.0/people/reassign/necessary | Check data for reassignment need |
| [**sendInstructionsToDelete**](user-data/send-instructions-to-delete.md) | **PUT** /api/2.0/people/self/delete | Send the deletion instructions |
| [**startDeletePersonalFolder**](user-data/start-delete-personal-folder.md) | **POST** /api/2.0/people/delete/personal/start | Delete the personal folder |
| [**startReassign**](user-data/start-reassign.md) | **POST** /api/2.0/people/reassign/start | Start the data reassignment |
| [**startRemove**](user-data/start-remove.md) | **POST** /api/2.0/people/remove/start | Start the data deletion |
| [**terminateReassign**](user-data/terminate-reassign.md) | **PUT** /api/2.0/people/reassign/terminate | Terminate the data reassignment |
| [**terminateRemove**](user-data/terminate-remove.md) | **PUT** /api/2.0/people/remove/terminate | Terminate the data deletion |

## User status

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getByStatus**](user-status/get-by-status.md) | **GET** /api/2.0/people/status/\{status\} | Get profiles by status |
| [**updateUserActivationStatus**](user-status/update-user-activation-status.md) | **PUT** /api/2.0/people/activationstatus/\{activationstatus\} | Set my activation status |
| [**updateUserStatus**](user-status/update-user-status.md) | **PUT** /api/2.0/people/status/\{status\} | Change a user status |

## User type

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**getUserTypeUpdateProgress**](user-type/get-user-type-update-progress.md) | **GET** /api/2.0/people/type/progress/\{userid\} | Get the user type change progress |
| [**startUserTypeUpdate**](user-type/start-user-type-update.md) | **POST** /api/2.0/people/type | Start updating user type |
| [**terminateUserTypeUpdate**](user-type/terminate-user-type-update.md) | **PUT** /api/2.0/people/type/terminate | Terminate updating user type |
| [**updateUserType**](user-type/update-user-type.md) | **PUT** /api/2.0/people/type/\{type\} | Change a user type |

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

