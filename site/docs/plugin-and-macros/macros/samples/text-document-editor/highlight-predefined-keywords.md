# Highlight predefined keywords

## Description

Highlights predefined keywords in text document.

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    try {
        const keywords = ["justo", "test", "lacus", "et"];

        const oDocument = Api.GetDocument();

        for (let i = 0; i < keywords.length; i++) {
            let aSearch = oDocument.Search(keywords[i], 0);
            for (let j = 0; j < aSearch.length; j++) {
                aSearch[j].SetHighlight("lightGray");
            }
        }

        console.log("success");
    } catch (error) {
        console.log("Error: " + error.message);
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [Search](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/Search.md), [SetHighlight](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md)

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub HighlightWords()
    Selection.Find.ClearFormatting
    Selection.Find.Highlight = True
    Selection.Find.Text = "example"
    While Selection.Find.Execute
        Selection.Range.HighlightColorIndex = wdYellow
    Wend
End Sub
```

## Result

<!-- imgpath -->

![Highlight predifined keywords](/assets/images/plugins/highlight-predefined-keywords.png)