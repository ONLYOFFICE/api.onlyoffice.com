import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Signature

ONLYOFFICE Docs [uses](../../get-started/how-it-works/security.md) tokens generated using the JSON Web Tokens standard. The tokens are sent when performing the client-side [browser requests](browser.md) to ONLYOFFICE Docs or the [HTTP requests](request/request.md) to or from ONLYOFFICE Docs.

:::info
This feature is used in ONLYOFFICE Docs starting with version 4.2.
:::

For the validation setup, it is necessary to edit the [secret key](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#SecretKey) and [token](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#Token) parameters in the configuration file, which can be found (or created) at the following path:

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

## Parameters

| Parameter                                        | Type    | Example | Description                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------ | ------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| services.CoAuthoring.secret.browser.string       | string  | secret  | Defines the secret key to generate a token in the client-side [browser requests](browser.md) to ONLYOFFICE Docs.                                                                                                                                                                         |
| services.CoAuthoring.secret.inbox.string         | string  | secret  | Defines the secret key to generate a token in the [incoming HTTP requests](request/token-in-body.md#incoming-request) with the commands from the **document storage service** to the **document command service**, **document conversion service** and **document builder service**. |
| services.CoAuthoring.secret.outbox.string        | string  | secret  | Defines the secret key to generate a token in the [outgoing HTTP requests](request/token-in-body.md#outgoing-requests) to the `callbackUrl` address by **document editing service**.                                                                                                 |
| services.CoAuthoring.token.enable.browser        | boolean | false   | Defines if a token in the client-side [browser requests](browser.md) is enabled or not.                                                                                                                                                                                                  |
| services.CoAuthoring.token.enable.request.inbox  | boolean | false   | Defines if a token in the [incoming HTTP requests](request/token-in-body.md#incoming-request) is enabled or not.                                                                                                                                                                     |
| services.CoAuthoring.token.enable.request.outbox | boolean | false   | Defines if a token in the [outgoing HTTP requests](request/token-in-body.md#outgoing-requests) is enabled or not.                                                                                                                                                                    |

## Sample local.json configuration

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

## Code samples for signature generation

Below you can find examples of signature generation for initialization config and requests. They are taken from [test samples](../../samples/language-specific-examples/language-specific-examples.md) in different programming languages. We advise you to use this code in your projects to generate signatures.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
      ``` ts
      import config from "config"

      const configServer = config.get("server")
      const cfgSignatureSecretExpiresIn = configServer.get("token.expiresIn")
      const cfgSignatureSecret = configServer.get("token.secret")
      const cfgSignatureSecretAlgorithmRequest = configServer.get("token.algorithmRequest")
      documentService.getToken = function getToken(data) {
        const options = {algorithm: cfgSignatureSecretAlgorithmRequest,
          expiresIn: cfgSignatureSecretExpiresIn}
        return jwt.sign(data, cfgSignatureSecret, options)
      }
      ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
      ``` javascript
      (async () => {
          config.token = await createJWT(config, "JWT_SECRET");
      })();

      async function createJWT(json, secret) {
          if (!secret) return null;
          let header = {
              typ: "JWT",
              alg: "HS256"
          }

          let base64EncodeURL = function(str) {
              return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
          }

          let encodedHeader = base64EncodeURL(JSON.stringify(header));
          let encodedPayload = base64EncodeURL(JSON.stringify(json));
          let encoder = new TextEncoder();
          let algorithm = { name: "HMAC", hash: "SHA-256" };
          let key = await crypto.subtle.importKey("raw", encoder.encode(secret), algorithm, false, ["sign", "verify"]);
          let buf = encoder.encode(encodedHeader + "." + encodedPayload);
          let sign = await crypto.subtle.sign(algorithm.name, key, buf);
          let hash = base64EncodeURL(String.fromCharCode(...new Uint8Array(sign)));
          return encodedHeader + "." + encodedPayload + "." + hash;
      }
      ```
  </TabItem>
  <TabItem value="csharp" label="C#">
      ``` cs
      public static class JwtManager
      {
          private static readonly string Secret;
          public static readonly bool Enabled;

          static JwtManager()
          {
              Secret = WebConfigurationManager.AppSettings["files.docservice.secret"] ?? "";
              Enabled = !string.IsNullOrEmpty(Secret);
          }

          public static string Encode(IDictionary<string, object> payload)
          {
              var encoder = new JwtEncoder(new HMACSHA256Algorithm(),
                                              new JsonNetSerializer(),
                                              new JwtBase64UrlEncoder());
              return encoder.Encode(payload, Secret);
          }
      }
      ```
  </TabItem>
  <TabItem value="java" label="Java">
      ``` java
      public static String CreateToken(Map<String, Object> payloadClaims)
      {
          try
          {
              String secret = ConfigManager.GetProperty("files.docservice.secret");
              Signer signer = HMACSigner.newSHA256Signer(secret);
              JWT jwt = new JWT();
              for (String key : payloadClaims.keySet())
              {
                  jwt.addClaim(key, payloadClaims.get(key));
              }
              return JWT.getEncoder().encode(jwt, signer);
          }
          catch (Exception e)
          {
              return "";
          }
      }
      ```
  </TabItem>
  <TabItem value="php" label="PHP">
      ``` php
      <?php
      function jwtEncode($payload) {
          return \Firebase\JWT\JWT::encode($payload, $GLOBALS["DOC_SERV_JWT_SECRET"], "HS256");
      }
      ?>
      ```
  </TabItem>
  <TabItem value="python" label="Python">
      ``` py
      def encode(payload):
          return jwt.encode(payload, config.DOC_SERV_JWT_SECRET, algorithm='HS256')
      ```
  </TabItem>
  <TabItem value="ruby" label="Ruby">
      ``` rb
      @jwt_secret = Rails.configuration.jwtSecret

      class << self
          def encode(payload)
              return JWT.encode payload, @jwt_secret, 'HS256'
          end
      end
      ```
  </TabItem>
  <TabItem value="go" label="Go">
      ``` go
      type onlyofficeJwtManager struct {
          key []byte
      }

      func (j onlyofficeJwtManager) Sign(payload interface {
          Valid() error
      }) (string, error) {
          token := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)
          ss, err := token.SignedString(j.key)

          if err != nil {
              return "", errors.New("could not generate a new jwt")
          }

          return ss, nil
      }
      ```
  </TabItem>
</Tabs>
