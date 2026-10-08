---
description: "DocSpace's page body: a sticky header and filter, a scrolling body, and the info and chat panels beside it."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/components/section/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Section

:::warning[Portal only]

<ThemedImage alt="Section" width={1020} sources={{ light: require('./section--primary-light.png').default, dark: require('./section--primary-dark.png').default }} />

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

DocSpace's page body: a sticky header and filter, a scrolling body, and the info and chat panels
beside it. It is the other half of the portal's layout, next to [`Article`](./article.md),
and it is also what supplies the kit's layout context to everything inside it.

## Use this when / not when

- **This is portal-internal.** Nearly ninety props, most of them wiring for the portal's upload and
  operations machinery, and about a quarter of them dead.
- Use it when you are rebuilding the DocSpace page layout and want the same header, filter, info
  panel and scroll behaviour.
- **Several kit components need to be inside one.** It is the only source of the layout context
  `sectionWidth` and `sectionHeight`, which [`Navigation`](../navigation/navigation-component.md)'s breadcrumb box
  reads, and it renders the `sectionScroll` element that
  [`SelectionArea`](./selection-area.md) needs.
- Not for an ordinary page shell — a `<main>` of your own with the kit's components inside it costs
  nothing and behaves predictably.
- **It is not a container.** Its children are ten marker components whose contents it lifts out;
  with no header, filter or body among them it renders `null`.

## Import

```ts
import Section from "@onlyoffice/apps-ui-kit/components/section";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as Section }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation-and-setup.md#which-import-form).

Needs `ThemeProvider` above it in the tree for its colours, and `TranslationProvider` once any
operation is in flight — the progress button it renders reads its labels from the kit's shared
translations and shows empty strings without one.

## Stories

### Default

A whole page: breadcrumbs in the header, a search and filter bar under it and a table in the body, each outlined and labelled so you can see where the section puts its slots. Scroll the table to see the header and the filter stay pinned; change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={1020} sources={{ light: require('./section--default-light.png').default, dark: require('./section--default-dark.png').default }} />

### With Info Panel

A details panel beside the listing, for the properties of the selected item without leaving the page. It shows only while both `canDisplay` and `isInfoPanelVisible` are on; switch either off in the Controls panel below to close it.

<ThemedImage alt="With Info Panel" width={1014} sources={{ light: require('./section--with-info-panel-light.png').default, dark: require('./section--with-info-panel-dark.png').default }} />

### With Chat Panel

A chat docked beside the listing, so a conversation about the files stays open while you work with them. Drag its inner edge to make it wider or narrower (`isChatPanelResizable`); the new width arrives when you release the mouse (`setChatPanelWidth`).

<ThemedImage alt="With Chat Panel" width={1014} sources={{ light: require('./section--with-chat-panel-light.png').default, dark: require('./section--with-chat-panel-dark.png').default }} />

### With Banner

A notice above the header that stays in view while the table scrolls (`Section.SectionBanner`). Switch `scrollableBanner` on in the Controls panel below to put it at the top of the listing instead, where it scrolls away under the header.

<ThemedImage alt="With Banner" width={1015} sources={{ light: require('./section--with-banner-light.png').default, dark: require('./section--with-banner-dark.png').default }} />

### With Submenu

Tabs under the header that switch between views of the same page and stay pinned with it while the listing scrolls (`Section.SectionSubmenu`).

<ThemedImage alt="With Submenu" width={1015} sources={{ light: require('./section--with-submenu-light.png').default, dark: require('./section--with-submenu-dark.png').default }} />

### With Operations Progress

A round progress button in the bottom corner, so a long copy or upload stays visible while the user goes on working (`secondaryActiveOperations`). Hover it to read what is running; an empty list hides it again.

<ThemedImage alt="With Operations Progress" width={1015} sources={{ light: require('./section--with-operations-progress-light.png').default, dark: require('./section--with-operations-progress-dark.png').default }} />

### With Context Menu

A menu of page-wide actions on a right click anywhere in the body, for what applies to the folder rather than to one file (`getContextModel`). Right click the list to open it.

<ThemedImage alt="With Context Menu" width={1015} sources={{ light: require('./section--with-context-menu-light.png').default, dark: require('./section--with-context-menu-dark.png').default }} />

### On Tablet

The page in a tablet-width window: the header stays pinned, while the filter bar moves into the listing and scrolls with it, leaving more room for the rows (`currentDeviceType`).

<ThemedImage alt="On Tablet" width={1015} sources={{ light: require('./section--on-tablet-light.png').default, dark: require('./section--on-tablet-dark.png').default }} />

### On Phone

The page on a phone: the header and the filter bar both move into the listing and the whole page scrolls, so the rows get the full height of the screen (`currentDeviceType`).

<ThemedImage alt="On Phone" width={1011} sources={{ light: require('./section--on-phone-light.png').default, dark: require('./section--on-phone-dark.png').default }} />

### Right To Left

The page in a right-to-left interface: the info panel opens on the left, its border moves to its right edge, and the table's columns run from the right.

<ThemedImage alt="Right To Left" width={1014} sources={{ light: require('./section--right-to-left-light.png').default, dark: require('./section--right-to-left-dark.png').default }} />

### Css Customization

The variables are listed under CSS variables on this page. The example sets every desktop one on a wrapper around one section with both panels open: the blue strip is the pinned header, the pale blue column is the info panel and the yellow one is the chat panel, with its drop frame on. Navigation, Filter and the table have variables of their own, documented in their stories and set on the same wrapper.

<ThemedImage alt="Css Customization" width={1014} sources={{ light: require('./section--css-customization-light.png').default, dark: require('./section--css-customization-dark.png').default }} />

## Minimal example

```tsx
import Section from "@onlyoffice/apps-ui-kit/components/section";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function Page() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Section
        withBodyScroll
        settingsStudio={false}
        currentDeviceType={DeviceType.desktop}
      >
        <Section.SectionHeader>
          <Text fontSize="18px" fontWeight={700}>
            Contracts
          </Text>
        </Section.SectionHeader>
        <Section.SectionBody>
          <Text>Two files</Text>
        </Section.SectionBody>
      </Section>
    </div>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `children` | `ReactNode` | The slots. Each child must be one of the ten `Section.*` markers; the section reads their contents and renders them in its own places, and drops everything else. With no header, filter or body slot it renders nothing at all. |
