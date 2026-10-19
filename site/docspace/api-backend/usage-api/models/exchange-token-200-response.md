# exchangeToken 200 response

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **access\_token** | **String** | The token to send as a Bearer credential when calling the portal on the user behalf. | [optional] [example: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`] |
| **token\_type** | **String** | How the access token is to be presented. It is always Bearer. | [optional] [example: `Bearer`] |
| **expires\_in** | **Integer** | How many seconds the access token stays valid, counted from the moment it was issued. | [optional] [example: `3600`] |
| **refresh\_token** | **String** | The token that buys a new access token once the current one expires. It is present only when the client is registered for the refresh token grant. | [optional] [example: `def502...`] |
