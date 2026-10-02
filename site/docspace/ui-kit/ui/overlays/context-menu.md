---
description: "Menu opened at the pointer through a ref, with submenus, a mobile sheet form and working keyboard navigation."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/context-menu/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# ContextMenu

Menu opened at the pointer through a ref, with submenus, a mobile sheet form and working
keyboard navigation. It has no visibility prop: you keep a ref and call `show(event)`.

<ThemedImage alt="ContextMenu" width={287} sources={{ light: require('./context-menu--primary-light.png').default, dark: require('./context-menu--primary-dark.png').default }} />

## Use this when / not when

- Use for a right-click menu, or for the actions of a row, a card or a file — anywhere the menu
  belongs to the thing the user pointed at.
- Use it when the menu has to be reachable from the keyboard. It is the only menu in the kit
  with arrow keys, Enter and Escape that work.
- Not for a menu anchored to a button you control: [`DropDown`](./drop-down.md) is
  simpler, and [`ContextMenuButton`](../interactive-elements/context-menu-button.md) wires the two together.
- Not for choosing a value — [`ComboBox`](../form-controls/combobox.md).
- Not as a dialog. The backdrop only appears in the mobile form or with `ignoreChangeView`,
  and nothing traps focus.

## Import

```ts
import { ContextMenu } from "@onlyoffice/apps-ui-kit/components/context-menu";
```

Also exported from the root barrel `@onlyoffice/apps-ui-kit`.

Needs `ThemeProvider` from `@onlyoffice/apps-ui-kit/providers/theme`, and
`TranslationProvider` from `@onlyoffice/apps-ui-kit/providers/translation` for the labels the
menu supplies itself on the mobile sheet.


## Stories

### Default

Full-featured context menu with icons, separators, nested submenus and a disabled item. Disabled items are dropped from the list by default; `showDisabledItems` keeps them greyed out. Right-click the colored area to open.

<ThemedImage alt="Default" width={216} sources={{ light: require('./context-menu--default-light.png').default, dark: require('./context-menu--default-dark.png').default }} />

### Simple Menu

A flat list of actions with one separator and no submenus — the shape most row and card menus need, with nothing but `ref` and `model` set. Right-click the colored area to open.

<ThemedImage alt="Simple Menu" width={216} sources={{ light: require('./context-menu--simple-menu-light.png').default, dark: require('./context-menu--simple-menu-dark.png').default }} />

### With Backdrop

Context menu with a backdrop overlay. `withBackdrop` shows the backdrop only while the menu is a bottom sheet (viewports up to 600px), so on a desktop viewport it also needs `ignoreChangeView`, which this story passes. The mobile stories below set both props too, so the sheet and its backdrop appear however short the menu is.

<ThemedImage alt="With Backdrop" width={216} sources={{ light: require('./context-menu--with-backdrop-light.png').default, dark: require('./context-menu--with-backdrop-dark.png').default }} />

### With Item Descriptions

Items carrying `description` are laid out as two lines: the label row and an always-visible description under it. The menu grows to the width of its longest description.

<ThemedImage alt="With Item Descriptions" width={216} sources={{ light: require('./context-menu--with-item-descriptions-light.png').default, dark: require('./context-menu--with-item-descriptions-dark.png').default }} />

### Item Variants

Every kind of item the model supports, in one menu. From top to bottom:

- **Notifications** — a switch inside the item (`withToggle`, `checked`). Clicking it flips the switch and keeps the menu open.
- **Auto-save** — the same switch, disabled. The label keeps its color and only the switch is greyed (`disabledStylesType: "toggle"`); hover the switch to read why it is off (`getTooltipContent` anchored with `tooltipTarget: "toggle"`).
- **Share with people** — the icon is a React element (`iconNode`) instead of an image URL.
- **Ask the MCP server** — the MCP server icon (`withMCPIcon`): the server logo when `icon` is given, the first letter of the label otherwise.
- **Export to PDF** — a text badge after the label (`badgeLabel`).
- **Version history** — the same badge in the paid-feature color (`badgeLabel` + `isPaidBadge`).
- **Help Center** — an external link that opens in a new tab (`url`, `target`); `isOutsideLink` adds the arrow.
- **Delete** — a disabled item. It stays in the list only because of `showDisabledItems`; hover it to read the reason (`getTooltipContent`).

<ThemedImage alt="Item Variants" width={216} sources={{ light: require('./context-menu--item-variants-light.png').default, dark: require('./context-menu--item-variants-dark.png').default }} />

### Dynamic Model

