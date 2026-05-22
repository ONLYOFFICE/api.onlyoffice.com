# GetAttribute

返回指定 XPath 的 XML 节点的属性。

## 语法

```javascript
expression.GetAttribute(xPath, name);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要从中获取属性的节点的 XPath。 |
| name | 必需 | string |  | 要查找的属性名称。 |

## 返回值

string \| null

## 示例

从电子表格中的 XML 元素读取命名属性的值。

```javascript editor-xlsx
// How do I look up what a specific attribute on an XML node is set to in a spreadsheet?

// Extract configuration data stored as an XML attribute for use in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<config version='1.0' xmlns='http://example'><setting>value</setting></config>");
let rootNodes = xml.GetNodes('/config');
if (rootNodes.length > 0) {
    let version = rootNodes[0].GetAttribute('version');
    worksheet.GetRange("A1").SetValue("Config version: " + version);
} else {
    worksheet.GetRange("A1").SetValue("No root node found");
}
```
