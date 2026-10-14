# AiRoomDataLifetimeDto
The rule by which the files of a room are removed once they have been lying in it for too long.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **deletePermanently** | **Boolean** | Decides what happens to a file that has grown too old: it is erased outright, or it is moved to the trash of the account that created the room, from where it can still be brought back. | [optional] [example: `false`] |
| **period** | [**AiRoomDataLifetimePeriod**](ai-room-data-lifetime-period.md) | The unit the age is counted in. Months and years are counted as calendar ones, so the same number of them covers a different number of days depending on when the clean-up runs. | [optional] [enum: `0`, `1`, `2`] |
| **value** | **Integer** (int32) | How many periods a file may stay in the room, counted from the moment it was last changed rather than from the moment the rule was set. Files that are already older than this are removed by the next clean-up. | [optional] [example: `12`] [min: 1] [max: 999] [nullable] |
| **enabled** | **Boolean** | Switches the rule on and off. Switching it off erases the rule instead of keeping it aside, so afterwards the room reports no rule at all and the other three values have to be sent again to bring it back. | [optional] [example: `true`] [nullable] |
