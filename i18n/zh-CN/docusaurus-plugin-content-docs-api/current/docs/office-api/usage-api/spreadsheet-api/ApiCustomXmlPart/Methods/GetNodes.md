# GetNodes

根据提供的 XPath 从自定义 XML 检索节点。

## 语法

```javascript
expression.GetNodes(xPath);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 用于搜索节点的 XPath 表达式。 |

## 返回值

[ApiCustomXmlNode](../../ApiCustomXmlNode/ApiCustomXmlNode.md)[]

## 示例

此示例演示如何使用 XPath 从自定义 XML 部件获取节点。

```javascript editor-xlsx
// How to get nodes from an XML part using XPath.

// Get XML nodes.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<products><item>Laptop</item><item>Mouse</item><item>Keyboard</item></products>");
let itemNodes = xml.GetNodes('/products/item');
worksheet.GetRange("A1").SetValue("Found " + itemNodes.length + " products:");
for (let i = 0; i < itemNodes.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue((i + 1) + ". " + itemNodes[i].GetText());
}
```
