# GetCustomProperties

返回工作簿的自定义属性。

## 语法

```javascript
expression.GetCustomProperties();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomProperties](../../ApiCustomProperties/ApiCustomProperties.md)

## 示例

访问与工作簿一起存储的自定义属性并在电子表格中读取其中一个值。

```javascript editor-xlsx
// How do I store and retrieve my own metadata on a workbook in a spreadsheet?

// Add a named string property to the workbook and display its value in a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const customProps = workbook.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
let stringValue = customProps.Get("MyStringProperty");

const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue(stringValue);
```
