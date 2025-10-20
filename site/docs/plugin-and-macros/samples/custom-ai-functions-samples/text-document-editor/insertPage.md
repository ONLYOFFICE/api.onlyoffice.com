# insertPage

This function inserts a new page into the document at a specified location.

## Prompts

- Insert a page at the current location
- Add a page at the end of the document
- Add a page at the start of the document

## Function registration {#function-registration}

```ts
let func = new RegisteredFunction();
func.name = "insertPage";
func.params = [
    "location (string): where to insert the new page ('current', 'start', or 'end')"
];

func.examples = [
    "If you need to insert blank page to the current location, respond with:" +
    "[functionCalling (insertPage)]: {\"location\": \"current\"}",

    "If you need to add page to the end of the document, respond with:" +
    "[functionCalling (insertPage)]: {\"location\": \"end\"}",

    "If you need to add page to the start of the document, respond with:" +
    "[functionCalling (insertPage)]: {\"location\": \"start\"}"
];
```

### Parameters

| Name     | Type   | Example   | Description                                                          |
|----------|--------|-----------|----------------------------------------------------------------------|
| location | string | "current" | Specifies where to insert a new page ("current", "start", or "end"). |

## Function execution {#function-execution}

```ts
func.call = async function(params) {
    Asc.scope.location = params.location;

    await Asc.Editor.callCommand(function(){
        let doc = Api.GetDocument();
        if ("start" === Asc.scope.location)
            doc.MoveCursorToStart();
        else if ("end" === Asc.scope.location)
            doc.MoveCursorToEnd();

        Api.GetDocument().InsertBlankPage();
    });
};

return func;
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [MoveCursorToStart](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/MoveCursorToStart.md), [MoveCursorToEnd](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/MoveCursorToEnd.md), [InsertBlankPage](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertBlankPage.md), [Asc.scope object](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object)

## Result

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/insertPage.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/images/plugins/functions-video/insertPage.dark.webm" type="video/webm" />
  Your browser does not support HTML5 video.
</video>
