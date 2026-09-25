# SetIncludePageNumbers

Specifies whether page numbers are shown in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetIncludePageNumbers(isInclude);
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isInclude | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Hide the page numbers in a table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Turn page numbers off for the table of contents entries.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetIncludePageNumbers(false);
```
