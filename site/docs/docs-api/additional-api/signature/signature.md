import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Signature

ONLYOFFICE Docs [uses](../../get-started/how-it-works/security.md) tokens generated using the JSON Web Tokens standard. The tokens are sent when performing the client-side [browser requests](browser.md) to ONLYOFFICE Docs or the [HTTP requests](request/request.md) to or from ONLYOFFICE Docs.

:::info
This feature is used in ONLYOFFICE Docs starting with version 4.2.
:::

For the validation setup, it is necessary to edit the [secret key](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#SecretKey) and [token](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#Token) parameters in the configuration file, which can be found (or created) at the following path:

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
The default values are available in the `default.json` configuration file, which is available in the folders above (for Linux and Windows). Please do not edit the contents of the `default.json` file directly. The default values will be restored each time you restart Docker container or upgrade ONLYOFFICE Docs to a new version and all your changes will be lost.
:::

Restart the services for the config changes to take effect:

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

## Configuration parameters

| Parameter                                        | Type    | Example | Description                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------ | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| services.CoAuthoring.secret.browser.string       | string  | secret  | The secret key to generate a token in the client-side [browser requests](browser.md) to ONLYOFFICE Docs.                                                                                                                                                                         |
| services.CoAuthoring.secret.inbox.string         | string  | secret  | The secret key to generate a token in the [incoming HTTP requests](request/token-in-body.md#incoming-request) with the commands from the **document storage service** to the **document command service**, **document conversion service** and **document builder service**. |
| services.CoAuthoring.secret.outbox.string        | string  | secret  | The secret key to generate a token in the [outgoing HTTP requests](request/token-in-body.md#outgoing-requests) to the `callbackUrl` address by **document editing service**.                                                                                                 |
| services.CoAuthoring.token.enable.browser        | boolean | false   | Whether a token in the client-side [browser requests](browser.md) is enabled or not.                                                                                                                                                                                                  |
| services.CoAuthoring.token.enable.request.inbox  | boolean | false   | Whether a token in the [incoming HTTP requests](request/token-in-body.md#incoming-request) is enabled or not.                                                                                                                                                                     |
| services.CoAuthoring.token.enable.request.outbox | boolean | false   | Whether a token in the [outgoing HTTP requests](request/token-in-body.md#outgoing-requests) is enabled or not.                                                                                                                                                                    |

## Sample local.json configuration

```json
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

## Code samples for signature generation

Below you can find examples of signature generation for initialization config and requests. All examples use the HMAC-SHA256 algorithm and include the required library and imports. They are based on [test samples](../../samples/language-specific-examples/language-specific-examples.md) in different programming languages. We advise you to use this code in your projects to generate signatures.

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
