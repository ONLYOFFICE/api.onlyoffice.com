# SetSubject

Sets the document subject.

## Syntax

```javascript
expression.SetSubject(sSubject);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSubject | Required | string |  | The document subject. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the subject of the current document.

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);

```
