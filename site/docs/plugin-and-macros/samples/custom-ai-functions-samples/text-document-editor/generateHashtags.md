# generateHashtags

This function generates relevant hashtags based on the selected text or the current word.

## Prompts

- Generate hashtags
- Generate social media hashtags

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "generateHashtags",
    description:
      "Use this function if you need to generate relevant hashtags for the selected text or current word.",
    parameters: {
      type: "object",
      properties: {
        prompt: {
          type: "string",
          description:
            "Instruction for the AI, for example: 'Generate hashtags for this text.'",
        },
        count: {
          type: "number",
          description: "How many hashtags to generate (default is 5)",
        },
      },
      required: ["prompt"],
    },
    examples: [
      {
        prompt: "Generate hashtags for this text.",
        arguments: { prompt: "Generate hashtags for this text." },
      },
      {
        prompt: "Generate 10 hashtags for the selected text.",
        arguments: { prompt: "Generate hashtags for this text.", count: 10 },
      },
      {
        prompt: "Create 3 hashtags for this paragraph.",
        arguments: { prompt: "Create hashtags for this paragraph.", count: 3 },
      },
    ],
  });
```

### Parameters

| Name      | Type    | Example           | Description                            |
|-----------|---------|-------------------|----------------------------------------|
| prompt    | string  |"Generate hashtags"| AI hashtag generation instructions.    |
| count     | number  |    5              | Number of hashtags to generate.        |
| category  | string  | "LinkedIn"        | Type of hashtags to generate.          |

## Function execution {#function-execution}

```ts
  func.call = async function (params) {
    let count = params.count || 5;

    let text = await Asc.Editor.callCommand(function () {
      let doc = Api.GetDocument();
      let range = doc.GetRangeBySelect();
      let txt = range ? range.GetText() : "";

      if (!txt) {
        txt = doc.GetCurrentWord();
        doc.SelectCurrentWord();
      }

      return txt;
    });

    if (!text || text.trim().length === 0) return;

    let argPrompt =
      params.prompt +
      ":\n" +
      "Text:\n" +
      text +
      "\n" +
      "Generate " +
      count +
      " short and relevant hashtags. " +
      "Output hashtags only, separated by spaces.";

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

    let resultText = "";

    await requestEngine.chatRequest(argPrompt, false, async function (data) {
      if (!data) return;
      resultText += data;
    });

    await checkEndAction();

    resultText = resultText.replace(/\s+/g, " ").trim();

    if (resultText) {
      Asc.scope.text = resultText;
      await Asc.Editor.callCommand(function () {
        let doc = Api.GetDocument();
        doc.MoveCursorToEnd();
        let par = Api.CreateParagraph();
        par.AddText(Asc.scope.text);
        doc.Push(par);
      });
    }

    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
  };

  return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [GetCurrentWord](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentWord.md), [SelectCurrentWord](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SelectCurrentWord.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [MoveCursorToEnd](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/MoveCursorToEnd.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/generateHashtags.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/generateHashtags.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
