# AuditTrailTypesDto
The vocabularies the audit and login-history filters accept, one array of names per dimension of an event.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **actions** | **List** | Every action name the build can record, spelled as the `action` filter of `GET api/2.0/security/audit/events/filter` and `GET api/2.0/security/audit/login/filter` expects it. It is the whole vocabulary, not the actions this portal has recorded, and only a handful of the names are the sign-in actions the login filter accepts. | [optional] [example: `[FileCreated]`] [nullable] |
| **actionTypes** | **List** | The kinds of change an action can stand for, spelled as the `actionType` filter of `GET api/2.0/security/audit/events/filter` expects it. | [optional] [example: `[Create]`] [nullable] |
| **productTypes** | **List** | The products an action can belong to, spelled as the `productType` filter of `GET api/2.0/security/audit/mappers` expects it. The audit trail itself cannot be filtered by product. | [optional] [example: `[Documents]`] [nullable] |
| **moduleTypes** | **List** | The locations inside those products, spelled as the `moduleType` filter of `GET api/2.0/security/audit/events/filter` and `GET api/2.0/security/audit/mappers` expects it. | [optional] [example: `[Files]`] [nullable] |
| **entryTypes** | **List** | The kinds of object an action can be applied to, spelled as the `entryType` filter of `GET api/2.0/security/audit/events/filter` expects it. | [optional] [example: `[File]`] [nullable] |
