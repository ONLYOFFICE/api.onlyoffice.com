---
sidebar_position: 9
---

# Chat mode

Chat mode embeds an AI chat interface inside your application. It connects to a specific DocSpace AI agent by ID and gives users a conversational interface without leaving your application.

## Initialization

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-frame",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
});
```

The parameters `frameId`, `src`, and `agentId` are required. All other parameters are optional and have sensible defaults.

For setup instructions (connecting the script, CSP configuration, npm package), see [Get started](../get-started/get-started.md).

## Configuration, events, and methods

`initChat()` accepts the full [`TFrameConfig`](../usage-sdk/type-aliases/TFrameConfig.md) configuration object and returns an [`SDKInstance`](../usage-sdk/classes/SDKInstance.md).

## Use cases

### Embedding a chat widget

Initialize a chat agent and react when it is ready:

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-chat",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
  events: {
    onAppReady: function () {
      console.log("Chat is ready");
    },
    onAppError: function (error) {
      console.error("Chat failed to load:", error);
    },
  },
});
```

### Opening a chat in the context of a file

Pass `fileId` to open the chat preloaded with a specific file as context, or `chatId` to resume an existing conversation:

```javascript
const docSpace = DocSpace.SDK.initChat({
  frameId: "ds-chat",
  src: "https://your-docspace.com",
  agentId: "your-agent-id",
  fileId: "your-file-id",
  chatId: "your-chat-id",
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
