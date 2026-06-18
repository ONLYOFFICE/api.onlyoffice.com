---
description: Rewrite selected text with AI assistance.
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Rewrite text

This function rewrites or replaces text. If no text or paragraph number is specified, the current paragraph is used by default.

## Prompts

- Rewrite
- Rephrase sentence
- Make the text more emotional
- Rephrase
- Rewrite in official style

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "rewriteText",
    description:
        "Use this function when you asked to rewrite or replace some text. If text or paragraph number is not specified assume that we are working with the current paragraph.",
    parameters: {
        type: "object",
        properties: {
            parNumber: {
                type: "number",
                description: "The paragraph number to change",
            },
            prompt: {
                type: "string",
                description: "Instructions on how to change the text",
            },
            showDifference: {
                type: "boolean",
                description:
                    "Whether to show the difference between the original and new text, or just replace it",
            },
            type: {
                type: "string",
                description:
                    "Which part of the text to be rewritten (e.g., 'sentence' or 'paragraph')",
            },
        },
        required: [],
    },
    examples: [
        {
            prompt: "Rewrite",
            arguments: { type: "paragraph" },
        },
        {
            prompt: "Rephrase sentence",
            arguments: { type: "sentence" },
        },
        {
            prompt: "Make the text more emotional",
            arguments: { parNumber: 2, type: "paragraph" },
        },
        {
            prompt: "Rewrite in official style",
            arguments: { type: "paragraph" },
        },
        {
            prompt: "Rewrite the first paragraph",
            arguments: { parNumber: 1, type: "paragraph" },
        },
        {
            prompt: "Rewrite the current paragraph to be more official",
            arguments: { type: "paragraph" },
        },
    ],
});
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
(function () {
    let func = new RegisteredFunction({
        name: "rewriteText",
        description:
            "Use this function when you asked to rewrite or replace some text. If text or paragraph number is not specified assume that we are working with the current paragraph.",
        parameters: {
            type: "object",
            properties: {
                parNumber: {
                    type: "number",
                    description: "The paragraph number to change",
                },
                prompt: {
                    type: "string",
                    description: "Instructions on how to change the text",
                },
                showDifference: {
                    type: "boolean",
                    description:
                        "Whether to show the difference between the original and new text, or just replace it",
                },
                type: {
                    type: "string",
                    description:
                        "Which part of the text to be rewritten (e.g., 'sentence' or 'paragraph')",
                },
            },
            required: [],
        },
        examples: [
            {
                prompt: "Rewrite",
                arguments: { type: "paragraph" },
            },
            {
                prompt: "Rephrase sentence",
                arguments: { type: "sentence" },
            },
            {
                prompt: "Make the text more emotional",
                arguments: { parNumber: 2, type: "paragraph" },
            },
            {
                prompt: "Rewrite in official style",
                arguments: { type: "paragraph" },
            },
            {
                prompt: "Rewrite the first paragraph",
                arguments: { parNumber: 1, type: "paragraph" },
            },
            {
                prompt: "Rewrite the current paragraph to be more official",
                arguments: { type: "paragraph" },
            },
        ],
    });

    func.call = async function (params) {
        let text = "";
        if ("paragraph" === params.type) {
            Asc.scope.parNumber = params.parNumber;
            text = await Asc.Editor.callCommand(function () {
                let doc = Api.GetDocument();
                let par =
                    undefined === Asc.scope.parNumber
                        ? doc.GetCurrentParagraph()
                        : doc.GetElement(Asc.scope.parNumber - 1);
                if (!par) return "";
                par.Select();
                return par.GetText();
            });
        } else // if ("sentence" === params.type)
        {
            text = await Asc.Editor.callCommand(function () {
                return Api.GetDocument().GetCurrentSentence();
            });
        }

        let argPrompt =
            params.prompt +
            ":\n" +
            text +
            "\n Answer with only the new one sentence, no need of any explanations";

        let requestEngine = AI.Request.create(AI.ActionType.Chat);
        if (!requestEngine) return;

        await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

        let turnOffTrackChanges = false;
        if (params.showDifference) {
            let isTrackChanges = await Asc.Editor.callCommand(function () {
                return Api.GetDocument().IsTrackRevisions();
            });

            if (!isTrackChanges) {
                await Asc.Editor.callCommand(function () {
                    Api.GetDocument().SetTrackRevisions(true);
                });
                turnOffTrackChanges = true;
            }
        }

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

        let result = await requestEngine.chatRequest(
            argPrompt,
            false,
            async function (data) {
                if (!data) return;
                await checkEndAction();

                if (text && "sentence" === params.type) {
                    Asc.scope.data = data;
                    await Asc.Editor.callCommand(function () {
                        let doc = Api.GetDocument();
                        doc.ReplaceCurrentSentence("");
                    });
                    text = null;
                }

                await Asc.Library.PasteText(data);
            },
        );

        await checkEndAction();

        if (turnOffTrackChanges)
            await Asc.Editor.callCommand(function () {
                return Api.GetDocument().SetTrackRevisions(false);
            });

        await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
    };

    return func;
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentParagraph.md), [GetElement](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetElement.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [Select](../../../office-api/usage-api/document-api/ApiParagraph/Methods/Select.md), [GetCurrentSentence](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentSentence.md), [IsTrackRevisions](../../../office-api/usage-api/document-api/ApiDocument/Methods/IsTrackRevisions.md), [SetTrackRevisions](../../../office-api/usage-api/document-api/ApiDocument/Methods/SetTrackRevisions.md), [ReplaceCurrentSentence](../../../office-api/usage-api/document-api/ApiDocument/Methods/ReplaceCurrentSentence.md), [EndAction](../../../plugins/interacting-with-editors/document-api/Methods/EndAction.md), [StartAction](../../../plugins/interacting-with-editors/document-api/Methods/StartAction.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<Video src="/assets/images/plugins/functions-video/document-editor/rewrite-text" dark />
