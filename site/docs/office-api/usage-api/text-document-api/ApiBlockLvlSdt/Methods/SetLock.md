# SetLock

Sets the lock to the current block text content control:
-**"unlocked"** - content can be edited and the container can be deleted.
-**"contentLocked"** - content cannot be edited.
-**"sdtContentLocked"** - content cannot be edited and the container cannot be deleted.
-**"sdtLocked"** - the container cannot be deleted.

## Syntax

```javascript
expression.SetLock(lockType);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lockType | Required | "unlocked" \| "contentLocked" \| "sdtContentLocked" \| "sdtLocked" |  | The type of the lock applied to the block text content control. |

## Returns

boolean

## Example

This example sets the lock to the block text content control.

```javascript editor-docx playground
// Creates a block content control and sets its lock to "sdtContentLocked", which means that the content cannot be edited and the container cannot be deleted.

// How to set the lock to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
doc.AddElement(0, blockLvlSdt);
let lock = blockLvlSdt.GetLock();
let paragraph = doc.GetElement(1);
paragraph.AddText("Lock type: " + lock);
```
