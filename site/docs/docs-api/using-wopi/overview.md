---
sidebar_position: -11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overview

Starting from version 6.4, ONLYOFFICE Docs offers support for the **Web Application Open Platform Interface Protocol (WOPI)** - a REST-based protocol that is used to integrate your application with an online office. WOPI operations allow you to open files stored on a server, edit and save them.

This documentation describes:

- WOPI protocol [configuration parameters](./config.md);
- [key concepts](./key-concepts.md) that are vital to understand the requirements for integrating with WOPI clients;
- file properties that can be specified via [WOPI discovery](./wopi-discovery.md);
- a [host page](./host-page.md) that must be built to create an iframe element within the online office;
- [proof keys](./proof-keys.md) which are used to check that the request is received from the online office;
- supported [WOPI REST API](./wopi-rest-api/wopi-rest-api.md) functions;
- available messages that can be posted via [PostMessage](./postmessage.md);
- request parameters for [converting](./conversion-api.md) different file formats in the online office;
- a scheme for [editing binary document formats](./editing-binary-documents.md);
- [differences](./api-vs-wopi.md) between ONLYOFFICE Docs API and WOPI.

For further information on the WOPI protocol, please read the [WOPI documentation](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/).

All the necessary [WOPI settings](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#WOPI) you can find and change in the configuration file which can be found (or created) at the following path:

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
The default values are available in the *default.json* configuration file, which is available in the folders above (for Linux and Windows). Please do not edit the contents of the *default.json* file directly. The default values will be restored each time you restart Docker container or upgrade **ONLYOFFICE Docs** to a new version and all your changes will be lost.
:::

## Enabling WOPI

To enable WOPI, set the [wopi.enable](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#wopi-enable) parameter in the ONLYOFFICE Docs config to **true**:

### Parameters

| Name        | Type    | Example | Description                                                        |
| ----------- | ------- | ------- | ------------------------------------------------------------------ |
| wopi.enable | boolean | true    | Whether WOPI is enabled or not. The default value is **false**. |

### Example

```json
{
  "wopi": {
    "enable": true
  }
}
```

## IP filter

ONLYOFFICE Docs must work only with trusted WOPI hosts. This is the same idea as the [WOPI domain allow list](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/build-test-ship/settings#wopi-domain-allow-list) in the WOPI documentation. Allow your WOPI host in the IP filter rules and deny all the other hosts.

Follow the steps below to configure the ONLYOFFICE Docs [IP filter](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#IPFilter):

1. Open the */etc/onlyoffice/documentserver/local.json* file using any available text editor:

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

2. Change the following default settings. Enter your IP address (or WOPI host) that can contain:

   - IP in the X.X.X.X format for ipv4,
   - IP in the xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx.xxxx format for ipv6,
   - dns-name,
   - \* wildcard to replace any symbol/symbols.

3. Change the *"allowed"* rule that can be **true** or **false**.

4. Restart the services for the config changes to take effect:

    <Tabs>
      <TabItem value="rpm-deb" label="RPM/DEB packages">
          ``` bash
          systemctl restart ds-*
          ```
      </TabItem>
    </Tabs>

In Docker, set the rules when you start the container, with the `IP_FILTER_RULES` environment variable. The rules are separated with semicolons and are checked in the same order:

``` bash
docker run -itd -p 80:80 -e WOPI_ENABLED=true -e IP_FILTER_RULES="allow wopi.example.com; deny all" onlyoffice/documentserver
```

If this variable is set, it replaces the rules in *local.json* each time the container starts. For other Docker parameters, see the [Docker-DocumentServer](https://github.com/ONLYOFFICE/Docker-DocumentServer) repository.

### Requiring an explicit rule for the WOPI host

Starting from version 10.0, ONLYOFFICE Docs sends requests only to a WOPI host that is explicitly allowed in `services.CoAuthoring.ipfilter.rules` by a rule that names its IP address or DNS name, such as `wopi.example.com` or `*.example.com`. A rule that consists only of wildcards, such as `*` or `*.*.*.*`, does not count. This means that the default rule set (`{"address": "*", "allowed": true}`) is not enough: without a rule that names your WOPI host, WOPI does not work, even though the IP filter itself allows all addresses. Rules are checked in order and the first matching rule decides, so put the rule for your WOPI host before any `*` rule.

A rule that names the WOPI host also allows requests to its private IP address, even though the `externalRequest.action.blockPrivateIP` server setting blocks private addresses by default.

This behavior is controlled by the `wopi.requireIpFilterRule` [server setting](../get-started/configuration/server-config/server-config.md#wopi). The default value is `true`.

Set `wopi.requireIpFilterRule` to `false` only as a temporary fallback while you add the rules. ONLYOFFICE Docs then also sends WOPI requests to hosts that match only a wildcard rule or no rule at all, including hosts with private IP addresses.

``` json
{
  "wopi": {
    "requireIpFilterRule": false
  }
}
```

The other WOPI request checks apply regardless of this setting:

- A host whose first matching rule in `services.CoAuthoring.ipfilter.rules` has `"allowed": false` is refused.
- Cloud metadata addresses and link-local, multicast, broadcast and unspecified addresses are refused.
- Addresses from `services.CoAuthoring.request-filtering-agent.denyIPAddressList` are refused.
- If the host name resolves to several addresses, each of them must pass these checks.
- Each redirect is checked in the same way as the original request.

:::warning
The [Request Filtering Agent](../get-started/configuration/server-config/server-config.md#request-filtering-agent) lists do not replace `services.CoAuthoring.ipfilter.rules` for WOPI. Adding a host to `allowIPAddressList` does not allow WOPI requests to it - add a rule for the host to `services.CoAuthoring.ipfilter.rules` instead. Adding a host to `denyIPAddressList`, however, blocks it, even if a rule in `services.CoAuthoring.ipfilter.rules` allows the same address.
:::
