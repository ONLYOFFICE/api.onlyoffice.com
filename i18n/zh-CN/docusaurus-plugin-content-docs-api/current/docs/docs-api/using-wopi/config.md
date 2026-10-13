---
sidebar_position: -10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import APITable from '@site/src/components/APITable/APITable';

# 配置

您可以在配置文件中查找和更改所有必要的，该文件可以在以下路径中找到（或创建）：

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

:::note
默认值在 `default.json` 配置文件中可用，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 `default.json` 文件的内容。每次重新启动 Docker 容器或将 **ONLYOFFICE 文档**升级到新版本时都会恢复默认值，并且所有更改都将丢失。
:::

重新启动服务以使配置更改生效：

<Tabs>
  <TabItem value="rpm-deb" label="RPM/DEB packages">
      ``` bash
      systemctl restart ds-*
      ```
  </TabItem>
  <TabItem value="docker" label="Docker">
      ``` bash
      supervisorctl restart all
      ```
  </TabItem>
</Tabs>

## 参数

<APITable>

| 参数                      | 类型             | 示例                                                                                                                                                               | Description                                                                                                                                                                                                                                      |
| ------------------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wopi.enable                    | boolean          | false                                                                                                                                                                 | 是否启用 WOPI。                                                                                                                                                                                                               |
| wopi.host                      | string           | ""                                                                                                                                                                    |  WOPI 主机（主机名或 IP 地址）。                                                                                                                                                                                                 |
| wopi.htmlTemplate              | string           | "../../web-apps/apps/api/wopi"                                                                                                                                        |  WOPI HTML 模板的路径。                                                                                                                                                                                                        |
| wopi.wopiZone                  | string           | "external-http"                                                                                                                                                       | 文档服务器在 discovery 中公布的区域。对于 SharePoint 集成，该值应与通过 `Set-SPWOPIZone` 配置的区域一致。                                                                                                                                                    |
| wopi.favIconUrlWord            | string           | "/web-apps/apps/<wbr />documenteditor/main/<wbr />resources/img/favicon.ico"                                                                                          | 文档编辑器的图标路径。                                                                                                                                                                                           |
| wopi.favIconUrlCell            | string           | "/web-apps/apps/<wbr />spreadsheeteditor/main/<wbr />resources/img/favicon.ico"                                                                                       | 电子表格编辑器的图标路径。                                                                                                                                                                                        |
| wopi.favIconUrlSlide           | string           | "/web-apps/apps/<wbr />presentationeditor/main/<wbr />resources/img/favicon.ico"                                                                                      | 演示文稿编辑器的图标路径。                                                                                                                                                                                       |
| wopi.favIconUrlPdf             | string           | "/web-apps/apps/<wbr />pdfeditor/main/<wbr />resources/img/favicon.ico"                                                                                               |  pdf 编辑器的图标路径。                                                                                                                                                                                                |
| wopi.favIconUrlDiagram         | string           | "/web-apps/apps/<wbr />visioeditor/main/<wbr />resources/img/favicon.ico"                                                                                             | 图表编辑器的图标路径。                                                                                                                                                                                                   |
| wopi.fileInfoBlockList         | string[] | \["FileUrl"]                                                                                                                                                          |  WOPI 文件信息参数列表，在将此数组发送到浏览器时会被阻止。但是，这些参数在服务器上可用。                                                                               |
| wopi.pdfView                   | string[] | \[]                                                                                                                                                                   | 可以在 pdf 编辑器中查看的文件类型。                                                                                                                                                                                     |
| wopi.pdfEdit                   | string[] | \[]                                                                                                                                                                   | 可以在 pdf 编辑器中编辑的文件类型。                                                                                                                                                                                     |
| wopi.forms                     | string[] | \[]                                                                                                                                                                   | 表单文件类型。                                                                                                                                                                                                                     |
| wopi.wordView                  | string[] | \[]                                                                                                                                                 | 可以在文档编辑器中查看的文件类型。                                                                                                                                                                                |
| wopi.wordEdit                  | string[] | \[]                                                                                                                                                                   | 可以在文档编辑器中编辑的文件类型。                                                                                                                                                                                |
| wopi.cellView                  | string[] | \[]                                                                                                                                                                   | 可以在电子表格编辑器中查看的文件类型。                                                                                                                                                                             |
| wopi.cellEdit                  | string[] | \[]                                                                                                                                                                   | 可以在电子表格编辑器中编辑的文件类型。                                                                                                                                                                             |
| wopi.slideView                 | string[] | \[]                                                                                                                                                                   | 可以在演示文稿编辑器中查看的文件类型。                                                                                                                                                                            |
| wopi.slideEdit                 | string[] | \[]                                                                                                                                                                   | 可以在演示文稿编辑器中编辑的文件类型。                                                                                                                                                                             |
| wopi.diagramView               | string[] | \[]                                                                                                                                                                   | 可以在图表编辑器中查看的文件类型。                                                                                                                                                                               |
| wopi.diagramEdit               | string[] | \[]                                                                                                                                                                   | 可以在图表编辑器中编辑的文件类型。                                                                                                                                                                               |
| wopi.publicKey                 | string           | ""                                                                                                                                                                    | 集成商用来检查私钥的公钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                          |
| wopi.modulus                   | string           | ""                                                                                                                                                                    | 用于检索公钥的 Base64 编码格式的 RSA 模数。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。      |
| wopi.exponent                  | integer          | 65537                                                                                                                                                                 | 整数形式的 RSA 公钥指数。服务器在 discovery 中以 Base64 编码发布该值。                                                                                                                                                  |
| wopi.privateKey                | string           | ""                                                                                                                                                                    | 签署文档服务器请求的私钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                                    |
| wopi.publicKeyOld              | string           | ""                                                                                                                                                                    | 集成商用来检查私钥的旧公钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                      |
| wopi.modulusOld                | string           | ""                                                                                                                                                                    | 用于检索公钥的 Base64 编码格式的旧 RSA 模数。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。 |
| wopi.exponentOld               | integer          | 65537                                                                                                                                                                 | 整数形式的旧 RSA 公钥指数。服务器在 discovery 中以 Base64 编码发布该值。                                                                                                                                              |
| wopi.privateKeyOld             | string           | ""                                                                                                                                                                    | 签署文档服务器请求的旧私钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                              |
| wopi.requireIpFilterRule       | boolean          | true                                                                                                                                                                  | 是否必须先由 *services.CoAuthoring.ipfilter.rules* 中的某条规则明确指定每个 WOPI 主机，服务器才会与其通信。通配符规则 `*` 不计入。有关详细信息，请参阅 [IP filter](overview.md#ip-filter) 部分。 |
| wopi.sendAuthorizationHeader   | boolean          | false                                                                                                                                                                 | 是否在发送到 WOPI 主机的请求中添加带有 WOPI 访问令牌的 `Authorization: Bearer <token>` 标头。根据 WOPI 规范，该标头是可选的，但较旧的 SharePoint 集成可能需要它。                                                                         |
| wopi.refreshLockInterval       | string           | "10m"                                                                                                                                                                 | 通过将文件自动过期定时器重置为 30 分钟来刷新文件锁定的间隔时间，以时长字符串表示。                                                                                                                |
| wopi.dummy                     | object           |                                                                                                                                                                       | 压力测试的虚拟处理程序的属性。                                                                                                                                                                                     |
| wopi.dummy.enable              | boolean          | false                                                                                                                                                                 | 是否启用虚拟处理程序。                                                                                                                                                                                                |
| wopi.dummy.sampleFilePath      | string           | ""                                                                                                                                                                    | 示例文件的虚拟路径。                                                                                                                                                                                                           |

</APITable>

:::note
自 9.4 版本起，`wopi.pdfView`、`wopi.pdfEdit`、`wopi.forms`、`wopi.wordView`、`wopi.wordEdit`、`wopi.cellView`、`wopi.cellEdit`、`wopi.slideView`、`wopi.slideEdit`、`wopi.diagramView`、`wopi.diagramEdit` 列表默认为空。空列表表示文件类型取自 [onlyoffice-docs-formats.json](https://github.com/ONLYOFFICE/document-formats/blob/master/onlyoffice-docs-formats.json) 文件。指定非空列表即可覆盖这些文件类型。图表文件类型在开源版本中不可用。
:::

## 示例

```json
{
  "wopi": {
    "enable": false,
    "host": "",
    "htmlTemplate": "../../web-apps/apps/api/wopi",
    "wopiZone": "external-http",
    "favIconUrlWord": "/web-apps/apps/documenteditor/main/resources/img/favicon.ico",
    "favIconUrlCell": "/web-apps/apps/spreadsheeteditor/main/resources/img/favicon.ico",
    "favIconUrlSlide": "/web-apps/apps/presentationeditor/main/resources/img/favicon.ico",
    "favIconUrlPdf": "/web-apps/apps/pdfeditor/main/resources/img/favicon.ico",
    "favIconUrlDiagram": "/web-apps/apps/visioeditor/main/resources/img/favicon.ico",
    "fileInfoBlockList": ["FileUrl"],
    "pdfView": [],
    "pdfEdit": [],
    "forms": [],
    "wordView": [],
    "wordEdit": [],
    "cellView": [],
    "cellEdit": [],
    "slideView": [],
    "slideEdit": [],
    "diagramView": [],
    "diagramEdit": [],
    "publicKey": "",
    "modulus": "",
    "exponent": 65537,
    "privateKey": "",
    "publicKeyOld": "",
    "modulusOld": "",
    "exponentOld": 65537,
    "privateKeyOld": "",
    "requireIpFilterRule": true,
    "sendAuthorizationHeader": false,
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```
