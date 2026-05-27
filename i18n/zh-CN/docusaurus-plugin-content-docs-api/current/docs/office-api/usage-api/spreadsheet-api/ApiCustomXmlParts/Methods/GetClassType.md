# GetClassType

返回 ApiCustomXmlParts 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customXmlParts"

## 示例

读取电子表格中 XML 存储管理器对象的类型标签。

```javascript editor-xlsx
// How do I find out what type of object manages XML data in a spreadsheet?

// Confirm the category of the XML manager to handle it correctly in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
worksheet.GetRange("A1").SetValue("XML manager class type: " + classType);
```
