---
sidebar_position: -5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API 密钥

API 密钥是用于验证 API 请求的简单令牌。它们充当唯一标识符和密钥，用于确认调用应用程序或服务的身份。

与基于用户的身份验证方法（例如 [OAuth](oauth2/oauth2.md) 或[个人访问令牌](personal-access-tokens.md)）不同，API 密钥通常与应用程序本身绑定，而非与个人用户绑定。

用于处理 API 密钥的 API 方法详见[本节](../../../../docspace/api-backend/usage-api/create-api-key.api.mdx)。

## 如何创建 API 密钥

ONLYOFFICE DocSpace API 使用 API 密钥进行身份验证。要创建用户 API 密钥，请向 [api/2.0/keys](../../../../docspace/api-backend/usage-api/create-api-key.api.mdx) 地址发送包含 `name`、`permissions` 和 `expiresInDays` 参数的 POST 请求：

<Tabs>
  <TabItem value="request" label="请求">
    ``` http
    POST /api/2.0/keys HTTP/1.1
    Host: yourportal.onlyoffice.com
    Content-Type: application/json
    Accept: application/json

    {
      "name": "Winfield Upton",
      "permissions": [
        "some text"
      ],
      "expiresInDays": 1234
    }
    ```

    :::note
    请注意，您需要在 *Host: yourportal.onlyoffice.com* 行中输入您自己的门户地址，而非 *yourportal.onlyoffice.com* 地址。
    :::
  </TabItem>
  <TabItem value="response" label="响应">
    ``` http
    HTTP/1.1 201 Created
    Content-Type: application/json; charset=utf-8
    {
        "count": 1,
        "response": {
            "id": "aae1e103-bca5-9fa1-ba8c-42058b4abf28"
        },
        "status": 0,
        "statusCode": 201
    }
    ```
  </TabItem>
</Tabs>

您也可以在门户的**开发者工具**页面创建和管理 API 密钥：

1. 进入 DocSpace 设置。
2. 导航至**开发者工具**部分。
3. 在 **API 密钥**选项卡上，点击**创建新密钥**按钮以生成新密钥。

    ![API keys](/assets/images/docspace/api-keys.png#gh-light-mode-only)![API keys](/assets/images/docspace/api-keys.dark.png#gh-dark-mode-only)

5. 指定密钥名称。名称通常包含帮助用户快速了解密钥用途的信息，例如"家用电脑上的 LangFlow"。
6. 配置密钥访问权限。您可以创建只读密钥或授予对数据的完全访问权限。
7. 指定密钥有效期（最多 365 天），到期后密钥将自动停用。

    ![Create API key](/assets/images/docspace/create-api-key.png#gh-light-mode-only)![Create API key](/assets/images/docspace/create-api-key.dark.png#gh-dark-mode-only)

:::warning
请勿共享 API 密钥，也不要将其包含在任何客户端代码中（浏览器、应用）。API 密钥应从环境变量或服务器端的密钥管理服务中安全加载。
:::

## 如何使用 API 密钥

调用 API 时，以与 OAuth 访问令牌相同的方式在 Authorization 标头中传递 API 密钥。

API 密钥应通过 [HTTP Bearer 身份验证](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/)提供：

```sh
Authorization: Bearer ONLYOFFICE_API_KEY
```

以下示例展示了如何使用 API 密钥身份验证通过 cURL 请求获取当前用户配置文件：

```sh
curl https://yourportal.onlyoffice.com/api/2.0/people/@self \
  -H "Authorization: Bearer ONLYOFFICE_API_KEY" 
```

其中 `ONLYOFFICE_API_KEY` 是 API 密钥。

## 安全注意事项

出于安全考虑，请定期审查您创建的 API 密钥列表，并撤销不再使用的密钥。

请始终保密 API 密钥，并将其视为密码。由于 API 密钥在与 API 交互时代表您执行操作，请避免直接将其硬编码到程序中。

随着应用程序的扩展，请考虑使用专用的密钥管理服务，例如 [HashiCorp Vault](https://www.vaultproject.io/)、[AWS Secrets Manager](https://aws.amazon.com/ru/secrets-manager/) 或 [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault)。这些工具提供安全存储、加密、访问控制和审计功能。在容器化环境中，[Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/) 或 [Docker Secrets](https://docs.docker.com/engine/swarm/secrets/)（启用加密）等解决方案可进一步增强安全性。此外，请确保在运行时将密钥加载到内存中，且不要在日志或代码库中暴露密钥。

通过实施这些最佳实践，您可以确保 API 密钥的安全，并在应用程序扩展时保持其安全性。
