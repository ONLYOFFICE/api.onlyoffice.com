# GetFooter

返回指定页脚类型的内容。

## 语法

```javascript
expression.GetFooter(sType, isCreate);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | 要获取内容的页脚类型。 |
| isCreate | 可选 | boolean | false | 指定在当前节中找不到指定类型的页脚时，是否创建新的页脚。 |

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

访问文档中节的页脚区域。

```javascript editor-docx
// How do I retrieve the footer from a specific section in a document?

// Read the footer content to add or inspect text at the bottom of pages in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer");
```
