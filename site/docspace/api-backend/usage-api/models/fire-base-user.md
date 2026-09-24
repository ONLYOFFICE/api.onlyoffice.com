# FireBaseUser
The Firebase user parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The Firebase user ID. | [optional] [example: `1`] |
| **userId** | **UUID** (uuid) | The user ID. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **tenantId** | **Integer** (int32) | The tenant ID. | [optional] [example: `1`] |
| **firebaseDeviceToken** | **String** | The Firebase device token. | [optional] [example: `token123`] [maxLength: 255] [nullable] |
| **application** | **String** | The Firebase application. | [optional] [example: `web`] [maxLength: 20] [nullable] |
| **isSubscribed** | **Boolean** | Specifies if the user is subscribed to the push notifications or not. | [optional] [example: `true`] [nullable] |
| **tenant** | [**DbTenant**](db-tenant.md) | The database tenant parameters. | [optional] |
