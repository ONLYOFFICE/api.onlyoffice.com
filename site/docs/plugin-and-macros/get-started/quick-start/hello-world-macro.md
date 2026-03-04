---
sidebar_position: 1
title: Hello world macro
---
# Hello world macro

> **Get hands-on in minutes** — Follow these complete walkthroughs to build your first ONLYOFFICE macro.

Macros are quite simple — pure JavaScript with no installation required.

**Time:** 2 minutes | **Skill level:** Beginner

### Step 1: Open the macro editor

1. Open any document in ONLYOFFICE
2. Go to **Tools → Macros**
3. The macro editor will open

### Step 2: Write your first macro

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

### Step 3: Run the macro

1. Click the **Run** button in the macro editor
2. The formatted text appears instantly in your document!

### Step 4: Save your macro

1. Click **Save** in the macro editor
2. Give it a name like "Insert Blue Text"
3. Now you can run it anytime from **Tools → Macros → [Your Macro Name]**

### Practice macros

Try these examples to learn more:

#### Auto-format headings

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

#### Find and highlight keywords

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

#### Create a simple table

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

#### Calculate statistics from selection

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

### Next steps for macro development

**Learn more:**
- [Complete macro guide](../../macros/writing-macros.md)
- [Custom spreadsheet functions](../../macros/adding-custom-functions.md)
- [Debugging macros](../../macros/debugging.md)

**Explore examples:**
- [Macro samples collection](../../samples/macro-samples/macro-samples.md)
- [Converting VBA macros](../../macros/converting-vba-macros.md)

After completing these quick starts, you're ready to:

<table>
<tr>
<td width="33%" align="center">

### Learn more

Deepen your knowledge:

[**API reference**](../../interacting-with-editors/overview/overview.md)

[**Plugin structure**](../../structure/configuration/configuration.md)

[**Best practices**](../../tutorials/developing/for-web-editors/)

</td>
<td width="33%" align="center">

### Experiment

Try the interactive tools:

[**Playground**](../playground/)

[**Browse examples**](../../samples/plugin-samples/plugin-samples.md)

[**UI components**](https://onlyoffice.github.io/storybook/static/)

</td>
<td width="33%" align="center">

### Build

Start your project:

[**Plugin tutorial**](../../structure/getting-started.md)

[**Macro guide**](../../macros/getting-started.md)

[**AI integration**](../../ai/ai-plugin.md)

</td>
</tr>
</table>

## Need help?

- [Developer Forum](https://forum.onlyoffice.com/) — Community support
- [GitHub Issues](https://github.com/ONLYOFFICE/sdkjs-plugins) — Report bugs
- [Stack Overflow](https://stackoverflow.com/questions/tagged/onlyoffice) — Q&A archive
- [Documentation](../../more-information/faq/) — FAQs and guides
