# GetNodeName

返回当前 XML 节点的名称。

## 语法

```javascript
expression.GetNodeName();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取自定义 XML 节点的节点名称。

```javascript editor-xlsx
// How to retrieve node names from custom XML node elements.

// Get node name from item element.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<inventory><item>Book</item><item>Pen</item></inventory>");
let inventoryNode = xml.GetNodes('/inventory')[0];
let itemNodes = inventoryNode.GetNodes('/item');
let nodeName = itemNodes[0].GetNodeName();
worksheet.GetRange("A1").SetValue("Node name: " + nodeName);
```
