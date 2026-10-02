---
description: "Round picture of a person or a group, falling back to initials, with an optional role badge and an edit menu."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/avatar/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Avatar

Round picture of a person or a group, falling back to initials, with an optional role badge and
an edit menu. `size` and `role` are both required, and `role` is how you say "no badge".

<ThemedImage alt="Avatar" width={140} sources={{ light: require('./avatar--primary-light.png').default, dark: require('./avatar--primary-dark.png').default }} />

## Use this when / not when

- Use wherever a person or a group is named: a member list, a row, the author of a comment, a
  profile page.
- Not for a room or a file — that is [`RoomIcon`](./room-icon.md), which is square and
  takes a room's colour and logo.
- Not as a plain icon holder. It is always round, always sized from `size`, and always announced
  as a button.
- Not while the person is still loading: [`CircleSkeleton`](../skeletons/circle.md) is the round
  placeholder.

## Import

```ts
import {
  Avatar,
  AvatarRole,
  AvatarSize,
} from "@onlyoffice/apps-ui-kit/components/avatar";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme` above it in the tree: the
backgrounds, the initials' colour and the badge colours come from the theme, and the built-in
illustration is chosen by whether the theme is the light one.


## Stories

### Default

An avatar with nothing to show yet: with no picture and no name it falls back to a camera icon on the neutral background. Change any prop live in the Controls panel below.

<ThemedImage alt="Default" width={140} sources={{ light: require('./avatar--default-light.png').default, dark: require('./avatar--default-dark.png').default }} />

### With Image

A picture with the admin badge at its bottom corner; hover the badge to read its tooltip (`withTooltip`, `tooltipContent`).

<ThemedImage alt="With Image" width={140} sources={{ light: require('./avatar--with-image-light.png').default, dark: require('./avatar--with-image-dark.png').default }} />

### With Initials

Avatar showing initials generated from the user name. Uses first letter of first two words (JD).

<ThemedImage alt="With Initials" width={140} sources={{ light: require('./avatar--with-initials-light.png').default, dark: require('./avatar--with-initials-dark.png').default }} />

### With Icon

Avatar displaying an SVG icon instead of an image or initials.

<ThemedImage alt="With Icon" width={140} sources={{ light: require('./avatar--with-icon-light.png').default, dark: require('./avatar--with-icon-dark.png').default }} />

### All Sizes

All seven sizes side by side: max (124px), big (80px), medium (48px), base (40px), small (36px), min (32px) and extraSmall (24px); the initials and the admin badge shrink with the avatar.

<ThemedImage alt="All Sizes" width={532} sources={{ light: require('./avatar--all-sizes-light.png').default, dark: require('./avatar--all-sizes-dark.png').default }} />

### All Roles

Every `role` value on the same avatar: only Owner and Admin draw a badge at the bottom corner, User, Guest, Manager, Collaborator and None draw none.

<ThemedImage alt="All Roles" width={672} sources={{ light: require('./avatar--all-roles-light.png').default, dark: require('./avatar--all-roles-dark.png').default }} />

### Group Avatar

Group avatar with uppercase initials and specialized background color. Role icons are typically hidden for groups.

<ThemedImage alt="Group Avatar" width={140} sources={{ light: require('./avatar--group-avatar-light.png').default, dark: require('./avatar--group-avatar-dark.png').default }} />

### Editing Mode

A person with no picture yet: the plus button at the corner, or a click anywhere on the avatar, opens the file dialog straight away through the first `model` action, and the chosen file reaches `onChangeFile`. The button is drawn only at `size` `max`.

<ThemedImage alt="Editing Mode" width={140} sources={{ light: require('./avatar--editing-mode-light.png').default, dark: require('./avatar--editing-mode-dark.png').default }} />

### Editing With Avatar

A person who already has a picture: the pencil at the corner, or a click on the avatar, opens a menu of the `model` actions — **Upload picture** opens the file dialog, **Delete picture** runs its own handler.

