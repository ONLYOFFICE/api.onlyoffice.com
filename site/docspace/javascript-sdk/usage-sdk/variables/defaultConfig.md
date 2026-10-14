---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-sdk-js/blob/release/v4.0.0/src/constants/index.ts
---

# defaultConfig

The default configuration applied to every frame before user overrides.
Merge order in [SDKInstance.initFrame](../classes/SDKInstance.md#initframe): `defaultConfig` → instance config → user config.

Override only the fields you need — unset fields fall back to these defaults.

```ts
const defaultConfig: TFrameConfig;
```

## Example

```typescript
// Minimal config — everything else comes from defaultConfig
sdk.initFrame({
  frameId: "ds-frame",
  src: "https://portal.example.com",
  mode: "manager",
});
```
