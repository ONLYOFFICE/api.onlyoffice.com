# 文档权限 

文档权限部分允许更改要编辑和下载的文档的权限。

## changeHistory

`类型: boolean`

允许在使用 [onRequestRestore](../events.md#onrequestrestore) 事件时显示*恢复*按钮。默认值为 **false**。

:::danger[Deprecated]
自 5.5 版起已弃用，请改为添加 [onRequestRestore](../events.md#onrequestrestore) 字段。
:::

**示例**: `true`

## 聊天 {#chat}

`类型: boolean`

定义是否在文档中启用聊天功能。如果聊天权限设置为 **true**，将显示**聊天**菜单按钮。

**示例**: `true`

## 评论 {#comment}

`类型: boolean`

定义是否可以评论文档。如果评论权限设置为 **"true"**，文档**侧栏**将包含**评论**菜单选项；如果 [mode](../editor/editor.md#mode) 参数设置为 **edit**，文档注释将仅对文档编辑器可用。默认值与 [edit](#edit) 参数的值一致。

:::note
如果 *edit* 设置为 **"true"** 并且 *comment* 也设置为 **"true"**，用户将能够编辑文档和评论。如果 *edit* 设置为 **"true"**，*comment* 设置为 **"false"**，用​户将只能编辑，相应的评论功能将只能查看，评论的添加和编辑将不可用。如果 *edit* 设置为 **"false"** 并且 *comment* 设置为 **"true"**，该文档将仅用于评论。如果 *edit* 设置为 **"false"**，*review* 设置为 **"false"**，*comments* 设置为 **"true"**，则不考虑 *fillForms* 值并且无法填写表单。
:::

**示例**: `true`

![评论](/assets/images/editor/comment.png)

## commentGroups

`类型: object`

定义用户可以编辑、删除和/或查看其评论[组](../editor/editor.md#user。

*\[""]* 值意味着用户可以编辑/删除/查看不属于这些组的人所做的评论（例如，如果文档在第三方编辑器中进行了审阅）。如果值为 *[]*，则用户无法编辑/删除/查看任何组的评论。如果 *edit*, *remove* 和 *view* 参数为 *""* 或未指定，则用户可以查看/编辑/删除任何用户的评论。

**示例**:

``` ts
const config = {
  edit: ["Group2", ""],
  remove: [""],
  view: "",
}
```

### commentGroups.edit

`类型: list`

用户可以编辑其他用户发表的评论。

**示例**: `["Group2", ""]`

### commentGroups.remove

`类型: list`

用户可以删除其他用户的评论。

**示例**: `[]`

### commentGroups.view

`类型: list`

用户可以查看其他用户发表的评论。

**示例**: `""`

## 复制 {#copy}

`类型: boolean`

定义是否可以将内容复制到剪贴板。如果参数设置为 **false**，则粘贴内容将仅在当前文档编辑器中可用。默认值为 **true**。

**示例**: `true`

## deleteCommentAuthorOnly

`类型: boolean`

定义用户是否只能删除他/她的评论。默认值为 **false**。

**示例**: `true`

## 下载 {#download}

`类型: boolean`

定义文档是可以下载还是只能在线查看或编辑。如果下载权限设置为 **"false"**，则 **文件** 菜单中将不存在 **下载为...** 菜单选项。默认值为 **true**。

**示例**: `true`

![下载文档](/assets/images/editor/download.png)

## 修改 {#edit}

`类型: boolean`

定义文档是可以编辑还是只能查看。如果编辑权限设置为 **"true"**, **文件**菜单将包含**编辑文档**菜单选项；请注意，如果编辑权限设置为 **"false"**，文档将在查看器中打开，即使 [mode](../editor/editor.md#mode) 参数设置为 **edit**，您也**无法**将其切换到编辑器。默认值为 **true**。

**示例**: `true`

![编辑文档](/assets/images/editor/edit.png)

## editCommentAuthorOnly

`类型: boolean`

定义用户是否只能编辑他/她的评论。默认值为 **false**。

**示例**: `true`

## fillForms

`类型: boolean`

定义是否可以填写表单。仅当[mode](../editor/editor.md#mode)参数设置为 **edit**时，文档编辑器和 pdf编辑器才可以填写表单。默认值与[edit](#edit) 或 [review](#review) 参数的值一致。

:::note
如果 *edit* 设置为 **"true"** 或 *review* 设置为 **"true"**，则不考虑 *fillForms* 值并且可以填写表单。如果 *edit* 设置为 **"false"** 并且 *review* 设置为 **"false"** 并且fillForms也设置为 **"true"**，用户只能填写文档中的表单。如果 *edit* 设置为 **"false"** 并且 *review* 设置为 **"false"** 而且 *fillForms* 设置为 **"true"**，不考虑 *comments* 值并且评论不可用。仅填写表单模式目前仅适用于**文档编辑器**。
:::

**示例**: `true`

![填写表格](/assets/images/editor/fill-forms.png)

## modifyContentControl

`类型: boolean`

定义是否可以更改内容控制设置。 如果 [mode](../editor/editor.md#mode) 参数设置为 **edit**，内容控制修改将仅可用于文档编辑器。默认值为 **true**。

**示例**: `true`

## modifyFilter

`类型: boolean`

定义过滤器是否可以全局应用（**true**）影响所有其他用户，或本地应用（**false**），即仅适用于当前用户。如果 [mode](../editor/editor.md#mode) 参数设置为 **edit**，则过滤器修改仅可用于电子表格编辑器。默认值为 **true**。

:::note
如果文档由具有完全访问权限的用户编辑，则该用户应用的过滤器将对所有其他用户可见，而不管他们的本地设置如何。
:::

**示例**: `true`

## print

`类型: boolean`

定义是否可以打印文档。如果打印权限设置为 **"false"**，则 **文件** 菜单中将不存在 **打印** 菜单选项。默认值为 **true**。

**示例**: `true`

![打印文档](/assets/images/editor/print.png)

## 保护 {#protect}

`类型: boolean`

定义工具栏上的**保护**选项卡和左侧菜单中的**保护**按钮是显示 (**true**) 还是隐藏 (**false**)。默认值为 **true**。

**示例**: `true`

![保护文档](/assets/images/editor/protect.png)

## 重命名 {#rename}

`类型: boolean`

允许在使用 [onRequestRename](../events.md#onrequestrename) 事件时显示 *重命名...* 按钮。默认值为 **false**。

:::danger[Deprecated]
自 6.0 版起已弃用，请改为添加 [onRequestRename](../events.md#onrequestrename) 字段。
:::

**示例**: `true`

## 审阅 {#review}

`类型: boolean`

定义是否可以查看文档。如果审阅权限设置为 **true**，文档**状态栏**将包含**审阅**菜单选项；如果 [mode](../editor/editor.md#mode) 参数设置为 **edit**，文档审阅将仅对文档编辑器可用。默认值与 [edit](#edit) 参数的值一致。

:::note
如果 *edit* 设置为 **"true"** 并且 *review* 也设置为 **"true"**，用户将能够编辑文档，接受/拒绝所做的更改并切换到他/她自己的审阅模式。如果 *edit* 设置为 **"true"** 并且 *review* 设置为 **"false"**，用户将只能进行编辑。如果 *edit* 设置为 **"false"** 并且 *review* 设置为 **"true"**，文档将仅在审阅模式下可用。
:::

**示例**: `true`

![审阅文档](/assets/images/editor/review.png)

## reviewGroups

`类型: string数组`

定义用户可以接受/拒绝其更改的[组](../editor/editor.md#user) 。*[""]* 值意味着用户可以查看不属于任何这些组的人所做的更改（例如，如果文档是在第三方编辑器中查看的）。如果值为 *[]*，则用户无法查看任何组所做的更改。如果值为 *""* 或未指定，则用户可以查看任何用户所做的更改。

**示例**: `["Group1", "Group2", ""]`

## userInfoGroups

`类型: string数组`

定义其信息显示在编辑器中的用户组：

- 用户名显示在编辑器标题的编辑用户列表中，
- 输入文本时，会显示用户光标和工具提示及其名称，
- 在严格的共同编辑模式下锁定对象时，会显示用户名。

*["Group1", ""]* 表示显示Group1中的用户和不属于任何组的用户的信息。*[]* 表示根本不显示任何用户信息。*undefined* 或 *""* 值表示显示所有用户的信息。

**示例**: `["Group1", ""]`

## 示例

``` ts
const config = {
  document: {
    permissions: {
      chat: true,
      comment: true,
      copy: true,
      commentGroups: {
        edit: ["Group2", ""],
        remove: [""],
        view: "",
      },
      deleteCommentAuthorOnly: false,
      download: true,
      edit: true,
      editCommentAuthorOnly: false,
      fillForms: true,
      modifyContentControl: true,
      modifyFilter: true,
      print: true,
      protect: true,
      review: false,
      reviewGroups: ["Group1", "Group2", ""],
      userInfoGroups: ["Group1", ""],
    }
    ,
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