`getContextModel` replaces a static `model`: the getter runs each time the menu opens, so the first item shows the time of that open and the favorite item reads the state changed by its own click. Leading and trailing separators in the result are trimmed.

<ThemedImage alt="Dynamic Model" width={216} sources={{ light: require('./context-menu--dynamic-model-light.png').default, dark: require('./context-menu--dynamic-model-dark.png').default }} />

### Attached To Document

The blue square has no handler of its own and nothing calls `show`: with `global` the menu attaches itself to the whole document, so a right-click on the square and one on the empty space around it open the same menu. Use it for a page-level menu that is not tied to one element.

<ThemedImage alt="Attached To Document" width={1014} sources={{ light: require('./context-menu--attached-to-document-light.png').default, dark: require('./context-menu--attached-to-document-dark.png').default }} />

### Max Height

The model has sixteen items, but the menu is only 240px tall — about six and a half rows — and the rest scrolls inside it (`maxHeight`). Hover **Move to**: its submenu has twelve folders and is limited the same way, to 160px (`maxHeightLowerSubmenu`).

<ThemedImage alt="Max Height" width={216} sources={{ light: require('./context-menu--max-height-light.png').default, dark: require('./context-menu--max-height-dark.png').default }} />

### Mobile With Header

Shown at 320px, where the menu is a bottom sheet with the `header` on top: the title and, in the 32px block that `isRoom` gives it, the title's initials on the header `color` (the block renders only when `icon` is set; `color` then replaces the icon). Tap **Move or copy**: the submenu replaces the list in place and the header turns into a back button. `ignoreChangeView` forces the sheet layout regardless of the menu height.

<ThemedImage alt="Mobile With Header" width={1014} sources={{ light: require('./context-menu--mobile-with-header-light.png').default, dark: require('./context-menu--mobile-with-header-dark.png').default }} />

### Mobile With Avatar Header

The same bottom sheet with a person as the subject: `header.avatar` renders an avatar instead of the initials block.

<ThemedImage alt="Mobile With Avatar Header" width={1014} sources={{ light: require('./context-menu--mobile-with-avatar-header-light.png').default, dark: require('./context-menu--mobile-with-avatar-header-dark.png').default }} />

### Anchored To Element

Click **Actions**: the menu opens under the button, at its left edge, wherever the pointer was (`containerRef`). Use it for a menu that belongs to a toolbar button or a row's action button rather than to a right-click. `leftOffset` and `rightOffset` move it left from that edge; change them live in the Controls panel below.

<ThemedImage alt="Anchored To Element" width={256} sources={{ light: require('./context-menu--anchored-to-element-light.png').default, dark: require('./context-menu--anchored-to-element-dark.png').default }} />

### Right To Left

The menu in a right-to-left interface: it opens to the left of the pointer, the icons sit on the right of the labels, and the third item's submenu opens to the left with its arrow pointing left. The menu renders into the right-to-left container (`appendTo`), because on its own it goes to the end of the page body, outside any `dir` wrapper.

<ThemedImage alt="Right To Left" width={216} sources={{ light: require('./context-menu--right-to-left-light.png').default, dark: require('./context-menu--right-to-left-dark.png').default }} />

### Css Customization

Every variable a desktop menu can show, passed through the menu's own `style` prop, since the menu is portalled out of any wrapper -- the variables are listed under CSS variables on this page. Hover **Delete** for the hover background, hover **Rename** for the disabled one, and press Arrow Down for the keyboard highlight. The mobile header rows only apply to the bottom sheet.

<ThemedImage alt="Css Customization" width={216} sources={{ light: require('./context-menu--css-customization-light.png').default, dark: require('./context-menu--css-customization-dark.png').default }} />

## Minimal example

The menu is opened by handing an event to `show`, which is where its position comes from.

```tsx
import { useRef } from "react";
import {
  ContextMenu,
  type ContextMenuRefType,
} from "@onlyoffice/apps-ui-kit/components/context-menu";

export function FileCard({
  name,
  onRename,
}: {
  name: string;
  onRename: () => void;
}) {
  const menu = useRef<ContextMenuRefType>(null);

  return (
    <div onContextMenu={(event) => menu.current?.show(event)}>
      {name}
      <ContextMenu
        ref={menu}
        model={[{ key: "rename", label: "Rename", onClick: onRename }]}
      />
    </div>
  );
}
```

## Props


<APITable name="Props">

