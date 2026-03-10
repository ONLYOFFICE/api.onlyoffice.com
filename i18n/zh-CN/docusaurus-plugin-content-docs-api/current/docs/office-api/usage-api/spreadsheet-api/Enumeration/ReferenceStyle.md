# ReferenceStyle

单元格引用类型。

## 类型

枚举

## 值

- 'xlA1'
- 'xlR1C1'


## 示例

This example gets reference style.

```javascript editor-xlsx
// How to retrieve a reference style and display it in the worksheet.

// Get a reference style.

builder.CreateFile("xlsx");
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
builder.SaveFile("xlsx", "ReferenceStyle.xlsx");
builder.CloseFile();
```
