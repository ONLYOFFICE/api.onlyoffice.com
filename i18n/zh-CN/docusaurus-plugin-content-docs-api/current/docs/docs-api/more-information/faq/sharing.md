---
sidebar_position: -10
---

# 共享问题

## 如何打开启用了"跟踪更改"模式的文档？

要在启用*跟踪更改*模式的情况下打开文档，请使用 *document.permissions* 参数（请参阅[此处](../../usage-api/advanced-parameters.md))。

在启用*跟踪更改*模式的情况下，可以通过三种主要变体打开文档：

1. 启用审阅和编辑：如果 *document.permission.edit* 和document.permission.review参数都设置为 **true**，用户自己将能够编辑文档，接受/拒绝所做的更改并切换到审阅模式。这种情况下的配置将如下所示：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    document: {
      permissions: {
        edit: true,
        review: true,
      },
    },
    editorConfig: {
      mode: "edit",
    },
  })
  ```

2. 仅启用审阅：如果 *document.permission.edit* 参数设置为 **false** 并且 *document.permission.review* 设置为 **true**，用户将只能在审阅模式下打开文档。这种情况下的配置将如下所示：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    document: {
      permissions: {
        edit: false,
        review: true,
      },
    },
    editorConfig: {
      mode: "edit",
    },
  })
  ```

3. 启用审阅和评论：如果 *document.permission.edit* 参数设置为 **false**， *document.permission.review* 和 *document.permission.comment* 都设置为 **true**，用户将能够以审阅模式打开文档，并有可能评论它，但将无法编辑它。这种情况下的配置将如下所示：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    document: {
      permissions: {
        edit: false,
        comment: true,
        review: true,
      },
    },
    editorConfig: {
      mode: "edit",
    },
  })
  ```

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md)。

## 如何打开文档并启用"评论"模式？

要在启用*评论*模式的情况下打开文档，需要使用 *document.permissions* 参数（请参阅[此处](../../usage-api/advanced-parameters.md))了解 ONLYOFFICE 文档配置对象的完整结构）。

在启用*评论*模式的情况下，如何打开文档有以下主要变体：

1. 启用评论和编辑：如果 *document.permission.edit* 和 *document.permission.comment* 参数都设置为 **true**，用户将能够编辑文档和评论。这种情况下的配置将如下所示：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    document: {
      permissions: {
        edit: true,
        comment: true,
      },
    },
    editorConfig: {
      mode: "edit",
    },
  })
  ```

2. 仅启用评论：如果 *document.permission.edit* 参数设置为 **false** 并且document.permission.comment设置为 **true**，则文档将仅可用于评论。这种情况下的配置将如下所示：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    document: {
      permissions: {
        edit: false,
        comment: true,
      },
    },
    editorConfig: {
      mode: "edit",
    },
  })
  ```

3. 启用审阅和评论：如果 *document.permission.edit* 参数设置为 **false**，*document.permission.review* 和 *document.permission.comment* 都设置为 **true**，用户将能够以审阅模式打开文档，并有可能评论它，但将无法编辑它。这种情况下的配置将如下所示：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    document: {
      permissions: {
        edit: false,
        comment: true,
        review: true,
      },
    },
    editorConfig: {
      mode: "edit",
    },
  })
  ```

4. 评论只能查看：如果 *document.permission.edit* 参数设置为 **true** 并且 *document.permission.comment* 设置为 **false**，用户将只能编辑，相应的评论功能将仅供查看，评论的添加和编辑将不可用。这种情况下的配置将如下所示：

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    document: {
      permissions: {
        edit: true,
        comment: false,
      },
    },
    editorConfig: {
      mode: "edit",
    },
  })
  ```

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md)。

## 如何使用'fillForms'参数？

从版本 5.2 开始，ONLYOFFICE 文档提供了填写特殊表单的功能，而无需授予用户编辑权限。这可以用在某些情形中，比如，如果您有某种文档表单，并希望用户可以访问此表单，以便他们填写文档某些字段，但无法编辑其他文档字段（例如，将名称填写在合同中但不更改合同条款，或填写其他文档中的变量字段但保持文档的其他部分不变）。

要启用此模式，请使用 *document.permissions.fillForms* 参数：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      edit: false,
      review: false,
      fillForms: true,
      comment: false,
    },
  },
  editorConfig: {
    mode: "edit",
  },
})
```

