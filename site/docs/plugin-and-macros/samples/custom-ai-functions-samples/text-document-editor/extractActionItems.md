# extractActionItems

This function analyzes selected text, meeting notes, or a document section and extracts clear action items or to-dos, formatting them as a structured list. It can optionally remove the original text.

## Prompts

- "Extract action items from selected text"
- "Turn meeting notes in the current paragraph into a to-do list"
- "Extract all action items from the entire document as a numbered list"

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
  name: "extractActionItems",
  description:
    "Analyzes selected text, meeting notes, or a document section and extracts clear action items or to-dos, formatting them as a structured list. Can optionally remove the original text.",
  parameters: {
    type: "object",
    properties: {
      scope: {
        type: "string",
        description:
          "whether to extract action items from the 'currentParagraph', 'selection', or the 'entireDocument' (default is 'selection')",
      },
      format: {
        type: "string",
        description:
          "how to format the extracted items - as 'bullet' or 'numbered' list (default is 'bullet')",
      },
    },
    required: ["prompt"],
  },
  examples: [
    {
      prompt: "Extract action items from selected text",
      arguments: { scope: "selection", format: "bullet" },
    },
    {
      prompt: "Turn meeting notes in the current paragraph into a to-do list",
      arguments: { scope: "currentParagraph", format: "numbered" },
    },
    {
      prompt:
        "Extract all action items from the entire document as a numbered list",
      arguments: { scope: "entireDocument", format: "numbered" },
    },
    {
      prompt: "Extract action items from the selected text",
      arguments: { scope: "selection" },
    },
  ],
});
```

### Parameters

| Name     | Type   | Example                  | Description                                                                           |
|----------|--------|--------------------------|---------------------------------------------------------------------------------------|
| scope    | string | "selection"              | Whether to extract action items from the 'currentParagraph', 'selection', or the 'entireDocument' (default is 'selection').|                                           
| format   | string | "bullet"                 | How to format the extracted items - as 'bullet' or 'numbered' list (default is 'bullet').   |

## Function execution {#function-execution}

```ts
func.call = async function (params) {
    Asc.scope.scope = params.scope || "selection";
    Asc.scope.format = params.format || "bullet";

    let text = await Asc.Editor.callCommand(function () {
      let doc = Api.GetDocument();
      let content = "";
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
        if (range && range.GetText()) content = range.GetText();
        else {
          let par = doc.GetCurrentParagraph();
          if (par) {
            par.Select();
            content = par.GetText();
          }
        }
      }
      return content;
    });

    if (!text || text.trim().length === 0) return;

    let argPrompt =
      "Extract all action items and to-dos from the following text.\n" +
      "Format your response EXACTLY as follows:\n" +
      "- First action item\n" +
      "- Second action item\n" +
      "- Third action item\n\n" +
      "Each action item MUST start with '- ' and be on its own line.\n" +
      "Do NOT include any explanations, summaries, or extra text.\n" +
      "If no action items are found, respond with 'No action items found.'\n\n" +
      text;

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine) return;

    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);
    await Asc.Editor.callMethod("StartAction", [
      "Block",
      "AI (" + requestEngine.modelUI.name + ")",
    ]);

    async function checkEndAction() {
      await Asc.Editor.callMethod("EndAction", [
        "Block",
        "AI (" + requestEngine.modelUI.name + ")",
      ]);
    }

    let actionItems = "";
    await requestEngine.chatRequest(argPrompt, false, async function (data) {
      if (!data) return;
      actionItems += data;
    });

    await checkEndAction();

    if (actionItems.trim() !== "No action items found.") {
      const normalizedText = actionItems.replace(/\s+- /g, "\n- ").trim();
      Asc.scope.actionItems = normalizedText
        .split(/\r?\n/)
        .map((item) => item.trim())
        .map((item) => item.replace(/^- /, ""))
        .filter((item) => item.length > 0);

      await Asc.Editor.callCommand(async function () {
        let doc = Api.GetDocument(),
          data = Asc.scope.actionItems;
        let numbering = doc.CreateNumbering(
          Asc.scope.format === "numbered" ? "numbered" : "bullet"
        );
        let numLvl = numbering.GetLevel(0);

        if (
          Asc.scope.scope === "entireDocument" ||
          Asc.scope.scope === "currentParagraph"
        ) {
          let contextPara =
            Asc.scope.scope === "entireDocument"
              ? doc.GetElement(0)
              : doc.GetCurrentParagraph();
          let paraPr = contextPara.GetTextPr();
          let currentParagraph = contextPara;

          for (let i = data.length - 1; i >= 0; i--) {
            let itemPara = Api.CreateParagraph();
            itemPara.AddText(data[i]);
            itemPara.SetTextPr(paraPr);
            itemPara.SetNumbering(numLvl);
            itemPara.SetContextualSpacing(true);
            currentParagraph.InsertParagraph(itemPara, "before", true);
            currentParagraph = itemPara;
          }

          if (Asc.scope.scope === "entireDocument") {
            while (contextPara) {
              let nextPara = contextPara.GetNext();
              contextPara.Delete();
              contextPara = nextPara;
            }
          } else {
            contextPara.Delete();
          }
        } else {
          let range = doc.GetRangeBySelect();

          let firstPara = range.GetParagraph(0);
          let paraPr = firstPara.GetTextPr();
          let currentParagraph = [];

          if (range.GetStartPos() !== firstPara.GetRange(0, 1).GetStartPos()) {
            let dummyParagraph = Api.CreateParagraph();
            dummyParagraph.SetContextualSpacing(true);
            currentParagraph.push(dummyParagraph);
          }

          for (let i = 0; i < data.length; i++) {
            let itemPara = Api.CreateParagraph();
            itemPara.AddText(data[i]);
            itemPara.SetTextPr(paraPr);
            itemPara.SetNumbering(numLvl);
            itemPara.SetContextualSpacing(true);
            currentParagraph.push(itemPara);
          }

          range.MoveCursorToPos(range.GetStartPos());
          range.Delete();
          doc.InsertContent(currentParagraph);
        }
      });
    }
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
  };
  return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/GetText.md), [GetCurrentParagraph](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetCurrentParagraph.md), [GetRangeBySelect](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md), [GetLevel](/docs/office-api/usage-api/text-document-api/ApiNumbering/Methods/GetLevel.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [SetTextPr](/docs/office-api/usage-api/text-document-api/ApiWatermarkSettings/Methods/SetTextPr.md), [SetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetNumbering.md), [SetContextualSpacing](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetContextualSpacing.md), [InsertParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/InsertParagraph.md), [InsertContent](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md),  [Delete](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/Delete.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/extractActionItems.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/extractActionItems.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
