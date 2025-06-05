---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Basic authentication

The basic authentication is defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617) and transmits credentials as a username and password pair, encoded using Base64. The credentials are included in the `Authorization` header in the following format:

``` http
Authorization: Basic "username:password".toBase64Str()
```

> Basic authentication transmits credentials as plaintext. It is strongly recommended to use HTTPS/TLS to protect sensitive or valuable information.

The main advantage of basic authentication is its simplicity, so it is suitable for testing, quick integrations, or internal applications. However, it is not recommended for production applications due to security limitations and the need to handle user credentials directly.

## Authentication request examples

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

    Or using the `Authorization` header:
    ``` sh
    curl -H "Authorization: Basic $(echo -n "yourusername:yourpassword" | base64)" https://yourportal.onlyoffice.com/api/2.0/people/@self
    ```
  </TabItem>
</Tabs>

> Please note, that you have to enter your own portal address, username and password instead of *yourportal.onlyoffice.com*, *yourusername* and *yourpassword* respectively.