| `settingsStudio` | `boolean` | Applies the settings pages' narrower body padding. Default: `false`. |
| `withBodyScroll` | `boolean` | Whether the section scrolls its own body. With `false` the page scrolls instead and the section takes a 20px inline-start padding. Default: `true`. |
| `aiChatID`? | `string` | Not read. Nothing in the component destructures it. |
| `aiChatIsVisible`? | `boolean` | Not read. Nothing in the component destructures it. |
| `aiSelectedFolder`? | `number \| string` | Not read. Nothing in the component destructures it. |
| `aiUserId`? | `string` | Not read. Nothing in the component destructures it. |
| `anotherDialogOpen`? | `boolean` | Suppresses the info panel below the desktop breakpoint while a dialog of yours is open, so the two do not stack. |
| `asideInfoPanel`? | `boolean` | Not read. The info panel reads `topInfoPanel`, which the section never passes on. |
| `bannerContent`? | `ReactNode` | Not read by the section: the banner comes from the `SectionBanner` slot instead. |
| `cancelSecondaryOperationById`? | `(operation: string, operationId: string) => void` | Cancels one background operation by id. |
| `cancelUpload`? | `() => void` | Called by the progress button's cancel control while an upload is running. |
| `canDisplay`? | `boolean` | **The info panel is not rendered without this.** `isInfoPanelVisible` alone is not enough: both must be true. |
| `chatFiles`? | `(TFile \| TFolder)[]` | Not read. Nothing in the component destructures it. |
| `chatPanelDropTargetLabel`? | `string` | Overlay label shown while a drag started in the section body hovers the chat panel; leave unset the rest of the time. The host owns both the hit-testing (its list drag is mouse-based, not HTML5 DnD) and the wording — the panel only renders the affordance. |
| `chatPanelWidth`? | `number` | Current width of the docked chat panel in pixels. |
| `clearDropPreviewLocation`? | `() => void` | Clears that drop preview. |
| `clearPrimaryProgressData`? | `(operation?: string \| null) => void` | Clears a finished upload operation. |
| `clearSecondaryProgressData`? | `(operationId?: string \| null, operation?: string \| null, operationItem?: Operation) => void` | Clears a finished background operation. |
| `currentDeviceType`? | `DeviceType` | Which layout to render. It decides where the header and the filter go, whether the body scrolls itself, and whether the info panel is inline or a portal over the page. Nothing here measures the viewport. |
| `displayFileExtension`? | `boolean` | Not read. Nothing in the component destructures it. |
| `dragging`? | `boolean` | Whether a drag of the host's own items is in progress, which the progress button uses for its drop-preview state. |
| `dropTargetPreview`? | `string` | Name of the folder a dragged item would land in, shown by the progress button. |
| `fullHeightBody`? | `boolean` | Makes the body fill the section's height rather than its content's, for a chat-like page whose inner regions scroll instead. |
| `getContextModel`? | `() => ContextMenuModel[]` | Returns the model for the body's own right-click menu. Without it no menu is mounted; it is also suppressed while `isIndexEditingMode` is set. |
| `getIcon`? | `(size: number, fileExst: string) => string` | Not read. Nothing in the component destructures it. |
| `inert`? | `boolean` | Marks the section root (`#section`) and its whole subtree as inert — non-focusable and non-interactive. Used when the section is visually collapsed but kept mounted (e.g. behind the fullscreen AI chat panel). |
| `infoPanelWithoutScroll`? | `boolean` | Removes the info panel body's scroller and the aside's, for a body that scrolls its own regions. |
| `isChatPanelAvailable`? | `boolean` | Whether the AI chat region exists at all. It defaults to `false`. Default: `false`. |
| `isChatPanelFullscreen`? | `boolean` | Whether the host renders the chat panel fullscreen right now. |
| `isChatPanelResizable`? | `boolean` | Opt-in edge resizer for the docked chat panel (desktop only). Pass the width the host stores plus a setter; leave unset for a fixed-width panel. |
| `isChatPanelVisible`? | `boolean` | Whether the AI chat panel is open. |
| `isDesktop`? | `boolean` | Not read by the section: it is never forwarded to the body. |
| `isEmptyPage`? | `boolean` | Not read. Nothing in the component destructures it. |
| `isHeaderVisible`? | `boolean` | Not read. Nothing in the component destructures it. |
| `isIndexEditingMode`? | `boolean` | Suppresses the body's right-click menu while the listing is being reordered. |
| `isInfoPanelAvailable`? | `boolean` | Whether the info panel region exists at all. It defaults to `true`, so the panel's markup is mounted unless you turn it off. Default: `true`. |
| `isInfoPanelScrollLocked`? | `boolean` | Freezes the info panel's own scroller, for a drag or a menu that must not scroll the panel under it. |
| `isInfoPanelVisible`? | `boolean` | Whether the info panel is open. It narrows the section and is one of the two conditions for the panel being rendered at all — `canDisplay` is the other. |
| `isMobileHidden`? | `boolean` | Hides the info panel on anything narrower than a desktop, where it would otherwise cover the page. |
| `isTabletView`? | `boolean` | Not read. Nothing in the component destructures it. |
| `isTrashFolder`? | `boolean` | Not read. Nothing in the component destructures it. |
| `mainBarVisible`? | `boolean` | Not read. Nothing in the component destructures it. |
| `mainButtonVisible`? | `boolean` | Whether the main button is on screen, which moves the progress button clear of it. |
| `maintenanceExist`? | `boolean` | Not read. Nothing in the component destructures it. |
| `needErrorChecking`? | `boolean` | Makes the progress button check its operations for errors before reporting them complete. |
| `onCancelOperation`? | `(callback: () => void) => void` | Not read. Nothing in the component destructures it. |
| `onClose`? | `() => void` | Not read by the section: it is never forwarded to the info panel. |
| `onDragLeaveEmpty`? | `() => void` | Called when a drag leaves the body. |
| `onDragOverEmpty`? | `(isDragActive: boolean) => void` | Called on every drag-over of the body, with a drag-active flag that is one render behind. |
| `onDrop`? | `TOnDrop` | Called with the files dropped anywhere on the body, which is itself a drop target. Nothing is filtered and nothing is highlighted — see `DragAndDrop`. |
| `onOpenUploadPanel`? | `() => void` | Called when the operations button asks to open the upload panel. |
| `pathname`? | `string` | The current route. Changing it re-focuses the body on a desktop, which is how the portal restores keyboard scrolling after a navigation. |
| `pluginOperations`? | `Operation[]` | Operations contributed by plugins, merged into the background operations of the progress button. Default: `[]`. |
| `pluginOperationsAlert`? | `boolean` | Puts the progress button in its alert state for a failed plugin operation. |
| `pluginOperationsCompleted`? | `boolean` | Whether those plugin operations have finished. |
| `pluginShowCancelButton`? | `boolean` | Forces the progress button's cancel control on, whatever the operations say. |
| `primaryOperationsAlert`? | `boolean` | Puts the progress button in its alert state for a failed upload. |
| `primaryOperationsArray`? | `Operation[]` | Upload operations shown in the progress button's own panel. Default: `[]`. |
| `primaryOperationsCanceled`? | `boolean` | Whether the uploads were cancelled. |
| `primaryOperationsCompleted`? | `boolean` | Whether the panel operations — uploads — have finished. |
| `progressBarDropDownContent`? | `ReactNode` | Not read. Nothing in the component destructures it. |
| `ref`? | `RefObject<HTMLDivElement \| null>` | Not read by the section: it keeps its own ref on the container. |
| `scrollableBanner`? | `boolean` | When true, the banner is rendered inside the scrollable body (as its first element) instead of being pinned above the scroll container. Lets the banner scroll away under the sticky section header. Defaults to false to preserve the legacy pinned-banner behaviour. |
| `secondaryActiveOperations`? | `Operation[]` | Background operations shown in the progress button. Its length is one of the three that decide whether the button appears. Default: `[]`. |
| `secondaryOperationsAlert`? | `boolean` | Puts the progress button in its alert state for a failed background operation. |
| `secondaryOperationsCompleted`? | `boolean` | Whether the background operations have finished, for the progress button's completed state. |
| `secondaryOperationsStopped`? | `boolean` | Whether the background operations were stopped rather than finished. |
| `setAiChatIsVisible`? | `() => void` | Not read. Nothing in the component destructures it. |
| `setChatPanelFullscreen`? | `() => void` | Turns the chat panel fullscreen on. Called when the edge resizer is dragged past the widest docked width; leave unset to keep that drag clamped at the limit. |
| `setChatPanelWidth`? | `(value: number) => void` | Called once per resize drag, on mouse up, with the committed width. |
| `setIsChatPanelVisible`? | `(value: boolean) => void` | Called by the chat panel's own close control. |
| `setIsInfoPanelVisible`? | `(value: boolean) => void` | Called with `false` when the info panel closes itself — a click beside it, or the browser going back below the desktop breakpoint. |
| `showText`? | `boolean` | Not read. Nothing in the component destructures it. |
| `snackbarExist`? | `boolean` | Not read. Nothing in the component destructures it. |
| `startDropPreview`? | `() => void` | Its mere presence makes the progress button appear, even with no operations, so that a drag can show its drop preview. |
| `stickyTableHeader`? | `boolean` | When true, the desktop SectionFilter slot is rendered INSIDE the scroll body as a sticky element (below the optional scrollable banner) instead of the always-pinned `.section-sticky-container`, and the table header is switched from `position: fixed` to `position: sticky` so it pins below the in-body filter natively (no host JS to measure the header `top`). The host supplies the pin offset via the `--section-filter-bottom` CSS variable. Defaults to false (legacy fixed-header + sticky-container-filter). |
| `topInfoPanel`? | `boolean` | Not read by the section: it is never forwarded to the info panel. |
| `unsetChatPanelFullscreen`? | `() => void` | Turns the chat panel fullscreen off. Called when the resizer is dragged back inwards in fullscreen, which then continues as a normal resize. |
| `uploadFiles`? | `boolean` | Not read. Nothing in the body destructures it. |
| `user`? | `TUser` | Not read. Nothing in the component destructures it. |
| `vectorizedFiles`? | `TFile[]` | Not read. Nothing in the component destructures it. |
| `viewAs`? | `TViewAs` | Which listing the body holds. It changes the body's padding, and in `row` view it lets a click beside the info panel close it. |
| `withoutFooter`? | `boolean` | Drops both the footer slot and the spacer under the body. Default: `false`. |
| `withoutScroll`? | `boolean` | Not read at this level. The component passes `infoPanelWithoutScroll` here instead. |
| `withTabs`? | `boolean` | Tells the filter row that tabs sit above it, which removes its top margin. Honoured below the desktop breakpoint, where the filter lives inside the body. |

