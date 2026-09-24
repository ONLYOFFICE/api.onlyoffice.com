# AuditTrailActionMapperDto
One audit trail action, with the kind of change it stands for and the kind of object it applies to.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **messageAction** | **String** | The action name to send as the `action` filter of `GET api/2.0/security/audit/events/filter`, and the value that comes back as `actionId` on an event. | [optional] [example: `FileCreated`] [nullable] |
| **actionType** | **String** | The kind of change the action makes, accepted by the `actionType` filter of the same operation. | [optional] [example: `Create`] [nullable] |
| **entity** | **String** | The kind of object the action applies to, accepted by the `entryType` filter. It is `None` for an action that targets no object, such as a settings change, and an action with a second object type reports only the first one here. | [optional] [example: `File`] [nullable] |
