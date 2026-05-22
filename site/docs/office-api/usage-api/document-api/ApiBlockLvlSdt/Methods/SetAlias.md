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

Give a content control a custom alias name in a document.

```javascript editor-docx
// How do I assign an alias to a content control in a document?

// Label a content control with a short name so it can be identified by title in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
blockLvlSdt.SetAlias("№1");
doc.AddElement(0, blockLvlSdt);
let alias = blockLvlSdt.GetAlias();
let paragraph = doc.GetElement(1);
paragraph.AddText("Alias: " + alias);
```
