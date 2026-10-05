# SetWidth

Sets the preferred width to the current table.

:::note
Tables are created with the [ApiTable#SetWidth](../../ApiTable/Methods/SetWidth.md) method properties set by default, which always override the [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) method properties. That is why there is no use to try and apply [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md). We recommend you to use the  [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) method instead.
:::

Inherited from [ApiTablePr.SetWidth](../../ApiTablePr/Methods/SetWidth.md).

## Syntax

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../Enumeration/TableWidth.md) |  | Type of the width value from one of the available width values types. |
| nValue | Optional | number |  | The table width value measured in positive integers. |

## Returns

boolean

## Example

Stretch a table to fill the full width of the page in a document.

```javascript editor-docx
// How do I make a table span the entire width of the page in a document?

// Expand a table so it takes up all available horizontal space in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table width to 100 percent:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
