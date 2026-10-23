---
sidebar_position: -11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 概述

从 6.4 版开始，ONLYOFFICE 文档提供**对 Web 应用程序开放平台接口协议 (WOPI)** 的支持 - 一种基于 REST 的协议，用于将您的应用程序与online office集成。WOPI 操作允许您打开存储在服务器上的文件、编辑和保存它们。

本文档描述：

- WOPI 协议 [configuration parameters](./config.md);
- 了解与 WOPI 客户端集成的要求所必需的 [key concepts](./key-concepts.md)；
- 可以通过 [WOPI discovery](./wopi-discovery.md) 指定的文件属性；
- 必须构建[主机页面](./host-page.md)以在online office内创建 iframe 元素；
- [proof keys](./proof-keys.md) 用于检查是否从online office收到请求；
- 支持的 [WOPI REST API](./wopi-rest-api/wopi-rest-api.md) 函数；
- 可以通过 [PostMessage](./postmessage.md) 发布的可用消息；
- 在online office中[转换](./conversion-api.md)不同文件格式请求参数；
- [编辑二进制文档格式](./editing-binary-documents.md)的方案；
- ONLYOFFICE 文档 API 和 WOPI 之间的[区别](./api-vs-wopi.md)。

有关 WOPI 协议的更多信息，请阅读 [WOPI 文档](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/)。

您可以在配置文件中查找和更改所有必要的 [WOPI 设置](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#WOPI) ，该文件可以在以下路径中找到（或创建）：

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
默认值在 *default.json* 配置文件中可用，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 *default.json* 文件的内容。每次重新启动 Docker 容器或将 **ONLYOFFICE 文档**升级到新版本时都会恢复默认值，并且所有更改都将丢失。
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

ONLYOFFICE 文档只能与受信任的 WOPI 主机配合使用。这与 WOPI 文档中的 [WOPI 域允许列表](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/build-test-ship/settings#wopi-domain-allow-list)是同一理念。请在 IP 过滤器规则中允许您的 WOPI 主机，并拒绝所有其他主机。

按照以下步骤配置 ONLYOFFICE 文档 [IP filter](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#IPFilter)：

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

3. 更改*“允许”*规则，可以为 **true** 或 **false** 的。

4. 重新启动服务以使配置更改生效：

    <Tabs>
      <TabItem value="rpm-deb" label="RPM/DEB packages">
          ``` bash
          systemctl restart ds-*
          ```
      </TabItem>
    </Tabs>

在 Docker 中，请在启动容器时通过 `IP_FILTER_RULES` 环境变量设置规则。规则之间用分号分隔，并按相同的顺序检查：

``` bash
docker run -itd -p 80:80 -e WOPI_ENABLED=true -e IP_FILTER_RULES="allow wopi.example.com; deny all" onlyoffice/documentserver
```

如果设置了此变量，每次启动容器时它都会替换 *local.json* 中的规则。有关其他 Docker 参数，请参阅 [Docker-DocumentServer](https://github.com/ONLYOFFICE/Docker-DocumentServer) 仓库。

### 为 WOPI 主机要求显式规则 {#requiring-an-explicit-rule-for-the-wopi-host}

从 10.0 版本开始，ONLYOFFICE 文档只会向在 `services.CoAuthoring.ipfilter.rules` 中被指明其 IP 地址或 DNS 名称的规则（例如 `wopi.example.com` 或 `*.example.com`）明确允许的 WOPI 主机发送请求。仅由通配符组成的规则（例如 `*` 或 `*.*.*.*`）不计算在内。因此，默认规则集（`{"address": "*", "allowed": true}`）并不足够：即使 IP 过滤器本身允许所有地址，如果没有一条明确指定您的 WOPI 主机的规则，WOPI 也无法正常工作。规则按顺序检查，由第一条匹配的规则决定结果，因此请将 WOPI 主机的规则放在所有 `*` 规则之前。

即使 `externalRequest.action.blockPrivateIP` 服务器设置默认会阻止私有地址，指明 WOPI 主机的规则也允许向其私有 IP 地址发送请求。

此行为由[服务器设置](../get-started/configuration/server-config/server-config.md#wopi) `wopi.requireIpFilterRule` 控制。默认值为 `true`。

仅在添加规则期间，才可将 `wopi.requireIpFilterRule` 设为 `false` 作为临时回退方案。此时，ONLYOFFICE 文档还会向仅匹配通配符规则或不匹配任何规则的主机（包括具有私有 IP 地址的主机）发送 WOPI 请求。

``` json
{
  "wopi": {
    "requireIpFilterRule": false
  }
}
```

无论该设置如何，以下 WOPI 请求检查始终生效：

- 如果 `services.CoAuthoring.ipfilter.rules` 中第一条匹配的规则为 `"allowed": false`，则拒绝该主机。
- 拒绝云元数据地址，以及链路本地地址、组播地址、广播地址和未指定地址。
- 拒绝 `services.CoAuthoring.request-filtering-agent.denyIPAddressList` 中的地址。
- 如果主机名解析为多个地址，则每个地址都必须通过这些检查。
- 每一次重定向都会像原始请求一样接受检查。

:::warning
对于 WOPI 而言，[Request Filtering Agent](../get-started/configuration/server-config/server-config.md#request-filtering-agent) 的列表并不能替代 `services.CoAuthoring.ipfilter.rules`。将某个主机加入 `allowIPAddressList` 并不会放行针对该主机的 WOPI 请求，应改为在 `services.CoAuthoring.ipfilter.rules` 中为该主机添加规则。但将某个主机加入 `denyIPAddressList` 则会阻止该主机，即使 `services.CoAuthoring.ipfilter.rules` 中有规则允许同一地址。
:::