*comment* 字段是可选的，因为只要启用了 *fillForms* 参数并禁用了 *edit* 和 *review* 参数，注释都被禁用了。

通过上面的配置，文档将在启用表单填写模式并禁用所有其他模式的情况下打开，从而使有权访问它的用户只能填写特殊[内容控件](https://helpcenter.onlyoffice.com/ONLYOFFICE-Editors/ONLYOFFICE-Document-Editor/UsageInstructions/InsertContentControls.aspx?from=api)中的字段。

然后由您决定下一步做什么：对可编辑字段的更改将保存到同一个文档中，或者每次新用户访问和更改原始文档时都将创建一个新文档。

如果仅授予具有 *fillForms* 权限的某个用户对文档有一次访问权限，则可以使用第一种情况，然后将其与所有更改一起保存，并且其他用户无需再次填写它。

第二种情况更常用，当您有一个文档模板，其中一些字段未填写，并希望将其访问权限授予更多用户（例如，将其放到您的网站上，以便用户无需每次下载就可以填写并再次上传）。在这种情况下，更合理的做法是将此文档作为模板，方便将来更改，并且在具有 *fillForms* 访问权限的用户编辑字段后，将其保存在另一个文件名下。

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md)。

## 如何同时启用文档的编辑和评论模式？

要在启用*编辑*和*评论*模式的情况下打开文档，请使用 *document.permissions*> 参数（请参阅[此处](../../usage-api/advanced-parameters.md)) 了解 ONLYOFFICE 文档配置对象的完整结构）。

您需要将 *document.permission.edit* 和document.permission.comment *document.permission.comment* 参数都设置为 **true**，以便用户能够编辑文档和评论。这种情况下的配置将如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      edit: true,
      comment: true,
    },
  },
  editorConfig: {
    mode: "edit",
  },
})
```

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md).

## 权限参数是否相互影响？

大多数权限参数都是独立的，仅在其值设置为 **true** 时启用，在值设置为 **false**时禁用。尽管有相应的参数值，当权限启用或禁用时，仍有几种组合：

- 当 *edit* 或 *review* 参数设置为 **true**时，会启用表单填写权限（即使 *fillForm* 参数设置为 **false**)）。
- 当 *edit* 和 *review* 参数都设置为 **false**并且注释设置为true时，表单填写权限被禁用（即使 *fillForm* 参数设置为 **true**）。
- 当 *edit* 和 *review* 参数都被设置为 **false**而且 *fillForms* 被设置为 **true**时。 评论权限被禁用 (即使 *comment* 参数设置为 **true**)。

当您设置必要的权限并为同一个文档组合不同的权限时，您应该牢记这一点。

请参阅下面的交互表，了解不同参数和参数组合如何相互影响以及由此产生的文档权限：

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md)。

## 如何在没有编辑选项的情况下在查看器中打开文档？

要在启用两种*查看*模式的情况下打开文档，请使用 *document.permissions* 参数（请参阅[此处](../../usage-api/advanced-parameters.md))了解 ONLYOFFICE 文档配置对象的完整结构）。

您需要将 *document.permission.edit*、 *document.permission.review* 和 *document.permission.fillForms* 参数设置为 **false**，这样用户将无法编辑、查看文档或更改其中的表单字段。如果您还想禁用文档的评论功能，请将 *comment* 参数也设置为 **false** （但现有评论将可供查看）。

> 如果您禁用所有的编辑权限，我们建议您也将 *document.permissions.chat* 设置为 **false**，这样有权访问该文档的用户就不会向文档嵌入聊天发送垃圾邮件。

这种情况下的配置将如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      chat: false,
      edit: false,
      review: false,
      fillForms: false,
      comment: false,
    },
  },
})
```

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md).

