# N

将值转换为数字，将日期转换为序列号，将 **true** 转换为 1，将错误转换为 [ErrorValue](../../Enumeration/ErrorValue.md)，其他任何内容转换为 0（零）。

## 语法

```javascript
expression.N(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | 要转换的值。值可以是逻辑值、文本或数字。 |

## 返回值

number

## 示例

此示例演示如何将值转换为数字，将日期转换为序列号，将 true 转换为 1，将错误转换为 &#123;@link global#ErrorValue ErrorValue&#125;，其他任何内容转换为 0（零）。

```javascript editor-xlsx
// How to convert an object to a number.

// Use a function to get a number from any data type.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.N(false));
```
