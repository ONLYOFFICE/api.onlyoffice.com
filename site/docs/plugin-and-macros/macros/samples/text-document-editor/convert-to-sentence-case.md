# Convert to sentence case

Converts a sentence into sentence case (capitalises the first letter of a sentence).

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    // Get the active document
    const editor = Api.GetDocument();

    // Get all paragraphs in the document
    const paragraphs = editor.GetAllParagraphs();

    // Loop through each paragraph
    paragraphs.forEach((paragraph) => {
        let text = paragraph.GetText();

        if (!text) return; // Skip empty paragraphs

        // Split text into characters
        const characters = text.split("");

        // Variables to track sentence boundaries
        let isNewSentence = true;
        let newText = "";

        // Process each character
        characters.forEach((char, index) => {
            if (isNewSentence && /[a-zA-Z]/.test(char)) {
                // Capitalize the first letter of a sentence
                newText += char.toUpperCase();
                isNewSentence = false;
            } else {
                // Convert the rest of the sentence to lowercase
                newText += char.toLowerCase();
            }

            // Check for sentence-ending punctuation
            if (/[.!?:]/.test(char)) {
                isNewSentence = true;
            }

            // Handle colons and quotes
            if (/["]/.test(char)) {
                isNewSentence = false; // Do not treat as sentence boundary
            }
        });

        // Clear the existing content of the paragraph
        paragraph.RemoveAllElements();

        // Create a new run with the converted text
        const run = Api.CreateRun();
        run.AddText(newText);

        // Add the run to the paragraph
        paragraph.AddElement(run);
    });

})();
```

Methods used:

## Reference Microsoft VBA macro code

<!-- code generated with AI -->

```vb
Sub ConvertSelectionToSentenceCase()
    Dim txt As String
    If TypeName(Selection) = "Range" Then
        txt = Selection.Value
        Selection.Value = ToSentenceCase(txt)
    ElseIf TypeName(Selection) = "TextRange" Then
        txt = Selection.Text
        Selection.Text = ToSentenceCase(txt)
    End If
End Sub
```

## Result

<!-- imgpath -->

![](/assets/images/plugins/convert-to-sentence-case.png)
