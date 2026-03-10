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

此示例演示如何根据 ID 获取自定义 XML 部件。

```javascript editor-xlsx
// How to retrieve a custom XML part using its ID.

// Get an XML part by its ID.

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
