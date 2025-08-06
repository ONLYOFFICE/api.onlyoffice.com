# Applying paragraph styles

Create a document that demonstrates copying and applying formatting styles from one paragraph to other paragraphs:

- create a reference paragraph with specific formatting ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md));
- read the style from the reference paragraph ([ApiParaPr/GetStyle](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/GetStyle.md), [ApiStyle](/docs/office-api/usage-api/text-document-api/ApiStyle/ApiStyle.md));
- apply the same style to multiple target paragraphs ([ApiParaPr/SetStyle](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetStyle.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Create the reference paragraph with specific formatting
let referenceParagraph = doc.GetElement(0);
referenceParagraph.AddText("Project Overview");
referenceParagraph.SetBold(true);
referenceParagraph.SetColor(30, 79, 121, false); // Dark blue color (#1E4F79)
referenceParagraph.SetFontSize(28); // 14pt = 28 half-points
referenceParagraph.SetJc("left");
referenceParagraph.SetSpacingBefore(400); // 20pt = 400 twentieths of a point

// Get the paragraph properties and create a custom style from the reference paragraph
let referenceParaPr = referenceParagraph.GetParaPr();
let customStyle = doc.CreateStyle("CustomHeadingStyle", "paragraph");
customStyle.GetParaPr().SetJc("left");
customStyle.GetParaPr().SetSpacingBefore(400);
customStyle.GetTextPr().SetBold(true);
customStyle.GetTextPr().SetColor(30, 79, 121, false);
customStyle.GetTextPr().SetFontSize(28);

// Apply the custom style to the reference paragraph
referenceParaPr.SetStyle(customStyle);

// Create target paragraphs that will receive the same style
let targetParagraphs = [
    "Technical Requirements",
    "Implementation Timeline", 
    "Budget Analysis",
    "Risk Assessment"
];

// Get the style from the reference paragraph
let referenceStyle = referenceParaPr.GetStyle();

// Apply the reference style to each target paragraph
for (let i = 0; i < targetParagraphs.length; i++) {
    let targetParagraph = Api.CreateParagraph();
    targetParagraph.AddText(targetParagraphs[i]);
    
    // Get paragraph properties and apply the same style
    let targetParaPr = targetParagraph.GetParaPr();
    targetParaPr.SetStyle(referenceStyle);
    
    doc.Push(targetParagraph);
    
    // Add some content under each heading with normal formatting
    let contentParagraph = Api.CreateParagraph();
    contentParagraph.AddText("This section contains detailed information about " + 
                           targetParagraphs[i].toLowerCase() + 
                           ". The content follows standard paragraph formatting.");
    contentParagraph.SetSpacingBefore(200); // 10pt spacing
    doc.Push(contentParagraph);
}

// Add a demonstration paragraph showing the style name
let styleDemoParagraph = Api.CreateParagraph();
styleDemoParagraph.AddText("Applied style name: " + referenceStyle.GetName());
styleDemoParagraph.SetSpacingBefore(400);
doc.Push(styleDemoParagraph);

let finalParagraph = Api.CreateParagraph();
finalParagraph.AddText("This example demonstrates how to copy a style from a reference paragraph using GetStyle() and apply it to multiple target paragraphs using SetStyle(), ensuring consistent formatting throughout the document.");
doc.Push(finalParagraph);
```