</APITable>

## Recipes

### The info panel

Two props, not one. `isInfoPanelVisible` opens it and `canDisplay` permits it — and `canDisplay`
has no default, so the panel stays invisible until you pass it.

```tsx
import { useState } from "react";

import Section from "@onlyoffice/apps-ui-kit/components/section";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { Button } from "@onlyoffice/apps-ui-kit/components/button";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function PageWithInfoPanel() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Section
        withBodyScroll
        settingsStudio={false}
        currentDeviceType={DeviceType.desktop}
        canDisplay
        isInfoPanelVisible={visible}
        setIsInfoPanelVisible={setVisible}
      >
        <Section.SectionHeader>
          <Text fontSize="18px" fontWeight={700}>
            Contracts
          </Text>
        </Section.SectionHeader>
        <Section.SectionBody>
          <Button
            label={visible ? "Hide details" : "Show details"}
            onClick={() => setVisible((value) => !value)}
          />
        </Section.SectionBody>
        <Section.InfoPanelHeader>
          <Text fontWeight={600}>Details</Text>
        </Section.InfoPanelHeader>
        <Section.InfoPanelBody>
          <Text>Report.docx — 42 KB</Text>
        </Section.InfoPanelBody>
      </Section>
    </div>
  );
}
```

### Disabled / read-only

