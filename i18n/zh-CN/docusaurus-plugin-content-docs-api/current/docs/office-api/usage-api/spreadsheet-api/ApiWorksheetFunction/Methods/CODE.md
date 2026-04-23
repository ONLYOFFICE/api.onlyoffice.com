# CODE

返回计算机字符集中指定文本字符串第一个字符的代码数字。

## 语法

```javascript
expression.CODE(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要获取其第一个字符代码的文本。 |

## 返回值

number

## 示例

此示例演示如何返回计算机字符集中指定文本字符串第一个字符的代码数字。

```javascript editor-xlsx
// How to return the code number from your computer's character set.

// Use function to get a code number from your computer's character set.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CODE("office"));
```
