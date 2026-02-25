# SetVersion

Sets the document version.

## Syntax

```javascript
expression.SetVersion(sVersion);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sVersion | Required | string |  | The document version. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the version of the current document.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetVersion("v9.0");

const version = core.GetVersion();
let paragraph = doc.GetElement(0);
paragraph.AddText("Version: " + version);

```