`inert` marks the section's whole subtree inert: nothing inside can be focused, clicked or reached
by a screen reader. The portal uses it while the chat panel is fullscreen over the page.

```tsx
import Section from "@onlyoffice/apps-ui-kit/components/section";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function FrozenPage({ frozen }: { frozen: boolean }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Section
        inert={frozen}
        withBodyScroll
        settingsStudio={false}
        currentDeviceType={DeviceType.desktop}
      >
        <Section.SectionHeader>
          <Text fontSize="18px" fontWeight={700}>
            Contracts
          </Text>
        </Section.SectionHeader>
        <Section.SectionBody>
          <Text>Nothing here can be reached while it is frozen.</Text>
        </Section.SectionBody>
      </Section>
    </div>
  );
}
```

### Where the filter goes

The filter slot moves with `currentDeviceType`: pinned above the scroller on a desktop, inside the
body below it. `stickyTableHeader` moves the desktop one into the body as well, where it sticks
natively and a table header can pin under it.

```tsx
import Section from "@onlyoffice/apps-ui-kit/components/section";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { SearchInput } from "@onlyoffice/apps-ui-kit/components/search-input";
import { InputSize } from "@onlyoffice/apps-ui-kit/components/text-input";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function FilteredPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Section
        withBodyScroll
        settingsStudio={false}
        currentDeviceType={DeviceType.desktop}
        stickyTableHeader
      >
        <Section.SectionHeader>
          <Text fontSize="18px" fontWeight={700}>
            Contracts
          </Text>
        </Section.SectionHeader>
        <Section.SectionFilter>
          <SearchInput value="" size={InputSize.base} onChange={() => {}} />
        </Section.SectionFilter>
        <Section.SectionBody>
          <Text>Two files</Text>
        </Section.SectionBody>
      </Section>
    </div>
  );
}
```

