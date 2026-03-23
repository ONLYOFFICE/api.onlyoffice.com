# ProtectedRangeUserType

指定受保护区域的用户类型。

## 类型

枚举

## 值

- "CanEdit"
- "CanView"
- "NotView"


## 示例

This example sets the anyone type to the protected range.

```javascript editor-xlsx
// How to change the anyone type of protected range to "NotView".

// Set anyone type of a protected range.

protectedRange.SetAnyoneType("NotView");
```
