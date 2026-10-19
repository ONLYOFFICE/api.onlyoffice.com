# MigrationStatusDto
How far the parse or the import queued for this portal has got, and what it produced once it stopped.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **progress** | **Double** (double) | The share of the job that is done, from 0 to 100. It advances unevenly, since the stages differ in length, so poll `isCompleted` rather than waiting for this to reach 100. | [optional] [example: `99.99`] |
| **error** | **String** | The message that ended the job, in the portal language. It stays empty while nothing has gone wrong, so once `isCompleted` is `true` this field is what tells success from failure. | [optional] [example: `Connection failed`] [nullable] |
| **parseResult** | [**MigrationApiInfo**](migration-api-info.md) | What the migrator has read so far. After a parse pass it holds the users, the groups and the archives it could not read, which is the body to edit and post to `POST api/2.0/migration/migrate`; during an import it also carries the accounts that were created and the ones that failed. Its own `operation` field, `parse` or `migration`, is what tells the two stages apart. | [optional] |
| **isCompleted** | **Boolean** | Whether the job has stopped, successfully or not. It is the field to poll on; the whole body comes back empty instead when the portal has no job at all, which is not an error. | [optional] [example: `true`] |
