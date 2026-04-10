---
sidebar_position: -2
---

# 授权流程

当用户访问授权链接时，可能出现四种情形。

## 情形 1. 用户授权

如果用户尚未在门户上完成授权，则会打开授权表单。用户必须输入其电子邮件和密码，然后点击**登录**按钮。授权成功后，用户将被重定向至情形 2 和情形 3 所描述的页面。

<img alt="Authorization flow" src="/assets/images/docspace/authorization-flow.png#gh-light-mode-only" width="300px" /><img alt="Authorization flow" src="/assets/images/docspace/authorization-flow.dark.png#gh-dark-mode-only" width="300px" />

## 情形 2. 门户选择

如果用户拥有多个使用相同个人信息注册的门户，用户将被重定向至门户选择页面。

<img alt="Choose portal" src="/assets/images/docspace/choose-portal.png" width="400px" />

## 情形 3. 同意页面

如果用户已在门户上完成授权，用户将被重定向至同意页面，该页面将列出所有应用程序权限，并显示隐私政策和服务条款的 URL，同时提供更改用户配置文件的选项。

点击**允许**或**拒绝**完成授权流程。

<img alt="Consent page" src="/assets/images/docspace/consent-page.png#gh-light-mode-only" width="400px" /><img alt="Consent page" src="/assets/images/docspace/consent-page.dark.png#gh-dark-mode-only" width="400px" />

## 情形 4. 错误页面

如果授权链接包含不存在的 [client_id](auth-button.md#client_id) 和 [redirect_uri](auth-button.md#redirect_uri)，用户将被重定向至 DocSpace 错误页面。

<img alt="Error page" src="/assets/images/docspace/error-page.png#gh-light-mode-only" width="400px" /><img alt="Error page" src="/assets/images/docspace/error-page.dark.png#gh-dark-mode-only" width="400px" />

## 工作原理

1. 当用户在同意页面点击**允许**按钮时，用户将被重定向至 [redirect_uri](#redirect_uri)，其中 code 字段将被添加到搜索参数中。

   :::note
   如果用户在同意页面点击**拒绝**按钮，用户将被重定向至带有错误信息的 [redirect_uri](#redirect_uri)，且无法获取 JWT。
   :::

   要发送同意请求，您也可以向 [oauth2/authorize](../../../../../docspace/api-backend/usage-api/submit-consent.api.mdx) 地址发送 POST 请求。

2. 应用程序将用户代码交换为访问令牌和刷新令牌，将其保存到存储中，并使用这些令牌访问 DocSpace API。

3. 应用程序发送 [POST 请求](../../../../../docspace/api-backend/usage-api/exchange-token.api.mdx)：

``` ini
{{docspace_address}}/oauth2/token
```

请求正文中必须指定的参数取决于客户端类型。

### 适用于 client_secret_post

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数          | 类型   | 示例                                                                                                                               | 描述                                                                                    |
|---------------|--------|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| client_id     | string | `695d37b7-18aa-4033-91b4-09690178e99a`                                                                                             | 用于授权的客户端 ID。                                                                   |
| client_secret | string | `49487362-7d4a-471f-bbf3-c04e2e1c541f`                                                                                             | 用于授权的客户端密钥。                                                                  |
| grant_type    | string | `authorization_code`                                                                                                               | OAuth 授权类型。                                                                        |
| code          | string | `OENBaHXhZStQ9eDVIq-1NlHu6luruKqJtCp6Rhg-OFXAeAp4YWoUHtOkGYCPtW7l8T-qtZaoUnmvtHuJbb3d-wgYtHOKhd-nqisoeiO91u-Z9fsnhtiO318mihPflIpV` | 发送给客户端的临时授权码，用于交换令牌。                                               |
| redirect_uri  | string | `https://redirect-url.com`                                                                                                         | 用户在身份验证成功或失败后将被重定向到的 URL。                                          |

```mdx-code-block
</APITable>
```

### 适用于使用 PKCE 的客户端

对于使用 PKCE 的客户端，参数与 **client_secret_post** 相同，但 [client_secret](#client_secret) 须替换为 **code_verifier**。

```mdx-code-block
<APITable>
```

| 参数          | 类型   | 示例                                                                       | 描述                                                                        |
|---------------|--------|----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| code_verifier | string | `a50883696b67d1e91-e52be26d8b78ae902b354-a4b3a8965affbe30f-c8056c89afa066` | 代码验证器，一个长度在 43 到 128 个字符之间的加密随机字符串。              |

```mdx-code-block
</APITable>
```
