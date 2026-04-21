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

获取电子表格中工作簿的自定义属性对象。

```javascript editor-xlsx
// How can I get custom properties using a workbook in a spreadsheet?

// Get custom properties for a workbook in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const customProps = workbook.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
let stringValue = customProps.Get("MyStringProperty");

const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue(stringValue);
```
