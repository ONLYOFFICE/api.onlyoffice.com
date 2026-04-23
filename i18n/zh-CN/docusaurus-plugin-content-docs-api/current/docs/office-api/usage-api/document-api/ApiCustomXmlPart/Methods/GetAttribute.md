# GetAttribute

返回指定 XPath 的 XML 节点的属性。

## 语法

```javascript
expression.GetAttribute(xPath, name);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要从中获取属性的节点的 XPath。 |
| name | 必需 | string |  | 要查找的属性名称。 |

## 返回值

string \| null

## 示例

此示例从自定义 XML 部件检索版本属性的值。

```javascript editor-docx
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
let version = xml.GetAttribute("/content", "version");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);
```
