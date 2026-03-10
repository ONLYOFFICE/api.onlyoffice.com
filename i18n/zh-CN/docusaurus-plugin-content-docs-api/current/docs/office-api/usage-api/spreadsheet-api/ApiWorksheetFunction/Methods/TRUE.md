# TRUE

返回 **true** 逻辑值。

## 语法

```javascript
expression.TRUE();
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何返回 true 逻辑值。

```javascript editor-xlsx
// How to get a true value.

// Use a function to return true value.

const worksheet = Api.GetActiveSheet();

let logical1 = 1 > 0;
let logical2 = 2 > 0;

let func = Api.WorksheetFunction;
let ans = func.XOR(logical1, logical2); //Works on XOR gate logic

worksheet.GetRange("C1").SetValue(ans);

```
