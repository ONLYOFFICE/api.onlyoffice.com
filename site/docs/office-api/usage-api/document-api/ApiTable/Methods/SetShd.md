# SetShd

Specifies the shading which is applied to the extents of the current table.

Inherited from [ApiTablePr.SetShd](../../ApiTablePr/Methods/SetShd.md).

## Syntax

```javascript
expression.SetShd(sType, r, g, b, isAuto);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type applied to the extents of the current table. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| isAuto | Optional | boolean | false | The true value disables the SetShd method use. |

## Returns

boolean

## Example

Apply a background color to the entire table in a document.

```javascript editor-docx
// How do I fill the table background with a specific color in a document?

// Highlight a table by giving it a colored background shading in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We added an orange shading to the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetShd("clear", Api.HexColor('#FF6F3D'));
doc.Push(table);
```
