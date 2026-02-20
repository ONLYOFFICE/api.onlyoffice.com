# SdtLock

The lock type of the content control.

## Type

Enumeration

## Values

- "unlocked"
- "contentLocked"
- "sdtContentLocked"
- "sdtLocked"


## Example

This example set the "sdtContentLocked" lock to the current inline text content control which means that the content cannot be edited and the container cannot be deleted.

```javascript editor-docx playground
// How to set lock for a content control of the text.

// Lock a text content using "sdtContentLocked" lock type.

inlineLvlSdt.SetLock("sdtContentLocked");
```
