# AuditTrailProductMapperDto
The audit trail actions of one product, grouped by module.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **productType** | **String** | The product this branch of the tree belongs to, as the `productType` filter of this operation spells it and as `GET api/2.0/security/audit/types` lists it under `productTypes`. | [optional] [example: `Documents`] [nullable] |
| **modules** | [**List**](audit-trail-module-mapper-dto.md) | The locations inside the product. It is empty when `moduleType` was passed and this product has no module of that name, which is why a product can come back with nothing under it. | [optional] [nullable] |
