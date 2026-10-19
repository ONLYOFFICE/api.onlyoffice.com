---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts
---

import APITable from '@site/src/components/APITable/APITable';

# TNavigatePayload

Payload of [TFrameEvents.onNavigate](TFrameEvents.md#onNavigate).

```ts
type TNavigatePayload = object;
```

## Properties

<APITable>

| Property | Type | Description |
| ------ | ------ | ------ |
| `section` | \| [`TFormsSection`](TFormsSection.md) \| [`TPersonalSection`](TPersonalSection.md) | The section the frame navigated to: a [TFormsSection](TFormsSection.md) in [SDKMode.Forms](../enumerations/SDKMode.md#Forms), a [TPersonalSection](TPersonalSection.md) in [SDKMode.Personal](../enumerations/SDKMode.md#Personal). |

</APITable>
