# Convert to radio buttons

Converts letter-based choices (A, B, C, etc.) into interactive radio buttons.

```ts
//This macro allows you to open the selector by turning the options (question and answer) in the file into a radia button. the desired edits are indicated with a note.
(function() {
    let doc = Api.GetDocument();
    let paragraphs = doc.GetAllParagraphs();
    let startLetter = 'A';
    let endLetter = 'E';
    let currentGroup = null;

    // Process each paragraph to identify and convert choice options
    paragraphs.forEach((para, index) => {
        let text = para.GetText().trim();
        let firstChar = text.charAt(0);

        // Skip header text that uses letter range format (e.g., "A-E")
        if (text.match(/^[A-Z]-[A-Z]$/)) {
            return;
        }

        // Check if paragraph starts with a letter in our target range
        if (firstChar >= startLetter && firstChar <= endLetter) {
            // Verify the letter is followed by a parenthesis or period (e.g., "A)" or "A.")
            if (text.charAt(1) === ')' || text.charAt(1) === '.') {
                // Start a new group if we don't have one
                if (!currentGroup) {
                    currentGroup = {
                        startIndex: index,
                        items: []
                    };
                }
                // Add this option to the current group
                currentGroup.items.push({
                    letter: firstChar,
                    text: text.substring(2).trim(), // Extract text after the letter marker
                    paragraph: para
                });
            }
        } else if (currentGroup) {
            // We found a non-matching paragraph, process the group we've collected
            processChoiceGroup(currentGroup);
            currentGroup = null;
        }
    });

    // Process any remaining group at the end of the document
    if (currentGroup) {
        processChoiceGroup(currentGroup);
    }

    // Convert a group of choice options into radio buttons
    function processChoiceGroup(group) {
        // Create a unique group key for the radio button group
        let groupKey = "choices_" + group.startIndex;
        
        // Convert each option into a radio button
        group.items.forEach(item => {
            // Clear the existing content
            item.paragraph.RemoveAllElements();
            
            // Create a checkbox form element with radio button behavior
            let checkbox = Api.CreateCheckBoxForm({
                key: groupKey,       // Group radio buttons together with the same key
                tip: "Select an option",
                required: true,
                radio: true          // Makes it act as a radio button
            });

            // Add the checkbox and then the option text
            item.paragraph.AddElement(checkbox);
            item.paragraph.AddText(" " + item.letter + ")" + item.text);
        });
    }
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateCheckBoxForm](../../../../office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)

## Result

![ConvertToRadioButtons](/assets/images/plugins/convert-to-radio-buttons.png#gh-light-mode-only)
![ConvertToRadioButtons](/assets/images/plugins/convert-to-radio-buttons.dark.png#gh-dark-mode-only)
