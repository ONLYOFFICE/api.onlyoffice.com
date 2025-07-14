# Creating structured report

Create a document with structured sections, specific formatting, alignment, and page breaks:

- create sections with different text formatting and alignment ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md))
- apply text alignment and spacing ([ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [ApiParagraph/SetSpacingAfter](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingAfter.md), [ApiParagraph/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md))
- insert page breaks and apply heading styles ([ApiRun/AddPageBreak](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/AddPageBreak.md), [ApiParagraph/SetStyle](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetStyle.md))

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Section 1: Executive Summary
let executiveSummaryParagraph = doc.GetElement(0);
executiveSummaryParagraph.AddText("Executive Summary");
let heading1Style = doc.GetStyle("Heading 1");
executiveSummaryParagraph.SetStyle(heading1Style);
executiveSummaryParagraph.SetSpacingAfter(20 * 20); // 20pt converted to twentieths of a point

// Add Executive Summary content
let summaryContentParagraph = Api.CreateParagraph();
summaryContentParagraph.AddText("This report summarizes the key performance indicators for Q2 and outlines key strategic opportunities.");
doc.Push(summaryContentParagraph);

// Insert page break
let pageBreakParagraph = Api.CreateParagraph();
let pageBreakRun = Api.CreateRun();
pageBreakRun.AddPageBreak();
pageBreakParagraph.AddElement(pageBreakRun);
doc.Push(pageBreakParagraph);

// Section 2: Detailed Analysis with Heading 1 style
let detailedAnalysisParagraph = Api.CreateParagraph();
detailedAnalysisParagraph.AddText("Detailed Analysis");
detailedAnalysisParagraph.SetStyle(heading1Style);
detailedAnalysisParagraph.SetSpacingBefore(40 * 20); // 40pt converted to twentieths of a point
doc.Push(detailedAnalysisParagraph);

// Add Detailed Analysis content
let analysisContentParagraph = Api.CreateParagraph();
analysisContentParagraph.AddText("This section contains in-depth data, charts, and interpretations covering marketing performance, sales trends, and operational efficiency.");
doc.Push(analysisContentParagraph);
```
