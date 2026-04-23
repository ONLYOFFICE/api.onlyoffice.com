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
| isCreate | 可选 | boolean | false | 指定在当前节中找不到指定类型的页脚时是否创建具有该类型的新页脚。 |

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

此示例展示如何获取指定页脚类型的内容。

```javascript editor-docx
// How to get the footer of the page.

// Get the default footer from the final section. 

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer");
```
