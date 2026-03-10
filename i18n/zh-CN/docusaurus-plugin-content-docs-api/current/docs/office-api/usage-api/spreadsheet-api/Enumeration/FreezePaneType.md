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

Set the "column" freeze pane type to the current worksheet.

```javascript editor-xlsx
// Specify the freeze pane type.

// How to freeze columns in the current worksheet.

const freezePaneType = "column";
Api.SetFreezePanesType(freezePaneType);

```
