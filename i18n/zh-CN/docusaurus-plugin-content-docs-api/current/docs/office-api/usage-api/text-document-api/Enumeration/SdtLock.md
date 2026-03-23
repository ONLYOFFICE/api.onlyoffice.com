# SdtLock

内容控件的锁定类型。

## 类型

枚举

## 值

- "unlocked"
- "contentLocked"
- "sdtContentLocked"
- "sdtLocked"


## 示例

This example set the "sdtContentLocked" lock to the current inline text content control which means that the content cannot be edited and the container cannot be deleted.

```javascript editor-docx
// How to set lock for a content control of the text.

// Lock a text content using "sdtContentLocked" lock type.

inlineLvlSdt.SetLock("sdtContentLocked");
```
