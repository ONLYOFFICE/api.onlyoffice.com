# insertList

This function creates simple numbered or bulleted lists at the current cursor position or at the start/end of the document.

## Prompts

- Create a numbered list with items: "First item", "Second item", "Third item"
- Insert a bulleted list at the start of the document with these items: "Task 1", "Task 2", "Task 3"

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction({
    name: "insertList",
    description: "Use this function to create simple numbered or bulleted lists at the current cursor position or at the start/end of the document.",
    parameters: {
        type: "object",
        properties: {
            items: { type: "array", description: "array of strings representing list items", items: { type: "string" } },
            listType: { type: "string", description: "'numbered' for numbered list, 'bulleted' for bulleted list (default is 'bulleted')" },
            position: { type: "string", description: "where to insert the list - 'current', 'start', or 'end' (default is 'current')" }
        },
        required: ["items"]
    }
});
```

### Parameters

| Name     | Type   | Example                                    | Description                                                                           |
|----------|--------|--------------------------------------------|---------------------------------------------------------------------------------------|
| items    | array  | ["First item", "Second item", "Third item"] | Array of strings representing list items.                                            |
| listType | string | "numbered"                                 | 'numbered' for numbered list, 'bulleted' for bulleted list (default is 'bulleted'). |
| position | string | "current"                                  | Where to insert the list - 'current', 'start', or 'end' (default is 'current').     |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.items = params.items || ["Item 1", "Item 2", "Item 3"];
    Asc.scope.listType = params.listType || "bulleted";
    Asc.scope.position = params.position || "current";

    await Asc.Editor.callCommand(function() {
        let doc = Api.GetDocument();
        
        if (Asc.scope.position === "start") {
            doc.MoveCursorToStart();
        } else if (Asc.scope.position === "end") {
            doc.MoveCursorToEnd();
            let newParagraph = Api.CreateParagraph();
            doc.InsertContent([newParagraph]);
        } else if (Asc.scope.position === "current") {
            let newParagraph = Api.CreateParagraph();
            doc.InsertContent([newParagraph]);
        }
        
        let paragraphs = [];
        let numbering;
        
        if (Asc.scope.listType === "numbered") {
            numbering = doc.CreateNumbering("numbered");
        } else {
            numbering = doc.CreateNumbering("bullet");
        }
        
        let numLvl = numbering.GetLevel(0);
        
        for (let i = 0; i < Asc.scope.items.length; i++) {
            let item = Asc.scope.items[i];
            let paragraph = Api.CreateParagraph();
            paragraph.AddText(item);
            paragraph.SetNumbering(numLvl);
            paragraph.SetContextualSpacing(true);
            paragraphs.push(paragraph);
        }
        
        doc.InsertContent(paragraphs);
    });
};

return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [MoveCursorToStart](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/MoveCursorToStart.md), [MoveCursorToEnd](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/MoveCursorToEnd.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [InsertContent](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md), [CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md), [GetLevel](/docs/office-api/usage-api/text-document-api/ApiNumbering/Methods/GetLevel.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetNumbering.md), [SetContextualSpacing](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetContextualSpacing.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/insertList.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/text-document-editor/insertList.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
