---
sidebar_position: -7
---

# Customizing

## 如何对 ONLYOFFICE 文档进行白标？

以下选项可用于定制 ONLYOFFICE 文档版本（白标化），修改**关于**页面显示信息（所有编辑器用户可见）：

> 请注意，更改这些选项仅适用于 [ONLYOFFICE 开发者版](https://www.onlyoffice.com/developer-edition-prices.aspx)用户。

- *editorConfig.customization.customer* 选项：

  - *editorConfig.customization.customer.address* 用于指定公司或个人的邮政地址；
  - *editorConfig.customization.customer.info* 用于提供有关公司或个人的一些附加信息；
  - *editorConfig.customization.customer.logo* 用于指定logo图片的路径；
  - *editorConfig.customization.customer.logoDark* 用于指定深色主题的logo图片路径；
  - *editorConfig.customization.customer.mail* 用于指定公司或个人的电子邮件地址；
  - *editorConfig.customization.customer.name* 用于指定授予编辑或编辑作者访问权限的公司或个人的名称；
  - *editorConfig.customization.customer.www* 用于指定公司或个人的主页地址。

- *editorConfig.customization.logo* 选项：

  - *editorConfig.customization.logo.image* 用于指定图像文件的路径，该图像在普通工作模式（即所有编辑器的查看和编辑模式）或嵌入模式下显示；
  - *editorConfig.customization.logo.imageDark* 用于指定用于深色主题的图像文件的路径；
  - *editorConfig.customization.logo.url* 用于指定当有人单击徽标图像时将使用的绝对 URL（您可以保留为空字符串或 null 以使徽标不可点击）。

填写所有上述字段后，*定制*配置将如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    customization: {
      customer: {
        address: "My City, 123a-45",
        info: "Some additional information",
        logo: "https://example.com/logo-big.png",
        logoDark: "https://example.com/dark-logo-big.png",
        mail: "john@example.com",
        name: "John Smith and Co.",
        www: "example.com",
      },
      logo: {
        image: "https://example.com/logo.png",
        imageDark: "https://example.com/dark-logo.png",
        url: "https://example.com",
      },
    },
  },
})
```

有关定制的更多信息，请参见[此页面](../../usage-api/config/editor/customization/customization-standard-branding.md)。

## 如何更改 ONLYOFFICE 文档界面的默认语言？

如果界面语言出现在[可用的 ONLYOFFICE 文档语言列表](https://helpcenter.onlyoffice.com/server/document/available-languages.aspx) 中，您可以简单地使用配置文件中的 *editorConfig.lang* 属性将其设置为必要的语言环境，如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    lang: "de",
  },
})
```

若当前语言未包含在可用选项中，且您需要自行翻译或已完成自定义语言翻译，请参阅[此文档[此文](https://helpcenter.onlyoffice.com/server/docker/document/add-interface-language.aspx)了解如何将其安装到 ONLYOFFICE 文档中。

有关语言设置的更多信息，请参见[此页](../../usage-api/config/editor/editor.md)。

## 如何启用或禁用编辑器中的聊天和/或评论面板？

默认情况下聊天和评论是被启用的。要禁用它们，请使用 *document.permissions.comment* 和 *document.permissions.chat* 参数，并在配置文件中将它们的值分别设置为 **false**:

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    permissions: {
      chat: false,
      comment: false,
    },
  },
})
```

这将禁用**聊天**和**评论**按钮及其功能。

有关定制的更多信息，请参见 [此页面](../../usage-api/config/editor/customization/customization-standard-branding.md)。

## 如何自定义编辑器界面，例如调整顶部工具栏视图？

您可以显示完整的顶部工具栏或其紧凑版本。为了控制这一点，使用 *editorConfig.customization.compactToolbar* 参数。使用默认的 **false** 值，顶部工具栏将具有其通常的视图。如果要显示其紧凑型变体，则配置必须如下所示：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    customization: {
      compactToolbar: true,
    },
  },
})
```

有关定制的更多信息，请参见[此页面](../../usage-api/config/editor/customization/customization-standard-branding.md)。

## 如何查看和更改文档的附加参数，例如其所有者或上传日期？

文档所有者和上传日期分别受 *document.info.owner* 和 *document.info.uploaded* 参数影响。您可以通过以下方式将这些设置从您的某个数据库传递到文档配置文件：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  document: {
    info: {
      owner: "John Smith",
      uploaded: "2010-07-07 3:46 PM",
    },
  },
})
```

该值将显示在**文件** > **文档信息...**菜单选项中。

有关这些设置的更多信息，请参见 [此页面](../../usage-api/config/document/info.md)。

## 如何优化桌面计算机、移动设备或嵌入网页的编辑器的外观？

编辑器有三种主要外观，针对不同用途进行了优化：

- **desktop**, 针对桌面计算机浏览器中的显示进行了优化:

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    type: "desktop",
  })
  ```

- **mobile**, 针对移动设备浏览器中的显示进行了优化:

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    type: "mobile",
  })
  ```

- **embedded**, 针对将文档嵌入到网页进行了优化:

  ``` ts
  const docEditor = new DocsAPI.DocEditor("placeholder", {
    type: "embedded",
  })
  ```

您可以为移动设备使用任何外观或将文档嵌入到您的网页中，但使用特定的显示类型更符合逻辑。

有关显示类型的更多信息，请参见[此页面](../../usage-api/config/config.md#type)。

## 如何将插件连接到 ONLYOFFICE 文档以便所有编辑器用户都可以看到它们？

要为所有 ONLYOFFICE 文档用户启用插件，您需要参考以下内容：

- 获取插件（这可以使用我们在 [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins) 上的插件存储库来完成，或者您可以编写自己的插件）。
- 将插件放到文档编辑器可访问的文件夹中。
- 通过以下方式更改配置文件：

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    plugins: {
      autostart: [
        "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
        "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
      ],
      pluginsData: [
        "https://example.com/plugin1/config.json",
        "https://example.com/plugin2/config.json",
      ],
    },
  },
})
```

其中 *editorConfig.plugins.autostart* 是您希望在 ONLYOFFICE 文档启动时自动启动的插件的 GUID 数组（在插件 [config.json](../../../plugin-and-macros/structure/manifest/manifest.md#guid) 文件中定义），*editorConfig.plugins.pluginsData* 是您希望 ONLYOFFICE 文档用户可以使用的所有插件的 **config.json** 配置文件数组。

有关启用 ONLYOFFICE 文档插件的更多信息，请参见[此页面](../../usage-api/config/editor/plugins.md)。
