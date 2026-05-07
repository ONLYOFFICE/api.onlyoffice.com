# SetAlias

Sets the alias attribute to the current container.

## Syntax

```javascript
expression.SetAlias(alias);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| alias | Required | string |  | The alias which will be added to the current container. |

## Returns

boolean

## Example

Set an alias attribute to the container in a document.

```javascript editor-docx
// Create a block content control and set an alias to it in a document.

// How to set an alias to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
blockLvlSdt.SetAlias("№1");
doc.AddElement(0, blockLvlSdt);
let alias = blockLvlSdt.GetAlias();
let paragraph = doc.GetElement(1);
paragraph.AddText("Alias: " + alias);
```