| Property | Type | Description |
| --- | --- | --- |
| `model` | `ContextMenuModel[]` | The items. It is read only while the menu opens, and `getContextModel` replaces it entirely when that is given. |
| `appendTo`? | `HTMLElement` | Element the menu is rendered into, instead of `document.body`. |
| `autoZIndex`? | `boolean` | Ignored. Nothing reads this prop. Default: `true`. |
| `badgeIconColor`? | `string` | Colour of that badge. |
| `badgeUrl`? | `string` | URL of the badge image in the header. |
| `baseZIndex`? | `number` | Stacking order of the backdrop. |
| `className`? | `string` | Applied to the menu element. |
| `containerRef`? | `RefObject<HTMLDivElement \| null>` | Element to position the menu against instead of the pointer. With it the menu opens at that element's top-left corner rather than where the user clicked. |
| `dataTestId`? | `string` | Value of `data-testid` on the menu. |
| `fillIcon`? | `boolean` | Recolours the items' icons to the text colour. Default: `true`. |
| `getContextModel`? | `TGetContextMenuModel` | Builds the items each time the menu opens, replacing `model`. This is the one to use for a menu whose entries depend on the current selection. |
| `global`? | `boolean` | Ignored. Nothing reads this prop. |
| `header`? | `HeaderType` | Title, icon and badge of the bar above the items, on the mobile sheet. |
| `headerOnlyMobile`? | `boolean` | Renders the header only in the mobile sheet form. Default: `false`. |
| `id`? | `string` | Applied to the menu element. |
| `ignoreChangeView`? | `boolean` | Forces that mobile sheet form, and with it the backdrop, at any width. |
| `isArchive`? | `boolean` | Renders that header in its archived form. |
| `isRoom`? | `boolean` | Renders the header in its room form, with a logo and a cover. |
| `leftOffset`? | `number` | Shifts the menu left by this many pixels, when positioned against a container. |
| `maxHeight`? | `number` | Maximum height for the context menu content area |
| `maxHeightLowerSubmenu`? | `number` | Height cap of a second-level submenu, in pixels. |
| `onHide`? | `(e?: React.MouseEvent \| MouseEvent \| Event \| React.ChangeEvent<HTMLInputElement>) => void` | Specifies a callback function that is invoked when a popup menu is hidden |
| `onShow`? | `(e: React.MouseEvent \| MouseEvent \| Event \| React.ChangeEvent<HTMLInputElement>) => void` | Specifies a callback function that is invoked when a popup menu is shown |
| `ref`? | `RefObject<ContextMenuRefType \| null>` | Handle the menu is opened through: `show(event)`, `hide(event)` and `toggle(event)`. There is no visibility prop — this is the only way. |
| `rightOffset`? | `number` | Shifts it further left again; both offsets are subtracted. |
| `scaled`? | `boolean` | Matches the menu's width to that container's. |
| `showDisabledItems`? | `boolean` | Keeps disabled items in the menu instead of dropping them. |
| `style`? | `CSSProperties` | Applied to the menu element. |
| `withBackdrop`? | `boolean` | Whether a backdrop is rendered behind the menu. It is only visible when the menu is in its mobile sheet form, so on a desktop it shows nothing. |
| `withHotkeys`? | `boolean` | Whether the arrow keys, Enter and Escape work while the menu is open. This is the one menu in the kit that can be used from the keyboard. Default: `true`. |
| `withoutBackHeaderButton`? | `boolean` | Removes the back arrow from a submenu's header on the mobile sheet. |

</APITable>

### An item

`model` and `getContextModel` return a list of these, or of separators.


<APITable name="An-item">

