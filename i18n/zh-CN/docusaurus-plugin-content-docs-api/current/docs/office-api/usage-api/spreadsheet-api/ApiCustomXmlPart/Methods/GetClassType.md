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

此示例演示如何获取自定义 XML 部件的类类型。

```javascript editor-xlsx
// How to get the class type of an XML part.

// Get the class type.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<data><value>Sample</value></data>");
let classType = xml.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);
```
