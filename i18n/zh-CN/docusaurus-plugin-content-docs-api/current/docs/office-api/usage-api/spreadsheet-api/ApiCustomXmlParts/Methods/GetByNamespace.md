# GetByNamespace

根据命名空间从 XML 管理器返回自定义 XML 部件。

## 语法

```javascript
expression.GetByNamespace(namespace);
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| namespace | 必需 | string |  | XML 部件的命名空间。 |

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)[]

## 示例

此示例演示如何根据命名空间获取自定义 XML 部件。

```javascript editor-xlsx
// How to retrieve custom XML parts using their namespace.

// Get XML parts by namespace.

let worksheet = Api.GetActiveSheet();
let xmlManager = worksheet.GetCustomXmlParts();
xmlManager.Add("<config xmlns='http://example.com/config'><setting>value1</setting></config>");
xmlManager.Add("<data xmlns='http://example.com/data'><entry>value2</entry></data>");
xmlManager.Add("<info xmlns='http://example.com/config'><detail>value3</detail></info>");
let configParts = xmlManager.GetByNamespace("http://example.com/config");
worksheet.GetRange("A1").SetValue("Found " + configParts.length + " XML parts with config namespace:");
for (let i = 0; i < configParts.length; i++) {
    worksheet.GetRange("A" + (i + 2)).SetValue("Config part " + (i + 1) + ": " + configParts[i].GetXml());
}
```
