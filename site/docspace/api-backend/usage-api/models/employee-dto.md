# EmployeeDto
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
