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

This example sets an alias attribute to the container.

```javascript editor-docx
// Creates a block content control and sets an alias to it.

// How to set an alias to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
blockLvlSdt.SetAlias("№1");
doc.AddElement(0, blockLvlSdt);
let alias = blockLvlSdt.GetAlias();
let paragraph = doc.GetElement(1);
paragraph.AddText("Alias: " + alias);
```
