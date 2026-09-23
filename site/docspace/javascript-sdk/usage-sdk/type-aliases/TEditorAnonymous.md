---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TEditorAnonymous

Anonymous user settings for the editor, passed via [TEditorCustomization.anonymous](TEditorCustomization.md#anonymous).
Controls how a user who is not signed in is named in co-editing and comments.

```ts
type TEditorAnonymous = object;
```

## Example

```typescript
sdk.initEditor({
  editorCustomization: {
    anonymous: { request: false, label: "Visitor" },
  },
  ...
});
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `label`? | `string` | Postfix for anonymous user name. Default: `"Guest"`. |
| `request`? | `boolean` | Prompt for anonymous name on open. Default: `true`. |

</APITable>
