# SetUpperHeadingLevel

Sets the highest (outermost) heading level included in the table of contents.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetUpperHeadingLevel(nLevel);
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLevel | Required | number |  | No description provided. |

## Returns

boolean

## Example

Set the highest heading level included in a table of contents.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Skip the top heading level by starting the outline range at level 2.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetUpperHeadingLevel(2);
```