## Behaviour the types don't state

- **With no header, filter or body slot it renders nothing.** A section holding only an info panel
  or only a footer returns `null`, panels included.
- **The slots are markers that render nothing themselves**, matched by display name while the
  section renders. Wrapping one in a component of your own, or memoising it, hides its content.
- **The info panel needs `canDisplay` as well as `isInfoPanelVisible`**, and `canDisplay` is
  optional with no default — the single commonest reason the panel does not appear.
- **It is the only source of the kit's layout context.** `sectionWidth` and `sectionHeight` are
  measured from the container with a `ResizeObserver` and a 100ms debounce and published to
  everything inside; components that read them fall back to zero elsewhere.
- **It renders the element `SelectionArea` requires.** With `withBodyScroll` set and outside a phone
  layout, the body's scroller carries `id="sectionScroll"`; the container itself is `id="section"`.
- **It dispatches a synthetic `resize` event on the window** whenever it measures itself, which is
  on mount and whenever the info or chat panel is toggled.
- **The body is a drop target.** It is a [`DragAndDrop`](../interactive-elements/drag-and-drop.md), so `onDrop`
  receives every file dropped anywhere on the page body, nothing is filtered, and nothing is
  highlighted unless you draw it.
- **On a desktop the body takes focus and keeps it.** It focuses itself on mount and on every
  `pathname` change, and refocuses whenever focus leaves the document altogether. It also removes
  the `tabindex` from an element with the literal id `customScrollBar` while it is mounted.
