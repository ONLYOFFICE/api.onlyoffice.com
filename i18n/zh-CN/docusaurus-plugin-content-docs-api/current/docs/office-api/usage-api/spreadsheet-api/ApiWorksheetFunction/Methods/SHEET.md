# SHEET

返回引用工作表的工作表编号。

## 语法

```javascript
expression.SHEET(arg1);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 可选 | string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | 将返回其工作表编号的工作表名称或引用。如果省略，则返回包含该函数的工作表的编号。 |

## 返回值

number

## 示例

此示例演示如何返回引用工作表的工作表编号。

```javascript editor-xlsx
// How to get a sheet number.

// Use a function to get a sheet index.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.SHEET("Sheet1");
worksheet.GetRange("C3").SetValue(result);

```
