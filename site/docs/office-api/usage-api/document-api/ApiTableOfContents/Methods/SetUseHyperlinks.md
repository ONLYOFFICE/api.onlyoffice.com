# SetUseHyperlinks

Specifies whether entries are formatted as hyperlinks.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetUseHyperlinks(isUseHyperlinks);
```

`expression` - A variable that represents a [ApiTableOfContents](../ApiTableOfContents.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUseHyperlinks | Required | boolean |  | No description provided. |

## Returns

boolean

## Example

Format the table of contents entries as hyperlinks.

```javascript editor-docx
// Insert a table of contents built from the document headings.

// Enable hyperlinks so each entry links to its heading.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetUseHyperlinks(true);
```
