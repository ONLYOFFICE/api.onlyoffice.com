# ProtectedRangeUserType

指定受保护区域的用户类型。

## 类型

枚举

## 值

- "CanEdit"
- "CanView"
- "NotView"

## 示例

将任何人类型设置到受保护区域。

```javascript editor-xlsx
// How do I change the access type of a protected range to "NotView" for anyone?

// Set anyone type of a protected range.

protectedRange.SetAnyoneType("NotView");
```
