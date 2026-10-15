---
description: "GroupsSelector is a searchable, paginated selector panel for choosing a user group."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/selectors/Groups/Groups.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# GroupsSelector

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

GroupsSelector is a searchable, paginated selector panel for choosing a user group.

### Features

- **Live API mode** — Fetches groups from the ONLYOFFICE Apps Groups API in batches of 100 with infinite scroll
- **Single-select** — The user can pick exactly one group at a time
- **Search** — Filters groups by name; resets and re-fetches the list automatically
- **Header** — Optional configurable header with a close button via `withHeader` / `headerProps`
- **Aside mode** — Can render inside an Aside panel with backdrop and optional blur via `useAside`
- **Callbacks** — `onSubmit` and `onClose` hooks

### Default

A basic GroupsSelector with default settings.

<ThemedImage alt="Default" width={724} sources={{ light: require('./groups-selector--default-light.png').default, dark: require('./groups-selector--default-dark.png').default }} />

```tsx
import GroupsSelector from "@onlyoffice/apps-ui-kit/selectors/Groups";

<GroupsSelector
  withHeader
  headerProps={{
    headerLabel: "Select Group",
    onCloseClick: () => setOpen(false),
  }}
  onSubmit={(items) => console.log(items[0])}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `withHeader`? | `trueundefined` | Show the header bar with a label and close button. Default: `false`. |
| `headerProps`? | `HeaderPropsundefined` | The header's own props. Required once withHeader is set. |
| `useAside`? | `booleanundefined` | Render the selector inside an Aside panel with a backdrop. Default: `false`. |
| `onClose`? | `VoidFunctionundefined` | Called when the selector panel is dismissed. |
| `withoutBackground`? | `booleanundefined` | Remove the background overlay when rendered in Aside mode. Default: `false`. |
| `withBlur`? | `booleanundefined` | Apply a blur effect to the Aside backdrop. Default: `false`. |
| `id`? | `stringundefined` | HTML id attribute for the root element. |
| `className`? | `stringundefined` | Additional CSS class name for the root element. |
| `onSubmit` | `(selectedItems: TSelectorItem[], access?: TAccessRight \| null \| undefined, fileName?: string \| undefined, isFooterCheckboxChecked?: boolean \| undefined) => void \| Promise<...>` | Called with the selected TSelectorItem array when the user confirms their choice. |

</APITable>
