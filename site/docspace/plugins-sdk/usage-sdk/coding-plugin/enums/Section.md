---
custom_edit_url: https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/release/v4.0.0/src/enums/Section.ts
---

# Section

Defines the portal sections in which an article navigation item can appear.
Pass one or more values in the `appears` array on [`IArticleNavigationItem`](../interfaces/items/IArticleNavigationItem.md)
to restrict visibility. When omitted, the item is shown in all sections.

## Enumeration Members

### Files

```ts
Files: "Files";
```

The main Files section of the portal

### Accounts

```ts
Accounts: "Accounts";
```

The Accounts / People section of the portal

### Settings

```ts
Settings: "Settings";
```

The Portal Settings section
