# SUBSTITUTE

在文本字符串中用新文本替换现有文本。

## 语法

```javascript
expression.SUBSTITUTE(arg1, arg2, arg3, arg4);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 将替换其中字符的文本或包含文本的单元格引用。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要替换的现有文本。如果原始文本的大小写与文本的大小写不匹配，函数将不会替换文本。 |
| arg3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 用于替换原始文本的文本。 |
| arg4 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 指定要替换原始文本的哪个匹配项。如果省略，将替换原始文本的每个实例。 |

## 返回值

string

## 示例

此示例演示如何在文本字符串中用新文本替换现有文本。

```javascript editor-xlsx
// How to substitute a substring with another one.

// Use a function to replace a text with another one.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SUBSTITUTE("Online Office is a cloud business service portal", "Office", "portal"));
```
