---
sidebar_position: 9
---

# Chat mode

Chat mode embeds a full-page AI chat interface. It can be bound to a specific DocSpace AI agent, or left to talk to the current user directly, giving users a conversational interface without leaving your application.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
});
```

Only `frameId` and `src` are required. `agentId` is optional: set it to bind the chat to a specific AI agent, or omit it to bind the chat to the current user instead. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Configuration, events, and methods

`initChat()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md). It forces `mode` to Chat.

:::note
The page renders a composer (the input box) only when the current user is signed in, isn't a guest, and the portal has AI enabled. Otherwise it shows a no-access state — a chat history control with no way to send a message. When AI Chat is disabled for the workspace, the frame fires `onNoAccess` (with an empty payload) in addition to `onAppReady` — attach a handler for it if you want to react to this instead of relying on `onAppReady` alone.

In [OAuth mode](../get-started/authentication-security.md#oauth-authentication), the same no-access state appears if the token can't read the user's profile — make sure the **Profile** scope (`accounts.self:read`) is included.
:::

## Use cases

### Reacting to the chat being ready

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-chat",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
  events: {
    onAppReady: function () {
      console.log("Chat is ready");
    },
  },
});
```

### Opening the chat in the context of a room or file

Pass `entityId` (a room or folder ID) so the AI scopes its own searches and tool calls to that location — the current user must already have access to it, or the request is rejected. Pass `fileId` to attach a specific file to the composer on load:

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-chat",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
  entityId: "your-room-id",
  fileId: "your-file-id",
});
```

### Resuming an existing conversation

Pass `threadId` to reopen a previous thread instead of starting a new one:

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-chat",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
  threadId: "your-thread-id",
});
```

### Showing the chat on demand

Render the chat in a hidden container and make it visible only when the user opens it:

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-chat",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
  width: "400px",
  height: "600px",
});

document.getElementById("open-chat").addEventListener("click", function () {
  document.getElementById("ds-chat").style.display = "block";
});
```
