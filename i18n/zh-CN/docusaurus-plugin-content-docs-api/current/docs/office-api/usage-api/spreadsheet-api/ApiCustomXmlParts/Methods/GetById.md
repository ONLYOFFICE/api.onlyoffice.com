# GetById

根据 ID 从 XML 管理器返回自定义 XML 部件。

## 语法

```javascript
expression.GetById(xmlPartId);
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xmlPartId | 必需 | string |  | XML 部件 ID。 |

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md) \| null

## 示例

使用唯一标识符在电子表格中查找特定的存储 XML 块。

```javascript editor-xlsx
// How do I find a particular XML entry by its ID in a spreadsheet?

// Locate a single XML block precisely when its identifier is already known in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item></inventory>");
let id = xml.GetId();
let retrievedXml = xmlManager.GetById(id);
if (retrievedXml) {
    worksheet.GetRange("A1").SetValue("Found XML part: " + retrievedXml.GetXml());
} else {
    worksheet.GetRange("A1").SetValue("XML part not found");
}
```
