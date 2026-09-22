---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/enums/UsersType.ts
---

# UsersType

Defines the supported user types.

## Enumeration Members

### owner

```ts
owner: "Owner";
```

System owner with full administrative rights and control over the entire DocSpace instance

### docSpaceAdmin

```ts
docSpaceAdmin: "DocSpaceAdmin";
```

Administrator with system-wide management capabilities but limited compared to owner

### roomAdmin

```ts
roomAdmin: "RoomAdmin";
```

User with administrative rights within specific rooms or workspaces

### collaborator

```ts
collaborator: "Collaborator";
```

User with enhanced permissions for content creation and modification

### user

```ts
user: "User";
```

Regular user with basic access rights for viewing and interacting with content
