# AuditTrailModuleMapperDto
The audit trail actions of one module.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **moduleType** | **String** | The location inside the product, as the `moduleType` filter of `GET api/2.0/security/audit/events/filter` spells it. | [optional] [example: `Files`] [nullable] |
| **actions** | [**List**](audit-trail-action-mapper-dto.md) | Every action this module can record. Each action appears under exactly one module, so this tree is where a caller learns which module a given action belongs to. | [optional] [nullable] |
