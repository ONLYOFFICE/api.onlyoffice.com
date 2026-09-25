# SetLowerHeadingLevel

Sets the lowest (innermost) heading level included in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetLowerHeadingLevel(nLevel);
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLevel | Required | number |  | No description provided. |

## Returns

boolean

## Example

Set the lowest heading level included in a table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Limit the outline depth by ending the heading range at level 3.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetLowerHeadingLevel(3);
```
