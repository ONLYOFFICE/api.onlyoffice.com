---
description: "The file manager's header: breadcrumb title, back arrow, and the row of buttons that acts on the current folder."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/navigation/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Navigation

:::warning[Portal only]

<ThemedImage alt="Navigation" width={469} sources={{ light: require('./navigation-component--primary-light.png').default, dark: require('./navigation-component--primary-dark.png').default }} />

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

The file manager's header: breadcrumb title, back arrow, and the row of buttons that acts on the
current folder. It is built for DocSpace's own document browser and expects that shape of data —
a folder trail, two context menu getters and a device type you tell it about.

## Use this when / not when

- **This is portal-internal.** It is shipped so the DocSpace client can use it; outside that layout
  most of its props have no natural source, and the parts it renders assume the portal's header.
- Use it when you are rebuilding a file browser with the same trail-and-actions header and can
  supply a `Section` around it.
- Not for an application's own navigation bar — that is [`NavMenu`](./nav-menu.md), or
  `Tabs` for switching views.
- **It is not responsive by itself.** Which buttons appear is decided by the `currentDeviceType`
  you pass, not by a media query, so a wrong value shows the wrong header at the right width.
- **It is pointer-only.** Every clickable part is a `<div>` with an `onClick`; see the accessibility
  section before shipping it to a keyboard user.

## Import

