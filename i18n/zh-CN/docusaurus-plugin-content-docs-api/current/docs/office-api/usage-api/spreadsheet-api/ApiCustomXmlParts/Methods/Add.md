# Add

向 XML 管理器添加新的自定义 XML 部件。

## 语法

```javascript
expression.Add(xml);
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | 必需 | string |  | 要添加的 XML 字符串。 |

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)

## 示例

此示例演示如何添加新的自定义 XML 部件然后访问它。

```javascript editor-xlsx
// How to add a custom XML part to the workbook.

// Add a new XML part.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
worksheet.GetRange("A1").SetValue("New XML part added: " + newXml.GetXml());
```
