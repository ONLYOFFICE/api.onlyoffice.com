# Extract formatted words

 Extracts all words that are **bold**, *italicized*, <u>underlined</u> or ~~strikethrough~~.

```ts
//With this macro, it scans all the words in the document, separates the sentences and headings that are "bold, italicized, underlined, strikethrough" and creates a paragraph as a keyword and counts it.
(function() {
    // Default options for text formatting detection
    let defaultOptions = {
        bold: true,           // Include bold words
        italic: true,         // Include italicized words
        underline: true,      // Include underlined words
        strikeout: true       // Include strikethrough words
    };

    /**
     * Main function to extract formatted words from document*/
    function extractFormattedWords(options = defaultOptions) {
        let oKeyWords = new Map();  // Map to store unique words and their formatting
        let doc = Api.GetDocument();
        processDocument(doc, oKeyWords, options);
        displayResults(doc, oKeyWords);
    }

    /**
     * Process the entire document to find formatted words*/
    function processDocument(doc, oKeyWords, options) {
        doc.GetAllParagraphs().forEach(para => {
            if (!para) return;
            // Split paragraph text into individual words
            let words = para.GetText().trim().split(/\s+/);
            processWords(para, words, oKeyWords, options);
        });
    }

    /**
     * Process words in a paragraph to find formatted text*/
    function processWords(para, words, oKeyWords, options) {
        words.forEach(word => {
            if (!word) return;
            // Search for the word in the paragraph
            let searchResults = para.Search(word);
            if (!searchResults?.length) return;
            processSearchResults(word, searchResults, oKeyWords, options);
        });
    }

    /**
     * Process search results to determine text formatting*/
    function processSearchResults(word, searchResults, oKeyWords, options) {
        searchResults.forEach(result => {
            let textPr = result.GetTextPr();
            if (!textPr) return;

            // Create formatting object based on user options
            let formatting = {
                bold: options.bold && textPr.GetBold(),
                italic: options.italic && textPr.GetItalic(),
                underline: options.underline && textPr.GetUnderline(),
                strikeout: options.strikeout && textPr.GetStrikeout()
            };

            // Only include words with at least one active formatting
            if (hasFormatting(formatting)) {
                updateKeyWords(word, formatting, oKeyWords);
            }
        });
    }

    /**
     * Check if the text has any of the specified formatting*/
    function hasFormatting(format) {
        return format.bold || format.italic || format.underline || format.strikeout;
    }

    /**
     * Update the keywords map with the word and its formatting*/
    function updateKeyWords(word, newFormat, oKeyWords) {
        // Clean punctuation from the end of words
        let cleanWord = word.replace(/[.,!?]$/, '');
        
        // Update existing word or add new word
        if (oKeyWords.has(cleanWord)) {
            // Merge with existing formatting (union)
            let existingFormat = oKeyWords.get(cleanWord);
            oKeyWords.set(cleanWord, {
                bold: existingFormat.bold || newFormat.bold,
                italic: existingFormat.italic || newFormat.italic,
                underline: existingFormat.underline || newFormat.underline,
                strikeout: existingFormat.strikeout || newFormat.strikeout
            });
        } else {
            oKeyWords.set(cleanWord, newFormat);
        }
    }

    /**
     * Display the results at the end of the document*/
    function displayResults(doc, oKeyWords) {
        // Sort keywords alphabetically
        let sortedKeyWords = Array.from(oKeyWords.entries())
            .sort((a, b) => a[0].localeCompare(b[0], 'tr'));

        if (sortedKeyWords.length === 0) return;

        // Create the results section
        addSpacingAndTitle(doc);
        addKeyWordsList(doc, sortedKeyWords);
        addTotalCount(doc, sortedKeyWords.length);
    }

    /**
     * Add spacing and title for the keywords section*/
    function addSpacingAndTitle(doc) {
        // Add spacing before the keywords section
        doc.Push(Api.CreateParagraph());
        
        // Create and add the title
        let titlePara = Api.CreateParagraph();
        titlePara.AddText("KEY WORDS");
        titlePara.SetBold(true);
        doc.Push(titlePara);
    }

    /**
     * Add the list of keywords to the document*/
    function addKeyWordsList(doc, sortedKeyWords) {
        // Create a single paragraph for all keywords
        let para = Api.CreateParagraph();
        
        // Add each keyword with its formatting description
        sortedKeyWords.forEach(([word, format], index) => {
            let formatText = getFormatDescription(format);
            para.AddText(`${word}: ${formatText}`);
            
            // Add separator between keywords
            if (index < sortedKeyWords.length - 1) {
                para.AddText(" | ");
            }
        });
        
        // Add the paragraph to the document
        doc.Push(para);
    }
    
    /**
     * Get human-readable description of the formatting*/
    function getFormatDescription(format) {
        let formatText = [];
        if (format.bold) formatText.push("Bold");
        if (format.italic) formatText.push("Italic");
        if (format.underline) formatText.push("Underline");
        if (format.strikeout) formatText.push("Strikeout");
        return formatText.join(", ");
    }

    /**
     * Add total count of keywords found*/
    function addTotalCount(doc, count) {
        let totalPara = Api.CreateParagraph();
        totalPara.AddText(`\nA total of ${count} keywords found.`);
        doc.Push(totalPara);
    }
    
    // Execute the main function
    extractFormattedWords();
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [Search](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/Search.md), [GetTextPr](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetTextPr.md), [GetBold](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetBold.md), [GetItalic](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetItalic.md), [GetUnderline](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetUnderline.md), [GetStrikeout](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetStrikeout.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [Push](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md)

## Result

![ExtractFormattedWords](/assets/images/plugins/extract-formatted-words.png#gh-light-mode-only)
![ExtractFormattedWords](/assets/images/plugins/extract-formatted-words.dark.png#gh-dark-mode-only)
