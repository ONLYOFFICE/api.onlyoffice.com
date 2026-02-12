# smartHeadlineGenerator

This function generates a clear and relevant headline from the currently selected text (paragraph, slide, or section). This headline is meant to accurately represent the content, not be overly catchy.

## Prompts

- "Generate a headline for the selected text"
- "Write a headline for the current paragraph"
- "Create a headline that represents the full document"
- "Suggest a simple headline for an announcement"

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "smartHeadlineGenerator",
  description:
    "Generates a clear and relevant headline from the currently selected text (paragraph, slide, or section). This headline is meant to accurately represent the content, not be overly catchy.",
  parameters: {
    type: "object",
    properties: {
      scope: {
        type: "string",
        description:
          "whether to summarize the 'currentParagraph', 'selection', or the 'entireDocument' (default is 'selection')",
      },
    },
    required: ["prompt"],
  },
  examples: [
    {
      prompt: "Generate a headline for the selected text",
      arguments: {
        scope: "selection",
        prompt: "Generate a clear headline for this text",
      },
    },
    {
      prompt: "Write a headline for the current paragraph",
      arguments: {
        scope: "currentParagraph",
        prompt: "Write a precise headline for this paragraph",
      },
    },
    {
      prompt: "Create a headline",
      arguments: {
        scope: "entireDocument",
        prompt: "Create a headline that represents the full document",
      },
    },
    {
      prompt: "Suggest a simple headline for an announcement",
      arguments: {
        scope: "selection",
        prompt: "Provide a straightforward headline for this announcement",
      },
    },
    {
      prompt:
        "Generate a headline for the current paragraph without extra instructions",
      arguments: { scope: "currentParagraph" },
    },
  ],
});
```

### Parameters

| Name     | Type   | Example                       | Description                                                                           |
|----------|--------|-------------------------------|---------------------------------------------------------------------------------------|
| scope    | string  | "selection"                  | Whether to summarize the 'currentParagraph', 'selection', or the 'entireDocument' (default is 'selection'). |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    let scope = params.scope || "selection";

    Asc.scope.scope = scope;
    let text = await Asc.Editor.callCommand(function () {
      let doc = Api.GetDocument();
      let content = "";
      // console.log('scope', Asc.scope.scope);
      if (Asc.scope.scope === "entireDocument") {
        content = doc.GetText();
      } else if (Asc.scope.scope === "currentParagraph") {
        let par = doc.GetCurrentParagraph();
        if (par) {
          par.Select();
          content = par.GetText();
        }
      } else {
        let range = doc.GetRangeBySelect();
        if (range && range.GetText()) {
          content = range.GetText();
        } else {
          let par = doc.GetCurrentParagraph();
          if (par) {
            par.Select();
            content = par.GetText();
          }
        }
      }
      return content;
    });
    if (!text) return;
    let argPrompt =
      params.prompt +
      ":\n" +
      text +
      "\n Answer with only the headline, do not add explanations.";

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine) return;

    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);
    await Asc.Editor.callMethod("StartAction", [
      "Block",
      "AI (" + requestEngine.modelUI.name + ")",
    ]);

    let isSendedEndLongAction = false;
    async function checkEndAction() {
      if (!isSendedEndLongAction) {
        await Asc.Editor.callMethod("EndAction", [
          "Block",
          "AI (" + requestEngine.modelUI.name + ")",
        ]);
        isSendedEndLongAction = true;
      }
    }

    let resultHeading = "";
    await requestEngine.chatRequest(argPrompt, false, async function (data) {
      if (!data) return;
      resultHeading += data;
    });

    await checkEndAction();
    if (resultHeading.startsWith('"') && resultHeading.endsWith('"')) {
      resultHeading = resultHeading.slice(1, -1);
    }
    Asc.scope.data = resultHeading;
    await Asc.Editor.callCommand(async function () {
      let doc = Api.GetDocument(),
        data = Asc.scope.data;
      if (
        Asc.scope.scope === "entireDocument" ||
        Asc.scope.scope === "currentParagraph"
      ) {
        const contextPara =
          Asc.scope.scope === "entireDocument"
            ? doc.GetElement(0)
            : doc.GetCurrentParagraph();
        const textProperties = contextPara.GetTextPr();
        let headLine = Api.CreateParagraph();
        headLine.AddText(data);
        headLine.SetTextPr(textProperties);
        contextPara.InsertParagraph(headLine, "before", true);
      } else {
        let range = doc.GetRangeBySelect();
        if (!range) return;
        range.AddText(data + "\n\n", "before");
      }
    });
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
  };
  return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/GetText.md), [GetCurrentParagraph](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetCurrentParagraph.md), [GetRangeBySelect](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [GetTextPr](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/GetTextPr.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [SetTextPr](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetTextPr.md), [InsertParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/InsertParagraph.md), [AddText(Range)](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/AddText.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/smartHeadlineGenerator.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/smartHeadlineGenerator.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
