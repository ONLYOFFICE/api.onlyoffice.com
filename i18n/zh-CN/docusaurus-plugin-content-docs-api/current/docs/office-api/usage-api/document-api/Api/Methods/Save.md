# Save

保存对指定文档的更改。

## 语法

```javascript
expression.Save();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

向段落添加文本并保存文档中的更改。

```javascript editor-docx
// How do I save changes after editing a paragraph in a document?

// Write text into the first paragraph and persist the result to the file in a document.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();
```
