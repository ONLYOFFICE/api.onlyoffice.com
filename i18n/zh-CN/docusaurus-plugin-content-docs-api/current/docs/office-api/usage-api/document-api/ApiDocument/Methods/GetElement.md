# GetElement

通过元素在文档中的位置返回元素。

继承自 [ApiDocumentContent.GetElement](../../ApiDocumentContent/Methods/GetElement.md)。

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

在文档中按索引访问文档元素并向其添加文本。

```javascript editor-docx
// How do I retrieve a specific element by position in a document?

// Target the first paragraph directly by index to insert a text run in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
