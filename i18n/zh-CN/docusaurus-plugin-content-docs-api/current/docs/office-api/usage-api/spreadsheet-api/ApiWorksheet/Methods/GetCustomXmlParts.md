# GetCustomXmlParts

获取与当前工作表关联的自定义 XML 管理器。
此管理器允许操作和访问当前工作表中的自定义 XML 部分。

## 语法

```javascript
expression.GetCustomXmlParts();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlParts](../../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null

## 示例

此示例展示如何获取自定义 XML 管理器、添加新的 XML 部件并通过其 ID 检索它。

```javascript editor-xlsx
// How to get custom XML parts from a worksheet.

// Get the custom XML parts manager.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
worksheet.GetRange("A1").SetValue("Retrieved XML: " + retrievedXml.GetXml());
```
