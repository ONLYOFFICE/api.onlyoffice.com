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

此示例保存对指定文档的更改。

```javascript editor-docx
// Adds a text to the first paragraph of the document and saves these changes.

// How to save changes made to the ApiParagraph object.

let paragraph = Api.GetDocument().GetElement(0);
paragraph.AddText("This sample text is saved to the document.");
Api.Save();
```
