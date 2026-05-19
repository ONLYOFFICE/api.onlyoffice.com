import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 签名

ONLYOFFICE 文档[使用](../../get-started/how-it-works/security.md)令牌，这些令牌是使用 JSON Web Tokens 标准生成的。当执行客户端[浏览器请求](browser.md)到 ONLYOFFICE 文档，或与 ONLYOFFICE 文档 之间进行 [HTTP 请求](request/request.md)时，会发送这些令牌。

:::info
此功能从 ONLYOFFICE 文档 4.2 版本开始使用。
:::

对于验证设置，需要编辑位于配置文件中的 [secret key](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#SecretKey) 和 [token](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#Token)参数，配置文件可在以下路径找到(或创建)：

<Tabs>
  <TabItem value="linux" label="Linux">
      ``` bash
      /etc/onlyoffice/documentserver/local.json
      ```
  </TabItem>
  <TabItem value="windows" label="Windows">
      ``` bash
      %ProgramFiles%\ONLYOFFICE\DocumentServer\config\local.json
      ```
  </TabItem>
</Tabs>

:::caution
默认值存储在 `default.json` 配置文件中，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 `default.json` 文件的内容。每次重启 Docker 容器或将 ONLYOFFICE 文档升级到新版本时，默认值将被恢复，您所做的所有更改将会丢失。
:::

重新启动服务以使配置更改生效：

<Tabs>
  <TabItem value="docker" label="Docker">
      ``` bash
      supervisorctl restart all
      ```
  </TabItem>
  <TabItem value="rpm-deb" label="RPM/DEB packages">
      ``` bash
      systemctl restart ds-*
      ```
  </TabItem>
</Tabs>

## 配置参数 {#configuration-parameters} 

| 参数                                        | 类型    | 示例 | 描述                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| services.CoAuthoring.secret.browser.string       | string  | secret  | 用于在客户端[浏览器请求](browser.md)中生成发送到 ONLYOFFICE 文档的令牌的密钥。                                                                                                                        |
| services.CoAuthoring.secret.inbox.string         | string  | secret  | 用于生成[传入 HTTP 请求](request/token-in-body.md#incoming-request)中的令牌的*密钥*，这些请求带有来自**文档存储服务**到**文档命令服务**、**文档转换服务**和**文档生成服务**的命令。|
| services.CoAuthoring.secret.outbox.string        | string  | secret  |  *密钥* 用以通过文档编辑服务的在 [传出 HTTP 请求](request/token-in-body.md#outgoing-requests) 到 `callbackUrl`* **地址中生成令牌**。                                                                                                                                                                                                          |
| services.CoAuthoring.token.enable.browser        | boolean | false   | 是否启用客户端[浏览器请求](browser.md)中的令牌。                                                                                                                                                                                                                                                                                         |
| services.CoAuthoring.token.enable.request.inbox  | boolean | false   | 是否启用[传入HTTP请求](request/token-in-body.md#incoming-request)中的令牌。                                                                                                                                                                                                                                                                               |
| services.CoAuthoring.token.enable.request.outbox | boolean | false   | [传出HTTP请求](request/token-in-body.md#outgoing-requests) 中的令牌是否已启用。                                                                                                                                                                                                                                                                               |

## 示例 local.json 配置

``` json
{
  "services": {
    "CoAuthoring": {
      "secret": {
        "browser": {
          "string": "secret"
        },
        "inbox": {
          "string": "secret"
        },
        "outbox": {
          "string": "secret"
        }
      },
      "token": {
        "enable": {
          "browser": true,
          "request": {
            "inbox": true,
            "outbox": true
          }
        }
      }
    }
  }
}
```

## 用于生成签名的代码示例 {#code-samples-for-signature-generation}

下面是为初始化设置和请求生成签名的示例。所有示例均使用 HMAC-SHA256 算法，并包含所需的库和导入。它们基于不同编程语言的[测试范例](../../samples/language-specific-examples/language-specific-examples.md)。我们建议您在项目中使用此代码来生成签名。

<Tabs>
  <TabItem value="nodejs" label="Node.js">
      ``` ts
      // npm install jsonwebtoken
      import jwt from "jsonwebtoken"

      function jwtEncode(payload, secret) {
        return jwt.sign(payload, secret, {algorithm: "HS256"})
      }
      ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
      ``` javascript
      async function createJWT(payload, secret) {
        const header = {
          typ: "JWT",
          alg: "HS256",
        }

        function base64UrlEncode(str) {
          return btoa(str)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "")
        }

        const encodedHeader = base64UrlEncode(JSON.stringify(header))
        const encodedPayload = base64UrlEncode(JSON.stringify(payload))

        const encoder = new TextEncoder()
        const algorithm = {name: "HMAC", hash: "SHA-256"}
        const key = await crypto.subtle.importKey(
          "raw",
          encoder.encode(secret),
          algorithm,
          false,
          ["sign"]
        )

        const data = encoder.encode(`${encodedHeader}.${encodedPayload}`)
        const signature = await crypto.subtle.sign(algorithm.name, key, data)
        const encodedSignature = base64UrlEncode(
          String.fromCharCode(...new Uint8Array(signature))
        )

        return `${encodedHeader}.${encodedPayload}.${encodedSignature}`
      }
      ```
  </TabItem>
  <TabItem value="csharp" label="C#">
      ``` cs
      // NuGet: Install-Package JWT
      using JWT;
      using JWT.Algorithms;
      using JWT.Serializers;

      public static string JwtEncode(
          IDictionary<string, object> payload,
          string secret)
      {
          var encoder = new JwtEncoder(
              new HMACSHA256Algorithm(),
              new JsonNetSerializer(),
              new JwtBase64UrlEncoder());
          return encoder.Encode(payload, secret);
      }
      ```
  </TabItem>
  <TabItem value="java" label="Java">
      ``` java
      // Maven: io.fusionauth:fusionauth-jwt
      import io.fusionauth.jwt.Signer;
      import io.fusionauth.jwt.hmac.HMACSigner;
      import io.fusionauth.jwt.domain.JWT;

      public static String jwtEncode(
              Map<String, Object> payload,
              String secret) {
          Signer signer = HMACSigner.newSHA256Signer(secret);
          JWT jwt = new JWT();
          for (String key : payload.keySet()) {
              jwt.addClaim(key, payload.get(key));
          }
          return JWT.getEncoder().encode(jwt, signer);
      }
      ```
  </TabItem>
  <TabItem value="php" label="PHP">
      ``` php
      // composer require firebase/php-jwt
      use Firebase\JWT\JWT;

      function jwtEncode($payload, $secret) {
          return JWT::encode($payload, $secret, "HS256");
      }
      ```
  </TabItem>
  <TabItem value="python" label="Python">
      ``` py
      # pip install PyJWT
      import jwt

      def jwt_encode(payload, secret):
          return jwt.encode(payload, secret, algorithm="HS256")
      ```
  </TabItem>
  <TabItem value="ruby" label="Ruby">
      ``` rb
      # gem install jwt
      require "jwt"

      def jwt_encode(payload, secret)
        JWT.encode(payload, secret, "HS256")
      end
      ```
  </TabItem>
  <TabItem value="go" label="Go">
      ``` go
      // go get github.com/golang-jwt/jwt/v5
      import (
          "github.com/golang-jwt/jwt/v5"
      )

      func jwtEncode(
          claims jwt.MapClaims,
          secret []byte,
      ) (string, error) {
          token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
          return token.SignedString(secret)
      }
      ```
  </TabItem>
</Tabs>
