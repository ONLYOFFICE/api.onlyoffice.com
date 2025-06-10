---
sidebar_position: -15
---

# 审阅

**审阅选项**允许您在不真正编辑文档的情况下查看文档、更改句子、短语和其他页面元素、更正拼写等。所有更改都将被记录并显示给创建文档的用户。

![审阅](/assets/images/editor/review.png)

## 审阅访问权限

为了启用审阅选项，文档初始化的权限部分中的[审阅](../../usage-api/config/document/permissions.md#review)参数必须设置为 **true**。文档**状态栏**将包含**审阅**菜单选项。

如果 *edit* 参数设置为 **true** 并且 *review* 参数也设置为 **true**，用户将能够编辑文档，接受或拒绝更改并切换到他/她自己的审阅模式。

![审阅](/assets/images/editor/accept_reject.png)

如果 *edit* 参数设置为 **false** 并且 *review* 参数设置为 **true**，则文档将仅可用于审阅。

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      edit: false,
      review: true,
    },
  },
})
```

> 请注意，仅当 [mode](../../usage-api/config/editor/editor.md#mode) 参数设置为 **edit** 时，文档编辑器才能使用文档审阅。

## 按组区分审阅权

1. 通过在 editorConfig 部分的 [user](../../usage-api/config/editor/editor.md#user) 参数中添加字段 *group* 来指定用户所属的组（或用逗号分隔的多个组）。

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    user: [{
      id: "78e1e841",
      name: "John Smith",
      group: "Group1,Group2",
    },
    {
      id: "78e1e841",
      name: "John Smith",
      group: "Group1,Group2",
    }],
  },
})
```

2. 使用编辑器初始化的权限部分中的 [reviewGroups](../../usage-api/config/document/permissions.md#reviewgroups) 参数指定访问权限。

   > 如果在编辑器配置中指定了 **reviewGroups** 参数，则禁用查看所有更改的访问权限。否则，如果当前用户不属于任何组，他或她可以查看所有组的文档。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       permissions: {
         reviewGroups: ["Group1", "Group2"],
       },
     },
   })
   ```

   *\["Group1", "Group2"]* 表示用户可以查看来自 *Group1* 和 *Group2* 的用户所做的更改。

   [reviewGroups](../../usage-api/config/document/permissions.md#reviewgroups) 参数可以采用空组的值。这意味着用户可以查看不属于任何组的用户所做的更改（例如，在第三方编辑器中查看的文档）。

   ``` ts
   const docEditor = new DocsAPI.DocEditor("placeholder", {
     document: {
       permissions: {
         reviewGroups: ["Group2", ""],
       },
     },
   })
   ```

   *\["Group2", ""]* 表示用户可以查看 *Group2* 中的用户和不属于任何组的用户所做的更改。
