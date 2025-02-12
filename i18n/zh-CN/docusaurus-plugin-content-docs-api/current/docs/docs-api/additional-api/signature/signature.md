# Signature

ONLYOFFICE 文档服务器[使用](../../Get%20Started/How%20It%20Works/Security.md) **令牌**，这些令牌是使用 JSON Web Tokens 标准生成的。

> 此功能从 **ONLYOFFICE 文档** 4.2 版本开始使用。

对于验证设置，需要编辑位于配置文件中的 [secret key](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#SecretKey) 和 [token](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#Token)参数，配置文件可在以下路径找到(或创建)：

对于 Linux - */etc/onlyoffice/documentserver/**local.json***.

对于 Windows - *%ProgramFiles%\ONLYOFFICE\DocumentServer\config\\**local.json***.

> 默认值存储在 *default.json* 配置文件中，该文件位于上述文件夹中（适用于 Linux 和 Windows）。请不要直接编辑 *default.json* 文件的内容。每次重启 Docker 容器或将 **ONLYOFFICE 文档**升级到新版本时，默认值将被恢复，您所做的所有更改将会丢失。

重新启动服务以使配置更改生效：

**对于 RPM/DEB 软件包：**

``` sh
systemctl restart ds-*
```

**对于 Docker:**

``` sh
supervisorctl restart all
```

## 参数

| 参数                                        | 类型    | 示例 | 描述                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------ | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| services.CoAuthoring.secret.browser.string       | string  | secret  | 定义用于在客户端[浏览器请求](Browser.md)中生成发送到 ONLYOFFICE 文档的令牌的*密钥*。自 7.2 版本起已弃用，请改用 [services.CoAuthoring.secret.inbox.string](#services.CoAuthoring.secret.inbox.string)。                                                                                                                        |
| services.CoAuthoring.secret.inbox.string         | string  | secret  | 定义用于生成[传入 HTTP 请求](Request/Request.md#incoming-request)中的令牌的*密钥*，这些请求带有来自**文档存储服务**到**文档命令服务**、**文档转换服务**和**文档生成服务**的命令，以及自 7.2 版本起在客户端[浏览器请求](Browser.md)中发送到 ONLYOFFICE 文档的令牌。|
| services.CoAuthoring.secret.outbox.string        | string  | secret  | 定义 *密钥* 用以通过文档编辑服务的在[传出HTTP请求](Request/Request.md#outgoing-requests) 到 *回调Url* **地址中生成令牌**。                                                                                                                                                                                                          |
| services.CoAuthoring.token.enable.browser        | boolean | false   | 定义是否启用客户端[浏览器请求](Browser.md)中的令牌。                                                                                                                                                                                                                                                                                         |
| services.CoAuthoring.token.enable.request.inbox  | boolean | false   | 定义是否启用 [传入HTTP请求](Request/Request.md#incoming-request)中的令牌。                                                                                                                                                                                                                                                                               |
| services.CoAuthoring.token.enable.request.outbox | boolean | false   | 定义[传出HTTP请求](Request/Request.md#outgoing-requests) 中的令牌是否已启用。                                                                                                                                                                                                                                                                               |

## 示例 local.json 配置

``` json
{
  "services": {
    "CoAuthoring": {
      "secret": {
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

## 用于生成签名的代码示例

下面是为初始化设置和请求生成签名的示例。它们取自不同编程语言的[测试范例](../../Get%20Started/Language-specific%20examples/Language-specific%20examples.md)。我们建议您在项目中使用此代码来生成签名。

### 示例 C#

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

### 示例 Java

``` java
public static String CreateToken(Map payloadClaims)
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

### 示例 Node.js

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

### 示例 PHP

``` php
<?php
function jwtEncode($payload) {
    return \Firebase\JWT\JWT::encode($payload, $GLOBALS["DOC_SERV_JWT_SECRET"]);
}
?>
```

### 示例 Python

``` py
def encode(payload):
    return jwt.encode(payload, config.DOC_SERV_JWT_SECRET, algorithm='HS256')
```

### 示例 Ruby

``` rb
@jwt_secret = Rails.configuration.jwtSecret

class << self
    def encode(payload)
        return JWT.encode payload, @jwt_secret, 'HS256'
    end
end
```

### 示例 Go

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
