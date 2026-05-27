# GetClassType

返回 ApiCustomXmlPart 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customXmlPart"

## 示例

识别电子表格中自定义 XML 块的对象类型。

```javascript editor-xlsx
// How do I find out the object type of a custom XML block stored in a spreadsheet?

// Confirm the category of a stored XML object before working with it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<data><value>Sample</value></data>");
let classType = xml.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);
```
