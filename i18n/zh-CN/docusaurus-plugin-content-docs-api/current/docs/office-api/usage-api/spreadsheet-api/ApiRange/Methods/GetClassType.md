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

获取电子表格中单元格范围的类类型。

```javascript editor-xlsx
// How to identify the class type of a cell range?

// Obtain the class type identifier of a cell range object.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);
```
