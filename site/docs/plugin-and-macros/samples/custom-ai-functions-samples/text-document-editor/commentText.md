# commentText

This function adds an explanation or comment to the text. If no text or paragraph number is specified, the current paragraph is used by default. Specify whether the explanation should be added as a comment or as a footnote. The AI will generate the content based on your prompt and insert it in the chosen format.

## Prompts

- Explain this text
- Add a footnote to this text
- Comment this text

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "commentText";
func.description = "Use this function if you asked to comment or explain anything. If text or paragraph number is not specified assume that we are working with the current paragraph. Specify whether the explanation should be added as a comment or as a footnote. The AI will generate the content based on your prompt and insert it in the chosen format.";
func.params = [
    "type (string): whether to add as a 'comment' or as a 'footnote' (default is 'comment')"
];

func.examples = [
    "If you need to explain something, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Explain this text\", \"type\": \"comment\"}",

    "If you need to explain selected text as a comment, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Explain this text\", \"type\": \"comment\"}",

    "If you need to add a footnote to selected text, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Add a footnote to this text\", \"type\": \"footnote\"}",

    "If you need to comment selected text, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Comment this text\"}",

    "If you need to explain selected text as a footnote, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Explain this text\", \"type\": \"footnote\"}"
];
```

### Parameters

| Name | Type   | Example   | Description                                                                                                |
|------|--------|-----------|------------------------------------------------------------------------------------------------------------|
| type | string | "comment" | Specifies whether to add an explanation as a "comment" or as a "footnote". The default value is "comment". |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    let type = params.type;
    let isFootnote = "footnote" === type;

    let text = await Asc.Editor.callCommand(function(){
        let doc = Api.GetDocument();
        let range = doc.GetRangeBySelect();
        let text = range ? range.GetText() : "";
        if (!text)
        {
            text = doc.GetCurrentWord();
            doc.SelectCurrentWord();
        }

        return text;
    });

    let argPromt = params.prompt + ":\n" + text;

    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine)
        return;

    let isSendedEndLongAction = false;
    async function checkEndAction() {
        if (!isSendedEndLongAction) {
            await Asc.Editor.callMethod("EndAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
            isSendedEndLongAction = true
        }
    }

    await Asc.Editor.callMethod("StartAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    if (isFootnote)
    {
        let addFootnote = true;
        let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
            if (!data)
                return;

            await checkEndAction();
            Asc.scope.data = data;
            Asc.scope.model = requestEngine.modelUI.name;

            if (addFootnote)
            {
                await Asc.Editor.callCommand(function(){
                    Api.GetDocument().AddFootnote();
                });
                addFootnote = false;
            }
            await Asc.Library.PasteText(data);
        });
    }
    else 
    {
        let commentId = null;
        let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
            if (!data)
                return;

            await checkEndAction();
            Asc.scope.data = data;
            Asc.scope.model = requestEngine.modelUI.name;
            Asc.scope.commentId = commentId;

            commentId = await Asc.Editor.callCommand(function(){
                let doc = Api.GetDocument();

                let commentId = Asc.scope.commentId;
                if (!commentId)
                {
                    let range = doc.GetRangeBySelect();
                    if (!range)
                        return null;

                    let comment = range.AddComment(Asc.scope.data, Asc.scope.model, "uid" + Asc.scope.model);
                    if (!comment)
                        return null;
                    doc.ShowComment([comment.GetId()]);
                    return comment.GetId();
                }

                let comment = doc.GetCommentById(commentId);
                if (!comment)
                    return commentId;

                comment.SetText(comment.GetText() + scope.data);
                return commentId;
            });
        });
    }

    await checkEndAction();
    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
};

return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetRangeBySelect](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetRangeBySelect.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [AddComment](/docs/office-api/usage-api/text-document-api/ApiRange/Methods/AddComment.md), [GetCurrentWord](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCurrentWord.md), [SelectCurrentWord](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/SelectCurrentWord.md), [AddFootnote](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/AddFootnote.md), [ShowComment](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/ShowComment.md), [GetCommentById](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetCommentById.md), [GetId](/docs/office-api/usage-api/text-document-api/ApiComment/Methods/GetId.md), [SetText](/docs/office-api/usage-api/text-document-api/ApiComment/Methods/SetText.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiComment/Methods/GetText.md), [EndAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md), [StartAction](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/commentText.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/commentText.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>