# Text annotations API guide

ONLYOFFICE 9.2.0 introduced an API extension for working with text annotations — visual underlines that highlight text sections and allow you to associate metadata with them.

This guide covers three new API methods and demonstrates their usage through a practical plugin example for an AI assistant that analyzes text.

## New API methods

1. *[`AnnotateParagraph`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AnnotateParagraph/)* — Adds annotations to the specified paragraph.
2. *[`SelectAnnotationRange`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/SelectAnnotationRange/)* — Selects text in the document using the specified annotation.
3. *[`RemoveAnnotationRange`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/RemoveAnnotationRange/)* — Removes a specific annotation range from the document.

## Learning the new methods through plugin development

Detailed instructions on using the plugin can be found [here](https://github.com/ONLYOFFICE-PLUGINS/onlyoffice.github.io/blob/feature/AI/sdkjs-plugins/content/ai/scripts/text-annotations/custom-annotations/README.md).

The plugin adds annotations to text, enabling users to create AI assistants that analyze content and highlight sections matching specific criteria defined in the assistant's prompt. There are three options:

1. *Hint* — Displays explanatory text.
2. *Replace* — Suggests replacement text.
3. *Replace + Hint* — Suggests replacement text and displays an explanation below (which can include links).

The interface for creating or editing an assistant consists of three fields:

1. *Name*
2. *Type* (Hint, Replace, Replace + Hint)
3. *Prompt* — The primary field where the user defines the criteria. This should be as specific as possible to achieve accurate results.

There is also a hidden field containing the assistant's unique ID. The assistant is saved to `localStorage` as a stringified object:

```js
const assistant = {
  id: string,
  name: string,
  type: number, // 0 - Hint, 1 - Replace, 2 - Replace + Hint
  query: string, // prompt - user query
}
```

## Creating an assistant

- Name: *Date Corrector*
- Type: *Replace + Hint*
- Query: *Identify all incorrect dates between 1900 and 2000 in the text and suggest corrections. If a date is correct, ignore it. Provide explanations with source links.*

### Running the assistant

When the assistant runs, the user's query is refined with additional rules to ensure the AI's response follows the required JSON format. For instance, to provide replacements and explanations, the exact text fragment being targeted must be identified.

```js
let prompt = `You are a multi-disciplinary text analysis assistant.  
    Your task is to find text fragments that match the user's criteria.`;
    // ...
prompt += `Response format - return ONLY this JSON array with no additional text:
    [{
        "origin": "exact text fragment that matches the query",
        "suggestion": "suggested replacement (plain text)",
        "reason": "detailed explanation why it matches the criteria",
        "difference":"visual representation showing exact changes between origin and suggestion"
        "occurrence": 1,
        "confidence": 0.95
    }]
    \n\n`;
prompt += "USER REQUEST:\n```" + assistant.query + "\n```\n\n"; // user query
prompt += "TEXT TO ANALYZE:\n```\n" + paragraph_text + "\n```\n\n";
    // ....
```

You can analyze either the entire document (all paragraphs) or just the selected fragment. This example focuses on processing selected paragraphs.

Paragraph text can be retrieved by subscribing to the [`onParagraphText`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onParagraphText/) event.

```js
window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    const {paragraphId, recalcId, text, annotations} = data;
    console.log("Paragraph updated:", paragraphId);
    annotations.forEach(a => {
        console.log(`Annotation ${a.id}: ${a.name} at ${a.start} (${a.length} chars)`);
    });
});
```

While the above example provides access to every paragraph, only the IDs of those currently selected are needed. This is achieved using the [`GetAllParagraphs`](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs/) and [`GetInternalId`](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetInternalId/) methods:

```js
const range = Api.GetDocument().GetRangeBySelect();
const paragraphs = range.GetAllParagraphs();
const ids = paragraphs.map(p => p.GetInternalId());
```

The AI response is returned in the following format:

```js
let aiAnswer = {
    origin: "fragment matching the query",
    suggestion: "suggested replacement",
    reason: "detailed explanation why the fragment satisfies the query",
    difference: "difference between original text and suggested replacement (in HTML format for clarity)"
    // --//--
    occurrence: "How many times the match occurs in the paragraph (1 time, 2 times, etc.)"
    confidence: "value from 0 to 1, confidence percentage in the correct selection"
}
```

After sending the request to the AI, a response is received containing all identified matches with detailed attributes.

### Adding annotations

To display these results within the document, use the [`AnnotateParagraph`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AnnotateParagraph/) method.

```js
window.Asc.plugin.executeMethod("AnnotateParagraph", [{
    type: "highlightText", // currently only this value is possible
    name: "customAssistant_" + assistantId, // assistant ID
    paragraphId: "p1", // value taken from paragraph information
    recalcId: "r12", // value taken from paragraph information
    ranges: [ // calculated based on aiAnswer.origin and aiAnswer.occurrence
        { start: 5, length: 10, id: "a1" } 
        // start is the index of the first character of the match in the paragraph
    ]
}]);
```

### Working with annotations

Once annotations are added, user interaction must be handled. Clicking an annotation should trigger a popup displaying the original text, the suggested replacement, and a brief explanation, along with **Accept** and **Reject** buttons. This is managed through three specific events:

1. [`onBlurAnnotation`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onBlurAnnotation/) — Triggered when an annotation loses focus.
2. [`onClickAnnotation`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onClickAnnotation/) — Triggered when the user clicks an annotation.
3. [`onFocusAnnotation`](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/text-document-api/Events/onFocusAnnotation/) — Triggered when an annotation receives focus.

All three events return `{name, paragraphId, ranges}`. For this implementation, two events are used: `onClickAnnotation` (to show the popup) and `onBlurAnnotation` (to hide it).

```js
let popup = new window.Asc.PluginWindow();