<ThemedImage alt="Editing With Avatar" width={140} sources={{ light: require('./avatar--editing-with-avatar-light.png').default, dark: require('./avatar--editing-with-avatar-dark.png').default }} />

### With Custom Role Icon

Avatar with a custom role icon element instead of the default role badges.

<ThemedImage alt="With Custom Role Icon" width={140} sources={{ light: require('./avatar--with-custom-role-icon-light.png').default, dark: require('./avatar--with-custom-role-icon-dark.png').default }} />

### Default Source

Avatar showing the default placeholder image when no source or userName is provided.

<ThemedImage alt="Default Source" width={140} sources={{ light: require('./avatar--default-source-light.png').default, dark: require('./avatar--default-source-dark.png').default }} />

### Right To Left

The same avatars under a right-to-left interface: the admin badge and the pencil move from the bottom-right corner to the bottom-left one, and the badge tooltip opens to the left of it. The direction comes from the theme's `interfaceDirection` (the Direction toolbar); the wrapper also carries `dir="rtl"` for the rules that read the DOM direction.

<ThemedImage alt="Right To Left" width={236} sources={{ light: require('./avatar--right-to-left-light.png').default, dark: require('./avatar--right-to-left-dark.png').default }} />

### Css Customization

Four variables set on one wrapper -- the variables are listed under CSS variables on this page. The first avatar, with initials, shows the radius, the initials background and the weight; the second, with neither picture nor name, is there for `--avatar-bg`.

<ThemedImage alt="Css Customization" width={192} sources={{ light: require('./avatar--css-customization-light.png').default, dark: require('./avatar--css-customization-dark.png').default }} />

## Minimal example

With no `source`, the initials of `userName` are drawn instead. `AvatarRole.none` is the way to
ask for no badge.

```tsx
import {
  Avatar,
  AvatarRole,
  AvatarSize,
} from "@onlyoffice/apps-ui-kit/components/avatar";

export function MemberAvatar({ name }: { name: string }) {
  return (
    <Avatar size={AvatarSize.base} role={AvatarRole.none} userName={name} />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `role` | `AvatarRole` | Which role badge is drawn over the bottom corner. Only `owner` and `admin` draw anything — every other member, `none` included, renders no badge. |
| `size` | `AvatarSize` | Diameter of the avatar, from `extraSmall` (24px) to `max` (124px). It also picks the font size of the initials and the size and offset of the role icon; `extraSmall` has neither of those, so it fits a picture only. |
| `className`? | `string` | Applied to the avatar element and, again, to the picture inside it. |
| `dataTestId`? | `string` | Value of `data-testid` on the avatar. Default: `"avatar"`. |
| `editAction`? | `() => void` | Ignored. Nothing reads this prop; the edit button calls `model[0].onClick`. |
| `editing`? | `boolean` | Shows the edit button over the avatar — a pencil when `hasAvatar`, a plus otherwise. It is read only at `size` `max`; at any other size nothing is rendered. |
| `hasAvatar`? | `boolean` | Whether the user already has a picture. It picks the pencil over the plus, and decides whether a click opens the menu of `model` or goes straight to the file dialog. |
| `hideRoleIcon`? | `boolean` | Hides the role badge that `role` would otherwise draw. |
| `id`? | `string` | Ignored. Nothing reads this prop and no `id` reaches the DOM. |
| `imgClassName`? | `string` | Added to the `<img>`, for a source shown as a picture. Default: `""`. |
| `isDefaultSource`? | `boolean` | Shows the kit's own illustration when there is no `source` and no `userName`. Default: `false`. |
| `isGroup`? | `boolean` | Uppercases the initials and gives them the group background and colour. Default: `false`. |
| `isNotIcon`? | `boolean` | Renders a `.svg` source as a picture rather than fetching it as an icon. Default: `false`. |
| `model`? | `TAvatarModel[]` | Actions of the edit menu, in order. The first entry is the upload action: it is what a click runs when there is no picture yet, and the entry whose `key` is `AvatarActionKeys.PROFILE_AVATAR_UPLOAD` is handed the file input's ref. |
| `noClick`? | `boolean` | Stops a click from opening the upload menu, leaving the avatar inert. Default: `false`. |
| `onChangeFile`? | `() => void` | Called with the change event of the hidden file input, which is rendered only when this prop is given. Without it the avatar is not editable at all. |
| `onClick`? | `(e: React.MouseEvent) => void` | Called on a click on the avatar, and on a middle-button press. Passing it replaces the editing behaviour entirely: the upload menu no longer opens. |
| `roleIcon`? | `React.ReactElement<unknown, string \| React.JSXElementConstructor<any>>` | Badge to draw instead of the one `role` would choose. |
| `source`? | `React.JSX.Element \| string` | The picture. A React element is rendered as given; a string is a URL, shown with an `<img>` — except a path containing `.svg`, which is fetched and inlined as an icon unless `isNotIcon` is set, and one containing `default_user_photo`, which is replaced by the kit's own illustration. |
| `style`? | `React.CSSProperties` | Ignored. Nothing reads this prop and no inline style reaches the DOM. |
| `tooltipContent`? | `string` | Text of that tooltip. |
| `userName`? | `string` | Name to build initials from when there is no `source`: the first letter of each word, two at most. Lower case is preserved unless `isGroup` is set. |
| `withTooltip`? | `boolean` | Renders a tooltip anchored to the role badge. It needs a badge to attach to, so it does nothing unless `role` is `owner` or `admin`. |

</APITable>

### Enums

<APITable>

| Enum         | Members                                                              |
| ------------ | -------------------------------------------------------------------- |
| `AvatarSize` | `max`, `big`, `medium`, `base`, `small`, `min`, `extraSmall`         |
| `AvatarRole` | `owner`, `admin`, `guest`, `user`, `manager`, `collaborator`, `none` |

</APITable>

## Recipes

### A picture, with a role badge

Only `owner` and `admin` draw a badge; the other members of `AvatarRole` render nothing.

```tsx
import {
  Avatar,
  AvatarRole,
  AvatarSize,
} from "@onlyoffice/apps-ui-kit/components/avatar";

