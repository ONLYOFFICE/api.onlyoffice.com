import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 签名

ONLYOFFICE 文档[使用](../../get-started/how-it-works/security.md)令牌，这些令牌是使用 JSON Web Tokens 标准生成的。当执行客户端[浏览器请求](browser.md)到 ONLYOFFICE 文档，或与 ONLYOFFICE 文档 之间进行 [HTTP 请求](request/request.md)时，会发送这些令牌。

:::info
此功能从 ONLYOFFICE 文档 4.2 版本开始使用。
:::

对于验证设置，需要编辑位于配置文件中的 [secret key](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#SecretKey) 和 [token](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#Token)参数，配置文件可在以下路径找到(或创建)：

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

## 参数 {#parameters} 

| 参数                                        | 类型    | 示例 | 描述                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| services.CoAuthoring.secret.browser.string       | string  | secret  | 定义用于在客户端[浏览器请求](browser.md)中生成发送到 ONLYOFFICE 文档的令牌的密钥。                                                                                                                        |
| services.CoAuthoring.secret.inbox.string         | string  | secret  | 定义用于生成[传入 HTTP 请求](request/token-in-body.md#incoming-request)中的令牌的*密钥*，这些请求带有来自**文档存储服务**到**文档命令服务**、**文档转换服务**和**文档生成服务**的命令。|
| services.CoAuthoring.secret.outbox.string        | string  | secret  | 定义 *密钥* 用以通过文档编辑服务的在 [传出 HTTP 请求](request/token-in-body.md#outgoing-requests) 到 `callbackUrl`* **地址中生成令牌**。                                                                                                                                                                                                          |
| services.CoAuthoring.token.enable.browser        | boolean | false   | 定义是否启用客户端[浏览器请求](browser.md)中的令牌。                                                                                                                                                                                                                                                                                         |
| services.CoAuthoring.token.enable.request.inbox  | boolean | false   | 定义是否启用[传入HTTP请求](request/token-in-body.md#incoming-request)中的令牌。                                                                                                                                                                                                                                                                               |
| services.CoAuthoring.token.enable.request.outbox | boolean | false   | 定义[传出HTTP请求](request/token-in-body.md#outgoing-requests) 中的令牌是否已启用。                                                                                                                                                                                                                                                                               |

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

下面是为初始化设置和请求生成签名的示例。它们取自不同编程语言的[测试范例](../../samples/language-specific-examples/language-specific-examples.md)。我们建议您在项目中使用此代码来生成签名。

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
