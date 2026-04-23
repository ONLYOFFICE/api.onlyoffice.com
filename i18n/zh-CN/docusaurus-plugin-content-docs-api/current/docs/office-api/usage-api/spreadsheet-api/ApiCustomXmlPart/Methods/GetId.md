# GetId

返回自定义 XML 部件的 ID。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取自定义 XML 部件的 ID。

```javascript editor-xlsx
// How to get the ID of an XML part.

// Get an XML part ID.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<settings><theme>dark</theme></settings>");
let id = xml.GetId();
worksheet.GetRange("A1").SetValue("XML part ID: " + id);
```
