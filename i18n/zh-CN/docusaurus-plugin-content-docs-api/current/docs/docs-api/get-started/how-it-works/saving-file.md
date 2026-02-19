---
sidebar_position: -21
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 保存文件

参考图和以下步骤说明了在 ONLYOFFICE 文档中保存文档的过程。

<img alt="保存文件" src="/assets/images/editor/saving.jpg" width="720px" />

1. 用户在**文档编辑器**中编辑文档。

2. **文档编辑器**将更改发送到**文档编辑服务**。

3. 用户关闭**文档编辑器**。

4. **文档编辑服务**监视文档工作的结束，并将**文档编辑器**发送的更改收集到一个文档中。

5. **文档编辑服务**使用来自 [JavaScript API](../basic-concepts.md) 的 *callbackUrl* 通知**文档存储服务**文档编辑结束，并返回修改后文档的链接。

   > 请注意，从 5.5 版本开始，根据请求的 [status](../../usage-api/callback-handler.md#status*) 选择 [callbackUrl](../../usage-api/config/editor/editor.md#callbackurl)。从 4.4 到 5.5 版本，*callbackUrl* 是从最后一个加入共同编辑的用户开始使用的。在 4.4 之前的版本中，在共同编辑时，*callbackUrl* 来自第一次打开文件进行编辑的用户。

6. **文档存储服务**从**文档编辑服务**下载所有已保存更改的文档文件并将其存储。

## 如何在实践中做到这一点

1. 创建一个[回调处理程序](../../usage-api/callback-handler.md)以保存来自**文档编辑服务**的文档。

2. 创建一个 *html* 文件来[打开文档](./opening-file.md#how-this-can-be-done-in-practice)。

3. 在文档编辑器初始化的配置脚本中，使用[参数行](../../usage-api/config/editor/editor.md#callbackurl)中的*回调处理程序*指定文件的 URL。使用本地链接时，请务必添加[令牌](./security.md)。否则会出现错误。

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       callbackUrl: "https://example.com/url-to-callback.ashx",
     },
     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudCI6eyJmaWxlVHlwZSI6ImRvY3giLCJrZXkiOiJLaGlyejZ6VFBkZmQ3IiwidGl0bGUiOiJFeGFtcGxlIERvY3VtZW50IFRpdGxlLmRvY3giLCJ1cmwiOiJodHRwczovL2V4YW1wbGUuY29tL3VybC10by1leGFtcGxlLWRvY3VtZW50LmRvY3gifSwiZG9jdW1lbnRUeXBlIjoid29yZCIsImVkaXRvckNvbmZpZyI6eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXJsLXRvLWNhbGxiYWNrLmFzaHgifX0.vbezS2aM8Xf8qFzIAsO-jrIsi7VLxjRYkIkwh5jLTJU",
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```
   其中 **example.com** 是安装了**文档管理器**和**文档存储服务**的服务器的名称。

4. 在浏览器中打开您的 *html* 文件并编辑您的文档。

5. 关闭**文档编辑器**。在大约 10 秒内查看您的文档。所有更改应该都被保存了，这意味着配置正确。

## 保存延迟 {#save-delay}

文档编辑完成后，**文档编辑服务**会将它通知给**文档存储服务**。完成之前的时间是根据编辑文件到 Office Open XML 格式的转换时间（取决于文件大小、复杂性和计算机能力，并且可以执行相当长的时间）和转换开始延迟来计算时间（默认为 5 秒）。在最常见的情况下，编辑完成后的时间约为 10 秒。

转换开始延迟对于允许在不保存文件的情况下返回文件编辑会话是必要的，例如在打开文件进行编辑的情况下重新加载浏览器页面时。默认转换开始延迟时间由 [services.CoAuthoring.server.savetimeoutdelay](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-savetimeoutdelay) 参数在 **ONLYOFFICE 文档**配置文件中定义, 配置文件可以在以下路径中找到:

<Tabs>
  <TabItem value="windows" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DocumentServer\config\default.json
      ```
  </TabItem>
  <TabItem value="linux" label="Linux">
      ``` bash
      /etc/onlyoffice/documentserver/default.json
      ```
  </TabItem>
</Tabs>

如果要更改它，可以使用 *local.json* 文件，该文件应存储所有已编辑的参数。此文件与 *default.json* 文件位于同一目录中，并且**必须保留**必要参数的**完整对象结构**（请参见下面的示例）。

> 请不要直接编辑 *default.json* 文件的内容。每次重新启动 Docker 容器或将 **ONLYOFFICE 文档**升级到新版本时都会恢复默认值，并且所有更改都将丢失。

### 参数

| 参数                                    | 类型    | 示例 | 描述                                                                                         |
| -------------------------------------------- | ------- | ------- | --------------------------------------------------------------------------------------------------- |
| services.CoAuthoring.server.savetimeoutdelay | integer | 5000    | 定义关闭编辑的文件后的转换开始延迟时间（以毫秒为单位）。|

### 示例 local.json 配置

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

## 强制保存 {#force-saving}

**文档编辑服务**允许在编辑完成之前获取当前文档状态。该过程在 ONLYOFFICE 文档中称为 *forcesave*。**文档编辑服务**向[回调处理程序](../../usage-api/callback-handler.md)执行请求 *url* 参数的值为文档链接，*status* 参数的值为 **6**。可以通过以下方式启动强制保存过程：

- 通过将 *c* 参数的值设置为 [forcesave](../../additional-api/command-service/forcesave.md)，向[文档命令服务](../../additional-api/command-service/command-service.md)发送请求。将请求发送到**回调处理程序**时，*forcesavetype* 参数的值为 **0** 。

- 启用 [editorConfig.customization.forcesave](../../usage-api/config/editor/customization/customization-standard-branding.md#forcesave) 模式，在编辑器初始化配置中将其设置为 **true** 。在这种情况下，每次用户点击**保存** 按钮时，forcesave 都会完成，并且当将请求发送到**回调处理程序**时，*forcesavetype* 参数的值为 **1**。

- 您可以在 **ONLYOFFICE 文档**附加配置文件中启用[开始重复强制保存](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#AutoAssembly)，该文件可以在以下路径中找到或被放置（如果您已经创建了它）：

  <Tabs>
    <TabItem value="windows" label="Windows">
        ``` bash
        %ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json
        ```
    </TabItem>
    <TabItem value="linux" label="Linux">
        ``` bash
        /etc/onlyoffice/documentserver/local.json
        ```
    </TabItem>
  </Tabs>

  ### 参数

  | 参数                                  | 类型    | 示例 | 描述                                                                             |
  | ------------------------------------------ | ------- | ------- | --------------------------------------------------------------------------------------- |
  | services.CoAuthoring.autoAssembly.enable   | boolean | false   | 定义是否启用自动强制保存。默认值为 **false**。 |
  | services.CoAuthoring.autoAssembly.interval | string  | 5m      | 定义启动自动强制保存的间隔时间（分钟）。          |

  ### 示例 local.json 配置

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

  将请求发送到**回调处理程序**时，*forcesavetype* 参数的值为**2**。

> 请注意，您无法在文档历史记录中看到使用强制保存选项创建的文档版本。原因是 ONLYOFFICE 文档 [突出显示](./document-history.md#how-this-can-be-done-in-practice)了从当前文档会话开始而不是从文档版本开始时所做的更改。即使在一个会话中创建了多个文档版本，此会话中的所有更改也将突出显示。

## 以原始格式保存 {#saving-in-original-format}

从版本 7.0 开始，[assemblyFormatAsOrigin](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#services-CoAuthoring-server-assemblyFormatAsOrigin) 服务器设置默认启用，以便将组装好的文件保存为其原始格式。它用于将文件格式从 OOXML 更改为 ODF 或使用宏保存文件。

### 参数

#### services.CoAuthoring.server.assemblyFormatAsOrigin

指定组装好的文件是否以原始格式保存。

此参数的工作原理如下：

1. 编辑器始终返回 OOXML 格式的文件。
2. 如果 *assemblyFormatAsOrigin* 参数设置为 **true**，编辑器会尝试将文件转换为原始格式。
3. 如果原始格式是旧的（例如 `doc`）并且转换回旧格式失败，则会引发*回滚以保存对 *ooxml* 的更改警告，并且文件将转换回 OOXML 格式。
4. 如果 *assemblyFormatAsOrigin* 参数设置为 **false**，编辑器不会将文件转换为原始格式并以 OOXML 格式返回。

默认值为 **true**

类型: boolean

示例: true

### 示例 local.json 配置

``` json
{
  "services": {
    "CoAuthoring": {
      "server": {
        "assemblyFormatAsOrigin": true
      }
    }
  }
}
```

> 请记住，此设置可能会使某些未经事先转换就打开文档的集成商崩溃（例如，无法在 ONLYOFFICE 文档中保存为 *.doc* 格式）。如有必要，禁用此设置。
