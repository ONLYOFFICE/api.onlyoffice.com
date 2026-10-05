# SetTag

Sets the tag attribute to the current form.

Inherited from [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md).

## Syntax

```javascript
expression.SetTag(tag);
```

`expression` - A variable that represents an [ApiComplexForm](../ApiComplexForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | Required | string |  | The tag which will be added to the current container. |

## Returns

boolean

## Example

Attach a custom tag to a complex form in a document.

```javascript editor-forms
// How do I label a form with a tag in a document?

// Organize or categorize forms by tagging them for later lookup or processing.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let complexForm = Api.CreateComplexForm({"key": "Complex1"});
complexForm.SetTag("Custom tag")
paragraph.AddElement(complexForm);
let tag = complexForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