| Property | Type | Description |
| --- | --- | --- |
| `key` | `number \| string` | Identifier of the item, used as its React key. |
| `label` | `ReactNode` | What the item reads. A string also becomes its hover tooltip. |
| `action`? | `string` | Arbitrary name handed back to `onClick` as its `action`. |
| `badgeLabel`? | `string` | Text of the paid badge. |
| `checked`? | `boolean` | Whether that toggle is on. |
| `className`? | `string` | Applied to the item element. |
| `dataTestId`? | `string` | Value of `data-testid` on the item. |
| `description`? | `ReactNode` | Secondary line rendered under the item label and always visible - what choosing this item means. The item grows to fit it. |
| `disableColor`? | `string` | Colour of the item's text while it is disabled. |
| `disabled`? | `boolean` | Greys the item out and stops its `onClick`. |
| `disabledStylesType`? | `"default" \| "toggle"` | Which disabled styling to use — the toggle variant keeps the label readable. |
| `getTooltipContent`? | `() => React.ReactNode` | Builds the tooltip's content. |
| `icon`? | `string` | URL of the item's icon, fetched at runtime. `iconNode` is the alternative. |
| `iconNode`? | `ReactNode` | The icon as JSX, rendered inline instead of fetching `icon`. |
| `id`? | `string` | Applied to the item element. |
| `isHeader`? | `boolean` | Renders the item as a heading rather than a choice. |
| `isLoader`? | `boolean` | Renders a skeleton in place of the item. |
| `isOutsideLink`? | `boolean` | Marks a `url` as leaving the application, which draws the external-link icon. |
| `isPaidBadge`? | `boolean` | Renders that badge. |
| `isSeparator`? | `undefined` | Absent on a normal item; it is what tells the two shapes apart. |
| `items`? | `ContextMenuModel[]` | Items of a submenu, which an arrow then opens to the side. |
| `onClick`? | `ContextMenuTypeOnClick` | Called when the item is chosen, with the event and the item itself. |
| `onLoad`? | `() => Promise<ContextMenuModel[]>` | Loads the submenu's items when the item is opened. |
| `preventNewTab`? | `boolean` | Stops a `url` opening in a new tab. |
| `style`? | `CSSProperties` | Applied to the item element. |
| `target`? | `string` | `target` of the link, for an item with a `url`. |
| `template`? | `unknown` | Ignored by this component. |
| `tooltipTarget`? | `"item" \| "toggle"` | Which part of the item the tooltip is anchored to. |
| `url`? | `string` | Makes the item a link to this address rather than a button. |
| `withMCPIcon`? | `boolean` | Draws the MCP icon after the label. |
| `withToggle`? | `boolean` | Renders a toggle at the end of the item instead of an action. |

</APITable>

## Recipes

### Items that depend on the selection

`getContextModel` is called each time the menu opens, so it sees the current state; `model` is
only the fallback.

```tsx
import { useRef, useState } from "react";
import {
  ContextMenu,
  type ContextMenuRefType,
} from "@onlyoffice/apps-ui-kit/components/context-menu";

export function SelectableCard({ name }: { name: string }) {
  const menu = useRef<ContextMenuRefType>(null);
  const [pinned, setPinned] = useState(false);

  return (
    <div onContextMenu={(event) => menu.current?.show(event)}>
      {name}
      <ContextMenu
        ref={menu}
        model={[]}
        getContextModel={() => [
          {
            key: "pin",
            label: pinned ? "Unpin" : "Pin",
            onClick: () => setPinned(!pinned),
          },
          { key: "sep", isSeparator: true },
          { key: "delete", label: "Delete", disabled: pinned },
        ]}
        onHide={() => {}}
      />
    </div>
  );
}
```

### A submenu, anchored to a button rather than the pointer

```tsx
import { useRef } from "react";
import {
  ContextMenu,
  type ContextMenuRefType,
} from "@onlyoffice/apps-ui-kit/components/context-menu";

export function ShareMenu({ onCopy }: { onCopy: () => void }) {
  const menu = useRef<ContextMenuRefType>(null);
  const anchor = useRef<HTMLDivElement>(null);

  return (
    <div ref={anchor}>
      <button type="button" onClick={(event) => menu.current?.toggle(event)}>
        Share
      </button>
      <ContextMenu
        ref={menu}
        containerRef={anchor}
        scaled
        model={[
          { key: "copy", label: "Copy the link", onClick: onCopy },
          {
            key: "access",
            label: "Access",
            items: [
              { key: "view", label: "Can view" },
              { key: "edit", label: "Can edit" },
            ],
          },
        ]}
      />
    </div>
  );
}
```

## Behaviour the types don't state

- **It is opened imperatively, and the event is not optional.** `show(event)` reads `pageX` and
  `pageY` off it to place the menu, calls `preventDefault` and `stopPropagation`, and then
  flips the menu when it would run past the viewport. With `containerRef` the menu goes to that
  element's corner instead, and the offsets are subtracted from it.
- **`getContextModel` replaces `model` on every open**, which is why a menu built from a
  selection must use it — `model` is read when the component renders, not when the menu opens.
- **A leading or trailing separator is dropped**, so a list built by filtering does not end up
  with a rule against the edge.
- **On a phone the menu becomes a sheet at the bottom** — a viewport 600px wide or narrower,
  and only when the menu is taller than 210px or `ignoreChangeView` is set. In that form it is
  portalled into `#root`, found by that literal id, and the backdrop finally appears. On a
  desktop `withBackdrop` shows nothing unless `ignoreChangeView` is set too, which brings the
  backdrop behind the ordinary menu.
- **On the sheet a submenu replaces the list in place**, with a back button in the header,
  rather than opening to the side.
- **Disabled items are dropped from the list** unless `showDisabledItems` is set; then they
  are shown greyed out, and an item's `getTooltipContent` explains on hover why it is
  disabled.
