# FirebaseDeviceDto
One mobile device of the calling user registered for push notifications.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The id of the registration. | [optional] [example: `1`] |
| **userId** | **UUID** (uuid) | The account the device belongs to; always the caller. | [optional] [example: `00000000-0000-0000-0000-000000000000`] |
| **tenantId** | **Integer** (int32) | The portal the registration belongs to; always the current one. | [optional] [example: `1`] |
| **firebaseDeviceToken** | **String** | The Firebase token the device was issued, as it was sent at registration. | [optional] [example: `fcm-token-123`] [nullable] |
| **application** | **String** | The application the registration is for; `doc` for the Documents application. | [optional] [example: `doc`] [nullable] |
| **isSubscribed** | **Boolean** | Whether the device is currently sent push notifications. | [optional] [example: `true`] [nullable] |
