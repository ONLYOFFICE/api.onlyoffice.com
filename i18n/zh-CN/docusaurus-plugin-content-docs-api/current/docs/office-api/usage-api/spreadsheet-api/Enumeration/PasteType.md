# PasteType

指定要粘贴的区域部分。

## 类型

枚举

## 值

- "xlPasteAll"
- "xlPasteAllExceptBorders"
- "xlPasteColumnWidths"
- "xlPasteComments"
- "xlPasteFormats"
- "xlPasteFormulas"
- "xlPasteFormulasAndNumberFormats"
- "xlPasteValues"
- "xlPasteValuesAndNumberFormats"

## 示例

使用全部粘贴选项粘贴数据。

```javascript editor-xlsx
// Specifies the part of the range to be pasted.

// Specifies that all the range will be pasted.

range.PasteSpecial("xlPasteAll");
```
