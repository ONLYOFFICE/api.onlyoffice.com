---
sidebar_position: -15
---

# Reviewing

Review mode lets users suggest changes to a document without modifying the original text directly. All changes are tracked and can be accepted or rejected by users with the appropriate rights. This section explains how to enable and configure reviewing in your integration.

![Review scheme](/assets/images/editor/review.png#gh-light-mode-only)![Review scheme](/assets/images/editor/review.dark.png#gh-dark-mode-only)

## Review access rights

To enable reviewing, set the [`review`](../../usage-api/config/document/permissions.md#review) parameter to `true` in the `document.permissions` section of the editor [`config`](../../usage-api/config/config.md). The [`mode`](../../usage-api/config/editor/editor.md#mode) parameter must be set to `edit` — reviewing is not available in `view` mode.

If `permissions.edit` is `true` and `permissions.review` is also `true`, the user can edit the document, accept or reject tracked changes, and switch to review mode.

![Reviewing](/assets/images/editor/accept_reject.png#gh-light-mode-only)![Reviewing](/assets/images/editor/accept_reject.dark.png#gh-dark-mode-only)

If `permissions.edit` is `false` and `permissions.review` is `true`, the document is available for reviewing only.

```ts
const config = {
  document: {
    permissions: {
      edit: false,
      review: true,
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

## Group-based review rights

1. Specify the group (or several groups separated with commas) the user belongs to by adding the [`group`](../../usage-api/config/editor/editor.md#usergroup) field to the [`user`](../../usage-api/config/editor/editor.md#user) parameter in the `editorConfig` section.

   ``` ts
   const config = {
     editorConfig: {
       user: {
         id: "78e1e841",
         name: "John Smith",
         group: "Group1,Group2",
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

2. Specify the access rights using the [`reviewGroups`](../../usage-api/config/document/permissions.md#reviewgroups) parameter in the `document.permissions` section of the editor initialization config.

   :::note
   If `reviewGroups` is specified, the user can only review changes made by users from the listed groups. If the parameter is not specified, the user can review changes from all groups.
   :::

   ``` ts
   const config = {
     document: {
       permissions: {
         reviewGroups: ["Group1", "Group2"],
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   `["Group1", "Group2"]` means the user can review changes made by users from Group1 and Group2.

   An empty string in the `reviewGroups` array matches users who do not belong to any group (for example, changes made in third-party editors).

   ``` ts
   const config = {
     document: {
       permissions: {
         reviewGroups: ["Group2", ""],
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   `["Group2", ""]` means the user can review changes made by users from Group2 and by users who do not belong to any group.
