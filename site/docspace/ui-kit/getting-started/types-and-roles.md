---
description: "What a person may do in ONLYOFFICE Apps depends on two separate things."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/Access.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# Types and roles

What a person may do in ONLYOFFICE Apps depends on two separate things. Most access bugs
come from mixing them up:

- **Their portal user type:** what they may do on the portal at all. For example, create
  rooms, manage accounts or open settings. It is set per person, portal-wide.
- **Their role in a room:** what they may do _inside one room_. The room's owner or manager
  grants it, and it never goes beyond what the person's type allows.

A Guest invited to a room as Editor can edit files in that room. They still cannot create a
room or open My documents. A Full admin who is not a member of a room cannot edit the room or
invite people into it: a room's contents are reached through membership, not rank.

The tables below come from the product's access-rights specification, which is the source of
truth. Click a column header to highlight that type or role down the table. Hover over a
header to see its enum value.

## The two vocabularies

### Portal user types

<APITable name="Portal-user-types">

| In the UI  | `EmployeeType`           | Flag on the user  |
| ---------- | ------------------------ | ----------------- |
| Owner      | `EmployeeType.Owner`     | `isOwner`         |
| Full admin | `EmployeeType.Admin`     | `isAdmin`         |
| Room admin | `EmployeeType.RoomAdmin` | `isRoomAdmin`     |
| User       | `EmployeeType.User`      | `isCollaborator`  |
| Guest      | `EmployeeType.Guest`     | `isVisitor`       |

</APITable>

Several flags can be true on one person: an owner is also an admin. To turn them into one
type, use `getUserType(user)` rather than reading a single flag. It checks them in the order
above and stops at the first match. It also counts someone with any `listAdminModules` as a
Full admin. `getUserTypeTranslation(type, t)` gives the UI name.

### Room roles

<APITable name="Room-roles">

| In the UI       | `ShareAccessRights`             |
| --------------- | ------------------------------- |
| Room owner      | `ShareAccessRights.FullAccess`  |
| Room manager    | `ShareAccessRights.RoomManager` |
| Content creator | `ShareAccessRights.Collaborator` |
| Editor          | `ShareAccessRights.Editing`     |
| Form filler     | `ShareAccessRights.FormFilling` |
| Reviewer        | `ShareAccessRights.Review`      |
| Commentator     | `ShareAccessRights.Comment`     |
| Viewer          | `ShareAccessRights.ReadOnly`    |

</APITable>

**Room owner** and **Room manager** are open only to Owners, Full admins and Room admins.
Every other role is open to every type, Guests included. Nobody can change their own role.

## What each portal user type can do

### My documents

A Guest has no My documents at all, so there is nothing to create or upload there.

<APITable name="My-documents">

| Action | Owner | Full admin | Room admin | User | Guest |
| --- | --- | --- | --- | --- | --- |
| Open the section | ✓ | ✓ | ✓ | ✓ | — |
| Create, upload, move, copy, rename, download, delete | ✓ | ✓ | ✓ | ✓ | — |

</APITable>

### Rooms

Nobody, not even the Owner, can edit someone else's room, invite people into it, change roles
in it, remove its members, or see the links of someone else's public room.

<APITable name="Rooms">

| Action | Owner | Full admin | Room admin | User | Guest |
| --- | --- | --- | --- | --- | --- |
| See all rooms | ✓ | ✓ | — | — | — |
| See rooms I own | ✓ | ✓ | ✓ | — | — |
| Create rooms | ✓ | ✓ | ✓ | — | — |
| See rooms I was invited to | ✓ | ✓ | ✓ | ✓ | ✓ |
| Pin rooms | ✓ | ✓ | ✓ | ✓ | ✓ |
| View members, history, room info | ✓ | ✓ | ✓ | ✓ | ✓ |
| Edit own rooms | ✓ | ✓ | ✓ | — | — |
| Invite external users to a room | ✓ | ✓ | ✓ | ✓ | ✓ |
| Invite portal users and groups to a room | ✓ | ✓ | ✓ | ✓ | — |
| Set a member's role when inviting | ✓ | ✓ | ✓ | ✓ | ✓ |
| Change member and group roles | ✓ | ✓ | ✓ | — | — |
| Remove members and groups | ✓ | ✓ | ✓ | — | — |
| Archive own rooms | ✓ | ✓ | ✓ | — | — |
| Duplicate own room | ✓ | ✓ | ✓ | — | — |
| Duplicate someone else's room | ✓ | ✓ | — | — | — |
| Change the owner of someone else's room | ✓ | ✓ | — | — | — |
| Archive someone else's room | ✓ | ✓ | — | — | — |

