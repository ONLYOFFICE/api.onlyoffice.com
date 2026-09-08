---
sidebar_position: -11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 概述

从 6.4 版开始，ONLYOFFICE 文档提供 **对Web 应用程序开放平台接口协议 (WOPI)** 的支持 - 一种基于 REST 的协议，用于将您的应用程序与online office集成。WOPI 操作允许您打开存储在服务器上的文件、编辑和保存它们。

本文档描述：

- WOPI 协议 [configuration parameters](./config.md);
- 了解与 WOPI 客户端集成的要求所必需的 [key concepts](./key-concepts.md)；
- 可以通过 [WOPI discovery](./wopi-discovery.md) 指定的文件属性；
- 必须构建[主机页面](./host-page.md)以在online office内创建 iframe 元素；
- [proof keys](./proof-keys.md) 用于检查是否从online office收到请求；
- 支持的 [WOPI REST API](./wopi-rest-api/wopi-rest-api.md) 函数；
- 可以通过 [PostMessage](./postmessage.md) 发布的可用消息；
- 在online office中[转换](./conversion-api.md)不同文件格式请求参数；
- [编辑二进制文档格式](./editing-binary-documents.md) 的方案；
- ONLYOFFICE 文档 API 和 WOPI 之间的[区别](./api-vs-wopi.md)。

有关 WOPI 协议的更多信息，请阅读 [WOPI 文档](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/)。

您可以在配置文件中查找和更改所有必要的 [WOPI设置](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#WOPI) ，该文件可以在以下路径中找到（或创建）：

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
默认值在 *default.json* 配置文件中可用，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 *default.json* 文件的内容。每次重新启动 Docker 容器或将 **ONLYOFFICE 文档** 升级到新版本时都会恢复默认值，并且所有更改都将丢失。
:::

## 启用 WOPI {#enabling-wopi}

要启用 WOPI，请将 ONLYOFFICE 文档配置中的 [wopi.enable](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#wopi-enable) 参数设置为 **true**:

### 参数

| 名称        | 类型    | 示例 | 描述                                                        |
| ----------- | ------- | ------- | ------------------------------------------------------------------ |
| wopi.enable | boolean | true    | 是否启用 WOPI。默认值为 **false**。 |

### 示例

```json
{
  "wopi": {
    "enable": true
  }
}
```

## IP filter

ONLYOFFICE 文档只能接受来自受信任的集成商的 WOPI 请求。此类集成商的 IP 地址必须包含在 [WOPI 域允许列表](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/build-test-ship/settings#wopi-domain-allow-list) 中。同时，必须拒绝所有其他集成商的访问。

:::note
默认情况下，所有 IP 地址都被认为是可信的。
:::

:::warning
从 ONLYOFFICE 文档 10.0.0 版本开始，即使默认情况下所有 IP 地址都是可信的，在 IP filter 规则中指定您的 WOPI 主机也是**必须**的，否则 WOPI 将无法正常工作。通配符规则 `*` 并未指定具体的主机，因此不满足该要求 —— 如果没有明确允许您的 WOPI 主机的规则，将无法通过 WOPI 打开文档。
:::

按照以下步骤配置 ONLYOFFICE 文档 [IP filter](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#IPFilter):

1. 使用任何可用的文本编辑器打开 */etc/onlyoffice/documentserver/local.json* 文件：

   ``` json
   {
     "services": {
       "CoAuthoring": {
         "ipfilter": {
           "rules": [
             {
               "address": "example.com",
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
     }
   }
  
   ```

2. 更改以下默认设置。输入您的 IP 地址（或 WOPI 主机），其中可以包含：

   - ipv4 的 XXXX 格式的 IP，
   - ipv6 的 xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx 格式的 IP，
   - dns-name,
   - \* 通配符替换任何符号。

3. 更改*"允许"*规则，可以为 **true** 或 **false**的。

4. 重新启动服务以使配置更改生效：

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

### 为 WOPI 主机要求显式规则 {#requiring-an-explicit-rule-for-the-wopi-host}

是否要求为 WOPI 主机设置显式规则，由以下参数控制：

| 名称                      | 类型    | 示例 | 描述                                                                                                                     |
| ------------------------- | ------- | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| wopi.requireIpFilterRule  | boolean | true | 是否必须先由 *services.CoAuthoring.ipfilter.rules* 中的某条规则明确指定每个 WOPI 主机，服务器才会与其通信。默认值为 **true**。 |

无论该参数如何设置，*services.CoAuthoring.ipfilter.rules* 都会对每一个 WOPI 请求进行检查 —— 如果没有任何 *allowed* 规则与目标主机匹配，请求都会被拒绝。*wopi.requireIpFilterRule* 实际控制的范围更窄：它决定的是，命中通配符规则 `*` 是否足以信任该主机，还是必须命中一条明确指定该主机的规则。通配符规则 `*` 不算作明确匹配 —— 这正是默认规则集（`{"address": "*", "allowed": true}`）不满足该要求的原因：即使 IP filter 本身完全放开，没有一条明确指定您的 WOPI 主机的规则，WOPI 也无法正常工作。

将 *wopi.requireIpFilterRule* 设置为 **false**，可以在您仍在编写规则期间，作为临时的迁移回退方案，让通配符规则也能替代明确指定的主机规则 —— 但这会重新引入服务器端请求伪造（SSRF）风险。无论如何，WOPI 出站请求的其他所有防护仍然生效：*services.CoAuthoring.ipfilter.rules* 依然会被强制检查；请求永远不会被视为可信；云元数据地址、链路本地地址、组播地址以及 *denyIPAddressList* 中的地址仍会被强制拒绝；每一跳重定向都会被校验；*externalRequest* 的路由规则依然适用。

``` json
{
  "wopi": {
    "requireIpFilterRule": false
  }
}
```

:::warning
对于 WOPI 而言，*allowIPAddressList* 和 *denyIPAddressList* 并不能替代 *services.CoAuthoring.ipfilter.rules*。将某个主机加入 *allowIPAddressList* 并不会放行针对该主机的 WOPI 请求 —— 这完全由 *services.CoAuthoring.ipfilter.rules* 决定。但将某个主机加入 *denyIPAddressList* 则会阻止该请求：deny 规则的优先级高于任何放行规则，即便 *ipfilter.rules* 中存在指定同一地址的允许规则也是如此。
:::
