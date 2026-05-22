# ToJSON

Converts the ApiRun object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Serialize a text run into a transferable data format in a document.

```javascript editor-docx
// How do I save a text run's content and formatting as structured data in a document?

// Capture a text run as a portable object that can be restored later in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
let json = run.ToJSON(true);
let runFromJSON = Api.FromJSON(json);
runFromJSON.SetBold(true);
paragraph.AddElement(runFromJSON);
```
