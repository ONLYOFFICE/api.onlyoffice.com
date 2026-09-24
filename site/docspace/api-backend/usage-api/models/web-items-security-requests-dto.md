# WebItemsSecurityRequestsDto
The modules switched on or off together, one entry per module.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **items** | [**List**](item-key-value-pair-string-boolean.md) | The modules to switch, each entry pairing a module GUID as its `key` with the new enabled flag as its `value`. A key that is not a GUID fails the whole request as invalid, and a module listed twice is applied once, from its first entry. No allow-list travels here: switching a product module on restores the users and groups it was last restricted to, and everything else is stored as a plain allow or deny for everyone. | [optional] [example: `[{key=00000000-0000-0000-0000-000000000000, value=true}]`] [nullable] |
