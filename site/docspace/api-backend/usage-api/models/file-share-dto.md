# FileShareDto
One access entry on a file, a folder or a room: who holds it, at which level, and what the caller may change about it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **access** | [**FileShare**](file-share.md) | The level the subject holds on the entry. On a link entry it is the level the link hands to whoever opens it, and in a batch answer `Varies` means the subject holds different levels on the listed entries. | [optional] [enum: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`] |
| **sharedTo** | **oas_any_type_not_mapped** |  | [optional] [nullable] |
| **sharedToUser** | [**EmployeeFullDto**](employee-full-dto.md) | The account the entry belongs to. It is filled in only when `subjectType` says an account, and is null for a group entry and for a link. | [optional] |
| **sharedToGroup** | [**GroupSummaryDto**](group-summary-dto.md) | The portal group the entry belongs to, which hands the level to everybody in it. It is filled in only for a group entry, and is null otherwise. | [optional] |
| **sharedLink** | [**FileShareLink**](file-share-link.md) | The sharing link the entry stands for, together with everything set on it. It is filled in only for a link entry, and is null for an account or a group. | [optional] |
| **isLocked** | **Boolean** | Whether this entry is the caller's own, which is why they cannot change its level. Link entries never report it. | [required] [example: `false`] |
| **isOwner** | **Boolean** | Whether the subject created the entry the access is given on, and so cannot be removed from it. | [required] [example: `false`] |
| **canEditAccess** | **Boolean** | Whether the caller may change the level of this entry. It is false on the caller's own entry, on every link, and whenever the caller may not hand out access at all. | [required] [example: `true`] |
| **canEditInternal** | **Boolean** | Whether the caller may switch this link between being open to anybody and asking the visitor to sign in to the portal first. | [required] [example: `true`] |
| **canEditDenyDownload** | **Boolean** | Whether the caller may forbid downloading through this link. Only a link of a virtual data room reports true, and only while the room itself still allows downloads. | [required] [example: `true`] |
| **canEditExpirationDate** | **Boolean** | Whether the caller may move the moment this link stops working. | [required] [example: `true`] |
| **canRevoke** | **Boolean** | Whether the caller may take this entry away altogether, which for a link means deleting the link. | [required] [example: `true`] |
| **subjectType** | [**SubjectType**](subject-type.md) | What the entry was given to, which tells which of the three subject fields is filled in: an account, a group, or one of the kinds of link. | [required] [enum: `0`, `1`, `2`, `3`, `4`] |
