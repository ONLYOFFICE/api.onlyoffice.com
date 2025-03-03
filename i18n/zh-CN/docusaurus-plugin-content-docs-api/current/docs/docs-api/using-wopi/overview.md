---
sidebar_position: -11
---

# Overview

从 6.4 版开始，ONLYOFFICE 文档提供 **对Web 应用程序开放平台接口协议 (WOPI)** 的支持 - 一种基于 REST 的协议，用于将您的应用程序与online office集成。WOPI 操作允许您打开存储在服务器上的文件、编辑和保存它们。

本文档描述：

- WOPI 协议 [configuration parameters](./config.md);
- 了解与 WOPI 客户端集成的要求所必需的 [key concepts](./key-concepts.md)；
- 可以通过 [WOPI discovery](./wopi-discovery.md) 指定的文件属性；
- 必须构建 [主机页面](./host-page.md) 以在online office内创建 iframe 元素；
- [proof keys](./proof-keys.md) 用于检查是否从online office收到请求；
- 支持的 [WOPI REST API](./wopi-rest-api/wopi-rest-api.md) 函数；
- 可以通过 [PostMessage](./postmessage.md) 发布的可用消息；
- 在online office中 [转换](./conversion-api.md) 不同文件格式请求参数；
- [编辑二进制文档格式](./editing-binary-documents.md) 的方案；
- ONLYOFFICE 文档 API 和 WOPI 之间的 [区别](./api-vs-wopi.md)。

有关 WOPI 协议的更多信息，请阅读 [WOPI 文档](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/)。

您可以在配置文件中查找和更改所有必要的 [WOPI设置](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#WOPI) ，该文件可以在以下路径中找到（或创建）：

对于 Linux - */etc/onlyoffice/documentserver/**local.json***.

对于 Windows - *%ProgramFiles%\ONLYOFFICE\DocumentServer\config\\**local.json***.

> 默认值在 *default.json* 配置文件中可用，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 *default.json* 文件的内容。每次重新启动 Docker 容器或将 **ONLYOFFICE 文档** 升级到新版本时都会恢复默认值，并且所有更改都将丢失。

## 启用 WOPI

要启用 WOPI，请将 ONLYOFFICE 文档配置中的 [wopi.enable](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#wopi-enable) 参数设置为 **true**:

### 参数

| 名称        | 类型    | 示例 | 描述                                                        |
| ----------- | ------- | ------- | ------------------------------------------------------------------ |
| wopi.enable | boolean | true    | 定义是否启用 WOPI。默认值为 **false**。 |

### 示例

``` json
{
  "wopi": {
    "enable": true
  }
}
```

## IP filter

ONLYOFFICE 文档只能接受来自受信任的集成商的 WOPI 请求。此类集成商的 IP 地址必须包含在 [WOPI 域允许列表](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/build-test-ship/settings#wopi-domain-allow-list) 中。同时，必须拒绝所有其他集成商的访问。

> 默认情况下，所有 IP 地址都被认为是可信的。

按照以下步骤配置 ONLYOFFICE 文档[IP filter](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#IPFilter):

1. 使用任何可用的文本编辑器打开 */etc/onlyoffice/documentserver/local.json* 文件：

   ``` json
   {
     "ipfilter": {
       "rules": [
         {
           "address": "ip_address",
           "allowed": true
         },
         {
           "address": "*",
           "allowed": false
         }
       ],
       "useforrequest": false,
       "errorcode": 403
     }
   }
  
   ```

2. 更改以下默认设置。输入您的 *"ip_address"*，其中可以包含：

   - ipv4 的 XXXX 格式的 IP，
   - ipv6 的 xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx 格式的 IP，
   - dns-name,
   - \* 通配符替换任何符号。

3. 更改*"允许"*规则,可以为 **true** 或 **false**的。

4. 重新启动服务以使配置更改生效：

   **对于 RPM/DEB 软件包：**

   ``` sh
   systemctl restart ds-*
   ```

   **对于 Docker:**

   ``` sh
   supervisorctl restart all
   ```
