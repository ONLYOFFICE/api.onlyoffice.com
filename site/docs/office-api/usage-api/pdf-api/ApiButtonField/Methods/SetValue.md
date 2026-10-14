# SetValue

Sets image for all button field widgets

:::note
Doesn't work with "textOnly" layout.
:::

## Syntax

```javascript
expression.SetValue(imageUrl);
```

`expression` - A variable that represents an [ApiButtonField](../ApiButtonField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | Optional | string | "" | The URL of the image to set for the button (currently only internet URL or Base64 encoded images are supported) |

## Returns

boolean

## Example

Set an image value for all button field widgets in a PDF.

```javascript editor-pdf
// Useful for assigning an image to a button field.

// Create an image field and set the image for its widgets.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 100, 100]);
page.AddObject(buttonField);

buttonField.SetValue("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
```