- **The info panel assigns `window.onpopstate` directly**, replacing any handler already there, and
  never restores it.
- **About twenty-five props are dead**, among them `user`, `getIcon`, `showText`, `isEmptyPage`,
  `maintenanceExist`, `snackbarExist`, `isTrashFolder`, `mainBarVisible`, every `aiChat*` prop
  except the panel's own, `bannerContent`, `topInfoPanel`, `onClose`, `asideInfoPanel`, `isDesktop`,
  `uploadFiles` and a `ref` you pass. The table above says so prop by prop.
- **`withBodyScroll` and `settingsStudio` have destructuring defaults but are declared required**, so
  the compiler asks for them anyway.
- **The header's height and background come from the theme, not from a prop.** 69px on a desktop,
  61px on a tablet, 53px on a phone, and white or black to match the `light`/`dark` class on
  `<body>`. Override any of them with the custom properties below rather than by styling the
  header element.
- **It is memoised with a deep equality check** over all its props, arrays included, which is
  expensive on long operation lists and means an identity change alone does not re-render it.
- The progress button appears as soon as any operation array is non-empty **or** `startDropPreview`
  is passed — the handler's presence alone is enough.

## Sub-components

<APITable>

| Name                      | Where its content is rendered                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `Section.SectionHeader`   | The sticky header; moved inside the scrolling body on a phone                                                  |
| `Section.SectionSubmenu`  | Under the header, or inside the body on a phone                                                                |
| `Section.SectionFilter`   | Under the submenu on a desktop, inside the body otherwise — or always inside the body with `stickyTableHeader` |
| `Section.SectionBanner`   | Pinned above the scroller, or as the body's first element with `scrollableBanner`                              |
| `Section.SectionWarning`  | Above the body's content, below the desktop breakpoint only                                                    |
| `Section.SectionBody`     | The scrolling body                                                                                             |
| `Section.SectionFooter`   | Under the body, unless `withoutFooter`                                                                         |
| `Section.InfoPanelHeader` | The info panel's header                                                                                        |
| `Section.InfoPanelBody`   | The info panel's body                                                                                          |
| `Section.ChatPanel`       | The AI chat panel, rendered only while `isChatPanelAvailable`                                                  |

</APITable>

They are static properties of the exported component, they take nothing but `children`, and they
render nothing themselves.

## CSS variables

<APITable>

