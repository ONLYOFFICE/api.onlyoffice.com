---
sidebar_position: -1
---

# Creating custom functions (beta)

AI functions define the functionality of an AI agent. They specify:

- what request to send to the AI model;
- what manipulations to perform on the document.

Adding custom AI functions expands the AI agent's capabilities and allows adapting it to specific use cases. Whether working with documents, spreadsheets, or presentations, custom functions let you integrate AI-driven operations directly into your workflow and align the agent's behavior with your requirements.

You can find ready-to-use custom AI functions [here](https://github.com/ONLYOFFICE-PLUGINS/onlyoffice.github.io/tree/38ea6b9909c43a9d7dfaf539d95fdda3dd9b36bc/sdkjs-plugins/content/ai/scripts/helpers) or create your own ones.

## How to use AI functions {#usage}

To use AI functions, follow the steps below:

1. [Add a model](ai-plugin.md#configuring) to the AI plugin.
2. Open the AI agent dialog box by pressing `CTRL + /`.
3. Enter your prompt and press `Enter`.

## Example: the commentText function {#example}

The `commentText` function allows adding AI generated comments directly to the document. Here’s how it works:

1. Select a word to leave a comment on.
2. Open the AI agent dialog box (`CTRL + /`).
3. Type in the instruction for the AI agent. For example: `Explain this text`.
4. Press `Enter`.

![commentText execution](/assets/images/plugins/comment-text-function.png#gh-light-mode-only)![commentText execution](/assets/images/plugins/comment-text-function.dark.png#gh-dark-mode-only)

The AI agent will run the `commentText` function and insert relevant comments into the document.

![commentText result](/assets/images/plugins/comment-text-result.png#gh-light-mode-only)![commentText result](/assets/images/plugins/comment-text-result.dark.png#gh-dark-mode-only)

## How to add custom AI functions {#adding-functions}

The process of adding a custom function involves two main phases:

- [Function registration](#registration): Registers the AI function and its metadata within the agent's environment.
- [Function execution](#execution): Implements the core logic, which includes sending requests to the AI model and manipulating document content using our [Office API](../../office-api/get-started/overview.md).

### Function registration {#registration}

To add a new function, the `RegisteredFunction` object is used, which adds metadata and logic of the custom function to the AI agent.

#### Parameters {#parameters}

| Name        | Type            | Example                                                                                                                                                           | Description                                                                      |
|-------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| name        | string          | `"commentText"`                                                                                                                                                   | The function name.                                                               |
| params      | list of strings | `["type (string): whether to add as a 'comment' or as a 'footnote' (default is 'comment')"]`                                                                      | A list of parameters the function expects from the AI.                           |
| examples    | list of strings | `["If you need to explain selected text as a comment, respond with:\n" + "[functionCalling (commentText)]: {'prompt' : 'Explain this text', 'type': 'comment'}"]` | The examples of correct function calls for the AI.                               |
| description | list of strings | `"Use this function if you asked to comment or explain anything."`                                                                                                | The function description which explains to the AI what the function is used for. |

#### Example {#example}

``` ts
let func = new RegisteredFunction();
func.name = "commentText";
func.params = [
    "type (string): whether to add as a 'comment' or as a 'footnote' (default is 'comment')"
];

func.examples = [
    "If you need to explain selected text as a comment, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Explain this text\", \"type\": \"comment\"}",


    "If you need to add a footnote to selected text, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Add a footnote to this text\", \"type\": \"footnote\"}",


    "If you need to comment selected text, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Comment this text\"}",


    "If you need to explain selected text as a footnote, respond with:\n" +
    "[functionCalling (commentText)]: {\"prompt\" : \"Explain this text\", \"type\": \"footnote\"}"
]
```

These parameters are used by the AI. The `RegisteredFunction()` object is defined in the [helperFunc.js](https://github.com/ONLYOFFICE-PLUGINS/onlyoffice.github.io/blob/8a8b3e3237745bde2f99db5b8cee0abf2c637317/sdkjs-plugins/content/ai/scripts/helperFuncs.js) file .

### Function execution {#execution}

After registering the function, implement the actual logic that gets executed when the AI calls this function:

1. Retrieve the selected text using `Asc.Editor.callCommand()`:

    ``` ts
    func.call = async function(params) {
        let type = params.type;
        let isFootnote = "footnote" === type;

        // Executes a block of code inside the editor's context using the office-js API.
        let text = await Asc.Editor.callCommand(function(){
            let doc = Api.GetDocument();
            // Gets the current selected text range.
            let range = doc.GetRangeBySelect();
            let text = range ? range.GetText() : "";
            if (!text)
            {
                text = doc.GetCurrentWord();
                // Selects the current word so comments can be applied to it.
                doc.SelectCurrentWord();
            }

            return text;
        });
    };
    ```

2. Construct the prompt for the AI by combining `params.prompt` and the selected text:

    ``` ts
    let argPromt = params.prompt + ":\n" + text;
    ```

3. Initialize a request engine for communicating with the AI model using `AI.Request.create`. The object is defined in [engine.js](https://github.com/ONLYOFFICE-PLUGINS/onlyoffice.github.io/blob/8a8b3e3237745bde2f99db5b8cee0abf2c637317/sdkjs-plugins/content/ai/scripts/engine/engine.js#L554) file. This object facilitates sending a request to the AI model:

    ``` ts
    // Initializes a request engine for communicating with the AI model (e.g. Chat, Translation).
    let requestEngine = AI.Request.create(AI.ActionType.Chat);
    if (!requestEngine)
        return;
    ```

4. Send the request using `chatRequest()` and receive the result in a callback:

    ``` ts
    // Sends a prompt to the AI model and processes the response via callback. Can stream or wait.
    let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
        if (!data)
            return;
    });
    ```

5. Insert the response as a comment or footnote using [AddFootnote()](../../office-api/usage-api/text-document-api/ApiDocument/Methods/AddFootnote.md) or [AddComment()](../../office-api/usage-api/text-document-api/ApiDocument/Methods/AddComment.md).

    `AddFootnote` implementation:

    ``` ts
    if (isFootnote)
    {
        let addFootnote = true;
        // Sends a prompt to the AI model and processes the response via callback. Can stream or wait.
        let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
            if (!data)
                return;

            // Marks the end of a logical group or block action in the editor.
            await checkEndAction();
            Asc.scope.data = data;
            Asc.scope.model = requestEngine.modelUI.name;

            if (addFootnote)
            {
                // Executes a block of code inside the editor's context using the document model API.
                await Asc.Editor.callCommand(function(){
                    // Returns the main document object, which gives access to all editing, structure, and selection APIs.
                    Api.GetDocument().AddFootnote();
                });
                addFootnote = false;
            }
            // Inserts the AI-generated result into the document at the current selection or cursor.
            await Asc.Library.PasteText(data);
        });
    };
    ```

    `AddComment` implementation:

    ``` ts
    let commentId = null;
    // Sends a prompt to the AI model and processes the response via callback. Can stream or wait.
    let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
        if (!data)
            return;

        // Marks the end of a logical group or block action in the editor.
        await checkEndAction();
        Asc.scope.data = data;
        Asc.scope.model = requestEngine.modelUI.name;
        Asc.scope.commentId = commentId;

        // Executes a block of code inside the editor's context using the document model API.
        commentId = await Asc.Editor.callCommand(function(){
            // Returns the main document object, which gives access to all editing, structure, and selection APIs.
            let doc = Api.GetDocument();

            let commentId = Asc.scope.commentId;
            if (!commentId)
            {
                // Gets the current selected text range, which can be modified or annotated.
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
    ```

> To ensure the entire block of changes can be rolled back after the request is executed, we use [StartAction](../interacting-with-editors/text-document-api/Methods/StartAction.md) and [EndAction](../interacting-with-editors/text-document-api/Methods/EndAction.md) methods across the `commentText` function.

The entire implementation of the `commentText` function with comments:

``` ts
(function(){
    // Defines the commentText function — lets AI insert a comment or footnote for selected text using AI response.
    WORD_FUNCTIONS.commentText = function()
    {
        // Creates a new function object that will be registered and exposed to the AI.
        let func = new RegisteredFunction();
        func.name = "commentText";
        // Lists the parameters expected by the function. These are passed as a JSON object by the AI agent.
        func.params = [
            "type (string): whether to add as a 'comment' or as a 'footnote' (default is 'comment')"
        ];

        // Gives example JSON inputs to teach the AI how to correctly invoke this function.
        func.examples = [
            "If you need to explain selected text as a comment, respond with:\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"Explain this text\", \"type\": \"comment\"}",


            "If you need to add a footnote to selected text, respond with:\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"Add a footnote to this text\", \"type\": \"footnote\"}",


            "If you need to comment selected text, respond with:\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"Comment this text\"}",


            "If you need to explain selected text as a footnote, respond with:\n" +
            "[functionCalling (commentText)]: {\"prompt\" : \"Explain this text\", \"type\": \"footnote\"}"
        ];
        
        // The actual logic that gets executed when the AI calls this function.
        func.call = async function(params) {
            let type = params.type;
            let isFootnote = "footnote" === type;

            // Executes a block of code inside the editor's context using the office-js API.
            let text = await Asc.Editor.callCommand(function(){
                let doc = Api.GetDocument();
                // Gets the current selected text range.
                let range = doc.GetRangeBySelect();
                let text = range ? range.GetText() : "";
                if (!text)
                {
                    text = doc.GetCurrentWord();
                    // Selects the current word so comments can be applied to it.
                    doc.SelectCurrentWord();
                }

                return text;
            });

            let argPromt = params.prompt + ":\n" + text;

            // Initializes a request engine for communicating with the AI model (e.g. Chat, Translation).
            let requestEngine = AI.Request.create(AI.ActionType.Chat);
            if (!requestEngine)
                return;

            let isSendedEndLongAction = false;
            // Marks the end of a logical group or block action in the editor.
            async function checkEndAction() {
                if (!isSendedEndLongAction) {
                    // Marks the end of a logical group or block action in the editor.
                    await Asc.Editor.callMethod("EndAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
                    isSendedEndLongAction = true
                }
            }

            // Starts a block action in the editor, used for undo/redo 
            await Asc.Editor.callMethod("StartAction", ["Block", "AI (" + requestEngine.modelUI.name + ")"]);
            // Starts a group action in the editor, used for undo/redo
            await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

            if (isFootnote)
            {
                let addFootnote = true;
                // Sends a prompt to the AI model and processes the response via callback
                let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
                    if (!data)
                        return;

                    // Marks the end of a block action in the editor.
                    await checkEndAction();
                    Asc.scope.data = data;
                    Asc.scope.model = requestEngine.modelUI.name;

                    if (addFootnote)
                    {
                        // Executes a block of code inside the editor's context using the  office-js API.
                        await Asc.Editor.callCommand(function(){
                            Api.GetDocument().AddFootnote();
                        });
                        addFootnote = false;
                    }
                    // Inserts the AI-generated result into the document at the current selection or cursor.
                    await Asc.Library.PasteText(data);
                });
            }
            else 
            {
                let commentId = null;
                // Sends a prompt to the AI model and processes the response via callback.
                let result = await requestEngine.chatRequest(argPromt, false, async function(data) {
                    if (!data)
                        return;

                    // Marks the end of a block action in the editor.
                    await checkEndAction();
                    Asc.scope.data = data;
                    Asc.scope.model = requestEngine.modelUI.name;
                    Asc.scope.commentId = commentId;

                    // Executes a block of code inside the editor's context using the office-js API.
                    commentId = await Asc.Editor.callCommand(function(){
                        let doc = Api.GetDocument();

                        let commentId = Asc.scope.commentId;
                        if (!commentId)
                        {
                            // Gets the current selected text range.
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

            // Marks the end of a block action in the editor.
            await checkEndAction();
            // Marks the end of a group action in the editor.
            await Asc.Editor.callMethod("EndAction", ["GroupActions"]);
        };

        return func;
    }
});
```

The AI agent functionality continues to evolve alongside the needs of today's digital world. Extend its capabilities by creating your own custom functions, tailored to your specific use cases.
