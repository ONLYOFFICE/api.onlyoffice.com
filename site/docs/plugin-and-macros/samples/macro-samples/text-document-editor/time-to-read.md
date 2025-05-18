# Time To Read

The macro analyzes the text content of the entire document, counts the number of words, adjusts for text complexity, and calculates how long it would take an average adult to read it.

```ts
(function () {
    let doc = Api.GetDocument();
    // Constants for reading speed calculations
    let WORDS_PER_MINUTE = 238; // Average adult reading speed
    let COMPLEX_WORD_LENGTH = 7; // Words with this many chars or more are considered complex

    function countWords(text) {
        if (!text) return 0;
        return text.split(/\s+/).filter((word) => word.length > 0).length;
    }

    function estimateComplexity(text) {
        if (!text) return 0;
        let words = text.split(/\s+/).filter((word) => word.length > 0);
        if (words.length === 0) return 0;

        let complexWords = words.filter(
            (word) => word.length >= COMPLEX_WORD_LENGTH
        ).length;
        return complexWords / words.length;
    }

    let paragraphs = doc.GetAllParagraphs();
    let totalWords = 0;
    let totalText = "";

    paragraphs.forEach((paragraph) => {
        let text = paragraph.GetText();
        totalWords += countWords(text);
        totalText += text + " ";
    });

    let complexityFactor = estimateComplexity(totalText);

    let complexityAdjustment = 1 - complexityFactor * 0.3;
    let effectiveWPM = WORDS_PER_MINUTE * complexityAdjustment;

    let readingTimeMinutes = totalWords / effectiveWPM;
    let readingTimeHours = readingTimeMinutes / 60;

    let readingTimeText;
    if (readingTimeMinutes < 1) {
        readingTimeText = `less than 1 minute`;
    } else if (readingTimeMinutes < 60) {
        readingTimeText = `${Math.ceil(readingTimeMinutes)} minute${Math.ceil(readingTimeMinutes) !== 1 ? "s" : ""
            }`;
    } else {
        let hours = Math.floor(readingTimeHours);
        let remainingMinutes = Math.ceil((readingTimeHours - hours) * 60);
        readingTimeText = `${hours} hour${hours !== 1 ? "s" : ""}${remainingMinutes > 0
                ? ` and ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""
                }`
                : ""
            }`;
    }

    let infoText = `Reading Time: ${readingTimeText} (${totalWords} words at ${Math.round(
        effectiveWPM
    )} words per minute)`;

    let paragraph = Api.CreateParagraph();
    paragraph.AddText(infoText);
    paragraph.SetBold(true);
    paragraph.SetItalic(true);
    paragraph.SetFontFamily("Arial");
    doc.InsertContent([paragraph], 0);
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetText.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/AddText.md), [SetBold](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetBold.md), [SetItalic](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetItalic.md), [SetFontFamily](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/SetFontFamily.md), [InsertContent](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## Result

![TimeToRead](/assets/images/plugins/time-to-read.png#gh-light-mode-only)
![TimeToRead](/assets/images/plugins/time-to-read.dark.png#gh-dark-mode-only)

