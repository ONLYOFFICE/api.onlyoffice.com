---
sidebar_position: -10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

> 默认值在 `default.json` 配置文件中可用，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 `default.json` 文件的内容。每次重新启动 Docker 容器或将 **ONLYOFFICE 文档**升级到新版本时都会恢复默认值，并且所有更改都将丢失。

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

| 参数                      | 类型             | 示例                                                                                                                                                               | Description                                                                                                                                                                                                                                      |
| ------------------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| wopi.enable                    | boolean          | false                                                                                                                                                                 | 定义是否启用 WOPI。                                                                                                                                                                                                               |
| wopi.host                      | string           | ""                                                                                                                                                                    | 定义 WOPI 主机（主机名或 IP 地址）。                                                                                                                                                                                                 |
| wopi.htmlTemplate              | string           | "../../web-apps/apps/api/wopi"                                                                                                                                        | 定义 WOPI HTML 模板的路径。                                                                                                                                                                                                        |
| wopi.wopiZone                  | string           | "external-http"                                                                                                                                                       | 定义文档服务器用于将浏览器导航到 WOPI 应用程序的区域。                                                                                                                                                    |
| wopi.favIconUrlWord            | string           | "/web-apps/apps/<br/>documenteditor/main/<br/>resources/img/favicon.ico"                                                                                              | 定义文档编辑器的图标路径。                                                                                                                                                                                           |
| wopi.favIconUrlCell            | string           | "/web-apps/apps/<br/>spreadsheeteditor/main/<br/>resources/img/favicon.ico"                                                                                           | 定义电子表格编辑器的图标路径。                                                                                                                                                                                        |
| wopi.favIconUrlSlide           | string           | "/web-apps/apps/<br/>presentationeditor/main/<br/>resources/img/favicon.ico"                                                                                          | 定义演示文稿编辑器的图标路径。                                                                                                                                                                                       |
| wopi.favIconUrlPdf             | string           | "/web-apps/apps/<br/>pdfeditor/main/<br/>resources/img/favicon.ico"                                                                                                   | 定义 pdf 编辑器的图标路径。                                                                                                                                                                                                |
| wopi.fileInfoBlockList         | array of strings | \["FileUrl"]                                                                                                                                                          | 定义 WOPI 文件信息参数列表，在将此数组发送到浏览器时会被阻止。但是，这些参数在服务器上可用。                                                                               |
| wopi.pdfView                   | array of strings | \["djvu", "xps", "oxps"]                                                                                                                                              | 定义可以在 pdf 编辑器中查看的文件类型。                                                                                                                                                                                     |
| wopi.pdfEdit                   | array of strings | \["pdf"]                                                                                                                                                              | 定义可以在 pdf 编辑器中编辑的文件类型。                                                                                                                                                                                     |
| wopi.forms                     | array of strings | \["pdf"]                                                                                                                                                              | 定义表单文件类型。                                                                                                                                                                                                                     |
| wopi.wordView                  | array of strings | \["doc", "dotm", "dot", "fodt", "ott", "rtf", "mht", "mhtml",<br/>"html", "htm", "xml", "epub",<br/>"fb2", "sxw", "stw", "wps",<br/>"wpt", "pages", "docxf", "oform"] | 定义可以在文档编辑器中查看的文件类型。                                                                                                                                                                                |
| wopi.wordEdit                  | array of strings | \["docx", "dotx", "docm", "odt",<br/>"txt"]                                                                                                                           | 定义可以在文档编辑器中编辑的文件类型。                                                                                                                                                                                |
| wopi.cellView                  | array of strings | \["xls", "xlsb", "xltm", "xlt",<br/>"fods", "ots", "sxc", "xml",<br/>"et", "ett", "numbers"]                                                                          | 定义可以在电子表格编辑器中查看的文件类型。                                                                                                                                                                             |
| wopi.cellEdit                  | array of strings | \["xlsx", "xltx", "xlsm", "ods",<br/>"csv"]                                                                                                                           | 定义可以在电子表格编辑器中编辑的文件类型。<br/>                                                                                                                                                                        |
| wopi.slideView                 | array of strings | \["ppt", "ppsx", "ppsm", "pps",<br/>"potm", "pot", "fodp", "otp",<br/>"sxi", "dps", "dpt", "key"]                                                                     | 定义可以在演示文稿编辑器中查看的文件类型。                                                                                                                                                                            |
| wopi.slideEdit                 | array of strings | \["pptx", "potx", "pptm", "odp"]                                                                                                                                      | 定义可以在演示文稿编辑器中编辑的文件类型。                                                                                                                                                                             |
| wopi.publicKey                 | string           | ""                                                                                                                                                                    | 定义集成商用来检查私钥的公钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                          |
| wopi.modulus                   | string           | ""                                                                                                                                                                    | 定义用于检索公钥的 Base64 编码格式的 RSA 模数。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。      |
| wopi.exponent                  | string           | "65537"                                                                                                                                                               | 定义用于检索公钥的 Base64 编码格式的旧 RSA 指数。                                                                                                                                                  |
| wopi.privateKey                | string           | ""                                                                                                                                                                    | 定义签署文档服务器请求的私钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                                    |
| wopi.publicKeyOld              | string           | ""                                                                                                                                                                    | 定义集成商用来检查私钥的旧公钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                      |
| wopi.modulusOld                | string           | ""                                                                                                                                                                    | 定义用于检索公钥的 Base64 编码格式的旧 RSA 模数。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。 |
| wopi.exponentOld               | string           | "65537"                                                                                                                                                               | 定义用于检索公钥的 Base64 编码格式的旧 RSA 指数。                                                                                                                                              |
| wopi.privateKeyOld             | string           | ""                                                                                                                                                                    | 定义签署文档服务器请求的旧私钥。<br/><br/>请注意，自 8.3 版本起，default.json 与 local.json 文件中的该参数值不再相同。                              |
| wopi.refreshLockInterval       | string           | "10m"                                                                                                                                                                 | 通过将文件自动过期定时器重置为 30 分钟，定义刷新文件锁定的间隔时间（以分钟为单位）。                                                                                                                |
| wopi.dummy                     | object           |                                                                                                                                                                       | 定义压力测试的虚拟处理程序的属性。                                                                                                                                                                                     |
| wopi.dummy.enable              | boolean          | false                                                                                                                                                                 | 定义是否启用虚拟处理程序。                                                                                                                                                                                                |
| wopi.dummy.<br/>sampleFilePath | string           | ""              

