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

向电子表格中的工作簿附加新的 XML 数据块。

```javascript editor-xlsx
// How do I store custom XML content inside a workbook in a spreadsheet?

// Embed structured XML so it travels with the file when saved in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
worksheet.GetRange("A1").SetValue("New XML part added: " + newXml.GetXml());
```
