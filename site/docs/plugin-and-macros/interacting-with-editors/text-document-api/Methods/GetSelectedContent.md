# GetSelectedContent

Returns the selected content in the specified format.

## Syntax

```javascript
expression.GetSelectedContent(prop);
```

`expression` - A variable that represents a [Api](Methods.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| prop | Required | object |  | The returned content properties. |
| prop.type | Optional | "text" \| "html" | "text" | The format type of the returned content (text or HTML). |

## Returns

string

## Example

```javascript
const prepareShape = function () {
	const doc = Api.GetDocument();

	const text = 'Text string to select from.';
	const paragraph = doc.GetElement(0);
	paragraph.AddText(text);

	const range = paragraph.GetRange(6, 12);
	range.Select();
};

Asc.plugin.callCommand(prepareShape);
Asc.plugin.executeMethod('GetSelectedContent', [], console.log);
```
