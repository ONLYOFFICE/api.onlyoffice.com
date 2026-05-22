# CONCATENATE

将多个文本字符串合并为一个文本字符串。

## 语法

```javascript
expression.CONCATENATE(arg_n);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg_n | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 最多 255 个将被合并的数据值。 |

## 返回值

string

## 示例

在电子表格中将多个文本字符串合并为单个字符串。

```javascript editor-xlsx
// What happens when you join different text values together in a spreadsheet?

// Link multiple pieces of text to form one combined string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONCATENATE("John", " ", "Adams"));
```
