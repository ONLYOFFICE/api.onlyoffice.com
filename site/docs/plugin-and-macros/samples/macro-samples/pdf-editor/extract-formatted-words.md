# Extract formatted words

Automatically finds bold and italic text in the PDF editor and adds it to the end of the document. You can optionally turn the desired font on and off.

This macro also works in the text document editor.

```ts
(function () {
    // Configuration: enable or disable detection
    let options = {
        bold: true,
        italic: true
    };

    // Main function
    function extractFormattedWords() {
        let keyWords = new Map();
        let doc = Api.GetDocument();
        let paragraphs = doc.GetAllParagraphs();

        paragraphs.forEach(para => {
            let count = para.GetElementsCount();
            for (let i = 0; i < count; i++) {
                let el = para.GetElement(i);
                if (!el || typeof el.GetText !== "function") continue;

                let text = el.GetText();
                if (!text.trim()) continue;

                let textPr = el.GetTextPr ? el.GetTextPr() : null;
                if (!textPr) continue;

                let isBold = options.bold && textPr.GetBold();
                let isItalic = options.italic && textPr.GetItalic();

                if (!isBold && !isItalic) continue;

                let words = text.split(/\s+/);
                words.forEach(w => {
                    let clean = cleanWord(w);
                    if (!clean) return;
                    updateKeyWords(clean, { bold: isBold, italic: isItalic }, keyWords);
                });
            }
        });

        displayResults(doc, keyWords);
    }

    // Strip punctuation from beginning and end 
    function cleanWord(word) {
        return word.replace(/^[^\w]+|[^\w]+$/g, '');
    }

    // Update keywords map with formatting
    function updateKeyWords(word, format, map) {
        if (map.has(word)) {
            let existing = map.get(word);
            map.set(word, {
                bold: existing.bold || format.bold,
                italic: existing.italic || format.italic
            });
        } else {
            map.set(word, format);
        }
    }

    // Format display text
    function getFormatDescription(format) {
        let parts = [];
        if (format.bold) parts.push("Bold");
        if (format.italic) parts.push("Italic");
        return parts.join(", ");
    }

    // Output result to document
    function displayResults(doc, map) {
        let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

        doc.Push(Api.CreateParagraph());

        let title = Api.CreateParagraph();
        title.SetBold(true);
        title.AddText("FORMATTED WORDS");
        doc.Push(title);

        if (sorted.length === 0) {
            let none = Api.CreateParagraph();
            none.AddText("No formatted words found in the document.");
            doc.Push(none);
            return;
        }

        let listPara = Api.CreateParagraph();
        sorted.forEach(([word, format], index) => {
            listPara.AddText(`${word}: ${getFormatDescription(format)}`);
            if (index < sorted.length - 1) listPara.AddText(" | ");
        });
        doc.Push(listPara);

        let total = Api.CreateParagraph();
        total.AddText(`\nTotal formatted words found: ${sorted.length}`);
        doc.Push(total);
    }

    extractFormattedWords();
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetElementsCount](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetElement.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/GetText.md), [GetTextPr](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/GetTextPr.md), [GetBold](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetBold.md), [GetItalic](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/GetItalic.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [Push](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md)

## Result

![ExtractWordsFromPdf](/assets/images/plugins/extract-words-from-pdf.png#gh-light-mode-only)
![ExtractWordsFromPdf](/assets/images/plugins/extract-words-from-pdf.dark.png#gh-dark-mode-only)
