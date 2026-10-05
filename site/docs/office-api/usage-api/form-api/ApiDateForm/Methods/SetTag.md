# SetTag

Sets the tag attribute to the current form.

Inherited from [ApiFormBase.SetTag](../../ApiFormBase/Methods/SetTag.md).

## Syntax

```javascript
expression.SetTag(tag);
```

`expression` - A variable that represents an [ApiDateForm](../ApiDateForm.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | Required | string |  | The tag which will be added to the current container. |

## Returns

boolean

## Example

Attach a tag to a date form in a document.

```javascript editor-forms
// How do I attach a tag to a date form in a document?

// Label a date form with a custom identifier for later retrieval in a document.

let doc = Api.GetDocument();
let dateForm = Api.CreateDateForm({"tag" : "Hello", "key": "Nowadays", "tip": "Enter current date", "required": true, "placeholder": "Your date here", "format": "mm.dd.yyyy", "lang": "en-US"});
let paragraph = doc.GetElement(0);
paragraph.AddElement(dateForm);
dateForm.SetTag("DateTime");
let tag = dateForm.GetTag();
paragraph = Api.CreateParagraph();
paragraph.AddText("Form tag: " + tag);
doc.Push(paragraph);
```
