# GetAll

返回 XML 管理器中的所有自定义 XML 部件。

## 语法

```javascript
expression.GetAll();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)[]

## 示例

此示例演示如何获取所有自定义 XML 部件。

```javascript editor-xlsx
// How to retrieve all custom XML parts from the workbook.

// Get all XML parts.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<employees><employee>John</employee></employees>");
xmlManager.Add("<departments><department>IT</department></departments>");
xmlManager.Add("<projects><project>Website</project></projects>");
let allParts = xmlManager.GetAll();
worksheet.GetRange("A1").SetValue("Total XML parts: " + allParts.length);
for (let i = 0; i < allParts.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Part " + (i + 1) + ": " + allParts[i].GetXml());
}
```
