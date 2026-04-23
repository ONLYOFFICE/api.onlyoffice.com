---
sidebar_position: -3
---

# 保存问题

## 编辑时如何将文档强制保存到我的存储中？ {#how-to-forcefully-save-the-document-to-my-storage-when-editing-it}

通常，一旦所有编辑它的用户关闭文档并且延迟时间（大约 10 秒）过去，最终文档版本就会编译。但是这种行为可以被覆盖。为此，可以使用**强制保存**选项。

有几种方法可以启动强制保存：

- 设置参数 *c* 为 [forcesave](../../additional-api/command-service/forcesave.md) 值，将请求发送到[文档命令服务](../../additional-api/command-service/command-service.md):

  ``` json
  {
    "c": "forcesave",
    "key": "Khirz6zTPdfd7",
    "userdata": "sample userdata"
  }
  ```

- 在编辑器初始化配置中启用 [editorConfig.customization.forcesave](../../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) 将其值设置为为 **true**:

  ``` ts
  const config = {
    editorConfig: {
      customization: {
        forcesave: false,
      },
    },
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

- 在 **default.json** ONLYOFFICE 文档配置文件中启用重复强制保存启动：

  ``` json
  {
    "services": {
      "CoAuthoring": {
        "autoAssembly": {
          "enable": true,
          "interval": "5m"
        }
      }
    }
  }
  ```

根据您需要的强制保存类型，您可以选择正确的实施方式。有关这方面的更多信息，请访问[此页面](../../get-started/how-it-works/saving-file.md#force-saving)。

## 如何保存创建的文档？ {#how-to-save-the-created-document}

请参阅[保存文件](../../get-started/how-it-works/saving-file.md)部分以了解文件保存在ONLYOFFICE 文档中是如何工作的，以及保存创建的文档需要什么。

## 如何将打开的文档保存为另一种文档文件类型？ {#how-to-save-the-opened-document-to-another-document-file-type}

如果打开了不同于 OOXML 格式的文档（.txt 或 .ods），则默认保存 OOXML 格式。

要将打开的文档保存为不同于默认 Office Open XML 的格式，必须将 POST 请求发送到**文档转换服务**。

可以在[此章节](../../get-started/how-it-works/converting-and-downloading-file.md)中找到有关转换如何工作以及为什么需要转换的详细信息。可以在[此处](../../additional-api/conversion-api/request.md)找到 POST 请求参数和可用的响应。

## 如何启用或禁用'自动保存'选项？ {#how-to-enable-or-disable-the-autosave-option}

**自动保存**选项默认启用。要禁用它，您需要将文档配置中的 [editorConfig.customization.autosave](../../usage-api/config/editor/customization/customization-standard-branding.md#autosave) 参数设置为 **false**：

  ``` ts
  const config = {
    editorConfig: {
      customization: {
        autosave: false,
      },
    },
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

> 请注意，禁用**自动保存**也会禁用**快速**共同编辑模式，该模式仅适用于启用自动文档保存。

有关自动保存的更多信息，请参见[此页面](../../usage-api/config/editor/customization/customization-standard-branding.md#autosave)。

## 什么是转换开始延迟时间，如何更改？ {#what-is-the-conversion-start-delay-time-and-how-can-it-be-changed}

通常，文档在编辑时不会以编译的形式物理保存到计算机硬盘驱动器中。完成编辑并且处理该文档的所有用户都将其关闭后，该文件将转换为 Office Open XML 格式并保存到磁盘。

之后，**文档编辑服务**通知**文档存储服务**文件已准备好并且可以下载。

编辑结束和转换开始之间的时间在default.json配置文件中的**用 [services.CoAuthoring.server.savetimeoutdelay](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-savetimeoutdelay) 参数（默认为5000毫秒或5秒）进行设置，并可以更改：

  ``` json
  {
    "services": {
      "CoAuthoring": {
        "server": {
          "savetimeoutdelay": 5000
        }
      }
    }
  }
  ```

有关转换开始延迟的更多信息，请参见[此页面](../../get-started/how-it-works/saving-file.md)。

## 从 csv 或 txt 格式转换时，如何指定编码类型？ {#how-to-specify-the-encoding-type-when-converting-from-the-csv-or-txt-formats}

为了保持 **txt** 或 **csv** 文件的可读性，您可能需要设置最初保存时使用的编码。如果文件中使用了与基本拉丁字母不同的字符（如ä、ö、ü、带重音符号的字母、西里尔字母等），这可能很有用。

为此，将请求正文中设置好参数的 POST 请求发送到**文档转换服务**：

  ``` json
  {
    "codePage": 65001,
    "filetype": "txt",
    "key": "Khirz6zTPdfd7",
    "outputtype": "docx",
    "title": "Example Document Title.docx",
    "url": "https://example.com/url-to-example-document.txt"
  }
  ```

有关在转换期间使用代码页的更多信息，请访问[此页面](../../additional-api/conversion-api/request.md#codePage)。
