# GetXPath

返回当前 XML 节点的绝对 XPath。

## 语法

```javascript
expression.GetXPath();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

确定电子表格中文档内 XML 节点的完整路径地址。

```javascript editor-xlsx
// How do I find out where an XML node sits in the overall structure in a spreadsheet?

// Identify the exact location of a node by reading its path expression in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
let xml = xmlManager.Add("<company><department><employee>John</employee></department></company>");
let employeeNode = xml.GetNodes('/company/department/employee')[0];
let xpath = employeeNode.GetXPath();
worksheet.GetRange("A1").SetValue("XPath of employee node: " + xpath);
```
