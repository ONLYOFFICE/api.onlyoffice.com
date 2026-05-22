# Delete

删除当前 XML 节点。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从电子表格中嵌入的 XML 结构移除特定节点。

```javascript editor-xlsx
// How do I delete an unwanted element from custom XML data in a spreadsheet?

// Trim embedded XML content by eliminating a node and verifying what remains in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<root><item>Value 1</item><item>Value 2</item></root>");
let rootNode = xml.GetNodes("/root")[0];
let itemNodes = rootNode.GetNodes("/item");
itemNodes[0].Delete();
let remainingNodes = rootNode.GetNodes("/item");
worksheet.GetRange("A1").SetValue("Remaining items: " + remainingNodes.length);
```
