---
hide_table_of_contents: true
description: 查找并高亮显示文档中过度使用的词语。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 识别过度重复使用词汇

分析文档中词汇使用频率，根据设定的阈值识别过度重复使用的词汇。

```ts
(function () {
    let doc = Api.GetDocument();
    let paragraphs = doc.GetAllParagraphs();
    let allText = "";

    // 定义阈值（可根据需要调整）
    let thresholdPercentage = 2; // 过度使用的百分比阈值
    let absoluteThreshold = 10; // 绝对计数阈值
    let minOccurrences = 2; // 被视为过度使用的最小出现次数
    
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

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [Push](../../../office-api/usage-api/document-api/ApiDocument/Methods/Push.md)

## 结果

<Video src="/assets/video/macros/document-editor/identify-overused-words" dark />
