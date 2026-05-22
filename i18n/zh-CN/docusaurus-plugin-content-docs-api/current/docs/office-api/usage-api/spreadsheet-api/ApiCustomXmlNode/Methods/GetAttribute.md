# GetAttribute

从自定义 XML 节点检索属性值。
如果属性不存在，则返回 `false`。

## 语法

```javascript
expression.GetAttribute(name);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要检索的属性名称。 |

## 返回值

string \| null

## 示例

从嵌入在电子表格中的 XML 节点读取单个命名属性。

```javascript editor-xlsx
// How do I extract the value of a specific attribute from a custom XML element in a spreadsheet?

// Pull individual attribute values out of stored XML data and display them in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<product id='123' name='Laptop' price='999'></product>");
let productNode = xml.GetNodes('/product')[0];
let id = productNode.GetAttribute("id");
let name = productNode.GetAttribute("name");
let price = productNode.GetAttribute("price");
worksheet.GetRange("A1").SetValue("Product ID: " + id);
worksheet.GetRange("A2").SetValue("Product Name: " + name);
worksheet.GetRange("A3").SetValue("Product Price: " + price);
```
