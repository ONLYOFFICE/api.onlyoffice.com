# NA

返回 *#N/A* 错误值，表示"无可用值"。

## 语法

```javascript
expression.NA();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何返回表示「无可用值」的 N/A 错误值。

```javascript editor-xlsx
// How to return the N/A.

// Use a function to get a N/A error value.

const worksheet = Api.GetActiveSheet(); 
let func = Api.WorksheetFunction;
let result = func.NA();
worksheet.GetRange("C3").SetValue(result);

```
