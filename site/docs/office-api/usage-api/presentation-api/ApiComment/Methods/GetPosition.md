# GetPosition

Returns the position of the comment in the document.

## Syntax

```javascript
expression.GetPosition();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Object

## Example

This example shows how to get the position of the comment in the presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
presentation.GetAllComments().forEach(comment => {
	comment.Delete();
});
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#7CA25A'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
slide.AddObject(shape);

slide.AddComment(Api.MillimetersToEmus(15), Api.MillimetersToEmus(35), 'Comment 1', 'John Smith');
const arrComments = presentation.GetAllComments();
const position = arrComments[0].GetPosition();

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Comment position - X: ' + position.x + ', Y: ' + position.y);

```