```ts
import Navigation from "@onlyoffice/apps-ui-kit/components/navigation";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as Navigation }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation-and-setup.md#which-import-form).

Needs `ThemeProvider` above it in the tree: every colour it uses is declared only under the `light`
and `dark` classes that provider puts on `<body>`, and the mirrored arrows come from its `rtl`
class. It also reads the enclosing [`Section`](../layout/section.md)'s context for the height the
breadcrumb drop box may use — without one the drop box falls back to its own content height.

## Stories

### Default

The header of a nested folder: the back arrow, the parent folder's name, the current folder's name and a notice chip. Click the folder's name to open the drop box with the whole trail; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={469} sources={{ light: require('./navigation-component--default-light.png').default, dark: require('./navigation-component--default-dark.png').default }} />

### Root Folder

The header of a root folder: with no parent to go back to, the back arrow, the parent folder's name and the drop-down arrow are gone, and clicking the name opens nothing (`isRootFolder`).

<ThemedImage alt="Root Folder" width={206} sources={{ light: require('./navigation-component--root-folder-light.png').default, dark: require('./navigation-component--root-folder-dark.png').default }} />

### Trash Folder

A folder that holds deleted items, where the person needs the rule spelled out and has nothing to create: the chip shows the notice (`titles.warningText`), there is no plus button, and the folder button's menu opens shifted to the side (`isTrashFolder`).

<ThemedImage alt="Trash Folder" width={589} sources={{ light: require('./navigation-component--trash-folder-light.png').default, dark: require('./navigation-component--trash-folder-dark.png').default }} />

### With Info Panel

The info panel toggle at the end of the header, in its pressed look, so the person can tell the panel is open and click to close it (`isInfoPanelVisible`, `toggleInfoPanel`). The toggle appears only without `hideInfoPanel`.

<ThemedImage alt="With Info Panel" width={1014} sources={{ light: require('./navigation-component--with-info-panel-light.png').default, dark: require('./navigation-component--with-info-panel-dark.png').default }} />

### With Navigation Button

A labelled button after the other controls, for the one action a folder needs at hand, such as opening its location (`navigationButtonLabel`, `onNavigationButtonClick`). It is not shown in the root folder.

<ThemedImage alt="With Navigation Button" width={590} sources={{ light: require('./navigation-component--with-navigation-button-light.png').default, dark: require('./navigation-component--with-navigation-button-dark.png').default }} />

### With Action Buttons

The plus button and the folder button, each opening its own menu, so the person can create something here or act on the folder: click either one. `canCreate` alone shows no plus button and the menu getter alone shows no folder button; each needs its flag (`isPlusButtonVisible`, `isContextButtonVisible`).

<ThemedImage alt="With Action Buttons" width={535} sources={{ light: require('./navigation-component--with-action-buttons-light.png').default, dark: require('./navigation-component--with-action-buttons-dark.png').default }} />

### With Ai Chat Button

An **AI chat** button at the end of the header, for a host that has a chat panel to open (`toggleChatPanel`). Its text comes from `titles.aiChat` and gives way to the bare icon when the header runs out of room; turn on `isChatPanelVisible` in the Controls panel below to see its pressed look.

<ThemedImage alt="With Ai Chat Button" width={1014} sources={{ light: require('./navigation-component--with-ai-chat-button-light.png').default, dark: require('./navigation-component--with-ai-chat-button-dark.png').default }} />

### Right To Left

The header in a right-to-left interface: the back arrow sits at the right edge and points right, the parent folder's name comes to the right of the current one and the drop-down arrow follows the name on its left.

<ThemedImage alt="Right To Left" width={207} sources={{ light: require('./navigation-component--right-to-left-light.png').default, dark: require('./navigation-component--right-to-left-dark.png').default }} />

### Css Customization

Every overridable variable set on one wrapper -- the variables are listed under CSS variables on this page.

- **First header** — the heading, the second title, both arrows, the separator and the notice chip; click the folder's name to see the drop box variables.
- **Second header** — the variables its props switch on: the badge next to the folder's name (`badgeLabel`), the pressed info panel toggle (`isInfoPanelVisible`) and the AI chat button (`toggleChatPanel`).

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./navigation-component--css-customization-light.png').default, dark: require('./navigation-component--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";

import Navigation from "@onlyoffice/apps-ui-kit/components/navigation";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

const trail = [
  { id: "1", title: "Documents", isRootRoom: true },
  { id: "2", title: "Contracts", isRootRoom: false },
];

export function FolderHeader() {
  const [infoPanel, setInfoPanel] = useState(false);

  return (
    <Navigation
      title="Contracts"
      navigationItems={trail}
      isRootFolder={false}
      currentDeviceType={DeviceType.desktop}
      isDesktop
      showText
      showTitle
      withLogo={false}
      burgerLogo=""
      titleIcon=""
      rootRoomTitle="Documents"
      showRootFolderTitle
      showNavigationButton={false}
      canCreate
      isPlusButtonVisible
      isContextButtonVisible
      getContextOptionsPlus={() => [{ key: "folder", label: "New folder" }]}
      getContextOptionsFolder={() => [{ key: "rename", label: "Rename" }]}
      onClickFolder={(id) => console.info(id)}
      onBackToParentFolder={() => console.info("back")}
      isInfoPanelVisible={infoPanel}
      toggleInfoPanel={() => setInfoPanel((value) => !value)}
      isRoom={false}
      isCurrentFolderInfo={false}
      showFolderInfo={() => {}}
      clearTrash={() => {}}
    />
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `burgerLogo` | `string` | URL of the logo shown in the collapsed header. It is an `<img src>`, not an icon name. |
| `canCreate` | `boolean` | Whether the person may create anything here. It is one of two conditions for the plus button; `isPlusButtonVisible` is the other, and both must hold. |
| `clearTrash` | `() => void` | Not read. Nothing destructures it. |
| `currentDeviceType` | `DeviceType` | Which layout to render: it decides the breakpoint-dependent behaviour rather than a media query, so a wrong value shows the wrong buttons at the right width. |
| `getContextOptionsFolder` | `TGetContextMenuModel` | Returns the model of the folder's context menu. **It is called on every render**, whether or not the button is shown, so it has to be cheap and free of side effects. |
| `getContextOptionsPlus` | `TGetContextMenuModel` | Returns the model of the plus button's menu. It is called on every render of that button. |
| `isCurrentFolderInfo` | `boolean` | Not read. Nothing destructures it. |
| `isDesktop` | `boolean` | Whether the viewport is a desktop one. It is derived from `currentDeviceType` and passed down; your own value is overwritten. |
| `isInfoPanelVisible` | `boolean` | Whether the info panel is open; it is the toggle's pressed state and reaches the container as `data-is-info-panel-visible`. |
| `isRoom` | `boolean` | Not read. Nothing destructures it. |
| `isRootFolder` | `boolean` | Whether the current folder is the root of its tree. It hides the back arrow, keeps the drop box shut and drops the title icon. |
| `navigationItems` | `TNavigationItem[]` | The breadcrumb trail, outermost folder first. The last entry is the current folder; an empty list makes the title unclickable. |
| `onBackToParentFolder` | `TOnBackToParenFolder` | Called when the back arrow is clicked. In the open drop box it also closes the box. |
| `onClickFolder` | `TOnNavigationItemClick` | Called with a crumb's id when one is chosen from the drop box, and when the room title above the heading is clicked. |
| `rootRoomTitle` | `string` | Title of the room shown above the folder name. Without it the second-to-last crumb's title is used. |
| `showFolderInfo` | `() => void` | Not read. Nothing destructures it. |
| `showNavigationButton` | `boolean` | Written to the container as `data-show-navigation-button`, which only affects the stylesheet. The button itself is governed by `navigationButtonLabel`. |
| `showRootFolderTitle` | `boolean` | Shows the room's title above the folder's own, as a second clickable line. It is ignored in the root folder, on a phone, and when there is neither a `rootRoomTitle` nor more than one crumb. |
| `showText` | `boolean` | Not read. Nothing destructures it. |
| `title` | `string` | Title of the context menu's mobile header, and the native tooltip of the plus button. The component passes the folder's `title` here. |
| `titleIcon` | `string` | URL of the small icon before the title. It is hidden in the root folder. |
| `toggleInfoPanel` | `(e?: React.MouseEvent) => void` | Called when the info panel toggle is clicked. |
| `withLogo` | `boolean \| string` | Shows the logo block at the start of the header. A string is used as the logo's `src`; `true` shows only the burger logo. |
| `addButtonRef`? | `RefObject<HTMLDivElement \| null>` | Ref attached to the plus button's wrapper, for a guidance overlay to anchor to. |
| `analyzeResponsesButton`? | `ReactNode` | Rendered as-is at the end of the button row, after the tariff notice. |
| `badgeLabel`? | `string` | Text of the small badge next to the title. It sits next to the room title when one is shown, and next to the folder name otherwise. |
| `buttonRef`? | `RefObject<HTMLButtonElement>` | Ref attached to the extra navigation button. |
| `contextButtonAnimation`? | `(setAnimationClasses: (classes: string[]) => void) => () => void` | Runs the one-off guidance animation on the context button and returns its cleanup. It is called once, while `guidAnimationVisible` is set and the menu is closed. |
| `contextMenuHeader`? | `HeaderType` | Header of the folder's context menu, used where the menu opens as a mobile sheet. |
| `forwardedRef`? | `RefObject<HTMLDivElement \| null>` | Ref of the plus button's wrapper, used both to anchor its menu and as the guidance anchor. |
| `guidAnimationVisible`? | `boolean` | Whether the guidance animation should play. Opening the menu ends it. |
| `hideChatButton`? | `boolean` | Hides the AI chat button even when `toggleChatPanel` is passed |
| `hideInfoPanel`? | `() => void` | **A flag, despite its type.** Its truthiness hides the info panel toggle, and a function is always truthy — passing the callback the type asks for hides the button. It is never called. |
| `id`? | `string` | `id` of the plus button's icon element. |
| `ignoreChangeView`? | `boolean` | Not read at this level. The component computes its own value from the viewport and the menu header. |
| `isChatPanelVisible`? | `boolean` | Drives the pressed state of the AI chat button |
| `isContextButtonVisible`? | `boolean` | **Required for the context button to appear at all.** It is not defaulted: leave it out and the folder's context menu is never rendered, whatever `getContextOptionsFolder` returns. |
| `isEmptyFilesList`? | `boolean` | Not read. Nothing in this component or its children destructures it. |
| `isEmptyPage`? | `boolean` | Not read. Nothing in this component or its children destructures it. |
| `isFrame`? | `boolean` | Whether the kit is rendered inside the portal's iframe. It hides the plus, context and tariff elements and widens the menu's offset. |
| `isMobileOnly`? | `boolean` | Whether the viewport is a phone. It is derived from `currentDeviceType`; your own value is overwritten. |
| `isPlusButtonVisible`? | `boolean` | **Required for the plus button to appear at all.** It is not defaulted: leave it out and no plus button is rendered, even with `canCreate`. |
| `isPublicRoom`? | `boolean` | Hides the folder's context button and shows a second one that is rendered only when at least one option is enabled. |
| `isTrashFolder`? | `boolean` | Passed to the context menu, which uses it to decide whether the trash warning belongs in the header. |
| `navigationButtonLabel`? | `string` | Label of the extra button at the end of the row. Without it the button is not rendered, and it is also hidden inside a frame and in the root folder. |
| `onCloseDropBox`? | `(() => void) & (() => void)` | Called when the context menu closes. Supplied internally to close the breadcrumb drop box with it. |
| `onContextOptionsClick`? | `() => void` | Called when the context button is clicked, before the menu opens. |
| `onLogoClick`? | `() => void` | Called when the logo is clicked. Only reachable while `withLogo` is set. |
| `onNavigationButtonClick`? | `() => void` | Called when that extra button is clicked. |
| `onPlusClick`? | `VoidFunction` | Called on click instead of opening the menu, and only while `withMenu` is `false`. |
| `ref`? | `RefObject<HTMLDivElement \| null>` | Ref of the drop box element. Supplied internally, so a ref you pass never reaches the DOM. |
| `setGuidAnimationVisible`? | `(visible: boolean) => void` | Called with `false` when the guidance animation is reset or the button unmounts. |
| `showBackButton`? | `boolean` | Shows the back arrow even in the root folder, where it is otherwise hidden. |
| `showTitle`? | `boolean` | Adds a 16px inline-start margin to the button row, to clear the title next to it. |
| `showTitleInDropBox`? | `boolean` | Controls rendering of title/header inside DropBox; defaults to true |
| `tariffBar`? | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | Portal element for the tariff notice. It is cloned with the folder's `title` added as a prop, so the element has to tolerate one. Hidden inside a frame. |
| `titleIconTooltip`? | `string` | Text of the tooltip on the title icon. Without it no tooltip element is rendered. |
| `titles`? | `TTitles` | Native tooltips of the buttons — info panel, AI chat, plus menu, context menu — and the text and icon of the warning chip. Nothing here is translated for you. |
| `titleTooltip`? | `string` | Replaces the heading's `title` attribute — the native tooltip on the folder name. It is dropped when the room title is shown above. |
| `toggleChatPanel`? | `(e?: React.MouseEvent) => void` | Opens/closes the AI chat panel. The button is not rendered without it, which keeps every host that has no AI chat surface unchanged. |
| `toggleDropBox`? | `() => void` | Closes the breadcrumb drop box after the info panel is toggled from inside it. Supplied internally; a value you pass is overwritten. |
| `withMenu`? | `boolean` | Whether the button opens the menu itself. With `false` it only calls the click handler and the menu is yours to open. |

</APITable>

## Recipes

### Making the buttons appear

`canCreate` is not enough. The plus and context buttons are each gated by a second flag that has no
default, so a header configured only with the getters renders neither of them.

```tsx
import Navigation from "@onlyoffice/apps-ui-kit/components/navigation";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function HeaderWithActions({ canCreate }: { canCreate: boolean }) {
  return (
    <Navigation
      title="Contracts"
      navigationItems={[{ id: "1", title: "Contracts", isRootRoom: true }]}
      isRootFolder
      currentDeviceType={DeviceType.desktop}
      isDesktop
      showText
      showTitle
      withLogo={false}
      burgerLogo=""
      titleIcon=""
      rootRoomTitle=""
      showRootFolderTitle={false}
      showNavigationButton={false}
      canCreate={canCreate}
      isPlusButtonVisible={canCreate}
      isContextButtonVisible
      getContextOptionsPlus={() => [{ key: "folder", label: "New folder" }]}
      getContextOptionsFolder={() => [{ key: "rename", label: "Rename" }]}
      onClickFolder={() => {}}
      onBackToParentFolder={() => {}}
      isInfoPanelVisible={false}
      toggleInfoPanel={() => {}}
      isRoom={false}
      isCurrentFolderInfo={false}
      showFolderInfo={() => {}}
      clearTrash={() => {}}
      titles={{ actions: "Actions", contextMenu: "Folder actions" }}
    />
  );
}
```

### The breadcrumb drop box

The trail is not rendered inline. Clicking the folder name opens a list of every entry in
`navigationItems`, and choosing one calls `onClickFolder`. There is no prop for it: the box is
internal state, it refuses to open in the root folder or with an empty trail, and the next click
anywhere outside closes it.

```tsx
import { useState } from "react";

