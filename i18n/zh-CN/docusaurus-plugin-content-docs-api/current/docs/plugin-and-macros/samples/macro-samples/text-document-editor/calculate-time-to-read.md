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

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有段落](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md)，[获取文本内容](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md)，[创建段落](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md)，[添加文本](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)，[设置粗体](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetBold.md)，[设置斜体](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetItalic.md)，[设置字体](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetFontFamily.md)，[插入内容](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## 结果

![阅读时间计算](/assets/images/plugins/time-to-read.png#gh-light-mode-only)
![阅读时间计算](/assets/images/plugins/time-to-read.dark.png#gh-dark-mode-only)
