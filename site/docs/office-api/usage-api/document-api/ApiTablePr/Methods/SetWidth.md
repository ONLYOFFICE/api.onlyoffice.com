# SetWidth

Sets the preferred width to the current table.
💡 Tables are created with the [ApiTable#SetWidth](../../ApiTable/Methods/SetWidth.md) method properties set by default, which always override the [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) method properties. That is why there is no use to try and apply [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md). We recommend you to use the  [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) method instead.

## Syntax

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../Enumeration/TableWidth.md) |  | Type of the width value from one of the available width values types. |
| nValue | Optional | number |  | The table width value measured in positive integers. |

## Returns

boolean

## Example

Define how wide a table should be relative to the page in a document.

```javascript editor-docx
// How do I make a table span a specific percentage of the available page width in a document?

// Control the overall horizontal size of a table by specifying its width in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
