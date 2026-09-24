# CronParams
The time a scheduled backup runs at.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **period** | [**BackupPeriod**](backup-period.md) | How often the backup runs: 0 for every day, 1 for every week and 2 for every month. | [optional] [enum: `0`, `1`, `2`] |
| **hour** | **Integer** (int32) | The hour of the day the backup starts at, from 0 to 23. | [optional] [example: `2`] |
| **day** | **Integer** (int32) | The day the backup runs on: the day of the week from 1 to 7, Sunday being 1, for a weekly schedule, and the day of the month from 1 to 31 for a monthly one. It is 0 for a daily schedule. | [optional] [example: `1`] |
