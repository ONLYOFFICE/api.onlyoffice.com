---
sidebar_position: 1
---

# Text annotations API guide

ONLYOFFICE 9.2.0 introduced an API extension for working with text annotations — visual underlines that highlight text sections and allow you to associate metadata with them.

This guide covers three new API methods and demonstrates their usage through a practical plugin example for an AI assistant that analyzes text.

## New API methods

1. *[`AnnotateParagraph`](../interacting-with-editors/text-document-api/Methods/AnnotateParagraph.md)* — Adds annotations to the specified paragraph.
2. *[`SelectAnnotationRange`](../interacting-with-editors/text-document-api/Methods/SelectAnnotationRange.md)* — Selects text in the document using the specified annotation.
3. *[`RemoveAnnotationRange`](../interacting-with-editors/text-document-api/Methods/RemoveAnnotationRange.md)* — Removes a specific annotation range from the document.

## Learning the new methods through plugin development

Detailed instructions on using the plugin can be found [here](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/ai/scripts/text-annotations/custom-annotations).

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
        "difference":"visual representation showing exact changes between origin and suggestion",
        "occurrence": 1,
        "confidence": 0.95
    }]
    \n\n`;
prompt += "USER REQUEST:\n```" + assistant.query + "\n```\n\n"; // user query
prompt += "TEXT TO ANALYZE:\n```\n" + paragraph_text + "\n```\n\n";
    // ....
```

You can analyze either the entire document (all paragraphs) or just the selected fragment. This example focuses on processing selected paragraphs.

Paragraph text can be retrieved by subscribing to the [`onParagraphText`](../interacting-with-editors/text-document-api/Events/onParagraphText.md) event.

```js
window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    const {paragraphId, recalcId, text, annotations} = data;
    console.log("Paragraph updated:", paragraphId);
    annotations.forEach(a => {
        console.log(`Annotation ${a.id}: ${a.name} at ${a.start} (${a.length} chars)`);
    });
});
```

While the above example provides access to every paragraph, only the IDs of those currently selected are needed. This is achieved using the [`GetAllParagraphs`](../../office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md) and [`GetInternalId`](../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetInternalId.md) methods:

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
    difference: "difference between original text and suggested replacement (in HTML format for clarity)",
    // --//--
    occurrence: "How many times the match occurs in the paragraph (1 time, 2 times, etc.)",
    confidence: "value from 0 to 1, confidence percentage in the correct selection"
}
```

After sending the request to the AI, a response is received containing all identified matches with detailed attributes.

### Adding annotations

To display these results within the document, use the [`AnnotateParagraph`](../interacting-with-editors/text-document-api/Methods/AnnotateParagraph.md) method.

```js
await Asc.Editor.callMethod("AnnotateParagraph", [{
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

1. [`onBlurAnnotation`](../interacting-with-editors/text-document-api/Events/onBlurAnnotation.md) — Triggered when an annotation loses focus.
2. [`onClickAnnotation`](../interacting-with-editors/text-document-api/Events/onClickAnnotation.md) — Triggered when the user clicks an annotation.
3. [`onFocusAnnotation`](../interacting-with-editors/text-document-api/Events/onFocusAnnotation.md) — Triggered when an annotation receives focus.

All three events return `{name, paragraphId, ranges}`. For this implementation, two events are used: `onClickAnnotation` (to show the popup) and `onBlurAnnotation` (to hide it).

```js
window.Asc.plugin.attachEditorEvent("onClickAnnotation", function (obj) {
    if (!obj) return;

    // The annotation name encodes the type and assistant ID: "customAssistant_<id>"
    if ("customAssistant" === obj["name"].slice(0, 15)) {
        const assistantId = obj["name"].slice(16);
        customAssistantManager.onClick(assistantId, obj["paragraphId"], obj["ranges"]);
    }
});

window.Asc.plugin.attachEditorEvent("onBlurAnnotation", function (obj) {
    if (!obj) return;

    if ("customAssistant" === obj["name"].slice(0, 15)) {
        const assistantId = obj["name"].slice(16);
        customAssistantManager.onBlur(assistantId);
    }
});
```

The manager delegates to the annotator's `onClick`/`onBlur` methods, which open or close the popup via the `annotatorPopup` instance. The popup itself is created using `window.Asc.PluginWindow` with `isTargeted: true` so it appears near the annotation.

To complete the workflow, users must be able to either apply the AI's suggestion or reject it.

### Replacing annotation text

```js
/**
 * @param {string} paraId - paragraph ID from the onClickAnnotation event
 * @param {string} rangeId - range ID from the onClickAnnotation event
 */
onAccept: async function (paraId, rangeId) {
    // Sets _skipNextChangeParagraph = true to prevent re-annotation after replacement
    await CustomAnnotator.prototype.onAccept.call(this);

    // Retrieve the AI suggestion stored for this annotation
    let text = this.getAnnotation(paraId, rangeId)["suggestion"];

    // Wrap the entire replace operation in a single undo/redo group
    await Asc.Editor.callMethod("StartAction", ["GroupActions"]);

    // Build the annotation range object (includes the assistant name used as identifier)
    let range = this.getAnnotationRangeObj(paraId, rangeId);

    // Select the annotated text in the document
    await Asc.Editor.callMethod("SelectAnnotationRange", [range]);

    // Replace the selected fragment and clear the selection
    Asc.scope.text = text;
    await Asc.Editor.callCommand(function () {
        Api.ReplaceTextSmart([Asc.scope.text]);
        Api.GetDocument().RemoveSelection();
    });

    // Remove the annotation as it has served its purpose
    await Asc.Editor.callMethod("RemoveAnnotationRange", [range]);

    await Asc.Editor.callMethod("EndAction", ["GroupActions"]);

    // Return focus to the editor
    await Asc.Editor.callMethod("FocusEditor");
}
```

### Removing an annotation

```js
/**
 * @param {string} paraId - paragraph ID from the onClickAnnotation event
 * @param {string} rangeId - range ID from the onClickAnnotation event
 */
onReject: async function (paraId, rangeId) {
    let range = this.getAnnotationRangeObj(paraId, rangeId);
    await Asc.Editor.callMethod("RemoveAnnotationRange", [range]);
}
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
