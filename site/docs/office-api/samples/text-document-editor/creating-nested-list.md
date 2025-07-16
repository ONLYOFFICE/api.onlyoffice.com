# Creating nested list

Create a document with a multi-level nested list that combines numbered and bulleted items:

- create multilevel numbering for different list levels ([ApiDocument/CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md), [ApiNumbering/GetLevel](/docs/office-api/usage-api/text-document-api/ApiNumbering/Methods/GetLevel.md));
- configure different list types and indentation for each level ([ApiNumberingLevel/SetTemplateType](/docs/office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/SetTemplateType.md), [ApiNumberingLevel/GetParaPr](/docs/office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/GetParaPr.md));
- apply proper spacing and formatting for nested structure ([ApiParagraph/SetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetNumbering.md), [ApiParagraph/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Add title
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Steps to Complete the Project:").SetBold(true).SetFontSize(14 * 2);

// Create numbered numbering for multilevel list
let numbering = doc.CreateNumbering("numbered");

// Configure level 1 (numbered: 1., 2., 3.)
let level1 = numbering.GetLevel(0);
level1.SetTemplateType("1.");
let level1ParaPr = level1.GetParaPr();
level1ParaPr.SetIndLeft(720); // 30pt indentation (720 twips = 30pt)
level1ParaPr.SetIndFirstLine(-360); // Hanging indent

// Configure level 2 (bulleted: *)
let level2 = numbering.GetLevel(1);
level2.SetTemplateType("bullet", "*");
let level2ParaPr = level2.GetParaPr();
level2ParaPr.SetIndLeft(1440); // 60pt indentation (1440 twips = 60pt)
level2ParaPr.SetIndFirstLine(-360); // Hanging indent

// Main tasks (Level 1) and their subtasks (Level 2)
let tasks = [
  {
    main: "Prepare Materials",
    subtasks: ["Collect data", "Design presentation slides"]
  },
  {
    main: "Conduct Review", 
    subtasks: ["Distribute materials to reviewers", "Incorporate feedback"]
  },
  {
    main: "Finalize Delivery",
    subtasks: ["Export final documents", "Send to client"]
  }
];

// Create nested list structure
for (let i = 0; i < tasks.length; i++) {
  // Add main task (Level 1)
  let mainParagraph = Api.CreateParagraph();
  mainParagraph.AddText(tasks[i].main);
  mainParagraph.SetNumbering(level1);
  mainParagraph.SetSpacingBefore(120); // 6pt spacing before
  mainParagraph.SetSpacingAfter(60); // 3pt spacing after
  doc.Push(mainParagraph);
  
  // Add subtasks (Level 2)
  for (let j = 0; j < tasks[i].subtasks.length; j++) {
    let subParagraph = Api.CreateParagraph();
    subParagraph.AddText(tasks[i].subtasks[j]);
    subParagraph.SetNumbering(level2);
    subParagraph.SetSpacingBefore(60); // 3pt spacing before
    subParagraph.SetSpacingAfter(60); // 3pt spacing after
    doc.Push(subParagraph);
  }
}

// Add closing note
let closingParagraph = Api.CreateParagraph();
closingParagraph.SetSpacingBefore(240); // 12pt spacing before
closingParagraph.AddText("This nested structure helps organize complex projects with clear hierarchy and visual separation between main tasks and their related subtasks.");
doc.Push(closingParagraph);
```
