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

此示例演示如何获取自定义 XML 部件管理器的类类型。

```javascript editor-xlsx
// How to get the class type of the XML parts manager.

// Get the class type.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
worksheet.GetRange("A1").SetValue("XML manager class type: " + classType);
```
