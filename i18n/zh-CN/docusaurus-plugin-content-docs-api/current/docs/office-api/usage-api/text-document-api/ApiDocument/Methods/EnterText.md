# EnterText

在光标位置向文档添加文本。

## 语法

```javascript
expression.EnterText(sText);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 要添加到文档的文本。 |

## 返回值

boolean

## 示例

在文档中当前光标位置输入文本。

```javascript editor-docx
// How to add a line break at the cursor position in a document.

// Enter text in a paragraph and add a line break in a document.

let doc = Api.GetDocument();
doc.EnterText("This is the text in your document.");
```
