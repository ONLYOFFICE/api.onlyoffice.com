---
hide_table_of_contents: true
---

# Inserting special symbols

Create a document with special Unicode symbols commonly used in legal, scientific, and financial documents:

- insert Unicode symbols like copyright (©), trademark (™), registered trademark (®), and other special characters ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- format symbols with different styles including bold, italic, and color ([ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md));
- demonstrate practical usage in trademark notices, copyright statements, and technical documentation ([ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md)).

``` ts editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Company name with trademark symbol
paragraph.AddText("TechNova").SetBold(true).SetFontSize(14 * 2);
paragraph.AddText("™").SetBold(true).SetFontSize(12 * 2);
paragraph.AddText(" is a registered trademark.").SetFontSize(12 * 2);

// Add copyright notice
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("All rights reserved ");
paragraph2.AddText("©").SetBold(true);
paragraph2.AddText(" 2025 TechNova Inc.");
doc.Push(paragraph2);

// Add section with various special symbols
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Special Symbols Reference:").SetBold(true).SetFontSize(14 * 2);
doc.Push(paragraph3);

// Copyright and trademark symbols
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("• Copyright: ");
paragraph4.AddText("©").SetBold(true).SetColor(0, 100, 200);
paragraph4.AddText(" (\\u00A9)");
paragraph4.AddLineBreak();
paragraph4.AddText("• Registered trademark: ");
paragraph4.AddText("®").SetBold(true).SetColor(0, 100, 200);
paragraph4.AddText(" (\\u00AE)");
paragraph4.AddLineBreak();
paragraph4.AddText("• Trademark: ");
paragraph4.AddText("™").SetBold(true).SetColor(0, 100, 200);
paragraph4.AddText(" (\\u2122)");
doc.Push(paragraph4);

// Currency and mathematical symbols
let paragraph5 = Api.CreateParagraph();
paragraph5.AddText("• Euro: ");
paragraph5.AddText("€").SetBold(true).SetColor(0, 150, 0);
paragraph5.AddText(" (\\u20AC)");
paragraph5.AddLineBreak();
paragraph5.AddText("• Section: ");
paragraph5.AddText("§").SetBold(true).SetColor(150, 0, 150);
paragraph5.AddText(" (\\u00A7)");
paragraph5.AddLineBreak();
paragraph5.AddText("• Plus-minus: ");
paragraph5.AddText("±").SetBold(true).SetColor(200, 100, 0);
paragraph5.AddText(" (\\u00B1)");
paragraph5.AddLineBreak();
paragraph5.AddText("• Infinity: ");
paragraph5.AddText("∞").SetBold(true).SetColor(100, 0, 200);
paragraph5.AddText(" (\\u221E)");
doc.Push(paragraph5);

// Practical example in a legal context
let paragraph6 = Api.CreateParagraph();
paragraph6.AddText("Legal Document Example:").SetBold(true).SetFontSize(14 * 2);
doc.Push(paragraph6);

let paragraph7 = Api.CreateParagraph();
paragraph7.AddText("This software is protected by copyright ");
paragraph7.AddText("©").SetBold(true);
paragraph7.AddText(" 2025. The TechNova");
paragraph7.AddText("®").SetBold(true);
paragraph7.AddText(" brand and associated logos are registered trademarks. ");
paragraph7.AddText("All prices are listed in euros (");
paragraph7.AddText("€").SetBold(true);
paragraph7.AddText("). See section ");
paragraph7.AddText("§").SetBold(true);
paragraph7.AddText("3.2 for terms and conditions. Accuracy is ");
paragraph7.AddText("±").SetBold(true);
paragraph7.AddText("2% unless otherwise specified.");
doc.Push(paragraph7);
```
