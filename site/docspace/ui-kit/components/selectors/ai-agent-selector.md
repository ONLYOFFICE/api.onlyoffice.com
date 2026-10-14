---
description: "AIAgentSelector is a selector panel for choosing an AI agent room."
custom_edit_url: "https://github.com/ONLYOFFICE/docspace-ui-kit-react/blob/9954315f61fd4830b7ea0582c3d58bee0e85d0aa/selectors/AIAgent/AIAgent.docs.mdx"
---

import ThemedImage from '@theme/ThemedImage';

import APITable from '@site/src/components/APITable/APITable';

# AIAgentSelector

:::warning[Portal only]

Works only inside an ONLYOFFICE Apps portal: it needs the portal's API client, stores and translations, and is not part of the [public API](../../getting-started/installation-and-setup.md#public-and-portal-internal).

:::

AIAgentSelector is a selector panel for choosing an AI agent room.

### Features

- **Live API mode** — Fetches AI agent rooms from the ONLYOFFICE Apps API with infinite scroll
- **Init data mode** — Accepts pre-loaded items for SSR or offline scenarios via `withInit`
- **Security filtering** — Disable items that lack the `UseChat` permission via `disableBySecurity`
- **Exclusion list** — Skip already-selected agents via `excludeItems`
- **Padding control** — Toggle inner padding with `withPadding`
- **Callbacks** — `onSubmit`, `onClose`, and `setIsDataReady` hooks

### Default

A basic AIAgentSelector with default settings.

<ThemedImage alt="Default" width={1019} sources={{ light: require('./ai-agent-selector--default-light.png').default, dark: require('./ai-agent-selector--default-dark.png').default }} />

```tsx
import AIAgentSelector from "@onlyoffice/apps-ui-kit/selectors/AIAgent";

<AIAgentSelector
  withPadding
  onSubmit={(items) => console.log(items)}
  onClose={() => setOpen(false)}
/>
```

## Properties

<APITable>

| Property | Type | Description |
| --- | --- | --- |
| `id`? | `stringundefined` | HTML id attribute for the root element. |
| `className`? | `stringundefined` | Additional CSS class name for the root element. |
| `style`? | `CSSPropertiesundefined` |  |
| `onSubmit` | `(items: TSelectorItem[]) => void \| Promise<void>` | Called with the selected TSelectorItem array on confirm. |
| `excludeItems`? | `(string \| number \| undefined)[] \| undefined` | List of item ids to exclude from the selector list. |
| `setIsDataReady`? | `((value: boolean) => void) \| undefined` | Called with true/false when data loading state changes. |
| `withPadding`? | `booleanundefined` | Add inner padding to the selector panel. Default: `false`. |
| `onClose` | `() => void` | Called when the selector panel is dismissed. |
| `disableBySecurity`? | `stringundefined` | Message shown on items where UseChat security permission is missing. |
| `externalInfoBarData`? | `TInfoBarDataundefined` |  |
| `withInit`? | `trueundefined` | Use pre-loaded init data instead of fetching from the API. Default: `false`. |
| `initItems`? | `FolderDtoInteger[] \| undefined` |  |

</APITable>