## 示例

``` json
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
    "fileInfoBlockList": ["FileUrl"],
    "pdfView": ["djvu", "xps", "oxps"],
    "pdfEdit": ["pdf"],
    "forms": ["pdf"],
    "wordView": ["doc", "dotm", "dot", "fodt", "ott", "rtf", "mht", "mhtml", "html", "htm", "xml", "epub", "fb2", "sxw", "stw", "wps", "wpt", "pages", "docxf", "oform"],
    "wordEdit": ["docx", "dotx", "docm", "odt", "txt"],
    "cellView": ["xls", "xlsb", "xltm", "xlt", "fods", "ots", "sxc", "xml", "et", "ett", "numbers"],
    "cellEdit": ["xlsx", "xltx", "xlsm", "ods", "csv"],
    "slideView": ["ppt", "ppsx", "ppsm", "pps", "potm", "pot", "fodp", "otp", "sxi", "dps", "dpt", "key"],
    "slideEdit": ["pptx", "potx", "pptm", "odp"],
    "publicKey": "",
    "modulus": "",
    "exponent": 65537,
    "privateKey": "",
    "publicKeyOld": "",
    "modulusOld": "",
    "exponentOld": 65537,
    "privateKeyOld": "",
    "refreshLockInterval": "10m",
    "dummy": {
      "enable": false,
      "sampleFilePath": ""
    }
  }
}
```
