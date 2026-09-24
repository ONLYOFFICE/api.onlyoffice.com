# ONLYOFFICE DocSpace Rooms API

The browsable version of this reference, with a request builder and code samples, is published at
[https://api.onlyoffice.com/docspace/api-backend/usage-api/](https://api.onlyoffice.com/docspace/api-backend/usage-api/).

All URIs are relative to *https://yourportal.onlyoffice.com*, where the host is the address of your DocSpace instance.

## Rooms

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**addRoomTags**](add-room-tags.md) | **PUT** /api/2.0/files/rooms/\{id\}/tags | Attach tags to a room |
| [**archiveRoom**](archive-room.md) | **PUT** /api/2.0/files/rooms/\{id\}/archive | Archive a room |
| [**changeRoomCover**](change-room-cover.md) | **POST** /api/2.0/files/rooms/\{id\}/cover | Change the room cover |
| [**createRoom**](create-room.md) | **POST** /api/2.0/files/rooms | Create a room |
| [**createRoomFromTemplate**](create-room-from-template.md) | **POST** /api/2.0/files/rooms/fromtemplate | Create a room from the template |
| [**createRoomLogo**](create-room-logo.md) | **POST** /api/2.0/files/rooms/\{id\}/logo | Set the room logo |
| [**createRoomTag**](create-room-tag.md) | **POST** /api/2.0/files/tags | Create a room tag |
| [**createRoomTemplate**](create-room-template.md) | **POST** /api/2.0/files/roomtemplate | Create a room template |
| [**createRoomThirdParty**](create-room-third-party.md) | **POST** /api/2.0/files/rooms/thirdparty/\{id\} | Create a third-party room |
| [**deleteCustomTags**](delete-custom-tags.md) | **DELETE** /api/2.0/files/tags | Delete the custom room tags |
| [**deleteRoom**](delete-room.md) | **DELETE** /api/2.0/files/rooms/\{id\} | Remove a room |
| [**deleteRoomLogo**](delete-room-logo.md) | **DELETE** /api/2.0/files/rooms/\{id\}/logo | Remove a room logo |
| [**deleteRoomTags**](delete-room-tags.md) | **DELETE** /api/2.0/files/rooms/\{id\}/tags | Detach tags from a room |
| [**getExternalDbSyncStatus**](get-external-db-sync-status.md) | **GET** /api/2.0/files/rooms/\{id\}/externaldbsync | Get external DB sync status |
| [**getNewRoomItems**](get-new-room-items.md) | **GET** /api/2.0/files/rooms/\{id\}/news | Get new items in a room |
| [**getPublicSettings**](get-public-settings.md) | **GET** /api/2.0/files/roomtemplate/\{id\}/public | Get room template public access |
| [**getRoomCovers**](get-room-covers.md) | **GET** /api/2.0/files/rooms/covers | Get room cover gallery |
| [**getRoomCreatingStatus**](get-room-creating-status.md) | **GET** /api/2.0/files/rooms/fromtemplate/status | Get the room creation progress |
| [**getRoomIndexExport**](get-room-index-export.md) | **GET** /api/2.0/files/rooms/indexexport | Get the room index export |
| [**getRoomInfo**](get-room-info.md) | **GET** /api/2.0/files/rooms/\{id\} | Get room information |
| [**getRoomLinks**](get-room-links.md) | **GET** /api/2.0/files/rooms/\{id\}/links | Get the room links |
| [**getRoomSecurityInfo**](get-room-security-info.md) | **GET** /api/2.0/files/rooms/\{id\}/share | Get the room access rights |
| [**getRoomTagsInfo**](get-room-tags-info.md) | **GET** /api/2.0/files/tags | Get available room tags |
| [**getRoomTemplateCreatingStatus**](get-room-template-creating-status.md) | **GET** /api/2.0/files/roomtemplate/status | Get room template creation status |
| [**getRoomsFolder**](get-rooms-folder.md) | **GET** /api/2.0/files/rooms | Get rooms |
| [**getRoomsNewItems**](get-rooms-new-items.md) | **GET** /api/2.0/files/rooms/news | Get new items in all rooms |
| [**getRoomsPrimaryExternalLink**](get-rooms-primary-external-link.md) | **GET** /api/2.0/files/rooms/\{id\}/link | Get the room primary external link |
| [**hasTagLinks**](has-tag-links.md) | **GET** /api/2.0/files/tags/\{tagName\}/haslinks | Check room tag usage |
| [**pinRoom**](pin-room.md) | **PUT** /api/2.0/files/rooms/\{id\}/pin | Pin a room |
| [**reorderRoom**](reorder-room.md) | **PUT** /api/2.0/files/rooms/\{id\}/reorder | Reorder room contents |
| [**resendEmailInvitations**](resend-email-invitations.md) | **POST** /api/2.0/files/rooms/\{id\}/resend | Resend the room invitations |
| [**setPublicSettings**](set-public-settings.md) | **PUT** /api/2.0/files/roomtemplate/public | Set room template public access |
| [**setRoomLink**](set-room-link.md) | **PUT** /api/2.0/files/rooms/\{id\}/links | Set the room external or invitation link |
| [**setRoomSecurity**](set-room-security.md) | **PUT** /api/2.0/files/rooms/\{id\}/share | Set the room access rights |
| [**startExternalDbSync**](start-external-db-sync.md) | **POST** /api/2.0/files/rooms/\{id\}/externaldbsync | Start external DB sync |
| [**startRoomIndexExport**](start-room-index-export.md) | **POST** /api/2.0/files/rooms/\{id\}/indexexport | Start the room index export |
| [**terminateRoomIndexExport**](terminate-room-index-export.md) | **DELETE** /api/2.0/files/rooms/indexexport | Terminate the room index export |
| [**unarchiveRoom**](unarchive-room.md) | **PUT** /api/2.0/files/rooms/\{id\}/unarchive | Unarchive a room |
| [**unpinRoom**](unpin-room.md) | **PUT** /api/2.0/files/rooms/\{id\}/unpin | Unpin a room |
| [**updateRoom**](update-room.md) | **PUT** /api/2.0/files/rooms/\{id\} | Update a room |
| [**updateRoomTag**](update-room-tag.md) | **PUT** /api/2.0/files/tags | Rename a room tag |
| [**uploadRoomLogo**](upload-room-logo.md) | **POST** /api/2.0/files/logos | Upload a room logo image |