| Variable                               | Default                 | Effect                                                                                                               |
| -------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `--section-bg`                         | theme                   | Background of the pinned strip that holds the header, the submenu and the desktop filter                             |
| `--section-header-size`                | `69px`                  | Height of the header on a desktop                                                                                    |
| `--section-header-tablet-size`         | `61px`                  | Height of the header on a tablet                                                                                     |
| `--section-header-mobile-size`         | `53px`                  | Height of the header on a phone                                                                                      |
| `--section-footer-margin`              | `40px`                  | Space above the footer                                                                                               |
| `--section-footer-margin-mobile`       | `32px`                  | The same on a phone                                                                                                  |
| `--section-mobile-footer-height`       | `64px`                  | Empty space under the body on a tablet and a phone, which keeps the last row clear of floating buttons               |
| `--section-filter-top`                 | `0`                     | With `stickyTableHeader`: where the filter comes to rest under the header                                            |
| `--section-filter-height`              | `0`                     | With `stickyTableHeader`: minimum height of the filter row                                                           |
| `--section-filter-bottom`              | `0`                     | With `stickyTableHeader`: where the table header comes to rest under the filter                                      |
| `--info-panel-width`                   | `400px`                 | Width of the info panel on a desktop                                                                                 |
| `--info-panel-tablet-width`            | `480px`                 | Width of the info panel on a tablet, capped at the window width less 69px; on a phone the panel is always full width |
| `--info-panel-background`              | theme                   | Background of the info panel                                                                                         |
| `--info-panel-border-color`            | theme                   | Its inline-start border; desktop only, the panel has no border below it                                              |
| `--info-panel-backdrop`                | theme                   | Colour of the overlay behind it below the desktop breakpoint                                                         |
| `--chat-panel-width`                   | `400px`                 | Width of the docked chat panel                                                                                       |
| `--chat-panel-background`              | theme                   | Background of the chat panel                                                                                         |
| `--chat-panel-border-color`            | theme                   | Its inline-start border                                                                                              |
| `--chat-panel-drop-overlay-background` | the chat panel's own    | Fill of its "drop to attach" frame, drawn at 85% opacity                                                             |
| `--chat-panel-drop-border-color`       | accent; white in `dark` | Dashed border of that frame                                                                                          |
| `--chat-panel-drop-inset-top`          | `69px`                  | Space left above that frame for the chat's own header; a phone always leaves 53px, whatever you set                  |

</APITable>

Every default above is the theme's own value, applied through the `light`/`dark` class on
`<body>`; the table lists what you get when you override nothing.

**Below the desktop breakpoint the info panel is portalled to `#root`**, out of any wrapper around
the section, so its variables have to be set on `:root` (or on an ancestor of `#root`) to reach it
there. **A resizable chat panel owns its width**: with `isChatPanelResizable` on a desktop, docked
and with `chatPanelWidth` set, the panel writes `--chat-panel-width` on itself, which outranks a
value set on a wrapper. **`--section-content-padding` does nothing**: it is read only on the
header, and the body's negative margin never sees it.

## Accessibility

- **The section is not a landmark.** It is a `<div id="section">`, not a `<main>`, with no role and
  no label, so the page has no main region unless you supply one around it.
- **On a desktop the body grabs focus on mount and takes it back whenever focus leaves the
  document**, which overrides where a keyboard user had put it.
- `inert` is the one honest state here: it marks the whole subtree non-focusable and hides it from
  assistive technology.
- The info panel is a plain region even when it covers the page below the desktop breakpoint: focus
  is not moved into it, not trapped, and not restored when it closes, and Escape does not close it.
- PageUp, PageDown, Home and End pressed inside the info panel's scroller stop there, so they
  scroll the panel and not the listing behind it.
- The chat panel's resize handle is mouse-only and carries `role="presentation"`, so it cannot be
  reached from the keyboard and screen readers skip it.
- Nothing announces the operations progress; the button that shows it is visual only.

## Test ids

The component sets none, on any element. Select on the container's id `section`, on the scroller's
id `sectionScroll`, or on the stable classes `section-header`, `section-body`, `section-banner` and
`info-panel`.

## Related

- [`Article`](./article.md) — the panel beside it, and the other half of the layout.
- [`Navigation`](../navigation/navigation-component.md) — what normally fills the header slot.
- [`SelectionArea`](./selection-area.md) — needs the scroller this renders.
