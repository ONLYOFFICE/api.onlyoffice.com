---
description: Insert a new page into a document.
tags: ["Docs", "Plugins", "AI Tools", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Insert page

This function inserts a new page into the document at a specified location.

## Prompts

- Insert a page at the current location
- Add a page at the end of the document
- Add a page at the start of the document

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "insertPage",
    description:
        "Inserts a new page into the document at a specified location.",
    parameters: {
        type: "object",
        properties: {
            location: {
                type: "string",
                description:
                    "Where to insert the new page ('current', 'start', or 'end')",
            },
        },
        required: ["location"],
    },
    examples: [
        {
            prompt: "Insert a page at the current location",
            arguments: { location: "current" },
        },
        {
            prompt: "Add a page at the end of the document",
            arguments: { location: "end" },
        },
        {
            prompt: "Add a page at the start of the document",
            arguments: { location: "start" },
        },
    ],
});

```

### Parameters

| Name     | Type   | Example   | Description                                                          |
|----------|--------|-----------|----------------------------------------------------------------------|
| location | string | "current" | Specifies where to insert a new page ("current", "start", or "end"). |

## Function execution {#function-execution}

```ts
(function () {
    let func = new RegisteredFunction({
        name: "insertPage",
        description:
            "Inserts a new page into the document at a specified location.",
        parameters: {
            type: "object",
            properties: {
                location: {
                    type: "string",
                    description:
                        "Where to insert the new page ('current', 'start', or 'end')",
                },
            },
            required: ["location"],
        },
        examples: [
            {
                prompt: "Insert a page at the current location",
                arguments: { location: "current" },
            },
            {
                prompt: "Add a page at the end of the document",
                arguments: { location: "end" },
            },
            {
                prompt: "Add a page at the start of the document",
                arguments: { location: "start" },
            },
        ],
    });

    func.call = async function (params) {
        Asc.scope.location = params.location;

        await Asc.Editor.callCommand(function () {
            let doc = Api.GetDocument();
            if ("start" === Asc.scope.location) doc.MoveCursorToStart();
            else if ("end" === Asc.scope.location) doc.MoveCursorToEnd();

            Api.GetDocument().InsertBlankPage();
        });
    };
    return func;
})();
```

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [MoveCursorToStart](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToStart.md), [MoveCursorToEnd](../../../office-api/usage-api/document-api/ApiDocument/Methods/MoveCursorToEnd.md), [InsertBlankPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertBlankPage.md), [Asc.scope object](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<Video src="/assets/images/plugins/functions-video/document-editor/insert-page" dark />
