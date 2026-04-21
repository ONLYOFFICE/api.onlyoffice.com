# PasteSpecialOperation

将应用于复制数据的数学运算。

## 类型

枚举

## 值

- "xlPasteSpecialOperationAdd"
- "xlPasteSpecialOperationDivide"
- "xlPasteSpecialOperationMultiply"
- "xlPasteSpecialOperationNone"
- "xlPasteSpecialOperationSubtract"

## 示例

使用粘贴选项粘贴数据。

```javascript editor-xlsx
// Specify the mathematical operation which will be applied to the copied data.

// Specify that the add mathematical operation will be applied to the copied data.

range.PasteSpecial("xlPasteAll", "xlPasteSpecialOperationAdd");
```
