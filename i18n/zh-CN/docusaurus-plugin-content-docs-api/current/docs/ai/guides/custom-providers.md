---
sidebar_position: 3
---

# 添加自定义提供商

任何自定义提供商都可以添加到 AI 工具中。为此，请按照以下说明操作。

## 先决条件 {#prerequisites}

- **基础 URL**。发送 API 请求的网络地址，通常包含 API 版本：

  ```text
  https://ai-provider-base-url/v1
  ```

- **API 密钥**。服务提供商提供的唯一密钥，用于身份验证。

:::note
向自定义提供商发送的请求是跨域请求，因此提供商的端点必须允许 AI 工具的来源——桌面应用中为 `onlyoffice://plugin`，编辑器在浏览器中运行时则为您的文档服务器地址——并且必须以 2xx 状态码响应 CORS 预检 OPTIONS 请求。公有云 API 通常默认满足这些要求；对于本地服务器和位于代理后面的端点，请参见下方的 [CORS 要求](#cors-requirements)。
:::

## 步骤 1. 创建提供商文件 {#create-js-file}

:::tip
如果提供商与 OpenAI API 兼容，则无需提供商文件。添加模型时，选择内置的 **OpenAI Compatible** 提供商，然后输入基础 URL 和 API 密钥即可。如果您需要具有自定义名称、预设基础 URL 或固定模型列表的提供商，或者提供商使用其他 API，请创建提供商文件。
:::

自定义提供商是一个声明了名为 `Provider` 的类的 JavaScript 文件。最简单的入手方式是使用模板：添加模型时，点击 **Import Custom Provider** 旁的信息图标，然后点击提示中的 **Download template**。该模板是一个完整的 OpenAI 兼容 API 提供商，文件开头的注释说明了所有方法及其参数。

AI 工具在沙箱中运行该文件。无需 `import` 语句，文件也不需要返回任何内容。文件中已可直接使用以下对象：

| 名称                   | 描述                                                                                   |
|------------------------|----------------------------------------------------------------------------------------|
| `AbstractBaseProvider` | `Provider` 类的基类。它将传给构造函数的凭据保存在 `this.creds` 中。                    |
| `ProviderErrors`       | `checkProvider()` 返回的错误的工厂方法：`invalidKey()`、`emptyKey()`、`invalidUrl()`、`connectionFailed()`。 |
| `mapFetchError`        | 将 `fetch` 抛出的错误转换为 AI 工具显示的错误格式。                                     |

### Provider 类 {#provider-class}

`Provider` 类必须扩展 `AbstractBaseProvider` 并定义以下方法：

| 方法                                          | 必需 | 描述 |
|-----------------------------------------------|------|------|
| `sendMessage(args)`                           | 是   | 发送聊天请求并以流式方式返回响应。这是一个异步生成器：在响应到达时产出助手消息的快照（`{ role, content }`），最后产出 `{ isEnd: true, responseMessage }`。 |
| `sendMessageSync(args)`                       | 是   | 以非流式方式发送聊天请求。返回一个解析为响应文本的 Promise。 |
| `imageGeneration(args)`                       | 否   | 生成图像。返回一个解析为图像 data URL 或远程 URL 的 Promise。 |
| `static getName()`                            | 是   | 返回 **Provider** 列表中显示的提供商名称。 |
| `static getBaseUrl()`                         | 是   | 返回用户添加模型时默认填写的基础 URL。 |
| `static checkProvider({ baseUrl, apiKey })`   | 是   | 检查凭据。返回 `true` 或 `ProviderErrors` 中的某个错误。 |
| `static getProviderModels({ baseUrl, apiKey })` | 是 | 返回模型列表：`{ id, name, provider, capabilities }` 对象。 |
| `static isDesktopOnly()`                      | 否   | 如果提供商只能在桌面编辑器中使用（例如连接到 `localhost` 上的服务器），则返回 `true`。Web 编辑器会跳过此类提供商，且不显示错误。 |

这些方法接收以下参数：

| 参数                | 属性                                                           |
|---------------------|----------------------------------------------------------------|
| `sendMessage`       | `{ messages, model, systemPrompt, tools, withReasoning, signal }`（`tools`、`withReasoning` 和 `signal` 为可选） |
| `sendMessageSync`   | `{ messages, model, systemPrompt, signal }`（`signal` 为可选） |
| `imageGeneration`   | `{ model, prompt, width, height, signal }`（`width`、`height` 和 `signal` 为可选） |

在实例方法中请遵循以下规则：

- 通过 AI 工具在 `this.creds.fetch` 中传入的传输方式发送请求，未传入时回退到全局 `fetch`（参见下方示例中的 `fetchFor()`）。这样 AI 工具可以在需要时通过代理转发请求。
- 将 `args.signal` 传给每个请求，并在读取流时检查 `signal.aborted`。否则，**AI 聊天**中的 **Stop** 按钮将无法取消请求。

### 模型能力 {#model-capabilities}

`getProviderModels()` 返回的每个模型的 `capabilities` 属性定义了 AI 工具可以将该模型用于哪些用途。使用 `|` 组合各个值，例如，支持图像和工具的聊天模型为 `0x01 | 0x80 | 0x100`。

| 值      | 能力                        |
|---------|-----------------------------|
| `0x01`  | 聊天                        |
| `0x02`  | 图像生成                    |
| `0x04`  | 嵌入                        |
| `0x08`  | 音频（语音和转录）          |
| `0x80`  | 视觉（图像输入）            |
| `0x100` | 工具（函数调用）            |

### 示例 {#example}

此提供商以固定的名称、基础 URL 和模型列表连接到阿里云。它基于模板编写：`sendMessage()`、`sendMessageSync()` 和辅助函数与模板相同，而 `checkProvider()` 和 `getProviderModels()` 不会调用端点。因此，无效的 API 密钥会在第一次请求时报告，而不是在添加模型时报告。

```js
const PROVIDER_NAME = "Alibaba Cloud";
const PROVIDER_BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1";

const CAP_CHAT = 0x01;
const CAP_VISION = 0x80;
const CAP_TOOLS = 0x100;

const MODELS = [
  { id: "qwen-max", capabilities: CAP_CHAT | CAP_TOOLS },
  { id: "qwen-plus", capabilities: CAP_CHAT | CAP_TOOLS },
  { id: "qwen-turbo", capabilities: CAP_CHAT | CAP_TOOLS },
  { id: "qwen-vl-max", capabilities: CAP_CHAT | CAP_VISION },
];

// Host transport when set, e.g. a proxy that inserts the real API key or bypasses CORS.
const fetchFor = (creds) => creds?.fetch ?? fetch;

class Provider extends AbstractBaseProvider {
  async *sendMessage({ messages, model, systemPrompt, tools, signal }) {
    const body = {
      model,
      stream: true,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map(toOpenAIMessage),
      ],
    };
    if (tools && tools.length) {
      body.tools = tools.map(toOpenAITool);
    }

    let res;
    try {
      res = await fetchFor(this.creds)(`${this.creds.baseUrl}/chat/completions`, {
        method: "POST",
        headers: this.headers(),
        body: JSON.stringify(body),
        signal,
      });
    } catch (err) {
      throw mapFetchError(err, !!this.creds.apiKey);
    }
    if (!res.ok) {
      throw mapFetchError(
        new Error(await res.text().catch(() => res.statusText)),
        !!this.creds.apiKey
      );
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    const acc = {
      role: "assistant",
      content: [{ type: "text", text: "" }],
    };
    const toolCallsByIndex = new Map();

    while (true) {
      if (signal?.aborted) break;
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let nl;
      while ((nl = buffer.indexOf("\n")) >= 0) {
        const line = buffer.slice(0, nl).trim();
        buffer = buffer.slice(nl + 1);
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (payload === "[DONE]") continue;

        let chunk;
        try {
          chunk = JSON.parse(payload);
        } catch {
          continue;
        }
        const delta = chunk.choices?.[0]?.delta;
        if (!delta) continue;

        if (typeof delta.content === "string" && delta.content.length) {
          acc.content[0].text += delta.content;
          yield cloneSnapshot(acc, toolCallsByIndex);
        }
        if (Array.isArray(delta.tool_calls)) {
          for (const tc of delta.tool_calls) {
            const idx = tc.index ?? 0;
            const slot = toolCallsByIndex.get(idx) ?? {
              id: "",
              name: "",
              args: "",
            };
            if (tc.id) slot.id = tc.id;
            if (tc.function?.name) slot.name += tc.function.name;
            if (tc.function?.arguments) slot.args += tc.function.arguments;
            toolCallsByIndex.set(idx, slot);
          }
          yield cloneSnapshot(acc, toolCallsByIndex);
        }
      }
    }

    yield {
      isEnd: true,
      responseMessage: cloneSnapshot(acc, toolCallsByIndex),
    };
  }

  async sendMessageSync({ messages, model, systemPrompt, signal }) {
    let res;
    try {
      res = await fetchFor(this.creds)(`${this.creds.baseUrl}/chat/completions`, {
        method: "POST",
        headers: this.headers(),
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map(toOpenAIMessage),
          ],
        }),
        signal,
      });
    } catch (err) {
      throw mapFetchError(err, !!this.creds.apiKey);
    }
    if (!res.ok) {
      throw mapFetchError(
        new Error(await res.text().catch(() => res.statusText)),
        !!this.creds.apiKey
      );
    }
    const json = await res.json();
    return json.choices?.[0]?.message?.content ?? "";
  }

  headers() {
    const h = { "Content-Type": "application/json" };
    if (this.creds.apiKey) h.Authorization = `Bearer ${this.creds.apiKey}`;
    return h;
  }

  static getName() {
    return PROVIDER_NAME;
  }
  static getBaseUrl() {
    return PROVIDER_BASE_URL;
  }

  static async checkProvider({ baseUrl, apiKey }) {
    if (!baseUrl) return ProviderErrors.invalidUrl();
    if (!apiKey) return ProviderErrors.emptyKey();
    return true;
  }

  static async getProviderModels() {
    return MODELS.map((m) => ({
      id: m.id,
      name: m.id,
      provider: PROVIDER_NAME,
      capabilities: m.capabilities,
    }));
  }
}

// Convert a chat message to an OpenAI chat message.
function toOpenAIMessage(msg) {
  const role = msg.role === "assistant" ? "assistant" : "user";
  const content = [];
  let text = "";
  if (typeof msg.content === "string") {
    text = msg.content;
  } else if (Array.isArray(msg.content)) {
    for (const part of msg.content) {
      if (part?.type === "text" && typeof part.text === "string") {
        text += part.text;
      } else if (part?.type === "image" && (part.image || part.url)) {
        content.push({
          type: "image_url",
          image_url: { url: part.image || part.url },
        });
      }
    }
  }
  if (text) content.unshift({ type: "text", text });
  return {
    role,
    content:
      content.length === 1 && content[0].type === "text" ? text : content,
  };
}

// Convert a tool descriptor to the OpenAI tool schema.
function toOpenAITool(item) {
  return {
    type: "function",
    function: {
      name: item.name,
      description: item.description ?? "",
      parameters: item.inputSchema ?? { type: "object", properties: {} },
    },
  };
}

// Snapshot the accumulated assistant message (text + tool calls).
function cloneSnapshot(acc, toolCallsByIndex) {
  const content = acc.content.map((p) => ({ ...p }));
  if (toolCallsByIndex.size > 0) {
    const calls = [...toolCallsByIndex.values()].map((c) => ({
      id: c.id,
      name: c.name,
      args: c.args,
    }));
    content.push({ type: "tool-call", calls });
  }
  return { role: acc.role, content };
}
```


将文件保存为 `.js` 扩展名。管理员可以在管理面板中导入同一文件，使该提供商对所有用户可用。请参阅[为所有用户配置 AI 提供商](server-ai-providers.md)。

## 步骤 2. 在 AI 工具中配置提供商 {#step-2-configure-the-provider-in-ai-tools}

要添加自定义提供商：

1. 打开 **AI 工具**选项卡并点击**设置**，将打开 **AI Settings** 对话框。

    ![添加模型](/assets/images/plugins/add-model.png#gh-light-mode-only)![添加模型](/assets/images/plugins/add-model.dark.png#gh-dark-mode-only)

2. 点击 **Add Model**，在 **Connect new AI Model** 表单中点击 **Import Custom Provider**，然后在系统文件选择器中选择提供商 JavaScript 文件。

    :::note
    **Import Custom Provider** 旁的信息图标会打开一个包含 **Download template** 链接的提示。该模板的说明请参阅[步骤 1](#create-js-file)。下方截图以 Ollama 为例。
    :::

    <div className="side-by-side-images">
        <div>
            <img alt="导入自定义提供商" src="/assets/images/plugins/import-custom-provider.png#gh-light-mode-only" />
            <img alt="导入自定义提供商" src="/assets/images/plugins/import-custom-provider.dark.png#gh-dark-mode-only" />
        </div>
        <div>
            <img alt="导入 Ollama" src="/assets/images/plugins/import-ollama.png#gh-light-mode-only" />
            <img alt="导入 Ollama" src="/assets/images/plugins/import-ollama.dark.png#gh-dark-mode-only" />
        </div>
    </div>

3. 导入后，该提供商会出现在 **Provider** 列表中。表单会根据导入的文件填写 **Provider** 和 **Base URL**，然后从端点加载 **Model** 并填写 **Profile name**。输入 **API key**，然后点击 **Add Model**。该模型将显示在 **AI Models** 选项卡的列表中。

    :::note
    导入后 **API key** 保持为空。请输入提供商提供的密钥。对于 Ollama 等本地服务器，任意值均可：服务器不会验证该密钥，但在填写该字段之前 **Add Model** 保持禁用状态。如果 **Model** 列表一直为空，说明端点阻止了请求。请参阅 [CORS 要求](#cors-requirements)或[配置 Ollama 的 CORS](./configuring-ollama-with-cors.md)。
    :::

4. 在 **Model Assignment** 选项卡上，将自定义提供商的模型设为 **Default model** 或分配给特定任务。

    ![Model Assignment](/assets/images/plugins/model-assignment.png#gh-light-mode-only)![Model Assignment](/assets/images/plugins/model-assignment.dark.png#gh-dark-mode-only)

AI 工具现已可以使用该自定义提供商。

### 管理自定义提供商 {#managing-custom-providers}

如需编辑或删除已连接的模型，请在 **AI Models** 选项卡上打开其 **...** 菜单并选择 **Edit** 或 **Delete**。

![编辑自定义提供商](/assets/images/plugins/custom-provider-edit.png#gh-light-mode-only)![编辑自定义提供商](/assets/images/plugins/custom-provider-edit.dark.png#gh-dark-mode-only)

如需添加或删除提供商文件：

1. 在 **AI Models** 选项卡上点击 **Custom Providers**。

    ![自定义提供商](/assets/images/plugins/add-custom-providers.png#gh-light-mode-only)![自定义提供商](/assets/images/plugins/add-custom-providers.dark.png#gh-dark-mode-only)

2. 在 **Custom providers** 对话框中，点击 **Add** 上传其他提供商文件，或者选择一个提供商并点击 **Delete** 将其删除。然后点击 **Close**。

    ![自定义提供商对话框](/assets/images/plugins/add-custom-providers-dialog.png#gh-light-mode-only)![自定义提供商对话框](/assets/images/plugins/add-custom-providers-dialog.dark.png#gh-dark-mode-only)

## CORS 要求 {#cors-requirements}

AI 工具运行在 Web 环境中，因此每个发往自定义提供商的请求都是跨域请求，而浏览器能否读取响应，则由提供商的端点决定。如果端点不允许 AI 工具访问，提供商就无法使用：模型列表将始终为空，浏览器控制台会报告 `Access to fetch at '.../v1/models' from origin 'onlyoffice://plugin' has been blocked by CORS policy: ...`。冒号之后的内容会指出具体原因——最常见的是缺少 `Access-Control-Allow-Origin` 头。您是否需要进行配置，取决于所使用的端点类型。

### 端点必须返回的内容 {#what-the-endpoint-must-return}

在 AI 工具调用的每一个 API 路径上——不仅仅是 `/v1/models`——端点都必须以下列响应头回应预检请求：

```http
Access-Control-Allow-Origin: onlyoffice://plugin
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Allow-Methods: GET, POST, OPTIONS
```

实际响应也需要包含 `Access-Control-Allow-Origin`。而 `Access-Control-Allow-Headers` 和 `Access-Control-Allow-Methods` 只会从预检响应中读取。

在桌面应用中，AI 工具运行在 `onlyoffice://` 协议上，ONLYOFFICE 将其注册为标准、安全且启用了 CORS 的协议，因此来自 AI 工具的请求会携带 `Origin` 头，并遵循与普通网页相同的 CORS 规则。AI 工具由 `onlyoffice://plugin/` 提供，因此需要允许的来源就是 `onlyoffice://plugin`。当编辑器在浏览器中运行时，来源则是您的**文档服务器地址**——请在下方所有示例中用它替换 `onlyoffice://plugin`。`Access-Control-Allow-Origin` 只能包含一个值，因此若要同时支持这两种情况，请返回 `*`，或者回显传入请求的来源。如果选择回显来源，请同时添加 `Vary: Origin`，以免缓存把某个来源的响应返回给另一个来源。回显任意来源会使该端点可被任何网站调用，因此对于可公开访问的端点，请改为将传入的来源与允许列表进行匹配——参见 Ollama 指南中[基本 Nginx 配置下的安全提示](./configuring-ollama-with-cors.md#basic-nginx-configuration)。

AI 工具始终发送 `Content-Type: application/json`，并在提供商配置了 API 密钥时添加 `Authorization: Bearer <key>`。`application/json` 不属于 CORS 安全列表中的值，因此浏览器会在实际请求之前发送预检 OPTIONS 请求。端点必须以 **200** 或 **204** 响应该预检请求，且**绝不能是重定向**。

提供商文件不决定其请求是否经由代理转发。它的实例方法通过 AI 工具在 `this.creds.fetch` 中传入的传输方式发送请求（参见[示例](#example)中的 `fetchFor()`），因此 AI 工具可以在需要时通过代理转发这些请求。静态方法 `checkProvider()` 和 `getProviderModels()` 只接收基础 URL 和 API 密钥，并直接调用端点，因此当它们从端点加载模型列表时，端点始终需要返回上述响应头。

### 公有云 API {#public-cloud-apis}

OpenAI、OpenRouter、Mistral 等服务默认会发送 CORS 头，因此无需任何配置。部分 API 需要额外的选择加入（opt-in）请求头才会响应浏览器请求，因此如果模型列表无法加载，请查阅相应提供商自己的文档。

### 本地 AI 服务器 {#local-ai-servers}

Ollama、LM Studio 和 Open WebUI 只接受显式列出的来源，因此需要将 AI 工具的来源添加到该列表中：Ollama 中为 `OLLAMA_ORIGINS=http://*,https://*,onlyoffice://*`，Open WebUI 中为 `CORS_ALLOW_ORIGIN`，LM Studio 则可在服务器设置中的 CORS 开关处添加。`OLLAMA_ORIGINS` 支持 `*` 通配符，因此 `onlyoffice://*` 即可覆盖 AI 工具的来源；而严格的允许列表——例如 nginx 的 `map`、Traefik 的 `accessControlAllowOriginList`——则需要填写精确值 `onlyoffice://plugin`。llama.cpp 和 vLLM 默认允许所有来源，无需任何配置；在 vLLM 中可以使用 `--allowed-origins` 缩小允许的来源范围。关于 Ollama 的完整操作指南——在各操作系统上设置该变量、重启服务、验证响应头，以及通过 TLS 终止的 nginx 代理对外暴露服务——请参见[配置 Ollama 的 CORS](./configuring-ollama-with-cors.md)。

### 反向代理配置 {#reverse-proxy-configuration}

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

### 验证端点 {#verifying-the-endpoint}

在将端点添加为提供商之前，请先对其进行验证。

检查预检请求：

```bash
curl -i -X OPTIONS 'https://<base-url>/models' \
  -H 'Origin: onlyoffice://plugin' \
  -H 'Access-Control-Request-Method: GET' \
  -H 'Access-Control-Request-Headers: authorization,content-type'
```

然后检查实际请求：

```bash
curl -i 'https://<base-url>/models' \
  -H 'Origin: onlyoffice://plugin' \
  -H 'Authorization: Bearer <your-api-key>'
```

第一个响应必须是 **200** 或 **204**，并且必须包含 `Access-Control-Allow-Origin`、`Access-Control-Allow-Methods`，以及列出了 `authorization` 和 `content-type` 的 `Access-Control-Allow-Headers`。第二个响应必须是 **200**，并包含 `Access-Control-Allow-Origin`。如果两者都满足，但模型列表仍然无法加载，请查看控制台错误中提示的来源：它可能与您所允许的来源不同。
