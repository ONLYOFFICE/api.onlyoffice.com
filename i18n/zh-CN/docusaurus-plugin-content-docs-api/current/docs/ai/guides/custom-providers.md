---
sidebar_position: -3
---

# 添加自定义提供商

任何自定义提供商都可以添加到 AI 插件中。为此，请按照以下说明操作。

## 先决条件 {#prerequisites}

- **基础 URL**。发送 API 请求的网络地址。在某些情况下，基础 URL 可能包含指定所使用模型的端点：

  ```text
  https://ai-provider-base-url
  ```

- **模型版本**。所访问模型的版本。有时，模型版本会包含在基础 URL 中：

  ```text
  https://ai-provider-base-url/v1
  ```

  在这个示例中，模型版本是 **v1**。

- **API 密钥**。服务提供商提供的唯一密钥，用于身份验证。

:::note
向自定义提供商发送的请求是跨域请求，因此提供商的端点必须允许插件的来源——桌面应用中为 `onlyoffice://plugin`，编辑器在浏览器中运行时则为您的文档服务器地址——并且必须以 2xx 状态码响应 CORS 预检 OPTIONS 请求。公有云 API 通常默认满足这些要求；对于本地服务器和位于代理后面的端点，请参见下方的 [CORS 要求](#cors-requirements)。
:::

## 步骤 1. 创建外部 JavaScript 文件 {#create-js-file}

要添加自定义提供商并在 AI 插件的可用提供商列表中显示它，请创建并上传一个外部 JS 文件。此类文件的示例可在[此处](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/engine/providers/internal/openai.js)找到。

从此文件解析的自定义提供商是 [`Provider`](https://github.com/ONLYOFFICE/onlyoffice.github.io/blob/master/sdkjs-plugins/content/ai/scripts/engine/providers/provider.js) 类的实例，该类扩展了 `AI.Provider`。此类管理插件中所有可用的提供商。

#### Provider 类

```ts
class Provider {
    constructor(name, url, key, addon) {
        this.name  = name  || "";
        this.url   = url   || "";
        this.key   = key   || "";
        this.addon = addon || "";

        this.models = [];
        this.modelsUI = [];
    }
}
```

#### 参数

| 名称   | 类型   | 示例                                                | 描述                                                                 |
|--------|--------|-----------------------------------------------------|----------------------------------------------------------------------|
| name   | string | `"阿里云"`                                          | 将在插件中显示的提供商名称。                                         |
| url    | string | `"https://dashscope.aliyuncs.com/compatible-mode"` | 发送 API 请求的网络地址。                                            |
| key    | string | `"yourAPIKey"`                                     | 提供商颁发的 API 密钥。这是一个可选字段。有些提供商可能需要密钥才能访问。 |
| addon  | string | `"v1"`                                             | URL 附加内容（例如，版本标签）。                                      |

#### 示例

```ts
"use strict";

class Provider extends AI.Provider {

    constructor() {
        super("阿里云", "https://dashscope.aliyuncs.com/compatible-mode", "yourAPIKey", "v1");
    }
}
```

## 步骤 2. 在 AI 插件中配置提供商

要将自定义提供商添加到 AI 插件：

1. 打开 ONLYOFFICE 编辑器顶部工具栏中的 **AI** 选项卡。
2. 选择 **设置**。
3. 在 **AI 配置** 窗口中，选择 **编辑 AI 模型**。
4. 在 **AI 模型列表** 窗口中，点击 ![编辑图标](/assets/images/plugins/edit.svg#gh-light-mode-only)![编辑图标](/assets/images/plugins/edit.dark.svg#gh-dark-mode-only) 来编辑模型。
5. 在 **编辑 AI 模型** 窗口中，点击 **自定义提供商**。

    ![自定义提供商](/assets/images/plugins/custom-providers.png#gh-light-mode-only)![自定义提供商](/assets/images/plugins/custom-providers.dark.png#gh-dark-mode-only)

6. 点击 ![加号图标](/assets/images/plugins/plus.svg#gh-light-mode-only)![加号图标](/assets/images/plugins/plus.dark.svg#gh-dark-mode-only) 并上传包含您的自定义提供商设置的 JavaScript 文件。

    ![添加自定义提供商](/assets/images/plugins/add-custom-provider.png#gh-light-mode-only)![添加自定义提供商](/assets/images/plugins/add-custom-provider.dark.png#gh-dark-mode-only)

7. 点击 **返回** 退出 **自定义提供商** 窗口。
8. 在 **编辑 AI 模型** 窗口的列表中选择您的自定义提供商，然后点击 **确定**。
9. 点击 **返回** 退出 **AI 模型列表** 窗口。
10. 在 **AI 配置** 窗口中为特定任务设置自定义提供商模型。

AI 插件已完全配置好，可处理各种任务。

## CORS 要求 {#cors-requirements}

AI 插件运行在 Web 环境中，因此每个发往自定义提供商的请求都是跨域请求，而浏览器能否读取响应，则由提供商的端点决定。如果端点不允许该插件访问，提供商就无法使用：模型列表将始终为空，浏览器控制台会报告 `Access to fetch at '.../v1/models' from origin 'onlyoffice://plugin' has been blocked by CORS policy: ...`。冒号之后的内容会指出具体原因——最常见的是缺少 `Access-Control-Allow-Origin` 头。您是否需要进行配置，取决于所使用的端点类型。

### 端点必须返回的内容

在插件调用的每一个 API 路径上——不仅仅是 `/v1/models`——端点都必须以下列响应头回应预检请求：

```http
Access-Control-Allow-Origin: onlyoffice://plugin
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Allow-Methods: GET, POST, OPTIONS
```

实际响应也需要包含 `Access-Control-Allow-Origin`。而 `Access-Control-Allow-Headers` 和 `Access-Control-Allow-Methods` 只会从预检响应中读取。

在桌面应用中，插件运行在 `onlyoffice://` 协议上，ONLYOFFICE 将其注册为标准、安全且启用了 CORS 的协议，因此来自插件的请求会携带 `Origin` 头，并遵循与普通网页相同的 CORS 规则。插件页面由 `onlyoffice://plugin/` 提供，因此需要允许的来源就是 `onlyoffice://plugin`。当编辑器在浏览器中运行时，来源则是您的**文档服务器地址**——请在下方所有示例中用它替换 `onlyoffice://plugin`。`Access-Control-Allow-Origin` 只能包含一个值，因此若要同时支持这两种情况，请返回 `*`，或者回显传入请求的来源。如果选择回显来源，请同时添加 `Vary: Origin`，以免缓存把某个来源的响应返回给另一个来源。回显任意来源会使该端点可被任何网站调用，因此对于可公开访问的端点，请改为将传入的来源与允许列表进行匹配——参见 Ollama 指南中[基本 Nginx 配置下的安全提示](./configuring-ollama-with-cors.md#basic-nginx-configuration)。

插件始终发送 `Content-Type: application/json`，并在提供商配置了 API 密钥时添加 `Authorization: Bearer <key>`。`application/json` 不属于 CORS 安全列表中的值，因此浏览器会在实际请求之前发送预检 OPTIONS 请求。端点必须以 **200** 或 **204** 响应该预检请求，且**绝不能是重定向**。

提供商类可以重写 `isUseProxy()`，让请求经由代理服务转发而不是直接调用端点，从而绕过 CORS。这只适用于非 GET 请求，而获取模型列表使用的是 GET 请求，因此端点始终需要返回上述响应头。

### 公有云 API

OpenAI、OpenRouter、Mistral 等服务默认会发送 CORS 头，因此无需任何配置。部分 API 需要额外的选择加入（opt-in）请求头才会响应浏览器请求，因此如果模型列表无法加载，请查阅相应提供商自己的文档。

### 本地 AI 服务器

Ollama、LM Studio 和 Open WebUI 只接受显式列出的来源，因此需要将插件的来源添加到该列表中：Ollama 中为 `OLLAMA_ORIGINS=http://*,https://*,onlyoffice://*`，Open WebUI 中为 `CORS_ALLOW_ORIGIN`，LM Studio 则可在服务器设置中的 CORS 开关处添加。`OLLAMA_ORIGINS` 支持 `*` 通配符，因此 `onlyoffice://*` 即可覆盖插件的来源；而严格的允许列表——例如 nginx 的 `map`、Traefik 的 `accessControlAllowOriginList`——则需要填写精确值 `onlyoffice://plugin`。llama.cpp 和 vLLM 默认允许所有来源，无需任何配置；在 vLLM 中可以使用 `--allowed-origins` 缩小允许的来源范围。关于 Ollama 的完整操作指南——在各操作系统上设置该变量、重启服务、验证响应头，以及通过 TLS 终止的 nginx 代理对外暴露服务——请参见[配置 Ollama 的 CORS](./configuring-ollama-with-cors.md)。

### 反向代理配置

对于通过自己的反向代理（nginx、Traefik、Caddy、API 网关等）发布的端点，仅配置应用程序本身并不总是足够的：代理还必须放行预检请求，并确保相关头信息能够透传下去。请只在应用程序或代理中二选一配置 CORS，**切勿同时在两处配置**——重复的 `Access-Control-Allow-Origin` 头会被浏览器拒绝。

#### nginx

直接在代理层处理预检请求：

```nginx
location /v1/ {
    if ($request_method = OPTIONS) {
        add_header Access-Control-Allow-Origin "onlyoffice://plugin" always;
        add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Authorization, Content-Type" always;
        add_header Access-Control-Max-Age "86400" always;
        return 204;
    }
    add_header Access-Control-Allow-Origin "onlyoffice://plugin" always;
    proxy_pass http://your-backend;
}
```

#### Traefik

中间件与路由标签：

```text
traefik.http.middlewares.ai-cors.headers.accessControlAllowOriginList=onlyoffice://plugin
traefik.http.middlewares.ai-cors.headers.accessControlAllowMethods=GET,POST,OPTIONS
traefik.http.middlewares.ai-cors.headers.accessControlAllowHeaders=Authorization,Content-Type
traefik.http.middlewares.ai-cors.headers.accessControlMaxAge=86400
traefik.http.middlewares.ai-cors.headers.addVaryHeader=true
traefik.http.routers.<router-name>.middlewares=ai-cors@docker
```

前面几行标签只是声明中间件，最后一行才是把中间件关联到路由上——如果缺少这一行，中间件永远不会生效，也就不会添加任何 CORS 头。`@docker` 后缀指明该中间件所在的 Traefik 配置提供方（provider）——如果您通过文件而不是 Docker 标签声明中间件，请改用 `@file`。

如果入口点配置了 HTTP 到 HTTPS 的重定向，或者在此中间件之前还评估了另一个重定向中间件，预检请求就会收到 308 响应且不带任何 CORS 头——此时请将基础 URL 改用 HTTPS 地址。

### 验证端点

在将端点添加为提供商之前，请先对其进行验证。

检查预检请求：

```bash
curl -i -X OPTIONS 'https://<base-url>/v1/models' \
  -H 'Origin: onlyoffice://plugin' \
  -H 'Access-Control-Request-Method: GET' \
  -H 'Access-Control-Request-Headers: authorization,content-type'
```

然后检查实际请求：

```bash
curl -i 'https://<base-url>/v1/models' \
  -H 'Origin: onlyoffice://plugin' \
  -H 'Authorization: Bearer <your-api-key>'
```

第一个响应必须是 **200** 或 **204**，并且必须包含 `Access-Control-Allow-Origin`、`Access-Control-Allow-Methods`，以及列出了 `authorization` 和 `content-type` 的 `Access-Control-Allow-Headers`。第二个响应必须是 **200**，并包含 `Access-Control-Allow-Origin`。如果两者都满足，但模型列表仍然无法加载，请查看控制台错误中提示的来源：它可能与您所允许的来源不同。
