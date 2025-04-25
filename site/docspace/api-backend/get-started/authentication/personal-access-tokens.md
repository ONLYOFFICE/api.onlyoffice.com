---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Personal access tokens

The user needs to perform several easy steps to pass authentication:

1. Send POST request, containing the **userName** and **password** parameters to the [api/2.0/authentication](../../../../docspace/api-backend/usage-api/authenticate-me.api.mdx) address:

    <Tabs>
      <TabItem value="request" label="Request">
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

        > Please note, that you have to enter your own portal address to the *Host: yourportal.onlyoffice.com* line instead of *yourportal.onlyoffice.com* address.
      </TabItem>
      <TabItem value="response" label="Response">
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

2. In case authentication is successful, a token and its lifetime will be received.

3. Use this token every time you call API methods inserting it to the **Authorization** HTTP header:

   Example API Request:

   ``` http
   GET /api/2.0/people/@self HTTP/1.1
   Host: yourportal.onlyoffice.com
   Accept: application/json
   Authorization: sdjhfskjdhkqy739459234
   ```

   > Please note, that you have to enter your own portal address to the *Host: yourportal.onlyoffice.com* line instead of *yourportal.onlyoffice.com* address.

## Authentication request examples

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

> Please note, that you have to enter your own portal address, username and password instead of *yourportal.onlyoffice.com*, *yourusername* and *yourpassword* respectively.
