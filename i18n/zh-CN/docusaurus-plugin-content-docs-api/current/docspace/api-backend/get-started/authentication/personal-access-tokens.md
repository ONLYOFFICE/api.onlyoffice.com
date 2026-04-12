---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 个人访问令牌

用户需要执行以下几个简单步骤来完成身份验证：

1. 向 [api/2.0/authentication](../../../../docspace/api-backend/usage-api/authenticate-me.api.mdx) 地址发送包含 `userName` 和 `password` 参数的 POST 请求：

    <Tabs>
      <TabItem value="request" label="请求">
        ``` http
        POST /api/2.0/authentication HTTP/1.1
        Host: yourportal.onlyoffice.com
        Content-Type: application/json
        Accept: application/json

        {
            "userName": "yourusername",
            "password": "yourpassword"
        }
        ```

        :::note
        您需要在 *Host: yourportal.onlyoffice.com* 行中输入您自己的门户地址，而非 *yourportal.onlyoffice.com* 地址。
        :::
      </TabItem>
      <TabItem value="response" label="响应">
        ``` http
        HTTP/1.1 201 Created
        Content-Type: application/json; charset=utf-8
        {
            "count": 1,
            "response": {
                "token": "sdjhfskjdhkqy739459234",
                "expires": "2010-07-07T17:06:03.5845502+03:00"
            },
            "status": 0,
            "statusCode": 201
        }
        ```
      </TabItem>
    </Tabs>

2. 身份验证成功后，将收到令牌及其有效期。

3. 每次调用 API 方法时，将令牌插入 `Authorization` HTTP 标头中使用：

   API 请求示例：

   ``` http
   GET /api/2.0/people/@self HTTP/1.1
   Host: yourportal.onlyoffice.com
   Accept: application/json
   Authorization: sdjhfskjdhkqy739459234
   ```

   :::note
   您需要在 *Host: yourportal.onlyoffice.com* 行中输入您自己的门户地址，而非 *yourportal.onlyoffice.com* 地址。
   :::

## 身份验证请求示例

<Tabs>
  <TabItem value="nodejs" label="Node.js">
    ``` ts
    const axios = require("axios");

    async function authenticate() {
      try {
        const response = await axios.post("https://yourportal.onlyoffice.com/api/2.0/authentication", {
          userName: "yourusername",
          password: "yourpassword"
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        console.log(response.data);
      } catch (error) {
        console.error("Authentication failed:", error.response?.data || error.message);
      }
    }

    authenticate();
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ``` py
    import requests

    url = "https://yourportal.onlyoffice.com/api/2.0/authentication"

    headers = {
        "Content-Type": "application/json"
    }

    data = {
        "userName": "yourusername",
        "password": "yourpassword"
    }

    response = requests.post(url, json=data, headers=headers)

    print(response.status_code)
    print(response.json())
    ```
  </TabItem>
  <TabItem value="csharp" label="C#">
    ``` cs
    var request = System.Net.WebRequest.Create("https://yourportal.onlyoffice.com/api/2.0/authentication");
    request.Method = "POST";
    request.ContentType = "application/json";

    var body = "{\"userName\":\"yourusername\",\"password\":\"yourpassword\"}";
    var data = System.Text.Encoding.UTF8.GetBytes(body);

    request.ContentLength = data.Length;
    using (var stream = request.GetRequestStream())
    {
        stream.Write(data, 0, data.Length);
    }

    var response = (System.Net.HttpWebResponse)request.GetResponse();
    var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
    ```
  </TabItem>
  <TabItem value="curl" label="cURL">
    ``` sh
    curl --request POST --header "Content-Type: application/json" --data "{\"userName\":\"yourusername\",\"password\":\"yourpassword\"}" "https://yourportal.onlyoffice.com/api/2.0/authentication"
    ```
  </TabItem>
</Tabs>

:::note
您需要输入您自己的门户地址、用户名和密码，分别替换 *yourportal.onlyoffice.com*、*yourusername* 和 *yourpassword*。
:::