let variation = {
    url : 'annotationPopup.html',
    isVisual : true,
    buttons : [{ text:'Accept', primary: true }, { text:'Reject', primary: false }],
    isModal : false,
    description: 'Proposal for replacement',
    EditorsSupport : ["word"],
    size : [300, 200],
    fixedSize : true,
    isTargeted : true // indicates that the window should appear near the annotation
};

window.Asc.plugin.attachEditorEvent("onClickAnnotation", (annotatRanges) => {
    const {name, paragraphId, ranges} = annotatRanges;
    // --//--
    popup.show(variation);
});  

window.Asc.plugin.attachEditorEvent("onBlurAnnotation", (annotatRanges) => {
    // --//--
    popup.close();
});
```

To complete the workflow, users must be able to either apply the AI's suggestion or reject it.

### Replacing annotation text

```js
/**
 * @param {Object} annotatRanges - Object received from the onClickAnnotation event
 * @param {string} annotatRanges.name
 * @param {string} annotatRanges.paragraphId
 * @param {Array<string>} annotatRanges.ranges
 * @param {string} suggestion - text suggested by AI as replacement
 */
async function onAccept(annotatRanges, suggestion) {

    const annotation = {
        paragraphId: annotatRanges.paragraphId,
        rangeId: annotatRanges.ranges[0], // replace only the first element
        name: name
    };

    // Select the annotated text in the document that needs to be changed
    await new Promise(resolve => 
        window.Asc.plugin.executeMethod(
            "SelectAnnotationRange", 
            [annotation],
            resolve
        );
    );

    // Replace the selected fragment's text and clear the selection
    Asc.scope.suggestion = aiAnswer.suggestion;
    await new Promise(resolve => {
        Asc.plugin.callCommand(
            () => {
                Api.ReplaceTextSmart([Asc.scope.suggestion]);
                Api.GetDocument().RemoveSelection();
            }
            false, // defines whether to close the window immediately after execution
            true, // defines whether the document will be recalculated
            resolve
        );
    });

    // Remove the annotation as it has served its purpose
    await new Promise(resolve => 
        window.Asc.plugin.executeMethod(
            "RemoveAnnotationRange", 
            [annotation],
            resolve
        );
    );

    // Return focus to the editor
    await new Promise(resolve => 
        window.Asc.plugin.executeMethod(
            "FocusEditor",
            [],
            resolve
        );
    );
},
```

### Removing an annotation

```js
/**
 * @param {Object} annotatRanges - Object received from the onClickAnnotation event
 * @param {string} annotatRanges.name
 * @param {string} annotatRanges.paragraphId
 * @param {Array<string>} annotatRanges.ranges
 */
async function onReject(annotatRanges)
{
    // Remove the annotation
    await new Promise(resolve => 
        window.Asc.plugin.executeMethod(
            "RemoveAnnotationRange", 
            [{
                paragraphId: annotatRanges.paragraphId,
                rangeId: annotatRanges.ranges[0],
                name: name
            }],
            resolve
        );
    );
};
```

These steps outline the process of creating a plugin for intelligent text analysis and automated search-and-replace functionality using the ONLYOFFICE API.

## Use cases

1. **Plagiarism detection**
   Query: "Find fragments with uniqueness below 90%."
2. **AI text detection**
   Query: "Identify which parts of the text may have been generated by AI."
3. **Legal analysis**
   Query: "Verify text compliance with specific legal codes. Only non-compliant sections are flagged; compliant text is ignored."
4. **Stylistic analysis**
   Identify bureaucratic jargon and suggest clearer, more engaging alternatives.
