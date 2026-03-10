# GetClassType

返回 ApiCustomXmlNode 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customXmlNode"

## 示例

此示例演示如何获取自定义 XML 节点的类类型并显示它。

```javascript editor-xlsx
// How to get the class type of an XML node.

// Get the class type.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<zoo>
    <animal species="Lion" id="101">
        <name>Leo</name>
        <age>5</age>
        <habitat>Savanna</habitat>
        <diet>Carnivore</diet>
    </animal>
</zoo>`;
let xml = xmlManager.Add(xmlText);
let node = xml.GetNodes('/zoo/animal')[0];
let classType = node.GetClassType();
worksheet.GetRange("A1").SetValue("Class type of the node: " + classType);
```
