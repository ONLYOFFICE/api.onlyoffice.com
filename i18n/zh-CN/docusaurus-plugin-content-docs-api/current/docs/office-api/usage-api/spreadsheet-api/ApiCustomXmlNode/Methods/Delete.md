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

删除电子表格中的自定义 XML 节点。

```javascript editor-xlsx
// How to remove custom XML node elements from the document.

// Delete and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<root><item>Value 1</item><item>Value 2</item></root>");
let rootNode = xml.GetNodes("/root")[0];
let itemNodes = rootNode.GetNodes("/item");
itemNodes[0].Delete();
let remainingNodes = rootNode.GetNodes("/item");
worksheet.GetRange("A1").SetValue("Remaining items: " + remainingNodes.length);
```
