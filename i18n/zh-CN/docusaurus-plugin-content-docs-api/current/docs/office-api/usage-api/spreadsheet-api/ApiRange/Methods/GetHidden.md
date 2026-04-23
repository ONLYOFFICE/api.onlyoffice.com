# GetHidden

返回值隐藏属性。指定的范围必须跨越整列或整行。

## 语法

```javascript
expression.GetHidden();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何获取值隐藏属性。

```javascript editor-xlsx
// How to find out hidden property from a range.

// Get a range, get its cell hiding property and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRows("1:3");
range.SetHidden(true);
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let hidden = range.GetHidden();
worksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + hidden);
```
