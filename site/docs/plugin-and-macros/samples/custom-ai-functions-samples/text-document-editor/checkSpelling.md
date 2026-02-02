# checkSpelling

This function checks spelling or fixes other text errors in the current paragraph.

## Prompts

- Check spelling

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "checkSpelling",
    description:
        "Use this function if you asked to check spelling for current paragraph or fix other type of text errors in the current paragraph.",
    parameters: {
        type: "object",
        properties: {},
        required: [],
    },
    examples: [
        {
            prompt: "Check spelling for the current paragraph",
            arguments: {},
        },
        {
            prompt: "Fix grammar in current paragraph",
            arguments: {},
        },
        {
            prompt: "Check for text errors",
            arguments: {},
        },
    ],
});
```

## Function execution {#function-execution}

```ts
(function () {
    let func = new RegisteredFunction({
        name: "checkSpelling",
        description:
            "Use this function if you asked to check spelling for current paragraph or fix other type of text errors in the current paragraph.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
        },
        examples: [
            {
                prompt: "Check spelling for the current paragraph",
                arguments: {},
            },
            {
                prompt: "Fix grammar in current paragraph",
                arguments: {},
            },
            {
                prompt: "Check for text errors",
                arguments: {},
            },
        ],
    });

    func.call = async function (params) {
        let text = await Asc.Editor.callCommand(function () {
            let par = Api.GetDocument().GetCurrentParagraph();
            if (!par) return "";
            par.Select();
            return par.GetText();
        });

        let argPromt =
            "Check spelling and grammar for text:" +
            ":\n" +
            text +
            "\n Answer with only the new corrected text, no need of any explanations.";

        let isTrackChanges = await Asc.Editor.callCommand(function () {
            let isOn = Api.GetDocument().IsTrackRevisions();
            if (isOn) Api.GetDocument().SetTrackRevisions(false);
            return isOn;
        });

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

        let result = await requestEngine.chatRequest(
            argPromt,
            false,
            async function (data) {
                if (!data) return;
                await checkEndAction();

                resultText += data;

                await Asc.Editor.callMethod("EndAction", [
                    "GroupActions",
                    "",
                    "cancel",
                ]);
                await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

                Asc.scope.text = resultText;
                await Asc.Editor.callCommand(function () {
                    let par = Api.GetDocument().GetCurrentParagraph();
                    if (!par) return "";
                    par.Select();
                    Api.ReplaceTextSmart([Asc.scope.text]);
                });
            },
        );

        await checkEndAction();

        await Asc.Editor.callMethod("EndAction", [
            "GroupActions",
            "",
            "cancel",
        ]);
        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

        Asc.scope.modelName = requestEngine.modelUI.name;
        await Asc.Editor.callCommand(function () {
            return Api.GetDocument().SetAssistantTrackRevisions(
                true,
                Asc.scope.modelName,
            );
        });

        Asc.scope.text = resultText;
        await Asc.Editor.callCommand(function () {
            let par = Api.GetDocument().GetCurrentParagraph();
            if (!par) return "";
            par.Select();
            Api.ReplaceTextSmart([Asc.scope.text]);
        });

        await Asc.Editor.callCommand(function () {
            return Api.GetDocument().SetAssistantTrackRevisions(false);
        });

        if (isTrackChanges) {
            await Asc.Editor.callCommand(function () {
                Api.GetDocument().SetTrackRevisions(true);
            });
        }

        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    };

    return func;
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetCurrentParagraph](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentParagraph.md), [Select](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/Select.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [IsTrackRevisions](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/IsTrackRevisions.md), [SetTrackRevisions](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SetTrackRevisions.md), [ReplaceTextSmart](/docs/office-api/usage-api/text-document-api/Api/Methods/ReplaceTextSmart.md), [SetAssistantTrackRevisions](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SetAssistantTrackRevisions.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/checkSpelling.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/checkSpelling.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