## 如何禁用/启用下载文件的可能性？

要在禁用*下载*选项的情况下打开文档，请使用 *document.permissions* 参数（请参阅[此处](../../usage-api/advanced-parameters.md))了解 ONLYOFFICE 文档配置对象的完整结构）。

您需要将 *document.permission.download* 设置为 **false**，以便从文档**文件**菜单（如果 *document.permission.edit* 参数设置为 **true** ）或顶部工具栏中删除**下载为...**选项（如果 *document.permission.edit* 设置为 **false** 并且该文件仅供查看），并且用户无法从编辑器下载该文档。这种情况下的*权限*配置将如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      download: false,
    },
  },
})
```

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md)。

## 如何防止文档被打印？

要在禁用*打印*选项的情况下打开文档，请使用 *document.permissions* 参数（请参阅[此处](../../usage-api/advanced-parameters.md))了解 ONLYOFFICE 文档配置对象的完整结构）。

您需要将 *document.permission.print* 设置为 **false**，以便从文档 **文件** 菜单（如果 *document.permission.edit* 参数设置为 **true**）或顶部工具栏（如果 *document.permission.edit* 设置为 **false** 并且该文件仅供查看）移除**打印**选项,并且用户无法从编辑器中打印出该文档。这种情况下的*权限*配置将如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      print: false,
    },
  },
})
```

有关权限的更多信息，请参见[此页面](../../usage-api/config/document/permissions.md)。

## 如何查看和更改某个文档的共享设置？

共享设置存储在**文档存储服务**中，并且必须由软件集成商自己定义。ONLYOFFICE 文档可以使用 *document.info.sharingSettings* 参数显示这些设置，其中的信息将显示在文档**文件** -> **存取权限...** 窗口中。

此参数是一个对象数组，表示用户名列表 (*document.info.sharingSettings.user*) 及其对当前文档 (*document.info.sharingSettings.permissions*) 的访问权限。

*document.info.sharingSettings.user* 是一个字符串参数，它可以显示从**文档存储服务**传递到 ONLYOFFICE 文档的任何用户名。

*document.info.sharingSettings.permissions* 也是一个字符串参数，它显示了与定义用户对当前文档的访问权限的规则集对应的访问权限的名称。

> 请注意，最初没有任何预定义的文档访问规则集。如果您使用 **ONLYOFFICE 社区服务器**，将使用和显示几个访问权限规则（**完全访问**、**只读**、**拒绝访问**）。如果您设置自己的 **文档存储服务**，您将必须定义自己的一组规则及其名称（例如，**只读访问**：将参数 *document.permission.edit*、*document.permission.review*、*document.permission.fillForms* 设置为 **false**; 或 **只下载** ：将所有 *document.permission* 参数设置为 **false** 并且仅 *document.permission.download* 参数设置为 **true**等），并将它们发送到**文档编辑服务**，以便用户可以访问文档，并且这些设置显示在文档**访问权限中...**窗口中。

*sharingSettings* 配置可能如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    info: {
      sharingSettings: [
        {
          permissions: "Full Access",
          user: "John Smith",
        },
        {
          isLink: true,
          permissions: "Read Only",
          user: "External link",
        },
      ],
    },
  },
})
```

有关文档信息的更多信息，请参见[此页面](../../usage-api/config/document/info.md)。

## 如何限制评论？

默认情况下评论是被启用的。如果您想限制评论并只允许作者编辑和/或删除他们的评论，您需要更改 *document.permissions.editCommentsAuthorOnly* 和/或 *document.permissions.deleteCommentsAuthorOnly* 参数：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      comment: true,
      editCommentsAuthorOnly: true,
      deleteCommentsAuthorOnly: true,
    },
  },
})
```

> 不要忘记将 *editorConfig.mode* 设置为 **edit**，否则任何评论功能都将被禁用。
