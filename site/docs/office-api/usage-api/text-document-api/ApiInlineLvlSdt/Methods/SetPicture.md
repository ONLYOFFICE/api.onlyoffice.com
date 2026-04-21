# SetPicture

Sets the content (image) for the picture content control.
This method updates the picture inside a content control by setting an image from a provided URL.
The URL should be an internet link to the image.

## Syntax

```javascript
expression.SetPicture(imageUrl);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | Required | string |  | The URL of the image to be used for the content control. Currently, only internet URLs are supported. |

## Returns

boolean

## Example

Set image to picture content control in a document.

```javascript editor-docx
// How to set picture for an inline content control in a document?

// Set picture and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddPictureContentControl();
contentControl.SetPicture('https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg');
```
