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

此示例演示如何获取根据格式表达式中包含的指令格式化的类。

```javascript editor-xlsx
// How to set a format for a cell or a range using a format expression.

// Change a format of a range using an expression.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
worksheet.GetRange("A1").SetValue(format);
```
