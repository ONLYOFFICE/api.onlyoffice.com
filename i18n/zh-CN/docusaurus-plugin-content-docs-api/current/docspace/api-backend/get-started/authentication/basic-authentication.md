---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 基本身份验证

基本身份验证由 [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617) 定义，以 Base64 编码的用户名和密码对形式传输凭据。凭据包含在 `Authorization` 标头中，格式如下：

``` http
Authorization: Basic "username:password".toBase64Str()
```

:::warning
基本身份验证以明文形式传输凭据。强烈建议使用 HTTPS/TLS 来保护敏感或重要信息。
:::

基本身份验证的主要优点是简单，因此适用于测试、快速集成或内部应用程序。但由于存在安全限制以及需要直接处理用户凭据，不建议在生产应用中使用。

## 身份验证请求示例

<Tabs>
  <TabItem value="nodejs" label="Node.js">
    ``` ts
    const axios = require("axios");

    const username = "yourusername";
    const password = "yourpassword";

    const token = Buffer.from(`${username}:${password}`).toString("base64");
    const headers = {
      "Authorization": `Basic ${token}`
    };

    axios.get("https://yourportal.onlyoffice.com/api/2.0/people/@self", { headers })
    .then(res => console.log(res.data))
    .catch(err => console.error(err.response?.data || err.message));
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ``` py
    import requests
    from base64 import b64encode

    username = "yourusername"
    password = "yourpassword"

    credentials = f"{username}:{password}"
    token = b64encode(credentials.encode()).decode()

    headers = {
        "Authorization": f"Basic {token}"
    }

    response = requests.get("https://yourportal.onlyoffice.com/api/2.0/people/@self", headers=headers)
    print(response.status_code)
    print(response.json())
    ```
  </TabItem>
  <TabItem value="csharp" label="C#">
    ``` cs
    var username = "yourusername";
    var password = "yourpassword";
    var credentials = $"{username}:{password}";
    var base64 = Convert.ToBase64String(Encoding.UTF8.GetBytes(credentials));

    using var client = new HttpClient();
    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", base64);

    var response = await client.GetAsync("https://yourportal.onlyoffice.com/api/2.0/people/@self");
    var content = await response.Content.ReadAsStringAsync();

    Console.WriteLine($"Status: {response.StatusCode}");
    Console.WriteLine(content);
    ```
  </TabItem>
  <TabItem value="curl" label="cURL">
    ``` sh
    curl -u yourusername:yourpassword https://yourportal.onlyoffice.com/api/2.0/people/@self
    ```

    或使用 `Authorization` 标头：
    ``` sh
    curl -H "Authorization: Basic $(echo -n "yourusername:yourpassword" | base64)" https://yourportal.onlyoffice.com/api/2.0/people/@self
    ```
  </TabItem>
</Tabs>

:::note
您需要输入您自己的门户地址、用户名和密码，分别替换 *yourportal.onlyoffice.com*、*yourusername* 和 *yourpassword*。
:::
