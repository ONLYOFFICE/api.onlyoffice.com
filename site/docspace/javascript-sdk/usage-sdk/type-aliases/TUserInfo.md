---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TUserInfo

User information returned by [SDKInstance.getUserInfo](../classes/SDKInstance.md#getuserinfo).

```ts
type TUserInfo = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `activationStatus`? | `number` | Activation status. |
| `avatar` | `string` | Default avatar URL. |
| `avatarMax`? | `string` | Max avatar URL. |
| `avatarMedium`? | `string` | Medium avatar URL. |
| `avatarOriginal`? | `string` | Original avatar URL. |
| `avatarSmall` | `string` | Small avatar URL. |
| `cultureName`? | `string` | UI culture/locale (e.g. `"en-US"`). |
| `department`? | `string` | Department. |
| `displayName` | `string` | Full display name. |
| `email` | `string` | Login email. |
| `firstName` | `string` | First name. |
| `groups`? | `object`[] | User groups. |
| `hasAvatar` | `boolean` | Whether user has an avatar. |
| `id` | `string` | User UUID. |
| `isAdmin` | `boolean` | Portal admin flag. |
| `isAnonim`? | `boolean` | Anonymous flag. |
| `isCollaborator` | `boolean` | Collaborator flag. |
| `isLDAP` | `boolean` | LDAP-sourced account. |
| `isOwner` | `boolean` | Portal owner flag. |
| `isRoomAdmin` | `boolean` | Room admin flag. |
| `isSSO` | `boolean` | SSO-sourced account. |
| `isVisitor` | `boolean` | Guest/visitor flag. |
| `lastName` | `string` | Last name. |
| `listAdminModules`? | `string`[] | Registered admin modules. |
| `profileUrl` | `string` | Profile page URL. |
| `status`? | `number` | Employee status. |
| `title`? | `string` | Job title. |
| `userName` | `string` | Login username. |

</APITable>
