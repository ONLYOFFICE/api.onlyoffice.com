# EditHistoryAuthor
The person a saved revision of a file, or one single change in it, is attributed to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **String** | The account the revision or the change is attributed to, as the editing service stored it. It is normally the identifier of a portal account; the empty identifier stands for a change nobody could be named for. | [required] [example: `9924256b-447c-4f19-9dbd-8ad8c39e8ff5`] [nullable] |
| **name** | **String** | The display name of that account as the portal spells it now, which need not be the name that was stored with the revision. An account that cannot be resolved - one removed from the portal, or a change made through an anonymous link - is reported as a guest. | [optional] [example: `John Doe`] [nullable] |
