---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/enums/UsersType.ts
---

# UsersType

Defines the supported user types.

## Enumeration Members

### owner

```ts
owner: "Owner";
```

System owner with full administrative rights and control over the entire DocSpace instance — shown as `Owner` in the portal

### docSpaceAdmin

```ts
docSpaceAdmin: "DocSpaceAdmin";
```

Administrator with system-wide management capabilities but limited compared to owner — shown as `Full admin` in the portal

### roomAdmin

```ts
roomAdmin: "RoomAdmin";
```

User with administrative rights within specific rooms or workspaces — shown as `Room admin` in the portal

### collaborator

```ts
collaborator: "Collaborator";
```

Member who creates and edits content in the rooms they are invited to, without managing the portal — shown as `User` in the portal

### user

```ts
user: "User";
```

External member with view and interaction rights only — shown as `Guest` in the portal
