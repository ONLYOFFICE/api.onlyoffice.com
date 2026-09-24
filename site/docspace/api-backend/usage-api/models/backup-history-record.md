# BackupHistoryRecord
One stored backup of a portal.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** (uuid) | The ID of the backup, which is the same value as the `taskId` the backup was started with. Pass it to `DELETE api/2.0/backup/deletebackup/{id}` or as the `backupId` of `POST api/2.0/backup/startrestore`. | [required] [example: `11111111-1111-1111-1111-111111111111`] |
| **fileName** | **String** | The name of the stored archive. It is built from the portal alias and the moment the backup started, or from `workspace` instead of the alias for a backup of the whole server. | [required] [example: `myportal_2026-03-01_02-15-00.tar.gz`] [nullable] |
| **storageType** | [**BackupStorageType**](backup-storage-type.md) | The storage the archive was written to, reported as a number rather than as a name. | [required] [enum: `0`, `1`, `2`, `3`, `4`, `5`] |
| **createdOn** | **Date** (date-time) | The date and time the backup was stored at, in UTC. | [required] [example: `2026-03-01T02:15:00Z`] |
| **expiresOn** | **Date** (date-time) | The date and time a background cleaner removes this backup at. Only a backup written to `DataStore` expires, one day after it was stored; for every other storage type this is `0001-01-01T00:00:00`, which means the backup is kept until it is deleted by hand or pushed out by the stored-copies limit of a schedule. | [required] [example: `0001-01-01T00:00:00Z`] |
