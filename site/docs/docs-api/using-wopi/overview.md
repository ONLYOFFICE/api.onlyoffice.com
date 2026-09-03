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

ONLYOFFICE Docs can accept WOPI requests only from the trusted integrator. The IP address of such an integrator must be included in the [WOPI domain allow list](https://docs.microsoft.com/en-us/microsoft-365/cloud-storage-partner-program/online/build-test-ship/settings#wopi-domain-allow-list). At the same time, access for all the other integrators must be denied.

:::note
By default, all the IP addresses are considered trusted.
:::

:::warning
Starting from ONLYOFFICE Docs version 10.0.0, specifying your WOPI host in the IP filter rules is **mandatory** for WOPI to work, even though all the IP addresses are trusted by default. The catch-all `*` rule does not name a host, so it does not satisfy this requirement — without a rule that explicitly allows your WOPI host, documents cannot be opened via WOPI.
:::

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

2. Change the following default settings. Enter your *"ip\_address"* (or WOPI host) that can contain:

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
      <TabItem value="docker" label="Docker">
          ``` bash
          supervisorctl restart all
          ```
      </TabItem>
    </Tabs>

### Requiring an explicit rule for the WOPI host

Whether every WOPI host must be named by a *services.CoAuthoring.ipfilter.rules* entry before the server will contact it is controlled by the following parameter:

| Name                     | Type    | Example | Description                                                                                                                           |
| ------------------------ | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| wopi.requireIpFilterRule | boolean | true    | Whether every WOPI host must be named by a *services.CoAuthoring.ipfilter.rules* entry before the server will contact it. The default value is **true**. |

*services.CoAuthoring.ipfilter.rules* is consulted for every WOPI request regardless of this setting — a host with no matching *allowed* rule at all is refused either way. What *wopi.requireIpFilterRule* controls is narrower: whether a match against the catch-all `*` rule is enough to trust the host, or whether the matched rule must explicitly name it. The catch-all `*` rule does not count as an explicit match — this is why the default rule set (`{"address": "*", "allowed": true}`) does not satisfy this requirement: without a rule that explicitly names your WOPI host, WOPI will not work, even though the IP filter itself remains wide open.

Set *wopi.requireIpFilterRule* to **false** to let a catch-all rule stand in for a named host as a temporary migration fallback while you are still writing the rules — this re-opens server-side request forgery. Every other WOPI egress protection stays active either way: *services.CoAuthoring.ipfilter.rules* is still enforced, the request is never treated as trusted, cloud metadata, link-local, multicast and *denyIPAddressList* addresses stay hard denied, each redirect hop is validated, and *externalRequest* routing still applies.

``` json
{
  "wopi": {
    "requireIpFilterRule": false
  }
}
```

:::warning
*allowIPAddressList* and *denyIPAddressList* are not a substitute for *services.CoAuthoring.ipfilter.rules* when it comes to WOPI. Adding a host to *allowIPAddressList* does not permit a WOPI destination — that is decided by *services.CoAuthoring.ipfilter.rules* alone. Adding a host to *denyIPAddressList*, however, does block it: a deny there outranks every permission, including an *ipfilter.rules* entry naming the same address.
:::
