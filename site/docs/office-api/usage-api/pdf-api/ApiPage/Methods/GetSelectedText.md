# GetSelectedText

Gets selected text on page

## Syntax

```javascript
expression.GetSelectedText();
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example selects the text on the page and returns it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log(`The selected text is: ${page.GetSelectedText()}`);
```
