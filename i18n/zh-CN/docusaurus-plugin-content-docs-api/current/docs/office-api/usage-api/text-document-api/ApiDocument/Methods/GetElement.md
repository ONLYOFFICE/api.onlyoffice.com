# GetElement

通过元素在文档中的位置返回元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 将从文档中获取的元素位置。 |

## 返回值

[DocumentElement](../../Enumeration/DocumentElement.md)

## 示例

此示例展示如何通过元素在文档内容中的位置获取元素。

```javascript editor-docx
// How to get element knowing its index.

// Get the first paragraph and add text to it.

let doc = Api.GetDocument();
let section = doc.GetFinalSection();
let docContent = section.GetHeader("default", true);
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is the text in the default header");
```
