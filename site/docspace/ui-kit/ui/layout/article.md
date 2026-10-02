---
description: "DocSpace's left panel: a fixed column with a header slot, a main button, a scrolling body and the profile block."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/components/article/README.md"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# Article

DocSpace's left panel: a fixed column with a header slot, a main button, a scrolling body and the
profile block. Almost everything in it is decided by the portal — the tariff, the Zendesk account,
the developer tools, the signed-in person — which is why it takes some thirty props.

<ThemedImage alt="Article" width={268} sources={{ light: require('./article--primary-light.png').default, dark: require('./article--primary-dark.png').default }} />

## Use this when / not when

- **This is portal-internal.** It is the DocSpace client's own sidebar, down to the Zendesk widget,
  the `/developer-tools` path and the "download the apps" block. Outside that product most of its
  props have no source.
- Use it when you are rebuilding that layout and can supply a portal-shaped set of props.
- Not for an application's own navigation — that is [`NavMenu`](../navigation/nav-menu.md), which takes
  a tree of items and nothing else.
- Not for the page body beside it — that is [`Section`](./section.md).
- **It is not a container.** Its `children` are three marker components whose contents it lifts out
  and renders elsewhere; anything else you put inside is dropped.

## Import

```ts
import Article from "@onlyoffice/apps-ui-kit/components/article";
```

