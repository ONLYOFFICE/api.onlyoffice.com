# SecurityRequestsDto
Which member is granted or denied the administrator role of which portal module.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **productId** | **UUID** (uuid) | The module the role applies to, given by its GUID. The all-zero GUID stands for the portal itself and grants or revokes the DocSpace administrator role, which covers every module at once; a GUID that names no module group is stored without effect rather than refused. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **userId** | **UUID** (uuid) | The portal member the role is given to or taken from, by user ID. The member has to exist already - nobody is created here - and promoting a guest or a plain member turns them into a paid one. | [required] [example: `00000000-0000-0000-0000-000000000000`] |
| **administrator** | **Boolean** | Which way the role goes: `true` adds the member to the module administrator group, `false` removes them from it. Taking away the portal-wide role also drops the member from every product group. | [optional] [example: `true`] |
