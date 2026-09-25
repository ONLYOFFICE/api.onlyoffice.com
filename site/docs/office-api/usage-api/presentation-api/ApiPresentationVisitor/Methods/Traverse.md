# Traverse

Traverses the object the visitor was created from and calls the assigned hooks for every node.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Traverse(options);
```

`expression` - A variable that represents a [ApiPresentationVisitor](../ApiPresentationVisitor.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | Optional | Object \| boolean |  | Traversal options. Passing true is the same as \{selection: true\}. |
| options.selection | Optional | boolean | false | Traverse only the selected drawings or the selected text instead of the whole object. |
| options.notes | Optional | boolean | false | Also traverse the speaker notes of the visited slides. |
| options.masters | Optional | boolean | false | Also traverse the slide masters (only when the visitor was created from the presentation). |
| options.layouts | Optional | boolean | false | Also traverse the slide layouts (only when the visitor was created from the presentation or a master). |

## Returns

boolean

## Example

Replace a word everywhere in a presentation, including notes and masters, keeping the formatting.

```javascript editor-pptx
// How do I replace text on slides, speaker notes, layouts and masters without losing run formatting?

// Traverse with all options enabled and rewrite each run that contains the word being replaced.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetDocContent().GetElement(0).AddText("Draft agenda");
slide.AddObject(shape);
slide.AddNotesText("Draft speaker notes");

const visitor = presentation.GetVisitor();
visitor.Run = function (run) {
	const text = run.GetText();
	if (text.indexOf("Draft") === -1)
		return true;
	run.ClearContent();
	run.AddText(text.split("Draft").join("Final"));
	return true;
};
visitor.Traverse({notes: true, masters: true, layouts: true});
```
