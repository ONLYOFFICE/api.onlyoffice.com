---
description: "Three small modules carry the values and the vocabulary the rest of the library is written in."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/docs/Constants.mdx"
---

import APITable from '@site/src/components/APITable/APITable';

# Constants, enums and types

Three small modules carry the values and the vocabulary the rest of the library is written
in. All three are in the root barrel, so a plugin reaches them the same way an application
does.

```tsx
import { EMPTY_ARRAY, OPERATIONS_NAME } from "@onlyoffice/apps-ui-kit/constants";
import { DeviceType, RoomsType } from "@onlyoffice/apps-ui-kit/enums";
import type { TFile, TFolder, Nullable } from "@onlyoffice/apps-ui-kit/types";
```

## Constants

### Frozen empties

`EMPTY_ARRAY`, `EMPTY_OBJECT` and `FUNCTION_EMPTY` are shared, frozen singletons. Use them
instead of a fresh `[]`, `{}` or `() => {}` in a default prop or a selector return: a new
literal is a new reference on every render, and that alone re-renders every memoized child
downstream.

```tsx
import { EMPTY_ARRAY } from "@onlyoffice/apps-ui-kit/constants";

const items = data?.items ?? EMPTY_ARRAY;
```

### File formats and validation

<APITable>

| Constant                    | Value                                                                   |
| --------------------------- | ------------------------------------------------------------------------- |
| `TEMPLATE_GALLERY_FORMATS`  | `.docx`, `.xlsx`, `.pptx`, `.pdf`                                        |
| `HTML_EXST`                 | `.htm`, `.mht`, `.html`, `.mhtml`                                         |
| `EBOOK_EXST`                | `.fb2`, `.pb2`, `.ibk`, `.prc`, `.epub`, `.djvu`                          |
| `CHAT_SUPPORTED_FORMATS`    | `doc,docx,txt,pdf,xls,xlsx` — what the AI chat accepts as an attachment  |
| `FOLDER_FORM_VALIDATION`    | The regex of characters a folder name may not contain                     |
| `MAX_VISIBLE_EXTENSIONS`    | `5` — how many extensions a format list shows before collapsing           |

</APITable>

### Uploads

`DEFAULT_CHUNK_UPLOAD_SIZE` (5 MB), `DEFAULT_MAX_UPLOAD_THREAD_COUNT` (3) and
`DEFAULT_MAX_UPLOAD_FILES_COUNT` (2) are the uploader's defaults; the portal overrides them
from its own settings where it has them.

### Everything else

<APITable>

| Constant                          | What it is                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------- |
| `OPERATIONS_NAME`                 | The file-operation names the progress UI keys off (`trash`, `download`, `copy`, `move`, `convert`, `upload`, `backup`, …) |
| `ROOM_ACTION_KEYS`                | Action keys for the create/edit room flow                                        |
| `LOADER_STYLE`                    | The shared `react-content-loader` styling every skeleton starts from             |
| `LANGUAGE`                        | `asc_language` — the name of the portal's language cookie                        |
| `LIVE_CHAT_LOCAL_STORAGE_KEY`     | Deprecated — the live chat no longer stores its open/closed state; nothing reads it |
| `ASIDE_PADDING_AFTER_LAST_ITEM`   | `12px` — bottom padding an aside leaves under its last row                       |

</APITable>

### Brand and constant lookups

`getBrandName` and `getConstName` resolve a key — `"ProductName"`, `"BetaLabel"`, `"SSO"` —
to the name the current deployment uses. The library ships an identity lookup, so a key
resolves to itself until an application registers a real one:

```tsx
import {
  getBrandName,
  setBrandLookup,
} from "@onlyoffice/apps-ui-kit/constants";

getBrandName("ProductName"); // "ProductName" — nothing registered yet

setBrandLookup((key, locale) => myTranslations[locale ?? "en"][key] ?? key);

getBrandName("ProductName"); // "ONLYOFFICE DocSpace"
```

DocSpace applications register theirs as a side effect of importing
`@docspace/shared/constants/brands`, so in the portal this is already done.

The lookup is held on `globalThis` under a `Symbol.for` key rather than in a module-scope
variable, and that is deliberate. A module-scope variable is only shared by code that
loaded the *same copy* of the package, and pnpm's isolated layout installs one copy per
distinct peer-resolution set. Those sets diverge easily — which once meant `setBrandLookup`
ran against one copy while the selectors read another, and every breadcrumb rendered the
literal key `ProductName`. A realm-global slot survives that.

## Enums

`enums/` re-exports 38 enumerations. The ones you will reach for most:

<APITable>

| Enum                                              | Covers                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| `DeviceType`                                       | `mobile`, `tablet`, `desktop` — the value the layout branches on  |
| `ThemeKeys`                                        | Light, dark and system theme selection                            |
| `RoomsType`, `RoleType`                            | DocSpace room kinds and member roles                              |
| `FolderType`, `FileType`, `FileStatus`, `ContentType` | What an item is and what state it is in                        |
| `EmployeeType`, `EmployeeStatus`, `EmployeeActivationStatus` | User classification and account state                  |
| `ShareAccessRights`, `ShareRights`                 | Access levels on a shared item                                    |
| `FilterGroups`, `FilterKeys`, `SortByFieldName`, `FilterSelectorTypes` | Filter and sort vocabulary the filter components speak |
| `ButtonKeys`, `Events`, `EventType`, `AnalyticsEvents` | Keyboard keys, DOM custom events and analytics event names   |
| `ServerType`, `ToolsPermission`, `ChatReasoningEffort`, `VectorizationStatus` | AI agent and MCP server concepts           |
| `ErrorKeys`, `ParseErrorTypes`                     | Error identifiers, including the email parser's                   |

</APITable>

Six of these — `SdkDateToAutoCleanUp`, `SdkSortedByType`,
`SdkFilesSettingsDtoDefaultSharingAccessRightsEnum` and the `EmployeeFullDto`,
`FileDtoInteger`, `GroupDto` types below — come from `@onlyoffice/docspace-api-sdk` and are
re-exported as they are. They move when that dependency is upgraded, so treat them as less
stable than the kit's own.

## Types

`types/` holds the shared type vocabulary — 31 exports. The portal entity shapes are
`TFile`, `TFolder`, `TUser`, `TUserGroup`, `TLogo`, `TCreatedBy`, `ICover` and the
`TFileSecurity` / `TFolderSecurity` / `TRoomSecurity` permission sets. The UI vocabulary is
`TViewAs`, `TSortBy`, `TSortOrder`, `TDirectionX`, `TDirectionY`, `TPathParts`,
`PathObject`, `TGetIcon`, `LinkRouterProps` and `To`.

Four are general-purpose TypeScript helpers worth knowing about:

```ts
import type {
  Nullable,
  ValueOf,
  MergeTypes,
  WithFlag,
} from "@onlyoffice/apps-ui-kit/types";

type MaybeUser = Nullable<TUser>;        // TUser | null
type Device = ValueOf<typeof DeviceType>; // the union of an object's value types
```
