# SetLink

设置超链接地址。

## 语法

```javascript
expression.SetLink(sLink);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | 必需 | string |  | 超链接地址。 |

## 返回值

boolean

## 示例

更改文档中超链接的 URL。

```javascript editor-docx
// How do I update the address a hyperlink points to in a document?

// Point an existing hyperlink to a different website in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetLink("https://api.onlyoffice.com/");
```
