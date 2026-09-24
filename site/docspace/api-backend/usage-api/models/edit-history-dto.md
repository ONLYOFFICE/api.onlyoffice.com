# EditHistoryDto
One saved revision of a file, as the editing service recorded it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **Integer** (int32) | The file the revision belongs to; every entry of one history carries the same value. | [optional] [example: `123`] |
| **key** | **String** | The document key of this revision, which the editing service uses to tell the revisions of a file apart and to reuse the copy it has cached. Hand it back unchanged when asking the editor for this revision. | [optional] [example: `doc-key-abc123`] [nullable] |
| **version** | **Integer** (int32) | The number of the revision, counting up from 1 in the order the revisions were saved. It is the value the operations that show the changes of a revision or restore it expect. | [optional] [example: `2`] |
| **versionGroup** | **Integer** (int32) | Groups the revisions written by one editing session: entries sharing this number were saved while the same session was open, which is how a client collapses a long list of revisions into the versions a person would recognise. | [optional] [example: `1`] |
| **user** | [**EditHistoryAuthor**](edit-history-author.md) | The account that saved the revision. A revision saved by an account that no longer exists, or through an anonymous link, is reported as a guest. | [optional] |
| **created** | [**ApiDateTime**](api-date-time.md) | When the revision was saved, written with the offset of the portal's time zone rather than as plain UTC. The times of one history are consistent with each other, so order and display the revisions by them. | [optional] |
| **changesHistory** | **String** | The change record the editing service stored for this revision, as the raw JSON it was written in, and empty for a revision the portal has no record for - one uploaded as a whole file, for instance. `changes` is the same record already parsed. | [optional] [example: `Changes history text`] [nullable] |
| **changes** | [**List**](edit-history-changes-wrapper.md) | The single changes this revision introduced - who made each of them and when - taken from the stored change record. It comes back empty both for a revision whose changes were never recorded and for one whose record is in a format the portal no longer reads, so an empty list is not proof that nothing changed. | [optional] [example: `[{user={id=123, name=John Doe}, created=2021-01-01T00:00:00Z}]`] [nullable] |
| **serverVersion** | **String** | The build of the editing service that wrote the change record of this revision, taken from the record itself; empty when the portal holds no record for the revision. | [optional] [example: `8.0.1`] [nullable] |
