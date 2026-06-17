---
hide_table_of_contents: true
description: 计算文档的预计阅读时间。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 阅读时间计算

分析文档全文，统计词数并考虑文本复杂度，计算普通成年人阅读所需时间。

```ts
(function () {
    let doc = Api.GetDocument();
    // 计算阅读速度的常量
    let WORDS_PER_MINUTE = 238; // 成年人平均阅读速度
    let COMPLEX_WORD_LENGTH = 7; // 大于等于此长度的单词被视为复杂词

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

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [CreateParagraph](../../../office-api/usage-api/document-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/document-api/ApiParagraph/Methods/AddText.md), [SetBold](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetBold.md), [SetItalic](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetItalic.md), [SetFontFamily](../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetFontFamily.md), [InsertContent](../../../office-api/usage-api/document-api/ApiDocument/Methods/InsertContent.md)

## 结果

<Video src="/assets/video/macros/document-editor/calculate-time-to-read" dark />
