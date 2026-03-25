# FALSE

返回 **false** 逻辑值。

## 语法

```javascript
expression.FALSE();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何返回 false 逻辑值。

```javascript editor-xlsx
// How to get false value.

// Use function to get a boolean false.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FALSE(); //returns false, doesnt require arguments
worksheet.GetRange("C1").SetValue(ans);

```
