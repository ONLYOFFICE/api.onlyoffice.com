# SetBold

设置当前单元格或单元格范围中文本字符的粗体属性。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定当前单元格/单元格范围的内容以粗体显示。 |

## 返回值

boolean

## 示例

在电子表格中将单元格或单元格范围的文本设为粗体。

```javascript editor-xlsx
// How do I apply bold formatting to a group of cells in a spreadsheet?

// Emphasize cell content by switching its weight to bold in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Bold text");
worksheet.GetRange("A2").SetBold(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
