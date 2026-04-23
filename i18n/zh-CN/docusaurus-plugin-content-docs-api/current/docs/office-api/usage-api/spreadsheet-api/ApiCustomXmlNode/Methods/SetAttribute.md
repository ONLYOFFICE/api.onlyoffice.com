# SetAttribute

为自定义 XML 节点设置属性。
如果属性已存在，则不会被修改。

## 语法

```javascript
expression.SetAttribute(name, value);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要设置的属性名称。 |
| value | 必需 | string |  | 要分配给属性的值。 |

## 返回值

boolean

## 示例

此示例演示如何在自定义 XML 节点上设置属性值。

```javascript editor-xlsx
// How to set attributes on custom XML node elements.

// Set attributes on product node.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<product></product>");
let productNode = xml.GetNodes('/product')[0];
productNode.SetAttribute("id", "456");
productNode.SetAttribute("name", "Desktop Computer");
productNode.SetAttribute("price", "1299");
let updatedXml = xml.GetXml();
worksheet.GetRange("A1").SetValue("Updated XML:");
worksheet.GetRange("A2").SetValue(updatedXml);
```
