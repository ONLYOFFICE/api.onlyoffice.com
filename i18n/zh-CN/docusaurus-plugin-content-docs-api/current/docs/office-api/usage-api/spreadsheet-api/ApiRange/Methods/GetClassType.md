# GetClassType

返回 ApiRange 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"range"

## 示例

此示例获取类类型并将其插入到表格中。

```javascript editor-xlsx
// How to get a class type of ApiRange.

// Get a class type of ApiRange and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);

```
