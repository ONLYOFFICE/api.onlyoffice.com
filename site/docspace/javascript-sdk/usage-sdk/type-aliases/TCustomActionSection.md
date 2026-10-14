---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/types/index.ts
---

# TCustomActionSection

A section a custom action can be limited to: a [TManagerSection](TManagerSection.md), a [TPersonalSection](TPersonalSection.md)
or a [TFormsSection](TFormsSection.md), matched against the mode the frame runs in.

```ts
type TCustomActionSection = 
  | TManagerSection
  | TPersonalSection
  | TFormsSection;
```
