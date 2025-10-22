# rewriteText

This function rewrites or replaces text. If no text or paragraph number is specified, the current paragraph is used by default.

## Prompts

- Rewrite
- Rephrase sentence
- Make the text more emotional
- Rephrase
- Rewrite in official style

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "rewriteText";
func.params = [
    "parNumber (number): the paragraph number to change",
    "prompt (string): instructions on how to change the text",
    "showDifference (boolean): whether to show the difference between the original and new text, or just replace it",
    "type (string): which part of the text to be rewritten (e.g., 'sentence' or 'paragraph')"
];
func.description = "Use this function when you asked to rewrite or replace some text. If text or paragraph number is not specified assume that we are working with the current paragraph.";

func.examples = [
    "if you need to rewrite, respond with:\n" +
    "[functionCalling (rewriteText)]: {\"prompt\": \"Rewrite\", \"type\" : \"paragraph\"}",

    "If you need to rephrase current sentence, respond with:\n" +
    "[functionCalling (rewriteText)]: {\"prompt\": \"rephrase sentence\", \"type\" : \"sentence\"}",

    "If you need to rephrase current sentence and show difference, respond with:\n" +
    "[functionCalling (rewriteText)]: {\"prompt\": \"rephrase sentence\", \"type\" : \"sentence\", \"showDifference\" : true}",

    "if you need to change paragraph 2 to be more emotional, respond with:\n" +
    "[functionCalling (rewriteText)]: {\"parNumber\": 2, \"prompt\": \"make the text more emotional\", \"type\" : \"paragraph\"}",

    "if you need to rewrite the first paragraph, respond with:\n" +
    "[functionCalling (rewriteText)]: {\"parNumber\": 1, \"prompt\": \"Rephrase \", \"type\" : \"paragraph\"}",

    "if you need to rewrite the current paragraph to be more official, respond with:\n" +
    "[functionCalling (rewriteText)]: {\"prompt\": \"Rewrite in official style\", \"type\" : \"paragraph\"}"
];
```

### Parameters

| Name           | Type    | Example     | Description                                                                                     |
|----------------|---------|-------------|-------------------------------------------------------------------------------------------------|
| parNumber      | number  | 1           | The number of the paragraph to change.                                                          |
| prompt         | string  | "Rewrite"   | The instructions on how to change the text.                                                     |
| showDifference | boolean | true        | Specifies whether to show the difference between the original and new text, or just replace it. |
| type           | string  | "paragraph" | The part of the text to be rewritten (e.g., "sentence" or "paragraph").                         |

## Function execution {#function-execution}

```ts
func.call = async function(params) {

    let text = "";
    if ("paragraph" === params.type)
    {
        Asc.scope.parNumber = params.parNumber;
        text = await Asc.Editor.callCommand(function(){
            let doc = Api.GetDocument();
            let par = undefined === Asc.scope.parNumber ? doc.GetCurrentParagraph() : doc.GetElement(Asc.scope.parNumber - 1);
            if (!par)
                return "";
            par.Select();
            return par.GetText();
        });
    }
    else // if ("sentence" === params.type)
    {
        text = await Asc.Editor.callCommand(function(){
            return Api.GetDocument().GetCurrentSentence();
        });
    }

    let argPromt = params.prompt + ":\n" + text + "\n Answer with only the new one sentence, no need of any explanations";

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine)
        return;

    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    let turnOffTrackChanges = false;
    if (params.showDifference)
    {
        let isTrackChanges = await Asc.Editor.callCommand(function(){
            return Api.GetDocument().IsTrackRevisions();
        });

        if (!isTrackChanges)
        {
            await Asc.Editor.callCommand(function(){
                Api.GetDocument().SetTrackRevisions(true);
            });
            turnOffTrackChanges = true;
        }
    }

    await Asc.Editor.callMethod("StartAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);

    let isSendedEndLongAction = false;
    async function checkEndAction() {
        if (!isSendedEndLongAction) {
            await Asc.Editor.callMethod("EndAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
            isSendedEndLongAction = true
        }
    }

    let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
        if (!data)
            return;
        await checkEndAction();

        if (text && "sentence" === params.type)
        {
            Asc.scope.data = data;
            await Asc.Editor.callCommand(function(){
                let doc = Api.GetDocument();
                doc.ReplaceCurrentSentence("");
            });
            text = null;
        }

        await Asc.Library.PasteText(data);
    });

    await checkEndAction();

    if (turnOffTrackChanges)
        await Asc.Editor.callCommand(function(){return Api.GetDocument().SetTrackRevisions(false);});

    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
};

return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetCurrentParagraph](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentParagraph.md), [GetElement](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetElement.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [Select](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/Select.md), [GetCurrentSentence](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentSentence.md), [IsTrackRevisions](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/IsTrackRevisions.md), [SetTrackRevisions](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SetTrackRevisions.md), [ReplaceCurrentSentence](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/ReplaceCurrentSentence.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/rewriteText.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/rewriteText.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
