# CookieSettingsRequestsDto
How long an authentication session of the portal stays valid, and whether that limit is applied.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **lifeTime** | **Integer** (int32) | How long, in minutes, a session issued from now on remains valid. A value above 9999 is clamped to 9999 rather than refused, and 0 or less clears the number, which together with `enabled` leaves sessions that never expire on their own. Any positive value invalidates every session issued before this call, the caller's included, so the client has to keep the fresh cookie the response carries. | [optional] [example: `525600`] |
| **enabled** | **Boolean** | Whether the stored lifetime is applied at all. While it is false the number is ignored and an issued session is honoured for a year; while it is true the connections behind expired sessions are dropped as well. | [optional] [example: `true`] |
