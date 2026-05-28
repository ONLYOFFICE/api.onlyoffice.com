# Format

返回根据格式表达式中包含的指令格式化的类。

## 语法

```javascript
expression.Format(expression, format);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| expression | 必需 | string |  | 任何有效表达式。 |
| format | 可选 | string |  | 有效的命名或用户定义的格式表达式。 |

## 返回值

string

## 示例

在电子表格中为值应用数字格式模式。

```javascript editor-xlsx
// How do I format a number using a custom pattern in a spreadsheet?

// Display a value with a specific formatting style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
worksheet.GetRange("A1").SetValue(format);
```
