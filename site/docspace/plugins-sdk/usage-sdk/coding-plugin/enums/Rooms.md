---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/enums/Rooms.ts
---

# Rooms

Enumerations for DocSpace room types and search scopes.

## RoomSearchArea

Defines the available search scopes for rooms within a room selector.

### Enumeration Members

#### Any

```ts
Any: "Any";
```

Search across all available rooms.

#### Active

```ts
Active: "Active";
```

Search only within active rooms.

#### Archive

```ts
Archive: "Archive";
```

Search only within archived rooms.

#### Templates

```ts
Templates: "Templates";
```

Search only within room templates.

***

## RoomsType

Defines the different types of rooms available in the system.

### Enumeration Members

#### PublicRoom

```ts
PublicRoom: "public-room";
```

A public room accessible to a wide audience.

#### FormRoom

```ts
FormRoom: "form-room";
```

A room designed for filling out forms.

#### EditingRoom

```ts
EditingRoom: "editing-room";
```

A room focused on collaborative document editing.

#### VirtualDataRoom

```ts
VirtualDataRoom: "virtual-data-room";
```

A secure room for data storage and review.

#### CustomRoom

```ts
CustomRoom: "custom-room";
```

A room with custom permissions and settings.
