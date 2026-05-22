# CreateNumbering

Creates an abstract multilevel numbering with a specified type.

## Syntax

```javascript
expression.CreateNumbering(sType);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | "bullet" \| "numbered" | "bullet" | The type of the numbering which will be created. |

## Returns

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## Example

Add bulleted paragraphs at multiple indent levels to a document.

```javascript editor-docx
// How do I create a bulleted list with nested indent levels in a document?

// Format several paragraphs as a structured bullet list with increasing indentation in a document.

let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("bullet");
for (let lvl = 0; lvl < 2; ++lvl) 
{
	let paragraph = Api.CreateParagraph();
	paragraph.AddText("This is an example of the bulleted paragraph № " + (lvl + 1));
	paragraph.SetNumbering(numbering.GetLevel(lvl));
	doc.Push(paragraph);
}
```
