# GetLock

Returns the lock type of the current container.

## Syntax

```javascript
expression.GetLock();
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SdtLock](../../Enumeration/SdtLock.md)

## Example

Read the editing restriction applied to a content control in a document.

```javascript editor-docx
// How do I check what lock type is set on a content control in a document?

// Apply a content lock to a content control and then verify what restriction is active in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Lock type: " + blockLvlSdt.GetLock());
```