import Navigation from "@onlyoffice/apps-ui-kit/components/navigation";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

const trail = [
  { id: "1", title: "Documents", isRootRoom: true },
  { id: "2", title: "2026", isRootRoom: false },
  { id: "3", title: "Contracts", isRootRoom: false },
];

export function Breadcrumbs() {
  const [current, setCurrent] = useState("Contracts");

  return (
    <Navigation
      title={current}
      navigationItems={trail}
      isRootFolder={false}
      currentDeviceType={DeviceType.desktop}
      isDesktop
      showText
      showTitle
      withLogo={false}
      burgerLogo=""
      titleIcon=""
      rootRoomTitle=""
      showRootFolderTitle={false}
      showNavigationButton={false}
      canCreate={false}
      getContextOptionsPlus={() => []}
      getContextOptionsFolder={() => []}
      onClickFolder={(id) =>
        setCurrent(trail.find((item) => item.id === id)?.title ?? current)
      }
      onBackToParentFolder={() => {}}
      isInfoPanelVisible={false}
      toggleInfoPanel={() => {}}
      isRoom={false}
      isCurrentFolderInfo={false}
      showFolderInfo={() => {}}
      clearTrash={() => {}}
    />
  );
}
```

## Behaviour the types don't state

- **It renders more than one element.** The header container and the right-hand button row are
  siblings, and while the drop box is open a backdrop and the box itself are two more — four
  top-level nodes in a fragment. A flex or grid parent lays out all of them, which is why the portal
  puts it inside a header cell of its own.
- **`canCreate` alone shows no plus button, and the context menu getter alone shows no context
  button.** Both are gated by `isPlusButtonVisible` and `isContextButtonVisible`, which are optional
  and are not defaulted to true.
- **`getContextOptionsFolder()` is called on every render**, whether or not the button is rendered,
  and `getContextOptionsPlus()` on every render of the plus button. Neither may be expensive or have
  side effects.
- **`hideInfoPanel` is a flag wearing a callback's type.** It is never called; its truthiness hides
  the info panel toggle, and a function is always truthy — so passing the handler the type asks for
  hides the button.
- **Six props are dead**: `showText`, `isRoom`, `isCurrentFolderInfo`, `showFolderInfo`,
  `clearTrash` and `isEmptyFilesList` are declared, four of them required, and nothing reads any of
  them. `ignoreChangeView`, `isEmptyPage` and a `ref` you pass are also ignored.
- **The layout follows `currentDeviceType`, not the window.** The AI chat button and the info panel
  toggle are in the right-hand row only on `desktop`; below that they move into the button row, and
  the drop box's row heights change. The warning chip is drawn only on `desktop`, and only when
  `titles.warningText` is set. Nothing measures the viewport except one `isTablet()` call made
  during render, which does not re-run on resize.
- **A room title with a one-entry trail crashes on click.** The line above the folder name reads
  `navigationItems[length - 2]`, so with `rootRoomTitle` set and a single crumb, clicking it throws.
- **The drop box needs a `Section` for its height.** `sectionHeight` comes from the kit's layout
  context, whose default is empty; without a `Section` the list sizes itself from its own rows.
- **The title icon's tooltip has a fixed id** (`iconTooltip`), so two of these on one page share one
  tooltip element.
- `withLogo` and `burgerLogo` are image URLs, not icon names, and the logo is rendered with an
  `<img>` whose `src` may end up empty.
- The whole component is memoised with `React.memo`, so a getter recreated on every parent render
  defeats it.

## CSS variables

<APITable>

| Variable                       | Default                | Effect                                                                        |
| ------------------------------ | ---------------------- | ----------------------------------------------------------------------------- |
| `--navigation-heading-size`    | `18px`                 | Font size of the folder name and of the room title above it                   |
| `--navigation-heading-weight`  | `700`                  | Font weight of the folder name and of the room title                          |
| `--navigation-title-color`     | theme muted colour     | Colour of the room title above the folder name, and of the badge next to it   |
| `--navigation-badge-fill`      | theme icon colour      | Background of the badge next to the folder name                               |
| `--navigation-expander-fill`   | theme text colour      | Fill of the expander chevron after the folder name                            |
| `--navigation-arrow-fill`      | theme muted colour     | Fill of the room title's arrow                                                |
| `--navigation-separator`       | theme stroke colour    | Colour of the line between the back arrow and the title                       |
| `--navigation-dropdown-bg`     | theme background       | Background of the open drop box                                               |
| `--navigation-dropdown-shadow` | theme shadow           | Shadow of the open drop box                                                   |
| `--navigation-dropdown-radius` | `6px`                  | Radius of the open drop box's lower corners; the upper ones are always square |
| `--navigation-info-panel-bg`   | theme substrate colour | Background and border of the info panel toggle while the panel is open        |
| `--navigation-chat-radius`     | `6px`                  | Corner radius of the AI chat button                                           |
| `--navigation-warning-bg`      | theme substrate colour | Background of the warning chip                                                |
| `--navigation-warning-text`    | theme muted colour     | Colour of the warning chip's text                                             |
| `--navigation-warning-radius`  | `6px`                  | Corner radius of the warning chip                                             |

</APITable>

The folder name itself keeps the `Heading`'s own colour; `--navigation-title-color` reaches only
the room title. Between the phone and desktop breakpoints the heading's size is fixed at `21px`, so
`--navigation-heading-size` applies on desktop and phone only. The badge, the pressed info panel
toggle and the AI chat button exist only when their props switch them on (`badgeLabel`,
`isInfoPanelVisible`, `toggleChatPanel`), and the drop box's variables show only while it is open.
The rest of the header's colours come from the theme classes and are not exposed.

## Accessibility

- **Nothing here is reachable from the keyboard.** The folder name, the room title, the back arrow
  and every button are `<div>`s with an `onClick` and no role, no `tabindex` and no key handler, so
  the breadcrumb drop box cannot be opened, and none of the actions can be taken, without a pointer.
- The header is not a landmark: there is no `<nav>`, no `aria-label` and no breadcrumb semantics, so
  the trail is not announced as one.
- The drop box is an ordinary positioned `<div>`. Focus is not moved into it and not trapped, and
  the backdrop that closes it is not announced.
- The buttons' only labels are the native `title` attributes you pass in `titles`, which a screen
  reader may or may not read and which nothing translates for you.
- The logo is rendered with `alt="logo"` whether or not it is meaningful.

## Test ids

<APITable>

| Element            | `data-testid`       |
| ------------------ | ------------------- |
| The plus button    | `plus-button`       |
| The extra button   | `navigation_button` |
| The AI chat button | `ai-chat-button`    |

</APITable>

None of them are settable. The header container carries a row of `data-*` attributes instead —
`data-is-root-folder`, `data-is-desktop`, `data-is-info-panel-visible` and others — which the
stylesheet uses and a test can select on.

## Related

- [`Section`](../layout/section.md) — the layout this belongs in, and the source of the drop box's height.
- [`NavMenu`](./nav-menu.md) — an application's own navigation, not a folder header.
- [`ContextMenu`](../overlays/context-menu.md) — what the two getters return a model for.
