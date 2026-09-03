---
slug: /docspace/javascript-sdk/get-started/troubleshooting-faq
description: 集成 DocSpace 嵌入式 SDK 时常见错误及修复方法、调试技巧以及已知限制。
tags: ["DocSpace", "Embed SDK", "Troubleshooting", "FAQ"]
---

# 故障排除与常见问题 {#troubleshooting--faq}

本页汇总了集成方最常遇到的错误及修复方法、当框架行为异常时的调试技巧，以及当前 SDK 的已知限制。若要深入了解身份验证、CSP 与 Cookie 之间的关系，请参阅[身份验证与安全](./get-started/authentication-security.md)。

## 常见错误及修复方法 {#common-errors-and-fixes}

### "The current domain is not set in the Content Security Policy (CSP) settings." {#the-current-domain-is-not-set-in-the-content-security-policy-csp-settings}

当嵌入域未包含在 DocSpace 的 CSP 允许列表中时，`initManager()`、`initEditor()` 以及所有其他初始化方法都会返回此错误。请参阅[内容安全策略 (CSP)](./get-started/authentication-security.md#content-security-policy-csp)，了解如何检查和更新允许列表。

:::note
即使初始化失败与 CSP 毫无关系，也会显示这条完全相同的提示信息——在认定是 CSP 配置错误之前，请先阅读下方的[已知限制](#known-limitations)。
:::

### 跨域 / "domain not allowed" 错误 {#cross-origin--domain-not-allowed-errors}

SDK 并不依赖传统的 CORS 响应头，而是要求将嵌入来源显式加入 DocSpace 的白名单。如果来自您页面的请求被拒绝，请参阅[注册允许的嵌入来源](./get-started/authentication-security.md#registering-allowed-embed-origins)，并确认该来源已被精确添加（包括协议、主机和端口），因为子域和路径不会被自动匹配。

### 空白 iframe（框架已加载但无任何内容） {#blank-iframe-frame-loads-but-shows-nothing}

请按以下顺序排查：

1. 在调用 `initManager`/`initEditor` **之前**，`frameId` 所引用的容器元素已存在于 DOM 中。
2. `src` 指向一个可访问且通过 HTTPS 提供服务的 DocSpace 实例——混合内容（HTTPS 页面加载 HTTP 的 `src`）会被浏览器静默拦截。参见[前提条件](./get-started/get-started.md#prerequisites)。
3. 该来源已按照[注册允许的嵌入来源](./get-started/authentication-security.md#registering-allowed-embed-origins)的说明加入白名单。
4. 查看浏览器控制台以及 `onAppError` 事件（参见[调试技巧](#debugging-tips)）中的实际错误信息——空白框架通常是初始化错误被吞掉了，而不是渲染问题。

### 身份验证循环（用户被反复要求登录） {#authentication-loops-user-is-repeatedly-asked-to-sign-in}

这几乎总是跨域 Cookie 问题：浏览器没有随嵌入请求一起发送 DocSpace 会话 Cookie。请确认 DocSpace 服务器上已设置 `SameSite: "None"` 和 `Secure: true`，参见 [SameSite Cookie 要求](./get-started/authentication-security.md#samesite-cookie-requirements)，并确认 DocSpace 服务器与嵌入页面均通过 HTTPS 提供服务。

如果 Cookie 配置无误但循环仍然存在，则可能是访问者的浏览器直接屏蔽了第三方 Cookie（例如 Safari 的智能防跟踪功能、Chrome 的第三方 Cookie 限制，或某种严格的隐私模式）。在这种情况下，无论服务器如何配置，基于会话的身份验证都无法生效——请改用[公共房间的基于令牌的身份验证](./get-started/authentication-security.md#token-based-auth-for-public-rooms)。

### "Message bus is not connected with frame" {#message-bus-is-not-connected-with-frame}

这表示某个 SDK 方法是在其对应框架尚未就绪，或已经被销毁之后被调用的。请在调用实例方法之前等待 `onAppReady` 或 `onContentReady` 事件，并且在调用 `destroyFrame()` 之后不要再对该实例调用任何方法。

## 调试技巧 {#debugging-tips}

要了解 SDK 的实际运行情况，最快的方法是为其生命周期事件绑定处理函数并将其输出到控制台：

```js
const instance = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  src: "https://your-docspace.example.com",
  events: {
    onAppReady: (e) => console.log("onAppReady", e),
    onAppError: (e) => console.log("onAppError", e),
    onContentReady: (e) => console.log("onContentReady", e),
  },
});
```

`onAppError` 触发时携带的错误文本与框架内显示的完全相同，因此记录它往往比阅读渲染出的错误页面更快。将其与浏览器的网络（Network）面板结合使用，可以确认请求确实到达了您的 DocSpace 实例（而不是被混合内容限制或广告拦截插件所阻止）。

关于可用事件及其数据负载的完整列表，请参阅 [TFrameEvents](./usage-sdk/type-aliases/TFrameEvents.md)。

## 已知限制 {#known-limitations}

- **CSP 错误提示信息是通用的。** `initManager()`、`initEditor()` 以及其他初始化方法在遇到*任何*初始化失败时都会显示相同的 [`cspErrorText`](./usage-sdk/variables/cspErrorText.md) 字符串，而不仅仅是真正的 CSP 允许列表冲突——例如，一个缺失或拼写错误的 `src` 也会产生完全相同的 "not in CSP settings" 提示。在确认是真正的 CSP 配置问题之前，请先检查 `src`、网络可达性以及浏览器控制台。
- **`checkCSP: false` 是全有或全无的开关。** 目前没有办法在调试时仅部分放宽 CSP 检查而不将其完全禁用，这也是不建议在本地开发环境之外使用该选项的原因——参见[内容安全策略 (CSP)](./get-started/authentication-security.md#content-security-policy-csp)。
