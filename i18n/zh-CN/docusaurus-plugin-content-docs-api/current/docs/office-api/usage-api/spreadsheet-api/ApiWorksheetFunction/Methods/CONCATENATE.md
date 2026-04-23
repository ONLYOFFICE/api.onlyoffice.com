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

此示例演示如何将多个文本字符串合并为一个文本字符串。

```javascript editor-xlsx
// How to add multiple text strings into one text string.

// Use function to create one text string from multiple ones.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONCATENATE("John", " ", "Adams"));
```