It is a **default** export, so the name is yours to choose. The root barrel carries it by name
as well — `components/index.ts` re-exports it as `export { default as Article }` — but prefer the
subpath: the barrel does not build without four optional peers, see
[Which import form](../../getting-started/installation.md#which-import-form).

Needs `ThemeProvider` above it in the tree — every colour and the panel's three widths are declared
only under the `light` and `dark` classes it puts on `<body>` — and `TranslationProvider`, because
the collapse handle, the apps block, the developer tools entry and the profile menu read their
labels from the kit's shared translations and render **empty strings** without it.


## Stories

### Default

The panel as a desktop page shows it: the logo, the body, the developer tools entry, the download links and the profile block. Click the dots beside the name to open the actions menu (`getActions`), and change any other prop live in the Controls panel below.

<ThemedImage alt="Default" width={268} sources={{ light: require('./article--default-light.png').default, dark: require('./article--default-dark.png').default }} />

### With Main Button

**New document** — the page's primary command, kept above the navigation where it is always in reach (`withMainButton`, `Article.MainButton`).

<ThemedImage alt="With Main Button" width={268} sources={{ light: require('./article--with-main-button-light.png').default, dark: require('./article--with-main-button-dark.png').default }} />

### Custom Header

**Documents** — the application's own title in the header row in place of the logo, for a layout that names the panel itself (`withCustomArticleHeader`, `Article.Header`).

<ThemedImage alt="Custom Header" width={268} sources={{ light: require('./article--custom-header-light.png').default, dark: require('./article--custom-header-dark.png').default }} />

### With Back Button

**Back** — a way out of a nested section at the top of the body. It calls `onBack`, or navigates home when there is none (`showBackButton`).

<ThemedImage alt="With Back Button" width={268} sources={{ light: require('./article--with-back-button-light.png').default, dark: require('./article--with-back-button-dark.png').default }} />

### Loading State

Skeletons in place of the logo and the profile block while the page's data is still arriving, so the panel keeps its shape; the body slot is still rendered (`isBurgerLoading`, `showArticleLoader`).

<ThemedImage alt="Loading State" width={268} sources={{ light: require('./article--loading-state-light.png').default, dark: require('./article--loading-state-dark.png').default }} />

### With Custom Slot

**Storage: 2 GB of 10 GB** — a notice that belongs to the panel rather than to the navigation, placed between the body and the developer tools entry (`customSlot`).

<ThemedImage alt="With Custom Slot" width={268} sources={{ light: require('./article--with-custom-slot-light.png').default, dark: require('./article--with-custom-slot-dark.png').default }} />

### Without Footer Blocks

The body with nothing below it, for a page that shows the person and the download links elsewhere: no profile block (`hideProfileBlock`), no download links (`hideAppsBlock`) and no developer tools entry for a person who is not an administrator (`limitedAccessDevToolsForUsers`).

<ThemedImage alt="Without Footer Blocks" width={268} sources={{ light: require('./article--without-footer-blocks-light.png').default, dark: require('./article--without-footer-blocks-dark.png').default }} />

### Collapsed On Tablet

A 60px column of icons in a tablet-width window, which leaves the page most of the screen (`showText` off). Click the handle at the foot to expand it and again to collapse it (`toggleShowText`).

<ThemedImage alt="Collapsed On Tablet" width={268} sources={{ light: require('./article--collapsed-on-tablet-light.png').default, dark: require('./article--collapsed-on-tablet-dark.png').default }} />

### On Phone

The panel on a phone: it covers the page below a 64px top strip, over a backdrop, and drops the profile block. Close it with the cross in its header or a tap on the backdrop (`toggleArticleOpen`); switch `articleOpen` in the Controls panel of the story canvas to open it again.

<ThemedImage alt="On Phone" width={1024} sources={{ light: require('./article--on-phone-light.png').default, dark: require('./article--on-phone-dark.png').default }} />

### Right To Left

The panel in a right-to-left interface: its border moves to the left edge, the back arrow points right and the dots button sits on the left of the profile block.

<ThemedImage alt="Right To Left" width={268} sources={{ light: require('./article--right-to-left-light.png').default, dark: require('./article--right-to-left-dark.png').default }} />

### Css Customization

Five of the panel's variables set on one wrapper -- the variables are listed under CSS variables on this page. The first panel shows the background, the borders and the profile block; the second adds the back button (`showBackButton`) for `--article-back-color`.

<ThemedImage alt="Css Customization" width={552} sources={{ light: require('./article--css-customization-light.png').default, dark: require('./article--css-customization-dark.png').default }} />

## Minimal example

```tsx
import { useState } from "react";

import Article from "@onlyoffice/apps-ui-kit/components/article";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function Sidebar() {
  const [showText, setShowText] = useState(true);
  const [articleOpen, setArticleOpen] = useState(false);
  const [isMobileArticle, setIsMobileArticle] = useState(false);

  return (
    <Article
      currentDeviceType={DeviceType.desktop}
      showText={showText}
      setShowText={setShowText}
      toggleShowText={() => setShowText((value) => !value)}
      articleOpen={articleOpen}
      setArticleOpen={setArticleOpen}
      toggleArticleOpen={() => setArticleOpen((value) => !value)}
      isMobileArticle={isMobileArticle}
      setIsMobileArticle={setIsMobileArticle}
      isBurgerLoading={false}
      withCustomArticleHeader={false}
      showBackButton={false}
      hideProfileBlock
      hideAppsBlock
      withCustomSlot={false}
      withSendAgain={false}
      mainBarVisible={false}
      isLiveChatAvailable={false}
      isShowLiveChat={false}
      isAdmin={false}
      limitedAccessDevToolsForUsers
      logoText=""
      downloaddesktopUrl=""
      officeforandroidUrl=""
      officeforiosUrl=""
      languageBaseName="en"
      zendeskEmail=""
      chatDisplayName=""
      zendeskKey=""
    >
      <Article.Header>
        <Text fontWeight={600}>Documents</Text>
      </Article.Header>
      <Article.Body>
        <div>
          <Text>Rooms</Text>
          <Text>My documents</Text>
        </div>
      </Article.Body>
    </Article>
  );
}
```

## Props


<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `articleOpen` | `boolean` | Whether the panel is open over the page. It only matters on a phone, where the panel is a portal with a backdrop. |
| `chatDisplayName` | `string` | Name the Zendesk widget shows for the visitor. |
| `children` | `JSX.Element[]` | The three slots, as an array. Each is `Article.Header`, `Article.MainButton` or `Article.Body`; anything else is dropped, and the slots are matched by display name, so a wrapper around one hides it. |
| `currentDeviceType` | `DeviceType` | Which layout to render. The panel is a portal into `#root` on `mobile`, a collapsible sidebar on `tablet` and a fixed column on `desktop`; nothing here measures the viewport. |
| `downloaddesktopUrl` | `string` | Address behind the desktop application link. |
| `hideAppsBlock` | `boolean` | Removes the "download the apps" block at the foot of the panel. |
| `hideProfileBlock` | `boolean` | Removes the profile block at the foot of the panel, and moves the collapse handle down to take its place. |
| `isAdmin` | `boolean` | Whether the person is an administrator. With `limitedAccessDevToolsForUsers` it decides whether the developer tools entry is shown. |
| `isBurgerLoading` | `boolean` | Renders the burger and logo as skeletons instead of images. |
| `isLiveChatAvailable` | `boolean` | Whether the live chat is mounted at all. It is also suppressed on a mobile user agent. |
| `isMobileArticle` | `boolean` | Whether the panel is in its narrow, overlay-capable mode. It is written back through `setIsMobileArticle` on mount and on every device change. |
| `isShowLiveChat` | `boolean` | Whether the Zendesk widget script is loaded. The widget's own launcher stays hidden either way; the app opens the chat from its own Support button. |
| `languageBaseName` | `string` | Locale handed to the Zendesk widget. |
| `limitedAccessDevToolsForUsers` | `boolean` | Hides the developer tools entry from anyone who is not an administrator. |
| `logoText` | `string` | Name shown in the "download the apps" block at the foot of the panel. |
| `mainBarVisible` | `boolean` | Whether the portal's top bar is on screen. Its height is measured out of the window height on every resize — a measurement the component then does not use. |
| `officeforandroidUrl` | `string` | Address behind the Android link. |
| `officeforiosUrl` | `string` | Address behind the iOS link. |
| `setArticleOpen` | `(value: boolean) => void` | Called with `false` when the browser goes back on a phone, to close the panel. |
| `setIsMobileArticle` | `(value: boolean) => void` | Called on mount and on every device change. Wire it to the state behind `isMobileArticle`. |
| `setShowText` | `(value: boolean) => void` | Called on mount and on every device change with the width the component has decided on. Wire it to the state behind `showText` or the panel never changes width. |
| `showBackButton` | `boolean` | Shows the back button in the header, and a second one above the body on anything wider than a phone. |
| `showText` | `boolean` | Whether the panel is expanded. It is the width switch — 243px when set, 60px when not — and it is written back through `setShowText` on mount and on every device change. |
| `toggleArticleOpen` | `TToggleArticleOpen` | Called by the burger in the header, and by the backdrop on a phone. It is expected to flip `articleOpen`. |
| `toggleShowText` | `VoidFunction` | Called by the collapse handle at the foot of the panel. It is expected to flip `showText`; the panel does not collapse on its own. |
| `withCustomArticleHeader` | `boolean` | Tells the header that the `Article.Header` slot carries its own markup, which changes the header's own padding. |
| `withCustomSlot` | `boolean` | Not read. The component works out whether there is a custom slot from `customSlot` itself. |
| `withSendAgain` | `boolean` | Not read. Nothing in the component uses it. |
| `zendeskEmail` | `string` | Address the Zendesk widget pre-fills. |
| `zendeskKey` | `string` | Key of the Zendesk account. The live chat block loads a third-party script with it. |
| `currentTariffPlanTitle`? | `string` | Not read. Nothing in the component uses it. |
| `customSlot`? | `ReactNode` | Extra content between the body and the apps block. Its presence also shifts the collapse handle and the developer tools entry. |
| `getActions`? | `(t?: (key: string, options?: Record<string, string \| number>) => string) => ContextMenuModel[]` | Returns the model of the profile block's context menu. It is handed a translate function, which this package does not supply. |
| `isFreeTariff`? | `boolean` | Not read. Nothing in the component uses it. |
| `isGracePeriod`? | `boolean` | Not read. Nothing in the component uses it. |
| `isInfoPanelVisible`? | `boolean` | **Deprecated.** Not read: the live chat launcher no longer moves clear of the info panel. Kept so existing callers compile; it goes in the next major. |
| `isLicenseDateExpired`? | `boolean` | Not read. Nothing in the component uses it. |
| `isNonProfit`? | `boolean` | Not read. Nothing in the component uses it. |
| `isPaymentPageAvailable`? | `boolean` | Not read. Nothing in the component uses it. |
| `isTrial`? | `boolean` | Not read. Nothing in the component uses it. |
| `navigate`? | `((path: string) => void) & ((path: string) => void)` | Router push used by the back button and the dev tools entry. Without it those elements navigate nowhere. |
| `onBack`? | `() => void` | Called by the back button instead of navigating. |
| `onLogoClickAction`? | `() => void` | Called when the logo in the panel's header is clicked. |
| `onProfileClick`? | `(obj: { originalEvent: React.MouseEvent; }) => void` | Called when the profile block is clicked, with the original event wrapped in an object. |
| `path`? | `string` | Not read at this level. The component passes its own `/developer-tools` path to the bar. |
| `showArticleLoader`? | `boolean` | Replaces the profile block with a skeleton and removes the custom slot, the developer tools entry, the apps block, the live chat and the collapse handle. The header and the slots are still rendered. |
| `showProgress`? | `boolean` | **Deprecated.** Not read: the live chat launcher no longer moves for a progress indicator. Kept so existing callers compile; it goes in the next major. |
| `standalone`? | `boolean` | Not read. Nothing in the component uses it. |
| `trialDaysLeft`? | `number` | Not read. Nothing in the component uses it. |
| `user`? | `TUser` | The signed-in person, shown in the block at the foot of the panel. Its `isVisitor` also hides the developer tools entry. |
| `withMainButton`? | `boolean` | Whether a main button belongs above the body. Without it the `Article.MainButton` slot is not rendered on anything but a phone. |

</APITable>

## Recipes

### Loading

`showArticleLoader` swaps the profile block for a skeleton and removes everything the panel adds
below the body: the custom slot, the developer tools entry, the apps block, the live chat and the
collapse handle. The header, the back button and the three slots stay as they are, so the panel does
not jump when the data arrives. `isBurgerLoading` does the same for the logo and the back button,
which it draws as skeletons.

```tsx
import { useEffect, useState } from "react";

import Article from "@onlyoffice/apps-ui-kit/components/article";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function LoadingSidebar() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(id);
  }, []);

  return (
    <Article
      showArticleLoader={loading}
      currentDeviceType={DeviceType.desktop}
      showText
      setShowText={() => {}}
      toggleShowText={() => {}}
      articleOpen={false}
      setArticleOpen={() => {}}
      toggleArticleOpen={() => {}}
      isMobileArticle={false}
      setIsMobileArticle={() => {}}
      isBurgerLoading={loading}
      withCustomArticleHeader={false}
      showBackButton={false}
      hideProfileBlock={false}
      hideAppsBlock
      withCustomSlot={false}
      withSendAgain={false}
      mainBarVisible={false}
      isLiveChatAvailable={false}
      isShowLiveChat={false}
      isAdmin
      limitedAccessDevToolsForUsers={false}
      logoText=""
      downloaddesktopUrl=""
      officeforandroidUrl=""
      officeforiosUrl=""
      languageBaseName="en"
      zendeskEmail=""
      chatDisplayName=""
      zendeskKey=""
    >
      <Article.Header>
        <Text fontWeight={600}>Documents</Text>
      </Article.Header>
      <Article.Body>
        <div />
      </Article.Body>
    </Article>
  );
}
```

### Collapsing the panel

`showText` is the width, and the component writes it back through `setShowText` whenever the device
type changes — so it has to be state you own, not a constant. The handle at the foot of the panel
calls `toggleShowText` and nothing else; if that does not flip `showText`, nothing happens.

```tsx
import { useState } from "react";

import Article from "@onlyoffice/apps-ui-kit/components/article";
import { Text } from "@onlyoffice/apps-ui-kit/components/text";
import { DeviceType } from "@onlyoffice/apps-ui-kit/enums";

export function CollapsibleSidebar() {
  const [showText, setShowText] = useState(true);

  return (
    <Article
      showText={showText}
      setShowText={setShowText}
      toggleShowText={() => setShowText((value) => !value)}
      currentDeviceType={DeviceType.tablet}
      articleOpen={false}
      setArticleOpen={() => {}}
      toggleArticleOpen={() => {}}
      isMobileArticle
      setIsMobileArticle={() => {}}
      isBurgerLoading={false}
      withCustomArticleHeader={false}
      showBackButton={false}
      hideProfileBlock
      hideAppsBlock
      withCustomSlot={false}
      withSendAgain={false}
      mainBarVisible={false}
      isLiveChatAvailable={false}
      isShowLiveChat={false}
      isAdmin={false}
      limitedAccessDevToolsForUsers
      logoText=""
      downloaddesktopUrl=""
      officeforandroidUrl=""
      officeforiosUrl=""
      languageBaseName="en"
      zendeskEmail=""
      chatDisplayName=""
      zendeskKey=""
    >
      <Article.Header>
        <Text fontWeight={600}>Documents</Text>
      </Article.Header>
      <Article.Body>
        <div>{showText ? <Text>Rooms</Text> : null}</div>
      </Article.Body>
    </Article>
  );
}
```

## Behaviour the types don't state

- **The slots render nothing themselves.** `Article.Header`, `Article.MainButton` and `Article.Body`
  are components that return `null`. Their children are picked out of `children` in an effect, by
  matching `displayName`, and rendered in the panel's own places.
- **Wrapping a slot hides it.** The match is on the child's own display name, so
  `<MyHeader />` that renders an `Article.Header`, or a memoised one, is never found and its content
  never appears.
- **A slot that disappears leaves its content behind.** The lifted content is kept in state and only
  ever written, never cleared: rendering without an `Article.Body` afterwards keeps showing the
  previous body.
- **`Article.Body` must hold exactly one element.** A component child is cloned to receive a
  `hasCustomSlot` prop, so a fragment, a list or a string throws. A DOM element child (`<nav>`)
  is rendered as it is, without the prop.
- **Twelve props are dead.** `withSendAgain`, `isNonProfit`, `isGracePeriod`, `isFreeTariff`,
  `isPaymentPageAvailable`, `isLicenseDateExpired`, `isTrial`, `standalone`,
  `currentTariffPlanTitle`, `trialDaysLeft`, `withCustomSlot` and `path` are declared, several of
  them required, and nothing reads any of them.
- **It writes to the props it is given.** On mount and on every change of `currentDeviceType` it
  calls `setShowText` and `setIsMobileArticle`; on a phone it also forces `showText` to true. Both
  have to be backed by state you own.
- **It reads `localStorage`.** The key `showArticle` is parsed on mount; on a tablet the panel stays
  expanded unless that key holds a falsy JSON value, because an absent key parses to `{}`.
- **On a phone the whole panel is a portal into `#root`**, with a backdrop that calls
  `toggleArticleOpen`, and a `popstate` listener that closes it when the browser goes back.
- **The developer tools entry is hidden by the URL.** Besides `isAdmin` and
  `limitedAccessDevToolsForUsers`, it is suppressed on any path containing `developer-tools`,
  `accounts`, or `management` without `profile` — read from `window.location` during render.
- **The live chat block loads Zendesk.** It is rendered only when `isLiveChatAvailable` is set and
  the user agent is not mobile, and it injects a third-party script keyed by `zendeskKey`.
- **The layout follows `currentDeviceType`, not the window.** The only measurement it takes is the
  window height minus `#main-bar`, on every resize — and it does not use the result. The stylesheet
  is the exception: the widths, the collapse handle and the header rule are chosen by media queries
  at 600px and 1024px, so a `tablet` device type in a desktop-wide window still gets the desktop
  column.
- **The collapse handle exists only in a tablet-width window** (600–1024px). The stylesheet hides it
  on desktop and phone widths whatever `currentDeviceType` says.
- **The profile block shows the avatar, the name and a dots button** that opens the `getActions`
  menu. On a collapsed tablet panel only the avatar is left, and clicking it opens that menu instead
  of calling `onProfileClick`. On a phone the block is not rendered at all.
- The panel is `height: 100%` and its width is fixed by custom properties: 252px on desktop, 243px
  expanded and 60px collapsed on a tablet.

## Sub-components

<APITable>

| Name                 | What it is for                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `Article.Header`     | Content of the header row, beside the burger and the logo                                                            |
| `Article.MainButton` | The primary action above the body; rendered only while `withMainButton` is set, and moved below the panel on a phone |
| `Article.Body`       | The scrolling body. Its single element child, when a component, is cloned with a `hasCustomSlot` prop                |

</APITable>

They are static properties of `Article`, not separate exports, and they accept nothing but
`children`.

The body's rows are usually `ArticleItem`, from `components/article/item` — one catalog entry with
an icon, a label and an optional badge. With `showText` off it shows only the icon, and its `title`
prop becomes the tooltip; `isEndOfBlock` closes a group with a bottom margin of 16px (24px
below 1024px). It has no README of its own; its variables are listed below.

## CSS variables

<APITable>

| Variable                            | Default            | Effect                                                                                                                                                        |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--article-bg`                      | theme substrate    | Background of the panel and of the collapse handle                                                                                                            |
| `--article-border`                  | theme rule         | The panel's trailing border, repeated on the profile block                                                                                                    |
| `--article-header-border`           | theme rule         | Rule under the header row. Drawn only in a phone-width window while `currentDeviceType` is not `mobile`, because the phone layout renders a header of its own |
| `--article-profile-bg`              | theme hover colour | Background of the profile block                                                                                                                               |
| `--article-profile-border`          | theme rule         | Rule above the profile block                                                                                                                                  |
| `--article-logo-color`              | theme text colour  | Fill of the logo                                                                                                                                              |
| `--article-back-color`              | theme muted colour | Colour of the back button's label                                                                                                                             |
| `--article-width`                   | `252px`            | Width on a desktop. The profile block keeps its own 251px, so a wider value leaves a gap beside it                                                            |
| `--article-sidebar-width`           | `243px`            | Width in a tablet-width window (600–1024px) while `showText` is set. The profile block and the collapse handle keep 243px                                     |
| `--article-sidebar-collapsed-width` | `60px`             | Width in a tablet-width window while `showText` is off. The profile block and the collapse handle keep 60px                                                   |

</APITable>

`ArticleItem` reads its own set:

<APITable>

| Variable                         | Default     | Effect                                                                                         |
| -------------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `--article-item-border-radius`   | `3px`       | Radius of the row's background                                                                 |
| `--article-item-bg`              | transparent | Background of a row at rest                                                                    |
| `--article-item-hover-bg`        | theme-based | Background on hover                                                                            |
| `--article-item-active-bg`       | theme-based | Background of the active row                                                                   |
| `--article-item-active-hover-bg` | theme-based | Background of the active row on hover                                                          |
| `--article-item-text`            | theme-based | Label colour                                                                                   |
| `--article-item-text-active`     | theme-based | Label colour of the active row                                                                 |
| `--article-item-text-weight`     | `600`       | Label weight                                                                                   |
| `--article-item-icon`            | theme-based | Icon fill                                                                                      |
| `--article-item-icon-active`     | theme-based | Icon fill of the active row                                                                    |
| `--sidebar-item-gap`             | `0`         | Space below every row, set on any ancestor; an `isEndOfBlock` row keeps its own margin instead |

</APITable>

## Accessibility

- **The panel is not a landmark.** It is a `<div>` with an id, not a `<nav>` or `<aside>`, and it
  has no label — so it is not announced as a region and cannot be jumped to.
- **The collapse handle and the burger are `<div>`s with an `onClick`**, with no role, no
  `tabindex` and no key handler: the panel cannot be collapsed or opened from the keyboard.
- On a phone the panel is a portal over the page with a backdrop, and nothing moves focus into it,
  traps focus inside it or restores focus when it closes.
- The labels that are rendered come from the kit's shared translations; without a
  `TranslationProvider` they are empty strings, which leaves those controls with no accessible name
  at all.
- The panel sets `user-select: none` over its whole area, so its text cannot be selected or copied.

## Test ids

<APITable>

| Element   | `data-testid` |
| --------- | ------------- |
| The panel | `article`     |

</APITable>

It is not settable. The panel also carries `data-show-text`, `data-open` and
`data-with-main-button`, and its element id is `article-container`.

## Related

- [`Section`](./section.md) — the page body this sits beside, and the other half of the layout.
- [`Navigation`](../navigation/navigation-component.md) — the header inside that body.
- [`NavMenu`](../navigation/nav-menu.md) — a navigation panel that is not tied to the portal.
