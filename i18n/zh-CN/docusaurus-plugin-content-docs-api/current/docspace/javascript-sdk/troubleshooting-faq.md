---
slug: /docspace/javascript-sdk/get-started/troubleshooting-faq
description: 集成 DocSpace 嵌入式 SDK 时常见错误及修复方法、调试技巧以及已知限制。
tags: ["DocSpace", "Embed SDK", "Troubleshooting", "FAQ"]
---

# 故障排除与常见问题 {#troubleshooting--faq}

本页汇总了集成方最常遇到的错误及修复方法、当框架行为异常时的调试技巧，以及当前 SDK 的已知限制。若要深入了解身份验证、CSP 与 Cookie 之间的关系，请参阅[身份验证与安全](./get-started/authentication-security.md)。

## 常见错误及修复方法 {#common-errors-and-fixes}

### "The current domain is not set in the Content Security Policy (CSP) settings." {#the-current-domain-is-not-set-in-the-content-security-policy-csp-settings}

当嵌入域未包含在 DocSpace 的 CSP 允许列表中时，每个初始化方法都会通过 `onAppError` 报告此错误，并在框架内显示该错误。请参阅[内容安全策略 (CSP)](./get-started/authentication-security.md#content-security-policy-csp)，了解如何检查和更新允许列表。

:::note
即使初始化失败与 CSP 毫无关系，框架内也会显示同一个 CSP 错误页面。在认定是 CSP 配置错误之前，请先查看 `onAppError` 的数据和浏览器控制台中的真实原因。参见下方的[已知限制](#known-limitations)。
:::

### 跨域 / "domain not allowed" 错误 {#cross-origin--domain-not-allowed-errors}

SDK 并不依赖传统的 CORS 响应头，而是要求将嵌入来源显式加入 DocSpace 的白名单。如果来自您页面的请求被拒绝，请参阅[注册允许的嵌入来源](./get-started/authentication-security.md#registering-allowed-embed-origins)。SDK 只比较主机和端口（不区分大小写），因此请以"主机和端口"的形式添加条目，不要包含协议或路径。带路径的条目（例如 `https://example.com/app`）永远不会匹配，子域也不会被自动匹配。

### 空白 iframe（框架已加载但无任何内容） {#blank-iframe-frame-loads-but-shows-nothing}

请按以下顺序排查：

1. 在调用 `initManager`/`initEditor` **之前**，`frameId` 所引用的容器元素已存在于 DOM 中。如果不存在具有该 ID 的元素，初始化方法将返回 `null`，且不会插入任何内容。
2. 已设置 `src`，并且它指向一个可访问且通过 HTTPS 提供服务的 DocSpace 实例。当 `src` 为空或不是有效的 URL 时，SDK 会在控制台中输出 `SDK Warning: src is empty` 或 `src "..." is not a valid URL`。混合内容（HTTPS 页面加载 HTTP 的 `src`）会被浏览器静默拦截。参见[前提条件](./get-started/get-started.md#prerequisites)。
3. 该来源已按照[注册允许的嵌入来源](./get-started/authentication-security.md#registering-allowed-embed-origins)的说明加入白名单。
4. 查看浏览器控制台以及 `onAppError` 事件（参见[调试技巧](#debugging-tips)）中的实际错误信息——空白框架通常是初始化错误被吞掉了，而不是渲染问题。

### 身份验证循环（用户被反复要求登录） {#authentication-loops-user-is-repeatedly-asked-to-sign-in}

这几乎总是跨域 Cookie 问题：浏览器没有随嵌入请求一起发送 DocSpace 会话 Cookie。您无需手动配置 Cookie 属性。当同时满足以下两个条件时，DocSpace 会自动为身份验证 Cookie 设置 `Secure` 和 `SameSite=None`，并添加 `Partitioned` 属性：

- 请求通过 HTTPS 发送；
- CSP 允许列表不为空。

否则，Cookie 会回退为 `SameSite=Strict`，嵌入的框架将丢失会话。因此，请确保 DocSpace 服务器和嵌入页面均通过 HTTPS 提供服务，并且嵌入来源已加入允许列表。可以在 DocSpace 服务器上通过 `web:samesite` 配置项覆盖该模式，但通常不需要这样做。

得益于 `Partitioned` 属性，支持 [CHIPS](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) 的浏览器（Chrome、Firefox 和 Safari 18.4+）即使在屏蔽第三方 Cookie 时，也会将会话 Cookie 保存在嵌入站点下的独立存储中。如果在不支持 CHIPS 的浏览器或严格隐私模式下循环仍然存在，请改用[公共房间的基于令牌的身份验证](./get-started/authentication-security.md#token-based-auth-for-public-rooms)。

### "Message bus is not connected with frame" {#message-bus-is-not-connected-with-frame}

这表示某个 SDK 方法是在其对应框架尚未就绪，或已经被销毁之后被调用的。请在调用实例方法之前等待 `onAppReady` 或 `onContentReady` 事件，并且在调用 `destroyFrame()` 之后不要再对该实例调用任何方法。

`setConfig()` 是唯一可以在框架连接之前调用的方法。另请注意，使用相同的 `frameId` 再次调用初始化方法会重新加载框架，并以 `Frame reloaded` 拒绝所有待处理的方法调用。

### 方法返回了错误，但 Promise 没有被拒绝 {#a-method-returned-an-error-but-the-promise-didnt-reject}

实例方法只会因 SDK 端的错误而拒绝，例如超时、框架已断开连接，或当前模式不支持该方法。当 DocSpace API 调用失败时，门户会将错误作为普通的方法结果返回，因此 Promise 会正常解析：

- 对于 HTTP 错误，结果是一个包含 `message`、`name`、`code` 和 `status` 字段的对象；
- 对于某些错误，结果是一个空对象 `{}`；
- 对于当前模式不支持的方法，结果是字符串 `"Wrong method for this mode"`。

这意味着 `try`/`catch` 只能捕获 SDK 错误，而检查 `result.status` 只能捕获 HTTP 错误。要可靠地判断是否成功，请检查成功结果中必定存在的字段，例如 `id`：

```js
const room = await instance.createRoom("Project room", 5);
if (!room?.id) {
  console.error("Failed to create the room", room);
}
```

## SDK 错误代码 {#sdk-error-codes}

当实例方法被拒绝时，错误会带有以下代码之一：

| 代码 | 描述 |
| --- | --- |
| `TIMEOUT` | 框架未在 `methodTimeout`（默认 30 秒）内响应。 |
| `DISCONNECTED` | 框架未连接（`Message bus is not connected with frame`）、已重新加载（`Frame reloaded`）或已销毁（`Frame destroyed`）。 |
| `CSP_VIOLATION` | 嵌入来源不在 DocSpace 的 CSP 允许列表中。 |
| `MODE_MISMATCH` | 当前模式不支持该方法。例如，`upload()` 和 `setCustomActions()` 仅在 Forms 模式下可用，`navigateSection()` 仅在 Forms 和 Personal 模式下可用。 |
| `INVALID_CONFIG` | 框架配置无效。 |
| `UPLOAD_FAILED` | 文件上传失败。 |
| `PARSE_ERROR` | 无法解析来自框架的消息。 |
| `TOKEN_RESOLVE_FAILED` | SDK 无法获取访问令牌。 |

## 调试技巧 {#debugging-tips}

要了解 SDK 的实际运行情况，最快的方法是为其生命周期事件绑定处理函数并将其输出到控制台：

```js
const instance = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "{PORTAL_SRC}",
  events: {
    onAppReady: (e) => console.log("onAppReady", e),
    onAppError: (e) => console.log("onAppError", e),
    onContentReady: (e) => console.log("onContentReady", e),
  },
});
```

即使框架内显示的是通用的 CSP 错误页面，`onAppError` 也会收到错误的真实原因，因此记录它往往比阅读渲染出的页面更快。将其与浏览器的网络（Network）面板结合使用，可以确认请求确实到达了您的 DocSpace 实例（而不是被混合内容限制或广告拦截插件所阻止）。

`onAppError` 仅在 SDK 端发生错误时触发：CSP 检查失败、消息解析错误、框架断开连接或令牌错误。DocSpace API 错误不会触发该事件（参见[方法返回了错误，但 Promise 没有被拒绝](#a-method-returned-an-error-but-the-promise-didnt-reject)）。OAuth 框架中的授权错误会通过 `onAuthError` 事件传递，数据为 `{ code: "UNAUTHORIZED" }`。

关于可用事件及其数据负载的完整列表，请参阅 [TFrameEvents](./usage-sdk/type-aliases/TFrameEvents.md)。

## 已知限制 {#known-limitations}

- **任何初始化失败都会在框架内显示同一个 CSP 错误页面。** 无论 CSP 检查因何种原因失败，SDK 都会在框架内渲染同一个 CSP 错误页面，而不仅仅是在真正违反允许列表时。`onAppError` 的数据可以区分这些情况：`src` 为空或无效时为 `Invalid URL`，无法访问门户时为 `CSP validation failed: ...`，只有当域名确实不在允许列表中时，才会是 "not set in the Content Security Policy (CSP) settings" 提示。在修改 CSP 设置之前，请先检查 `onAppError` 和浏览器控制台。若要在代码中检测允许列表冲突，请检查 `CSP_VIOLATION` 错误代码。
- **`checkCSP: false` 是全有或全无的开关。** 目前没有办法在调试时仅部分放宽 CSP 检查而不将其完全禁用，这也是不建议在本地开发环境之外使用该选项的原因——参见[内容安全策略 (CSP)](./get-started/authentication-security.md#content-security-policy-csp)。