export function OwnerAvatar({ photo, name }: { photo: string; name: string }) {
  return (
    <Avatar
      size={AvatarSize.medium}
      role={AvatarRole.owner}
      source={photo}
      userName={name}
      withTooltip
      tooltipContent="Room owner"
    />
  );
}
```

### A group

```tsx
import {
  Avatar,
  AvatarRole,
  AvatarSize,
} from "@onlyoffice/apps-ui-kit/components/avatar";

export function GroupAvatar({ title }: { title: string }) {
  return (
    <Avatar
      size={AvatarSize.big}
      role={AvatarRole.none}
      userName={title}
      isGroup
    />
  );
}
```

### Editable, with an upload menu

`editing` is read at `size` `max` only, and the first entry of `model` is the upload action.

```tsx
import {
  Avatar,
  AvatarActionKeys,
  AvatarRole,
  AvatarSize,
} from "@onlyoffice/apps-ui-kit/components/avatar";

export function ProfileAvatar({
  photo,
  onFile,
  onRemove,
}: {
  photo?: string;
  onFile: () => void;
  onRemove: () => void;
}) {
  return (
    <Avatar
      size={AvatarSize.max}
      role={AvatarRole.none}
      source={photo}
      isDefaultSource
      editing
      hasAvatar={Boolean(photo)}
      onChangeFile={onFile}
      model={[
        {
          key: AvatarActionKeys.PROFILE_AVATAR_UPLOAD,
          label: "Upload a photo",
          icon: "",
          onClick: (ref) => ref?.current?.click(),
        },
        {
          key: AvatarActionKeys.PROFILE_AVATAR_DELETE,
          label: "Remove",
          icon: "",
          onClick: onRemove,
        },
      ]}
    />
  );
}
```

## Behaviour the types don't state

- **Four things can fill the circle, and the first match wins**: a `source` element as given; a
  `source` string — `.svg` fetched as an icon, `default_user_photo` swapped for the kit's
  illustration, anything else an `<img>`; then `userName` as initials; then `isDefaultSource` as
  the illustration; and failing all of those, a grey camera.
- **Only `owner` and `admin` have a badge.** `guest`, `user`, `manager` and `collaborator` are
  members of `AvatarRole` that draw nothing at all, so a "user" avatar and a `none` avatar look
  the same. Pass `roleIcon` for a badge of your own.
- **`editing` is ignored below `size="max"`.** The edit button, the pencil and the menu render
  only at 124px; at every other size the prop has no effect and the role badge takes that
  corner instead.
- **`onClick` replaces the editing behaviour.** The element's handler is `onClick` _or_ the
  built-in one, never both, so an avatar with your own click handler no longer opens the upload
  menu however `editing` and `model` are set.
- **`withTooltip` builds its anchor id from `Math.random()` on every render**, so the id changes
  between renders and between server and client. It also only attaches to the role badge, which
  means no badge, no tooltip.
- **The hidden file input has a literal `id` of `customAvatarInput`.** Two editable avatars on a
  page produce two elements with the same id.
- **`editAction`, `id` and `style` are ignored.** They are declared and never read; a class name
  is the only way in, and `className` lands on both the outer element and the picture.
- `size` fixes the box: 24, 32, 36, 40, 48, 80 and 124px. The role badge and the initials have
  no rule for `extraSmall`, so that size is for pictures.
- Initials take the first letter of each word of `userName`, two at most, and are uppercased
  only when `isGroup` is set — "jane doe" stays "jd" for a person.
- In a right-to-left interface the role badge and the edit button sit in the bottom-left corner,
  and the role tooltip opens to the left.
- A middle-button press calls `onClick` as well, through a `mousedown` handler.
- The component is memoised. `AvatarPure` is the same component without `memo`, exported for
  tests.

## CSS variables

<APITable>

| Variable                   | Default      | Effect                                                                                       |
| -------------------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `--avatar-radius`          | `50%`        | Corner radius of the avatar and of its picture — square it here                              |
| `--avatar-bg`              | theme grey   | Background of an avatar with neither `source` nor `userName`: the camera or the illustration |
| `--avatar-initials-bg`     | theme accent | Background behind a person's initials; a group's initials keep their own background          |
| `--avatar-initials-weight` | `600`        | Weight of a person's initials; a group's stay at `700`                                       |

</APITable>

Behind a `source` the background is a theme colour that none of these overrides. The kit's
illustration stays round whatever `--avatar-radius` says, and so does the edit button.

The badge colours (`--avatar-owner-fill`, `--avatar-administrator-fill` and their strokes) are
set from the theme on the avatar element and can be overridden the same way.

## Accessibility

- The element carries `role="button"` at all times — including when nothing is clickable — and
  has neither a `tabIndex` nor a key handler, so it is announced as a button that cannot be
  reached or activated from the keyboard.
- A picture is rendered with the literal alt text `"avatar"`, not the user's name, so a screen
  reader announces the same word for everyone. Put the name next to the avatar in text.
- The edit button is not in the tab order either and handles no key, so a host that makes the
  avatar editable or clickable must offer a keyboard path to the same action.
- Initials are plain text with no label, and the role badge is an inline SVG with none either —
  the badge's meaning is available only as a hover tooltip.
- `tooltipContent` is not translated by the component; pass text you have already translated.

## Test ids

<APITable>

| Element         | `data-testid`                           |
| --------------- | --------------------------------------- |
| The avatar      | `avatar`, overridable with `dataTestId` |
| The edit button | `edit_avatar_icon_button`               |
| The file input  | `file-input`                            |

</APITable>

Each entry of `model` becomes a menu item whose test id is that entry's `key`.

## Related

- [`RoomIcon`](./room-icon.md) — the square equivalent for a room.
- [`CircleSkeleton`](../skeletons/circle.md) — the placeholder to show while the person loads.
- [`IconButton`](../interactive-elements/icon-button.md) — what the edit button is made of.
