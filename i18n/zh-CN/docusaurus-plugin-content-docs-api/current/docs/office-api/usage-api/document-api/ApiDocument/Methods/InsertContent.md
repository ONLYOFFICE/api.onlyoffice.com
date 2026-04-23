# InsertContent

将元素数组插入到文档的当前位置。

## 语法

```javascript
expression.InsertContent(arrContent, isInline, oPr);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrContent | 必需 | [DocumentElement](../../Enumeration/DocumentElement.md)[] |  | 要插入的元素数组。 |
| isInline | 可选 | boolean | false | 是否行内插入（仅对第一个和最后一个元素有效，且仅当它是段落时）。 |
| oPr | 可选 | object |  | 指定为插入的元素保留文本和段落文档属性。对象应如下所示：&#123;"KeepTextOnly": true&#125;。 |

## 返回值

boolean

## 示例

此示例将元素数组插入到文档的当前位置。

```javascript editor-docx
// How to insert the paragraph to the document.

// Create a paragraph and show it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text. It was inserted here.");
doc.InsertContent([paragraph]);
```
