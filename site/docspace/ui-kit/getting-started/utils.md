---
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/446f115916d79a87d07b9e3dddb1e39a263784ee/docs/Utils.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# Utils

`utils/` holds the non-visual half of the library: 32 modules of date maths, device
detection, URL and file helpers, cookie access, email parsing and the small generic
helpers the components lean on. Every one of them is re-exported from `utils/index.ts`,
and from there from the package root.

## Importing

Two ways, and which one is right depends on who you are.

```tsx
// Applications: import by subpath. The exports map serves every module
// directly, so the bundler drops what you do not use.
import { isMobile } from "@onlyoffice/apps-ui-kit/utils/device";
import { formatDate } from "@onlyoffice/apps-ui-kit/utils/date";

// DocSpace plugins: the root barrel is the only entry the portal exposes.
// A subpath import throws at plugin load.
import { isMobile, formatDate } from "@onlyoffice/apps-ui-kit";
```

The portal hands a plugin its own mounted copy of the kit through a one-line re-export of
the root barrel and refuses every subpath, so for a plugin the barrel *is* the API. The
client does the opposite and imports by subpath everywhere. Do not carry one convention
into the other.

## Dates and durations

`utils/date` is the largest module — 60 exports, all built on
[luxon](https://moment.github.io/luxon/). It replaces moment.js across the kit and keeps
the portal's timezone handling in one place.

<APITable>

| Group          | Functions                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Parsing**    | `parseISO`, `parseToDateTime`, `parseWithFormat`, `createDateTime`, `fromMillis`, `fromSeconds`, `fromUnixTimestamp`, `now`, `today`, `utc` |
| **Formatting** | `formatDate`, `formatDateLocalized`, `formatWithTimezone`, `getCorrectDate`, `convertMomentFormatToLuxon`, `toISOString`, `toJSDate` |
| **Arithmetic** | `addToDate`, `subtractFromDate`, `startOf`, `endOf`, `fromNowPlus`, `fromNowMinus`, `daysInMonth`, `setDateValues`, `getDateValues` |
| **Comparison** | `dateDiff`, `dateDiffAbs`, `isBefore`, `isAfter`, `isSame`, `isSameDay`, `isBetween`, `isPast`, `isFuture`, `isValidDate`, `minDate`, `maxDate` |
| **Duration**   | `createDuration`, `humanizeDuration`, `convertDuration`, `fromNow`, `toRelative`                                                   |
| **Timezone**   | `toTimezone`, `toAppTimezone`, `getAppTimezone`, `getBrowserTimezone`, `getTimezoneOffset`, `isValidTimezone`, `setDefaultTimezone` |
| **Calendar**   | `getWeekdays`, `getWeekdayName`, `getMonths`, `getMonthsShort`, `getFirstDayOfWeek`, `setDefaultLocale`                            |

</APITable>

```tsx
import {
  parseISO,
  formatDateLocalized,
  fromNow,
  isSameDay,
} from "@onlyoffice/apps-ui-kit/utils/date";

const created = parseISO(file.created); // DateTime | null

formatDateLocalized(created, "DATE_MED", { locale: "en" }); // "Sep 21, 2026"
fromNow(created, { addSuffix: true });                      // "3 days ago"
isSameDay(created, new Date());                             // false
```

`formatDateLocalized` takes one of luxon's presets — `DATE_SHORT`, `DATE_MED`,
`DATE_FULL`, `TIME_SIMPLE`, `DATETIME_MED` and so on — not a format string; `formatDate`
is the one that takes a pattern, and it converts moment.js tokens for you when passed
`{ convertFromMomentFormat: true }`. `fromNow` returns a bare duration ("3 days") unless
you ask for `addSuffix`.

`setDefaultLocale` and `setDefaultTimezone` are process-wide: call them once at app
startup, not per render.

## Device, viewport and DOM

<APITable>

| Module                  | Exports                                                                                                            | What it is for                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `utils/device`          | `isMobile`, `isTablet`, `isDesktop`, `isMobileDevice`, `isTouchDevice`, `checkIsSSR`, `mobile`, `tablet`, `desktop`, `mobileMore`, `size`, `INFO_PANEL_WIDTH`, `MAX_INFINITE_LOADER_SHIFT`, `transitionalScreenSize`, `isReliableAndroidViewport` | Breakpoints and device detection, SSR-safe                              |
| `utils/dom-helpers`     | `DomHelpers` (default)                                                                                             | Viewport measurements, element positioning, scrollbar width, z-index    |
| `utils/context`         | `Context`, `Provider`, `Consumer`                                                                                  | Section width and height, published to the component tree               |
| `utils/edge-scrolling`  | `onEdgeScrolling`, `clearEdgeScrollingTimer`                                                                       | Auto-scrolls `.section-scroll` during drag-and-drop                     |
| `utils/use-click-outside` | `useClickOutside`                                                                                                 | Closes dropdowns, modals and popovers on an outside click               |

</APITable>

`mobile`, `tablet`, `desktop` and `mobileMore` are media-query **strings**, so they work
both in `window.matchMedia` and in a SCSS-free inline style guard:

```tsx
import { mobile, isMobile, checkIsSSR } from "@onlyoffice/apps-ui-kit/utils/device";

if (!checkIsSSR() && window.matchMedia(mobile).matches) {
  // ...
}
```

Prefer the `useIsMobile` / `useIsDesktop` hooks over calling `isMobile()` in render — the
hooks subscribe to the media query and re-render, the functions read it once.

## URLs, files and icons

<APITable>

| Module                          | Exports                                                     | What it is for                                                        |
| ------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| `utils/combineUrl`              | `combineUrl`                                                | Joins a base URL and path segments, normalizing the slashes between them |
| `utils/getLogoUrl`              | `getLogoUrl`                                                | Builds the portal's `/logo.ashx` URL for a white-label logo type, theme and culture |
| `utils/getTitleWithoutExtension` | `getTitleWithoutExtension`                                 | Strips the extension from a document title                            |
| `utils/image-helpers`           | `iconSize24`, `iconSize32`, `iconSize64`, `iconSize96`      | `Map` of `"<ext>.svg"` → icon React component, one map per size. `iconSize32` also carries the room icons; the other three do not |
| `utils/common-icons-style`      | `IconSizeType`, `isIconSizeType`                            | The icon-size union and its type guard                                 |
| `utils/getFilesFromEvent`       | `getFilesFromEvent` (default)                               | Turns a drag, paste or file-input event into a flat `File[]`, walking directories |
| `utils/react-dropzone-interop`  | `useDropzone`                                               | `react-dropzone`'s hook, through a shim that survives Node's CJS/ESM interop |

</APITable>

```tsx
import { combineUrl } from "@onlyoffice/apps-ui-kit/utils/combineUrl";
import { iconSize32 } from "@onlyoffice/apps-ui-kit/utils/image-helpers";

combineUrl("https://portal.example.com/", "/api/2.0", "files");
// "https://portal.example.com/api/2.0/files"

const FileIcon = iconSize32.get("docx.svg"); // a React component, not a URL
return FileIcon ? <FileIcon /> : null;
```

The map keys carry no leading dot: an extension of `.docx` looks up as `"docx.svg"`.

The kit's own drag-and-drop surface is the `Dropzone` component; reach for `useDropzone`
only when you are building a different one.

## Browser state

<APITable>

| Module                  | Exports                                  | Notes                                                                    |
| ----------------------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| `utils/cookie`          | `getCookie`, `setCookie`, `deleteCookie` | `getCookie` special-cases the language cookie during invite-link confirmation: on `/confirm/LinkInvite` a `?culture=` query parameter wins over the stored value |
| `utils/get-system-theme` | `getSystemTheme`                        | The OS colour preference, accounting for the ONLYOFFICE desktop client    |
| `utils/get-oauth-token` | `getOAuthToken`                          | Polls `localStorage` for the `code` an OAuth popup writes back, and resolves when the popup closes |
| `utils/openingNewTab`   | `openingNewTab`                          | Detects middle-click, Ctrl+Click and Cmd+Click and opens the URL in a new tab instead of navigating |

</APITable>

Every one of these is SSR-safe: with no `document` they return `undefined` rather than
throwing.

## Text, i18n and validation

<APITable>

| Module                       | Exports                                                                                 | What it is for                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `utils/i18n`                 | `getCommonTranslation`, `getCurrentCommonLanguage`, `getTranslationReady`, `useCommonTranslation`, `WindowI18n` | Reads `window.i18n` from outside a React tree; see **Translation** |
| `utils/email`                | `parseAddress`, `parseAddresses`, `isEqualEmail`, `isValidDomainName`, `getParts`, `Email`, `EmailSettings` | Address parsing and validation with configurable strictness |
| `utils/parse-locale-constants` | `parseLocaleConstants`                                                                  | Parses JSON with `"Key-<lang>"` locale-suffix overrides       |
| `utils/encoder`              | `Encoder`                                                                                 | Encoding helpers                                            |
| `utils/get-text-color`       | `getTextColor`                                                                            | Picks black or white text for a background colour, by perceived brightness |

</APITable>

```tsx
import { parseAddress, EmailSettings } from "@onlyoffice/apps-ui-kit/utils/email";

parseAddress("jane@example.com").isValid(); // true
parseAddress("a@b.com, c@d.com").parseErrors?.[0]?.errorKey; // "ManyEmails"

// A display name is rejected unless the settings allow it.
const settings = new EmailSettings();
settings.allowName = true;

const parsed = parseAddress('"Jane Doe" <jane@example.com>', settings);
parsed.name;  // "Jane Doe"
parsed.email; // "jane@example.com"
```

`EmailSettings` also toggles punycode in the domain and the local part, IP-literal
domains, spaces, strict local parts and local domain names — each defaulting to the
portal's own rules.

## Portal domain helpers

These encode DocSpace concepts rather than generic browser behaviour.

<APITable>

| Module                          | Exports                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `utils/common`                  | `getUserType`, `getUserTypeTranslation`, `getUserAvatarRoleByType`, `getIconPathByFolderType`, `getLifetimePeriodTranslation`, `isManagement`, `RoomsTypes`, `RoomsTypeValues`, `TTranslation` |
| `utils/calculateRoomLogoParams` | `calculateRoomLogoParams`, `TRoomLogoParams`                                                                                |
| `utils/ai`                      | `getAiModelName`, `getServerIcon`                                                                                           |
| `utils/trim-separator`          | `trimSeparator` — removes redundant and trailing separators from a context-menu array                                       |

</APITable>

## Small generic helpers

<APITable>

| Export            | Module                  | What it does                                                          |
| ----------------- | ----------------------- | ---------------------------------------------------------------------- |
| `uuid`            | `utils/uuid`            | Generates a UUID v4 string                                             |
| `hasOwnProperty`  | `utils/hasOwnProperty`  | `Object.hasOwn` that tolerates `null`, `undefined` and non-objects     |
| `presentInArray`  | `utils/presentInArray`  | String membership, optionally case-insensitive                         |
| `isNextImage`     | `utils/typeGuards`      | Distinguishes a Next.js static image import from a plain URL           |
| `pipe`, `delay`, `stopWhen` | `utils/pipe`  | Composes an async pipeline; each step receives the previous result      |
| `getErrorMessage` | `utils/getErrorMessage` | Pulls a readable message out of a string, an `Error` or an API error shape |

</APITable>

## What is deliberately not in the barrel

Three modules ship in the package and resolve by subpath, but are left out of
`utils/index.ts` — so they are not reachable from a DocSpace plugin:

- **`utils/socket`** — `SocketHelper`, `SocketEvents` and `SocketCommands`, the portal's
  WebSocket singleton. It is the only importer of `socket.io-client`, which is an optional
  peer dependency, and it is meaningless without a DocSpace portal to talk to.
- **`utils/interop-default`** — a Node CJS/ESM interop shim used by the build, not
  application code.
- **`utils/add-log`** — socket logging gated on `window.ClientConfig`.

Everything else under `utils/` is in the barrel. See `docs/public-api.md` in the
repository for the full public-versus-portal-internal tiering.
