ONLYOFFICE Docs [uses](/editors/security) **tokens** generated using the JSON Web Tokens standard.

This feature is used in **ONLYOFFICE Docs** starting with version 4.2

For the validation setup it is necessary to edit the [secret key](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#SecretKey) and [token](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#Token) parameters in the configuration file which can be found (or created) at the following path:

For Linux - */etc/onlyoffice/documentserver/**local.json***.

For Windows - *%ProgramFiles%\ONLYOFFICE\DocumentServer\config\\**local.json***.

The default values are available in the *default.json* configuration file, which is available in the folders above (for Linux and Windows). Please do not edit the contents of the *default.json* file directly. The default values will be restored each time you restart Docker container or upgrade **ONLYOFFICE Docs** to a new version and all your changes will be lost.

Restart the services for the config changes to take effect:

**For RPM/DEB packages:**

```
systemctl restart ds-*
```

**For Docker:**

```
supervisorctl restart all
```

Parameters

| Parameter                                        | Description                                                                                                                                                                                                                                                                                                                                                                                         | Type    | Example |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------- |
| services.CoAuthoring.secret.browser.string       | Defines the *secret key* to generate a token in the client-side [browser requests](/editors/signature/browser) to ONLYOFFICE Docs. Deprecated since version 7.2, please use [services.CoAuthoring.secret.inbox.string](#services.CoAuthoring.secret.inbox.string) instead.                                                                                                                          | string  | secret  |
| services.CoAuthoring.secret.inbox.string         | Defines the *secret key* to generate a token in the [incoming HTTP requests](/editors/signature/request#incoming) with the commands from the **document storage service** to the **document command service**, **document conversion service** and **document builder service** and a token in the client-side [browser requests](/editors/signature/browser) to ONLYOFFICE Docs since version 7.2. | string  | secret  |
| services.CoAuthoring.secret.outbox.string        | Defines the *secret key* to generate a token in the [outgoing HTTP requests](/editors/signature/request#outgoing) to the *callbackUrl* address by **document editing service**.                                                                                                                                                                                                                     | string  | secret  |
| services.CoAuthoring.token.enable.browser        | Defines if a token in the client-side [browser requests](/editors/signature/browser) is enabled or not.                                                                                                                                                                                                                                                                                             | boolean | false   |
| services.CoAuthoring.token.enable.request.inbox  | Defines if a token in the [incoming HTTP requests](/editors/signature/request#incoming) is enabled or not.                                                                                                                                                                                                                                                                                          | boolean | false   |
| services.CoAuthoring.token.enable.request.outbox | Defines if a token in the [outgoing HTTP requests](/editors/signature/request#outgoing) is enabled or not.                                                                                                                                                                                                                                                                                          | boolean | false   |

Sample local.json configuration

```
{
    "services": {
        "CoAuthoring": {
            "secret": {
                "inbox": {
                    "string": "secret"
                },
                "outbox": {
                    "string": "secret"
                },
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

Below you can find examples of signature generation for init config and requests. They are taken from [test samples](/editors/demopreview) in different programming languages. We advise you to use this code in your projects to generate signatures.

* C#
* Java
* Node.js
* PHP
* Python
* Ruby
* Go

```
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

```
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

```
var configServer = require('config').get('server');
var cfgSignatureSecretExpiresIn = configServer.get('token.expiresIn');
var cfgSignatureSecret = configServer.get('token.secret');
var cfgSignatureSecretAlgorithmRequest = configServer.get('token.algorithmRequest');

documentService.getToken = function (data) {
    var options = {algorithm: cfgSignatureSecretAlgorithmRequest, expiresIn: cfgSignatureSecretExpiresIn};
    return jwt.sign(data, cfgSignatureSecret, options);
};
```

```
function jwtEncode($payload) {
    return \Firebase\JWT\JWT::encode($payload, $GLOBALS["DOC_SERV_JWT_SECRET"]);
}
```

```
def encode(payload):
    return jwt.encode(payload, config.DOC_SERV_JWT_SECRET, algorithm='HS256')
```

```
@jwt_secret = Rails.configuration.jwtSecret

class << self
    def encode(payload)
        return JWT.encode payload, @jwt_secret, 'HS256'
    end
end
```

```
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