# SetLock

Sets the lock to the current inline text content control:
- **"unlocked"** - content can be edited and the container can be deleted.
- **"contentLocked"** - content cannot be edited.
- **"sdtContentLocked"** - content cannot be edited and the container cannot be deleted.
- **"sdtLocked"** - the container cannot be deleted.

## Syntax

```javascript
expression.SetLock(lockType);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lockType | Required | "unlocked" \| "contentLocked" \| "sdtContentLocked" \| "sdtLocked" |  | The lock type applied to the inline text content control. |

## Returns

boolean

## Example

Lock the content of an inline text content control in a document.

```javascript editor-docx
// How do I prevent users from editing the content of an inline content control in a document?

// Verify the active lock type on a content control by reading it back in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with the content lock set to it.");
inlineLvlSdt.SetLock("sdtContentLocked");
inlineLvlSdt.AddElement(run, 0);
let lock = inlineLvlSdt.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("Lock type: " + lock);
doc.Push(paragraph);
```
