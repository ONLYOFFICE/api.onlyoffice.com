---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UserRole.ts
---

# UserRole

Defines the supported user types, named as the portal names them.

Replaces the deprecated `UsersType`. An item may list members of either enum —
the portal matches a role against the old value as well as the new one — but
new code should use this one.

The values are not simply the member names: `user` is `"PortalUser"` because
`"User"` is the value the portal matches for a guest.

## Example

```typescript
import { IContextMenuItem, UserRole } from "@onlyoffice/docspace-plugin-sdk";

const adminOnly: IContextMenuItem = {
  key: "reports",
  label: "Reports",
  icon: "reports.svg",
  usersTypes: [UserRole.owner, UserRole.fullAdmin],
  onItemClick: () => ({ actions: [] }),
};
```

## Enumeration Members

### owner

```ts
owner: "Owner";
```

System owner with full administrative rights and control over the entire ONLYOFFICE Apps instance

### fullAdmin

```ts
fullAdmin: "FullAdmin";
```

Administrator with system-wide management capabilities but limited compared to owner — shown as `Full admin` in the portal

### roomAdmin

```ts
roomAdmin: "RoomAdmin";
```

User with administrative rights within specific rooms or workspaces

### user

```ts
user: "PortalUser";
```

Member who creates and edits content in the rooms they are invited to, without managing the portal — shown as `User` in the portal

### guest

```ts
guest: "Guest";
```

External member with view and interaction rights only — shown as `Guest` in the portal
