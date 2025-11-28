---
hide_table_of_contents: true
---

# Creating document with comments

Create a document with comments added to paragraphs and specific text fragments for review, approval, and collaborative discussion:

- create a document with sample content ([Api/GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- add comments to entire paragraphs and specific text fragments ([Api/AddComment](/docs/office-api/usage-api/text-document-api/Api/Methods/AddComment.md));
- specify comment text and author information for each comment;
- demonstrate multiple comments from different reviewers on various document sections.

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create document title
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Contract Agreement");
titleParagraph.SetFontSize(18 * 2);
titleParagraph.SetBold(true);
titleParagraph.SetJc("center");

// Add comment to title
Api.AddComment(titleParagraph, "Should we include the contract number in the title?", "Legal Team");

// Create contract content paragraphs
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText("The delivery shall occur within 3 days of contract execution. This timeline is critical for project success and must be adhered to by all parties involved.");
doc.Push(paragraph1);

// Add comment to specific text fragment about delivery timeline
let deliveryRun = paragraph1.GetElement(0);
Api.AddComment(deliveryRun, "Align with new SLA policy? Current policy requires 5 days minimum.", "Operations Manager");

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Client agrees to the proposed changes outlined in Appendix A. All modifications must be reviewed and approved before implementation.");
doc.Push(paragraph2);

// Add comment to specific word "proposed"
let proposedTextRun = paragraph2.GetElement(0);
Api.AddComment(proposedTextRun, "Specify which changes exactly - this is too vague for legal purposes.", "Legal Reviewer");

let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("The contract was signed on March 15, 2025, in the presence of authorized representatives from both parties.");
doc.Push(paragraph3);

// Add comment to the date
let dateRun = paragraph3.GetElement(0);
Api.AddComment(dateRun, "Verify actual signature date - our records show March 16, 2025.", "Contract Administrator");

let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("Payment terms: Net 30 days from invoice date. Late payments will incur a 1.5% monthly service charge.");
doc.Push(paragraph4);

// Add comment to entire payment paragraph
Api.AddComment(paragraph4, "Consider reducing to Net 15 days to improve cash flow.", "Finance Team");

let paragraph5 = Api.CreateParagraph();
paragraph5.AddText("Note: This section intentionally left blank for additional terms and conditions.");
doc.Push(paragraph5);

// Add comment to the blank section note
let blankSectionRun = paragraph5.GetElement(0);
Api.AddComment(blankSectionRun, "Final decision or placeholder? We need to clarify this before finalizing.", "Project Manager");

// Add a section header
let sectionHeader = Api.CreateParagraph();
sectionHeader.AddText("Termination Clause");
sectionHeader.SetFontSize(14 * 2);
sectionHeader.SetBold(true);
doc.Push(sectionHeader);

let terminationParagraph = Api.CreateParagraph();
terminationParagraph.AddText("Either party may terminate this agreement with 30 days written notice. Termination does not affect obligations incurred prior to the termination date.");
doc.Push(terminationParagraph);

// Add multiple comments from different reviewers to the termination clause
Api.AddComment(terminationParagraph, "30 days seems too short for our type of contracts. Suggest 60 days minimum.", "Legal Team");
Api.AddComment(terminationParagraph, "Agreed with Legal Team. 60 days gives us better planning time.", "Operations Manager");

// Add signature section
let signatureHeader = Api.CreateParagraph();
signatureHeader.AddText("Signatures");
signatureHeader.SetFontSize(14 * 2);
signatureHeader.SetBold(true);
doc.Push(signatureHeader);

let signatureParagraph = Api.CreateParagraph();
signatureParagraph.AddText("Client Signature: _________________ Date: _________");
doc.Push(signatureParagraph);

let companySignatureParagraph = Api.CreateParagraph();
companySignatureParagraph.AddText("Company Representative: _________________ Date: _________");
doc.Push(companySignatureParagraph);

// Add comment to signature section
Api.AddComment(signatureParagraph, "Add witness signature line as well for legal compliance.", "Legal Team");

// Add a final review comment to the entire document structure
let finalParagraph = Api.CreateParagraph();
finalParagraph.AddText("Document prepared by Legal Department - Internal Review Required");
finalParagraph.SetFontSize(10 * 2);
finalParagraph.SetItalic(true);
doc.Push(finalParagraph);

Api.AddComment(finalParagraph, "All comments addressed. Ready for final approval and client review.", "Document Controller");
```
