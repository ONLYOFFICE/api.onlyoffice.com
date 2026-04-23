# CHAR

返回计算机字符集中由代码数字指定的字符。

## 语法

```javascript
expression.CHAR(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 1 到 255 之间的数字，指定计算机字符集中的字符。 |

## 返回值

string

## 示例

此示例演示如何返回计算机字符集中由代码数字指定的字符。

```javascript editor-xlsx
// How to return the character specified by the code number from your computer's character set.

// Use function to return the character specified by the code number from your computer's character set.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHAR(234));
```
