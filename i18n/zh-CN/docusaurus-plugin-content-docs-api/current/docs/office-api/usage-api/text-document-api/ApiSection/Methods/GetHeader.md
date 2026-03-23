# GetHeader

返回指定页眉类型的内容。

## 语法

```javascript
expression.GetHeader(sType, isCreate);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | 要获取内容的页眉类型。 |
| isCreate | 可选 | boolean | false | 指定在当前节中找不到指定类型的页眉时是否创建具有该类型的新页眉。 |

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

此示例展示如何获取指定页眉类型的内容。

```javascript editor-docx
// How to get the header of the page.

// Get the default header from the final section.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("See it above.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header");
```
