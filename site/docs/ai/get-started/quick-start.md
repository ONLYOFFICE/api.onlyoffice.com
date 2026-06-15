---
sidebar_position: 2
---

# Quick start

Add an AI-generated comment or footnote to selected text using the ONLYOFFICE AI agent.

**Time:** 30 minutes | **Skill level:** Advanced

## Step 1: Set up your environment

1. Clone the [onlyoffice.github.io](https://github.com/ONLYOFFICE/onlyoffice.github.io) repository to your local machine.
2. Navigate to the helpers folder: `sdkjs-plugins/content/ai/.dev/helpers/` and open a folder for the targeted editor: **word**, **cell** or **slide**.
3. Create a new file for your function, for example `commentText.js`.

## Step 2: Register the function

Use the `RegisteredFunction` object to define the function's name, expected parameters, and examples that teach the AI model when and how to call it:

```javascript
let func = new RegisteredFunction({
  name: "commentText",
  description: "Use this function if you are asked to comment or explain anything.",
  parameters: {
    type: "object",
    properties: {
      prompt: {
        type: "string",
        description: "The instruction for what to explain or comment about the text.",
      },
      type: {
        type: "string",
        enum: ["comment", "footnote"],
        description: "Whether to add as a comment or as a footnote.",
        default: "comment",
      },
    },
    required: ["prompt"],
  },
  examples: [
    {
      prompt: "Explain this text",
      arguments: { prompt: "Explain this text", type: "comment" },
    },
    {
      prompt: "Add a footnote to selected text",
      arguments: { prompt: "Add a footnote to this text", type: "footnote" },
    },
    {
      prompt: "Comment on this text",
      arguments: { prompt: "Comment this text" },
    },
  ],
});
```

**Key fields explained:**

- `name` - The function name the AI model will invoke
- `parameters` - Parameters the function expects from the AI as a JSON object
- `examples` - Sample invocations that teach the AI the correct calling syntax
- `description` - Tells the AI what the function does and when to use it

## Step 3: Retrieve the selected text

Inside `func.call`, use `Asc.Editor.callCommand()` to read the currently selected text from the document:

```javascript
func.call = async function (params) {
  let text = await Asc.Editor.callCommand(function () {
    let doc = Api.GetDocument();
    let range = doc.GetRangeBySelect();
    let text = range ? range.GetText() : "";
    if (!text) {
      text = doc.GetCurrentWord();
      doc.SelectCurrentWord();
    }
    return text;
  });
```

## Step 4: Build the prompt and initialize the request engine

Combine the user's instruction with the retrieved text, then create a request engine to communicate with the AI model:

```javascript
  let argPrompt = params.prompt + ":\n" + text;

  let requestEngine = AI.Request.create(AI.ActionType.Chat);
  if (!requestEngine) return;
```

## Step 5: Send the request and apply the result

Send the prompt to the AI model and insert its response into the document as a comment or footnote.

:::info Asc.scope
`Asc.scope` is a shared object used to pass data into `callCommand` closures. Because `callCommand` runs in a separate context, local variables are not directly accessible inside it - `Asc.scope` bridges the two contexts.
:::

To insert as a comment:

```javascript
  // Insert as a comment
  let result = await requestEngine.chatRequest(
    argPrompt,
    false,
    async function (data) {
      if (!data) return;
      Asc.scope.data = data;
      Asc.scope.model = requestEngine.modelUI.name;
      await Asc.Editor.callCommand(function () {
        let range = Api.GetDocument().GetRangeBySelect();
        let comment = range.AddComment(
          Asc.scope.data,
          Asc.scope.model,
          "uid" + Asc.scope.model,
        );
        Api.GetDocument().ShowComment([comment.GetId()]);
      });
    }
  );
```

To insert as a footnote instead:

```javascript
  // Insert as a footnote
  let result = await requestEngine.chatRequest(
    argPrompt,
    false,
    async function (data) {
      if (!data) return;
      await Asc.Editor.callCommand(function () {
        Api.GetDocument().AddFootnote();
      });
      await Asc.Library.PasteText(data);
    }
  );
```

:::tip
Wrap your document changes in `StartAction` / `EndAction` calls so the entire operation can be undone as a single step.
:::

## Step 6: Build and install the modified plugin

1. Update the plugin version in `config.json` to avoid caching issues (e.g. `3.0.3` → `3.0.4`).
2. Run the `helpers.py` file to regenerate the plugin scripts.
3. Select all files in `sdkjs-plugins/content/ai`, zip them, and rename the archive to `ai.plugin`.
4. Place the file in `sdkjs-plugins/content/ai/deploy` and push your changes.
5. Build your GitHub Pages site from the repository.
6. Prepare your custom store URL: `https://YOUR-USERNAME.github.io/onlyoffice.github.io/store/index.html`

## Step 7: Test your custom AI tool

1. In ONLYOFFICE, go to **Plugins → Plugin Manager**.
2. Click the Store icon `(</>)` in the top-right corner and enter your custom store URL.
3. Update the AI plugin.
4. Open a document and select some text.
5. Open the AI agent dialog (`Ctrl + /`).
6. Type `Explain this text` and press **Enter**.
7. The AI agent inserts a comment with an AI-generated explanation of the selected text.

## Next steps

**Learn more:**

- [Getting started with ONLYOFFICE AI agent](../../guides/ai-agent.md)
- [Learn more about custom AI tools](../../guides/custom-ai-tools.md)
- [Text annotations API guide](../../guides/text-annotations-guide.md)

**Explore examples:**

- [Browse all AI tool examples](/samples/?doctype=ai&text=ai+tools)

**Need help?**

- [Developer Forum](https://forum.onlyoffice.com/) - Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) - Report bugs
- [FAQ](../../more-information/faq.md) - Frequently asked questions
