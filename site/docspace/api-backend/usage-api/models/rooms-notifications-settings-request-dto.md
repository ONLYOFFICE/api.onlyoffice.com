# RoomsNotificationsSettingsRequestDto
Which single room the calling user silences, and which way.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **roomsId** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **mute** | **Boolean** | Which way the room goes: `true` adds it to the caller silenced list, `false` takes it off again. While a room is silenced its activity is left out of the hourly and daily digests, the letters it would send at once are not sent, and its new-item counters are hidden. | [optional] [example: `true`] |
