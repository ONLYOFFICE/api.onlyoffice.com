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

将 “sdtContentLocked” 锁定设置到当前内联文本内容控件，这意味着内容无法编辑且容器无法删除。

```javascript editor-docx
// How to set lock for a content control of the text.

// Lock a text content using "sdtContentLocked" lock type.

inlineLvlSdt.SetLock("sdtContentLocked");
```