- **Escape, the arrow keys and Enter work** while the menu is open, through a `keyup` listener
  on the window. `withHotkeys={false}` turns them off. Nothing else in the kit's menus does
  this.
- Opening the menu again while it is open re-shows it at the new position rather than toggling
  it; `toggle(event)` is the one that closes.
- An item with `items` opens a submenu to the side on hover, to any depth, and one with
  `onLoad` fetches them the first time it is opened.
- `global` and `autoZIndex` are declared and never read.

## CSS variables

The menu is portalled out of its parent, so a variable set on a wrapper element never reaches
it: pass them through the menu's own `style` prop (or render it inside the wrapper with
`appendTo`). Every default not given below comes from the theme.

<APITable name="CSS-variables">

| Variable                                       | Default                          | Effect                                                                                                                    |
| ---------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `--context-menu-bg`                            | theme                            | Menu background                                                                                                           |
| `--context-menu-border-style`                  | none (light), `1px solid` (dark) | Menu border, as a `border` shorthand                                                                                      |
| `--context-menu-header-border-style`           | theme                            | Separator line, and the mobile header's bottom border                                                                     |
| `--context-menu-shadow`                        | theme                            | Menu `box-shadow`                                                                                                         |
| `--context-menu-text`                          | theme                            | Item text and icon colour                                                                                                 |
| `--context-menu-item-hover-bg`                 | theme                            | Item background on hover, and of the item whose submenu is open                                                           |
| `--context-menu-item-disabled-text`            | theme                            | Disabled item text colour                                                                                                 |
| `--context-menu-item-disabled-bg`              | theme                            | Disabled item background on hover                                                                                         |
| `--context-menu-active-item-bg`                | theme                            | Background of the item highlighted from the keyboard                                                                      |
| `--context-menu-radius`                        | `6px`                            | Corner radius                                                                                                             |
| `--context-menu-menu-item-padding`             | `0 16px`                         | Item padding; keep the vertical part 0, the list height is computed for it                                                |
| `--context-menu-divider-margin`                | `6px 16px`                       | Separator margin; keep the vertical part 6px, the list height is computed for it                                          |
| `--context-menu-item-text-size`                | `13px`                           | Item font size                                                                                                            |
| `--context-menu-item-text-weight`              | `600`                            | Item font weight                                                                                                          |
| `--context-menu-item-height`                   | `36px`                           | Item row height; the list is sized for 36px, so another value leaves a gap or a scrollbar unless items carry descriptions |
| `--context-menu-item-with-description-padding` | `8px 12px`                       | Padding of an item that has a `description`                                                                               |
| `--context-menu-item-description-width`        | `330px`                          | Width of the description line, which sets the menu's width                                                                |
| `--context-menu-item-description`              | theme                            | Description text colour                                                                                                   |
| `--context-menu-header-row-height`             | `55px`                           | Mobile sheet header height                                                                                                |
| `--context-menu-header-inner-padding`          | `6px 16px`                       | Mobile sheet header padding                                                                                               |
| `--context-menu-header-text-size`              | `15px`                           | Mobile sheet header font size                                                                                             |

</APITable>

Otherwise the menu's width is the widest item, and its height is capped by `maxHeight` for the
list and `maxHeightLowerSubmenu` for a second-level submenu.

## Accessibility

- Each item is a link with `role="menuitem"` and each divider has `role="separator"`, but the
  menu container has no `menu` role.
- The keyboard handling is real: Arrow Up and Down move the highlight, Arrow Right opens the
  highlighted item's submenu and Arrow Left returns to the parent list, Enter chooses the item
  or opens its submenu, and Escape closes.
- Focus is not moved into the menu and not trapped: the highlight is only drawn on the item, so
  a screen reader does not announce which item is highlighted. The element that opened the menu
  is not linked to it by `aria-controls` or `aria-expanded` — add those on your own control.
- A right-click is the usual way in, which no keyboard user has. Give the same actions a button
  as well, as [`Row`](../rows/row.md) does.

## Test ids

<APITable name="Test-ids">

| Element  | `data-testid`                                 |
| -------- | --------------------------------------------- |
| The menu | `context-menu`, overridable with `dataTestId` |
| An item  | the item's own `dataTestId`                   |

</APITable>

## Related

- [`ContextMenuButton`](../interactive-elements/context-menu-button.md) — the icon that opens one of these.
- [`DropDown`](./drop-down.md) — a menu anchored to a control instead of the pointer.
- [`Row`](../rows/row.md) — renders one per row, opened by right-click.
