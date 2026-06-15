---
sidebar_position: 1
title: Hello world macro
---
# Hello world macro

Macros are quite simple - pure JavaScript with no installation required.

**Time:** 2 minutes | **Skill level:** Beginner

## Step 1: Open the macro editor

1. Open any document in ONLYOFFICE.
2. Open the **View** tab and click **Macros**.
3. The macro editor will open.

## Step 2: Write your first macro

Paste this code into the editor:

```javascript
(function() {
    // Get the active document
    var oDocument = Api.GetDocument();

    // Create a new paragraph
    var oParagraph = Api.CreateParagraph();
    oParagraph.AddText("This text was added by a macro!");

    // Make it bold and blue
    oParagraph.SetBold(true);
    oParagraph.SetColor(0, 102, 204);

    // Add it to the document
    oDocument.Push(oParagraph);
})();
```

**What this does:**

- Gets the current document
- Creates a new paragraph with text
- Applies bold formatting and blue color
- Inserts it into the document

## Step 3: Run the macro

1. Click the **Run** button in the macro editor.
2. The formatted text appears instantly in your document.

## Step 4: Save your macro

1. Click **Save** in the macro editor.
2. Give it a name like "Insert Blue Text".
3. Now you can run it anytime from **View → Macros → [Your Macro Name]**.

## Practice macros

Try these examples to learn more:

### Auto-format headings

```javascript
(function() {
    var oDocument = Api.GetDocument();

    // Create a heading
    var oHeading = Api.CreateParagraph();
    oHeading.AddText("Chapter 1: Introduction");
    oHeading.SetBold(true);
    oHeading.SetFontSize(24);
    oHeading.SetColor(51, 51, 51);

    oDocument.Push(oHeading);
})();
```

### Find and highlight keywords

```javascript
(function() {
    var oDocument = Api.GetDocument();
    var searchText = "important";

    // Search for the keyword
    oDocument.Search(searchText, true, false, false);

    // Highlight found text
    var oRange = oDocument.GetRangeBySelect();
    if (oRange) {
        oRange.SetHighlight("yellow");
    }
})();
```

### Create a simple table

```javascript
(function() {
    var oDocument = Api.GetDocument();

    // Create a 3x3 table
    var oTable = Api.CreateTable(3, 3);

    // Fill first row with headers
    oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Name");
    oTable.GetCell(0, 1).GetContent().GetElement(0).AddText("Age");
    oTable.GetCell(0, 2).GetContent().GetElement(0).AddText("City");

    // Add the table to document
    oDocument.Push(oTable);
})();
```

### Calculate statistics from selection

```javascript
(function() {
    var oDocument = Api.GetDocument();
    var oRange = oDocument.GetRangeBySelect();

    if (oRange) {
        var text = oRange.GetText();
        var wordCount = text.split(/\s+/).filter(Boolean).length;
        var charCount = text.length;

        // Insert statistics
        var oParagraph = Api.CreateParagraph();
        oParagraph.AddText("\nStatistics:\n");
        oParagraph.AddText("Words: " + wordCount + "\n");
        oParagraph.AddText("Characters: " + charCount);

        oDocument.Push(oParagraph);
    }
})();
```

## Next steps

**Learn more:**

- [Complete macro guide](../../guides/writing-macros.md)
- [Custom spreadsheet functions](../../guides/adding-custom-functions.md)
- [Debugging macros](../../guides/debugging.md)

**Explore examples:**

- [Macro samples collection](/samples/?doctype=docs&text=macros)
- [Converting VBA macros](../../guides/converting-vba-macros.md)

**Need help?**

- [Developer Forum](https://forum.onlyoffice.com/) - Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) - Report bugs
- [FAQ](../../more-information/faq.md) - Frequently asked questions
