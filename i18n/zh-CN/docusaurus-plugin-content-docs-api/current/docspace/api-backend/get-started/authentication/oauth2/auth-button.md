---
sidebar_position: -4
---

# 授权按钮

1. 要在您的应用程序中预览授权按钮，请点击 ![More icon](/assets/images/docspace/more-icon.png#gh-light-mode-only)![More icon](/assets/images/docspace/more-icon.dark.png#gh-dark-mode-only) 打开上下文菜单，然后选择**授权按钮**。

   ![Auth button](/assets/images/docspace/auth-button.png#gh-light-mode-only)![Auth button](/assets/images/docspace/auth-button.dark.png#gh-dark-mode-only)

2. 在打开的窗口中，复制 HTML、CSS 和 JavaScript 代码块，并将其用于在您的网站中嵌入按钮。

    <img alt="Preview" src="/assets/images/docspace/oauth-auth-button.png#gh-light-mode-only" width="400px" /><img alt="Preview" src="/assets/images/docspace/oauth-auth-button.dark.png#gh-dark-mode-only" width="400px" />

3. 复制**授权链接**并将其分配给授权按钮。此链接包含以下参数：

## response_type

服务器在验证用户身份并将其重定向至 [redirect_uri](#redirect_uri) 后的响应类型。目前支持 *code* 值。

示例：code

## client_id

用于授权的客户端 ID。

示例：695d37b7-18aa-4033-91b4-09690178e99a

## redirect_uri

用户在身份验证成功或失败后将被重定向到的 URL。

示例：`https://redirect-url.com`

## scope

当前应用程序与 DocSpace 门户协同工作的所有权限范围。

要获取所需值，请使用以下代码：

``` ts
const scopesString = client.scopes.join(" ")
const encodingScopes = encodeURI(scopesString || "")
```

示例：files:write%20accounts:write%20files:read%20openid%20rooms:read%20accounts.self:read%20accounts:read%20accounts.self:write%20rooms:write

## state

用于解决 CSRF 漏洞问题的随机字符串。此参数与 *code* 值将被添加到 [redirect_uri](#redirect_uri)。此参数为可选项，但出于安全目的建议指定。

示例：OENBaHXhZStQ9eDVIq1NlHu6luruKqJtCp6RhgOFXAeAp4YWoUHtOkGYCPtW7l8T-qtZaoUnmvtHZuJbb3d-wgYtHOKhd-nqisoeiO91u-Z9fsnhtiO318JmihPflIpV

## code_challenge_method

用于编码代码验证器的方法。支持两个参数：**plain** 和 **S256**（推荐）。仅当未指定身份验证方法（none）且允许公共客户端（PKCE）时，才使用此参数。

示例：S256

## code_challenge

已编码的代码验证器。要获取它，请使用 **crypto-js** npm 包和以下代码：

``` ts
// Total of 44 characters (1 Bytes = 2 char) (standard states that: 43 chars <= //verifier <= 128 chars)
const NUM_OF_BYTES = 36

const codeVerifier = crypto.lib.WordArray.random(NUM_OF_BYTES).toString()
const codeVerifierHash = sha256(randomVerifier).toString(crypto.enc.Base64)
```

仅当未指定身份验证方法（none）且允许公共客户端（PKCE）时，才使用此参数。

示例：kNDpYrWzia4n6BoUewMVbnb5kQRIFgVdiaKwNGZ-_Wc

:::note
请注意，每次重新打开预览对话框时，代码验证器都会重新生成。
:::

您可以点击示例按钮，完整体验[授权流程](authorization-flow.md)。

要启动 OAuth 2.0 授权流程，您也可以向 [oauth2/authorize](../../../../../docspace/api-backend/usage-api/authorize-o-auth.api.mdx) 地址发送 GET 请求。

<img alt="Authorization flow" src="/assets/images/docspace/authorization-flow.png#gh-light-mode-only" width="300px" /><img alt="Authorization flow" src="/assets/images/docspace/authorization-flow.dark.png#gh-dark-mode-only" width="300px" />
