# Identify overused words

Analyzes the frequency of words in a document and identifies overused words based on specified thresholds.

```ts
(function () {
    let doc = Api.GetDocument();
    let paragraphs = doc.GetAllParagraphs();
    let allText = "";

    // Define thresholds, adjust as needed
    let thresholdPercentage = 2; // Percentage threshold for overuse
    let absoluteThreshold = 10; // Absolute count threshold
    let minOccurrences = 2; // Minimum occurrences to be considered overused

    for (let i = 0; i < paragraphs.length; i++) {
        allText += " " + paragraphs[i].GetText();
    }

    function analyzeWordFrequency(text) {
        text = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

        let stopWords = [
            "a",
            "an",
            "the",
            "and",
            "but",
            "or",
            "for",
            "nor",
            "on",
            "at",
            "to",
            "from",
            "by",
            "with",
            "in",
            "of",
            "is",
            "are",
            "was",
            "were",
            "be",
            "been",
            "being",
            "this",
            "that",
            "these",
            "those",
            "i",
            "you",
            "he",
            "she",
            "it",
            "we",
            "they",
        ];

        let words = text
            .split(/\s+/)
            .filter((word) => word.length > 1 && !stopWords.includes(word));
        let totalWords = words.length;
        let wordFrequency = {};

        words.forEach((word) => {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        });

        let overusedWords = [];
        for (let word in wordFrequency) {
            let count = wordFrequency[word];
            let percentage = (count / totalWords) * 100;
            if (
                (percentage > thresholdPercentage || count > absoluteThreshold) &&
                count >= minOccurrences
            ) {
                overusedWords.push({
                    word,
                    count,
                    percentage: percentage.toFixed(2) + "%",
                });
            }
        }

        overusedWords.sort((a, b) => b.count - a.count);
        return { overusedWords, totalWords };
    }

    let analysis = analyzeWordFrequency(allText);

    let paragraph = Api.CreateParagraph();
    paragraph.AddText("Overused Word Analysis Results:");
    doc.Push(paragraph);

    if (analysis.overusedWords.length > 0) {
        analysis.overusedWords.forEach((entry) => {
            let paragraph = Api.CreateParagraph();
            paragraph.AddText(
                `${entry.word}: ${entry.count} occurrences (${entry.percentage})`
            );
            doc.Push(paragraph);
        });
    } else {
        paragraph = Api.CreateParagraph();
        paragraph.AddText("No overused words detected.");
        doc.Push(paragraph);
    }

    paragraph = Api.CreateParagraph();
    paragraph.AddText("Total words analyzed: " + analysis.totalWords);
    doc.Push(paragraph);
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md)

## Result

![IdentifyOverusedWords](/assets/images/plugins/identify-overused-words.png#gh-light-mode-only)
![IdentifyOverusedWords](/assets/images/plugins/identify-overused-words.dark.png#gh-dark-mode-only)