</APITable>

### Archive

The Archive is read-only for everyone: no creating, editing, inviting, role changes, removals
or pinning. What is left:

<APITable name="Archive">

| Action | Owner | Full admin | Room admin | User | Guest |
| --- | --- | --- | --- | --- | --- |
| See all archived rooms | ✓ | ✓ | — | — | — |
| See archived rooms I own | ✓ | ✓ | ✓ | — | — |
| See archived rooms I was invited to | ✓ | ✓ | ✓ | ✓ | ✓ |
| View members, history, room info | ✓ | ✓ | ✓ | ✓ | ✓ |
| Duplicate own room into Rooms | ✓ | ✓ | ✓ | — | — |
| Duplicate someone else's room into Rooms | ✓ | ✓ | — | — | — |
| Restore own room | ✓ | ✓ | ✓ | — | — |
| Restore any room | ✓ | ✓ | — | — | — |
| Delete own room | ✓ | ✓ | ✓ | — | — |
| Delete any room | ✓ | ✓ | — | — | — |

</APITable>

### Accounts

Users and Guests never reach this section, so they have no column. A Room admin can invite
and promote people up to User and no further: nobody grants a rank they do not hold. Guests
are never added to groups, whoever asks.

<APITable name="Accounts">

| Action | Owner | Full admin | Room admin |
| --- | --- | --- | --- |
| Invite a Full admin | ✓ | — | — |
| Invite a Room admin | ✓ | ✓ | — |
| Invite a User | ✓ | ✓ | ✓ |
| Promote to Full admin | ✓ | — | — |
| Promote to Room admin | ✓ | ✓ | — |
| Promote a Guest to User | ✓ | ✓ | ✓ |
| Demote a Full admin (to Room admin or User) | ✓ | — | — |
| Demote a Room admin to User | ✓ | ✓ | — |
| Demote a User to Guest | ✓ | ✓ | — |
| Block or delete a Full admin | ✓ | — | — |
| Block or delete a Room admin, User or Guest | ✓ | ✓ | — |
| Reassign a deleted person's data | ✓ | ✓ | — |
| Create and edit groups, change their membership | ✓ | ✓ | — |
| See the group list and its contents | ✓ | ✓ | ✓ |
| See guests invited by other people | ✓ | ✓ | — |
| See own guests | ✓ | ✓ | ✓ |

</APITable>

### Portal settings

<APITable name="Portal-settings">

| Action | Owner | Full admin | Room admin | User | Guest |
| --- | --- | --- | --- | --- | --- |
| Open portal settings | ✓ | ✓ | — | — | — |
| Delete the portal | ✓ | — | — | — | — |

</APITable>

### Sharing files

<APITable name="Sharing-files">

| Action | Owner | Full admin | Room admin | User | Guest |
| --- | --- | --- | --- | --- | --- |
| Share files with portal users | ✓ | ✓ | ✓ | ✓ | — |
| Share files with guests | ✓ | ✓ | ✓ | — | — |
| Share with guests the sharer cannot see | ✓ | ✓ | — | — | — |
| See the user and group list while sharing | ✓ | ✓ | ✓ | — | — |
| Quick share for forms | ✓ | ✓ | ✓ | ✓ | — |

</APITable>

## What each room role can do

### The room

<APITable name="The-room">

| Action | Room owner | Room manager | Content creator | Editor | Form filler | Reviewer | Commentator | Viewer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Edit the room | ✓ | ✓ | — | — | — | — | — | — |
| Invite users, set their role on invite | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Change member roles | ✓ | ✓ | — | — | — | — | — | — |
| Create, edit and delete room links | ✓ | ✓ | — | — | — | — | — | — |
| Moderate people asking to join | ✓ | ✓ | — | — | — | — | — | — |
| Remove members | ✓ | ✓ | — | — | — | — | — | — |
| View members, history, room info | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Archive the room | ✓ | — | — | — | — | — | — | — |
| Delete the room | ✓ | — | — | — | — | — | — | — |

