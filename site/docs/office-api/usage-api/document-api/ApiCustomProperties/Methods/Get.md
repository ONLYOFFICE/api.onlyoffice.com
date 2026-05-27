# Get

Returns the value of a custom property by its name.

## Syntax

```javascript
expression.Get(name);
```

`expression` - A variable that represents a [ApiCustomProperties](../ApiCustomProperties.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The custom property name. |

## Returns

string \| number \| Date \| boolean \| null

## Example

Retrieve the value of a custom property by name from a document in a document.

```javascript editor-docx
// How do I read a custom metadata field stored in a document?

// Access existing custom properties and confirm that missing ones return null in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

customProps.Add("ExistingProp", "#123456");

const existingProp = customProps.Get("ExistingProp");
const nonExistentProp = customProps.Get("NonExistentProp");

const paragraph = doc.GetElement(0);
paragraph.AddText("Existing Property Value: " + existingProp);
paragraph.AddText("\nNon-Existent Property Value: " + nonExistentProp);
```
