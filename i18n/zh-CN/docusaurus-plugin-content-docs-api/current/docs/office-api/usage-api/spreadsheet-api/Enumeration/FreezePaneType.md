# FreezePaneType

指定冻结窗格的类型。

## 类型

枚举

## 值

- "row"
- "column"
- "cell"
- null

## 示例

将 “column” 冻结窗格类型设置到当前工作表。

```javascript editor-xlsx
// Specify the freeze pane type.

// How to freeze columns in the current worksheet.

const freezePaneType = "column";
Api.SetFreezePanesType(freezePaneType);
```
