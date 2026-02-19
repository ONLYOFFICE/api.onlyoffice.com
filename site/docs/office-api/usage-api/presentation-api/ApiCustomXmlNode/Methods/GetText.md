# GetText

Returns the inner text of the current node and its child nodes.\
For example: `&lt;text&gt;123&lt;one&gt;4&lt;/one&gt;&lt;/text&gt;` returns `"1234"`.

## Syntax

```javascript
expression.GetText();
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the text content of a custom XML node.

```javascript editor-pptx
// How to get text content from an XML node.

// Get XML node text.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("Message: " + text);
paragraph.AddElement(run);
slide.AddObject(shape);
```
