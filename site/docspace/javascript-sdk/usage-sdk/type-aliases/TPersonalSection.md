---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

# TPersonalSection

Navigation sections available in [SDKMode.Personal](../enumerations/SDKMode.md#Personal) mode.
Used as [TFrameConfig.personalDestination](TFrameConfig.md#personalDestination) for the initial section and by
[SDKInstance.navigateSection](../classes/SDKInstance.md#navigatesection) to switch sections at runtime.

```ts
type TPersonalSection = "my-documents" | "favorites" | "recent" | "trash" | "settings";
```

## Example

```typescript
const personal = sdk.initPersonal({
  frameId: "ds-personal",
  src: "https://portal.example.com",
  personalDestination: "favorites",
});
await personal.navigateSection("trash");
```
