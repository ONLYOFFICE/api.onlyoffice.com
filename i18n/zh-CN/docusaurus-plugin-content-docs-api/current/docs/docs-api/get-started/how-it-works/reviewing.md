---
sidebar_position: -15
---

# 审阅

审阅模式允许用户在不直接修改原始文本的情况下对文档提出修改建议。所有更改都会被跟踪，具有相应权限的用户可以接受或拒绝这些更改。本节介绍如何在集成中启用和配置审阅功能。

![审阅](/assets/images/editor/review.png#gh-light-mode-only)![审阅](/assets/images/editor/review.dark.png#gh-dark-mode-only)

## 审阅访问权限

要启用审阅功能，请在编辑器初始化配置的 `document.permissions` 部分中将 [`review`](../../usage-api/config/document/permissions.md#review) 参数设置为 `true`。[`mode`](../../usage-api/config/editor/editor.md#mode) 参数必须设置为 `edit`——在 `view` 模式下审阅功能不可用。

如果 `permissions.edit` 为 `true` 且 `permissions.review` 也为 `true`，用户可以编辑文档、接受或拒绝跟踪的更改，以及切换到审阅模式。

![审阅](/assets/images/editor/accept_reject.png#gh-light-mode-only)![审阅](/assets/images/editor/accept_reject.dark.png#gh-dark-mode-only)

如果 `permissions.edit` 为 `false` 且 `permissions.review` 为 `true`，则文档仅可用于审阅。

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

## 基于组的审阅权限

1. 通过在 `editorConfig` 部分的 [`user`](../../usage-api/config/editor/editor.md#user) 参数中添加 [`group`](../../usage-api/config/editor/editor.md#usergroup) 字段来指定用户所属的组（或用逗号分隔的多个组）。

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

2. 使用编辑器初始化配置的 `document.permissions` 部分中的 [`reviewGroups`](../../usage-api/config/document/permissions.md#reviewgroups) 参数指定访问权限。

   :::note
   如果指定了 `reviewGroups`，用户只能审阅来自所列组的用户所做的更改。如果未指定该参数，用户可以审阅所有组的更改。
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

   `["Group1", "Group2"]` 表示用户可以审阅来自 Group1 和 Group2 的用户所做的更改。

   `reviewGroups` 数组中的空字符串匹配不属于任何组的用户（例如，在第三方编辑器中所做的更改）。

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

   `["Group2", ""]` 表示用户可以审阅来自 Group2 的用户以及不属于任何组的用户所做的更改。
