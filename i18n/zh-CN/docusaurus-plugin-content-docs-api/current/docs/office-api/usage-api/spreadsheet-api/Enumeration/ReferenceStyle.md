# ReferenceStyle

单元格引用类型。

## 类型

枚举

## 值

- 'xlA1'
- 'xlR1C1'

## 示例

获取引用样式。

```javascript editor-xlsx
// Retrieve the reference style and display it in the worksheet.

// The reference style value is written to cell A1.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