</APITable>

### Files and folders in a room

Third-party storage has no version history in the portal, whatever the role.

<APITable name="Files-and-folders-in-a-room">

| Action | Room owner | Room manager | Content creator | Editor | Form filler | Reviewer | Commentator | Viewer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Create, upload | ✓ | ✓ | ✓ | — | — | — | — | — |
| Edit files | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| Fill form fields | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — |
| Review | ✓ | ✓ | ✓ | ✓ | — | ✓ | — | — |
| Comment | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Lock files against co-authors | ✓ | ✓ | ✓ | — | — | — | — | — |
| View version history | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| Manage version history | ✓ | ✓ | ✓ | — | — | — | — | — |
| Create, edit and delete file links | ✓ | ✓ | — | — | — | — | — | — |
| View content and comments, copy, print, download | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Save docxf as oform | ✓ | ✓ | ✓ | — | — | — | — | — |
| Delete, move and copy own files | ✓ | ✓ | ✓ | — | — | — | — | — |
| Delete, move, copy, rename other people's files | ✓ | ✓ | — | — | — | — | — | — |
| Copy files in from My documents | ✓ | ✓ | ✓ | — | — | — | — | — |

</APITable>

### Archived rooms

In an archived room every role can only read: members, history, room info, content and
comments, copy, print and download. Room owners, managers, content creators and editors can
also see version history. Owners, managers and content creators can copy files out into My
documents. Only the room owner can restore or delete the room.

### How room types differ

Only the differences from the tables above:

- **Virtual data room.** No Reviewer and no Commentator. Only the room owner and managers can
  invite people and set their roles. It adds a PDF-form workflow:
  - creating, uploading and setting up filling: owner, manager, content creator;
  - editing forms: the same, plus editor;
  - seeing forms not yet set up: owner, manager, content creator, editor, viewer;
  - seeing set-up forms one takes part in: all of those, plus form filler.
- **Form filling room.** Only four roles: owner, manager, content creator, form filler.
  Only the owner and managers can invite, and form fillers cannot see comments.
  - Starting and stopping collection, creating, uploading and editing forms, and syncing
    results to a spreadsheet: owner, manager, content creator.
  - Turning on XLSX collection and database sync: owner and manager.
  - The form list (running, in progress, completed): every role in the room.

## Checking access in code

**Ask the portal, not the matrix.** The server already applies these rules to every room,
folder and file it sends. It sends a `security` object with one flag per action (see
`TRoomSecurity` and `TFolderSecurity` in `types/`). A check derived from a type or a role
by hand can drift from the server. Then the UI offers an action that ends in a 403, or hides
one the person is allowed.

```tsx
import { useApi } from "@onlyoffice/apps-ui-kit/providers/api";

const { roomsApi } = useApi();
const room = (await roomsApi.getRoomInfo({ id: roomId })).data.response;

// "May this person invite people here?" This already includes the room
// type's narrowing (virtual data rooms and form filling rooms let only
// owners and managers invite).
const canInvite = room.security?.EditAccess;
```

The portal user type is the right question only for something that belongs to no room. For
example, whether to offer **Create room** at all:

```tsx
import { EmployeeType, getUserType } from "@onlyoffice/apps-ui-kit";

const type = getUserType(me);
const canCreateRooms =
  type === EmployeeType.Owner ||
  type === EmployeeType.Admin ||
  type === EmployeeType.RoomAdmin;
```

Two rules the server does not spell out in `security`, which an invite screen has to follow
itself:

- **Only free roles for Users, Guests and groups.** Room owner and Room manager count as paid
  roles. When the person being invited is a User, a Guest or a group, ONLYOFFICE Apps offers
  only the free roles, and in an AI room a Guest can only be a Viewer. The kit's
  `AccessRightSelect` draws the choice; which options to pass it is up to the screen.
- **No Guests in groups.** `PeopleSelector` shows the Guests tab only with `withGuests`, so a
  group member picker that leaves it out never offers them.

When a change touches one cell, read the whole row. The same action usually appears again in
the Archive, among the room roles and for a room type, and those copies drift apart one fix
at a time.