## Groups

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**addRoomGroup**](groups/add-room-group.md) | **POST** /api/2.0/files/group | Add a new room group |
| [**changeRoomGroupIcon**](groups/change-room-group-icon.md) | **POST** /api/2.0/files/group/\{id\}/icon | Change room group icon |
| [**deleteRoomGroup**](groups/delete-room-group.md) | **DELETE** /api/2.0/files/group/\{id\} | Delete a room group |
| [**getRoomGroupInfo**](groups/get-room-group-info.md) | **GET** /api/2.0/files/group/\{id\} | Get room group info |
| [**getRoomGroups**](groups/get-room-groups.md) | **GET** /api/2.0/files/group | List room groups |
| [**updateRoomGroup**](groups/update-room-group.md) | **PUT** /api/2.0/files/group/\{id\} | Update room group |

## Privacy room

| Method | HTTP request | Description |
|------------ | ------------- | -------------|
| [**deleteKeys**](privacy-room/delete-keys.md) | **DELETE** /api/2.0/privacyroom/keys/\{id\} | Delete an encryption key |
| [**getUserKeys**](privacy-room/get-user-keys.md) | **GET** /api/2.0/privacyroom/keys | Get own encryption keys |
| [**getUserKeysForRoom**](privacy-room/get-user-keys-for-room.md) | **GET** /api/2.0/privacyroom/\{roomId\}/access | Get private room access keys |
| [**replaceKey**](privacy-room/replace-key.md) | **PUT** /api/2.0/privacyroom/keys | Rotate an encryption key |
| [**setKeys**](privacy-room/set-keys.md) | **POST** /api/2.0/privacyroom/keys | Create an encryption key |

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

