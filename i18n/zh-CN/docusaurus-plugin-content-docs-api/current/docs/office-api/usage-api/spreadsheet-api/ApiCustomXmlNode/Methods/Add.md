# Add

为当前 XML 节点创建子节点。

## 语法

```javascript
expression.Add(nodeName);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nodeName | 必需 | string |  | 新子节点的名称。 |

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)

## 示例

在电子表格中现有 XML 节点下插入新的子元素。

```javascript editor-xlsx
// How do I append a nested element to a custom XML node in a spreadsheet?

// Expand an embedded XML structure by adding a sub-node to an existing parent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Hello World!</text></content>");
let rootNode = xml.GetNodes("/content")[0];
let textNode = rootNode.Add("text");
let classType = textNode.GetClassType();
worksheet.GetRange("A1").SetValue("Class type: " + classType);
```
