# SetBullet

Sets the bullet or numbering to the current paragraph.

Inherited from [ApiParaPr.SetBullet](../../ApiParaPr/Methods/SetBullet.md).

## Syntax

```javascript
expression.SetBullet(oBullet);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oBullet | Required | [ApiBullet](../../ApiBullet/ApiBullet.md) |  | The bullet object created with the [Api#CreateBullet](../../Api/Methods/CreateBullet.md) or [Api#CreateNumbering](../../Api/Methods/CreateNumbering.md) method. |

## Returns

This method doesn't return any data.

## Example

Add a dash bullet marker to a paragraph inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I turn a paragraph into a bulleted list item in a spreadsheet?

// Mark a line of text as a list entry by attaching a custom bullet character in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
```
