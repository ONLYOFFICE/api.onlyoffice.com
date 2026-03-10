# Copy

创建段落副本。忽略批注、脚注引用和复杂域。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例创建段落副本。

```javascript editor-docx
// How to add a duplicate paragraph.

// Copy a paragraph.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("This is just a sample text that was copied.");
let paragraph2 = paragraph1.Copy();
doc.Push(paragraph2);
```
