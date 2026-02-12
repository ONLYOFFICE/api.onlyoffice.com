---
sidebar_position: -10
---

# 评论

**评论功能**允许您对文档中特定的单词、短语、句子以及其他部分添加评论，还能对这些评论进行编辑和删除操作。所有评论都会被保存下来，并展示给其他使用该文档的用户。

![评论](/assets/images/editor/comment.png#gh-light-mode-only)![评论](/assets/images/editor/comment.dark.png#gh-dark-mode-only)

## 评论权限

为了启用评论功能，在文档初始化时的权限部分中，必须将[评论](../../usage-api/config/document/permissions.md#comment)参数设置为**true**。此时文档的**侧边栏**会包含**评论**菜单选项。

如果*edit* 参数设置为**true**，并且*comment*参数也设置为**true**，那么用户将能够编辑文档并添加评论。

![评论](/assets/images/editor/commenting.png)

如果*edit* 参数设置为 false，而 *comment*参数设置为 true，那么该文档将仅可用于添加评论。

``` ts
const config = {
  document: {
    permissions: {
      edit: false,
      comment: true,
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

> 请注意，如果[mode](../../usage-api/config/editor/editor.md#mode)参数设置为**edit**，文档编辑器才会具备文档评论功能。

## 按作者区分评论权限

1. 如果您希望仅允许评论的作者对评论进行编辑，在编辑器初始化的权限部分中，将[editCommentAuthorOnly](../../usage-api/config/document/permissions.md#editcommentauthoronly)参数设置为**true**。

   ``` ts
   const config = {
     document: {
       permissions: {
         editCommentAuthorOnly: true,
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

2.如果您希望仅允许评论的作者删除评论，在编辑器初始化的权限部分中，将[deleteCommentAuthorOnly](../../usage-api/config/document/permissions.md#deletecommentauthoronly) 参数设置为**true**。

   ``` ts
   const config = {
     document: {
       permissions: {
         deleteCommentAuthorOnly: true,
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

## 按群组区分评论权限

1. 在 editorConfig 部分的[user](../../usage-api/config/editor/editor.md#user)参数中添加 *group* 字段，以此指定用户所属的群组（或者多个群组，群组之间用逗号分隔）。

    ``` ts
    const config = {
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
    };

    const docEditor = new DocsAPI.DocEditor("placeholder", config);
    ```

2. 在编辑器初始化的权限部分中，使用[commentGroups](../../usage-api/config/document/permissions.md#commentgroups)参数指定访问权限。

   > 如果在编辑器配置中指定了**commentGroups**参数，那么查看、编辑和 / 或删除所有评论的访问权限将被禁用。否则，如果当前用户不属于任何一个群组，那么他或她可以编辑、删除和 / 或查看所有群组的评论。

   ``` ts
   const config = {
     document: {
       permissions: {
         commentGroups: {
           edit: ["Group2", ""],
           remove: [""],
           view: "",
         },
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

   - *"edit": \["Group2", ""]* 表示用户可以编辑来自** Group2**的用户以及不属于任何群组的用户所添加的评论（例如，在第三方编辑器中添加评论的文档）。
   - *"remove": \[""]* 表示用户可以删除不属于这些群组的人所添加的评论（例如，在第三方编辑器中添加评论的文档）。
   - *"view": ""* 表示用户可以查看任何用户所添加的评论。

## 电子表格中的线程式评论 {#threaded-comments-in-spreadsheets}

为了在其他编辑器中正确显示 ONLYOFFICE 电子表格的评论，所有评论会以两种格式保存：原始格式和线程式格式：

1. **原始评论格式** 如下所示：

   ```txt
   ${author1}:
   comment
   ${author2}:
   reply1
   ${author2}:
   reply2
   ```

   ![线程式评论](/assets/images/editor/comments-threaded.png)

2. 要将原始评论格式转换为**线程式评论**，如果评论以*"$\{author\}:\n"* 字符串开头，则会删除该字符串。

编辑器中打开文件的情况如下：

- 如果文件中有线程式评论，打开文件时会使用这些线程式评论。
- 如果文件中只有原始的 ONLYOFFICE 格式的评论，它们会被转换为线程式评论。
