# Extract words from pdf

Extracts formatted words from a PDF document.

```ts
//This macro automatically finds bold and italic text in the pdf editor and adds it to the end of the document. You can optionally turn the desired font on and off.
(function() {
    // Configuration options for the macro
    let options = {
        bold: true,    // Include bold words
        italic: true   // Include italicized words
    };

    // Main function to extract formatted words from the document
    function extractFormattedWords() {
        // Create a Map to store unique keywords and their formats
        let keyWords = new Map();
        // Get the current document
        let doc = Api.GetDocument();
        // Get all paragraphs from the document
        let paragraphs = doc.GetAllParagraphs();
        
        // Process each paragraph in the document
        paragraphs.forEach(para => {
            // Skip if paragraph is null or undefined
            if (!para) return;
            
            // Get the text content of the paragraph
            let text = para.GetText();
            // Skip if text is empty or only whitespace
            if (!text || !text.trim()) return;
            
            // Split text into individual words
            let words = text.trim().split(/\s+/);
            // Process each word in the paragraph
            words.forEach(word => {
                // Skip empty words
                if (!word) return;
                
                // Search for the word in the paragraph
                let searchResults = para.Search(word);
                // Skip if no results found
                if (!searchResults || !searchResults.length) return;
                
                // Check each occurrence of the word
                searchResults.forEach(result => {
                    // Get text properties (formatting)
                    let textPr = result.GetTextPr();
                    // Skip if no text properties
                    if (!textPr) return;
                    
                    // Check if the word has the desired formatting
                    let format = {
                        bold: options.bold && textPr.GetBold(),
                        italic: options.italic && textPr.GetItalic()
                    };
                    
                    // If the word has bold or italic formatting
                    if (format.bold || format.italic) {
                        // Remove punctuation from the end of the word
                        let cleanWord = word.replace(/[.,!?]$/, '');
                        // Update the collection of keywords
                        updateKeyWords(cleanWord, format, keyWords);
                    }
                });
            });
        });

        // Display the extracted words at the end of the document
        displayResults(doc, keyWords);
    }

    // Helper function to update the keywords Map with new formatted words
    function updateKeyWords(word, newFormat, keyWords) {
        // If the word already exists in the Map
        if (keyWords.has(word)) {
            // Get existing format
            let existingFormat = keyWords.get(word);
            // Update format (keeping previous formatting if it exists)
            keyWords.set(word, {
                bold: existingFormat.bold || newFormat.bold,
                italic: existingFormat.italic || newFormat.italic
            });
        } else {
            // Add new word to the Map
            keyWords.set(word, newFormat);
        }
    }

    // Function to display results at the end of the document
    function displayResults(doc, keyWords) {
        // Sort keywords alphabetically using Turkish locale
        let sortedKeyWords = Array.from(keyWords.entries())
            .sort((a, b) => a[0].localeCompare(b[0], 'tr'));

        // If no formatted words found, add a message
        if (sortedKeyWords.length === 0) {
            let noPara = Api.CreateParagraph();
            noPara.AddText("No formatted words found in the document.");
            doc.Push(noPara);
            return;
        }

        // Add empty paragraph for spacing
        doc.Push(Api.CreateParagraph());
        // Create and format title
        let titlePara = Api.CreateParagraph();
        titlePara.AddText("FORMATTED WORDS");
        titlePara.SetBold(true);
        doc.Push(titlePara);

        // Create paragraph for the list of formatted words
        let para = Api.CreateParagraph();
        // Add each word with its format description
        sortedKeyWords.forEach(([word, format], index) => {
            // Get text description of the formatting
            let formatText = getFormatDescription(format);
            para.AddText(`${word}: ${formatText}`);
            
            // Add separator between words
            if (index < sortedKeyWords.length - 1) {
                para.AddText(" | ");
            }
        });
        doc.Push(para);

        // Add total count of formatted words found
        let totalPara = Api.CreateParagraph();
        totalPara.AddText(`\nTotal formatted words found: ${sortedKeyWords.length}`);
        doc.Push(totalPara);
    }

    // Helper function to get readable format description
    function getFormatDescription(format) {
        let formatText = [];
        if (format.bold) formatText.push("Bold");
        if (format.italic) formatText.push("Italic");
        return formatText.join(", ");
    }
    
    // Execute the main function
    extractFormattedWords();
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [Search](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/Search.md), [GetTextPr](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetTextPr.md), [GetBold](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetBold.md), [GetItalic](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetItalic.md), [GetUnderline](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetUnderline.md), [GetStrikeout](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetStrikeout.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [Push](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md)

## Result

![ExtractWordsFromPdf](/assets/images/plugins/extract-words-from-pdf.png#gh-light-mode-only)
![ExtractWordsFromPdf](/assets/images/plugins/extract-words-from-pdf.dark.png#gh-dark-mode-only)
