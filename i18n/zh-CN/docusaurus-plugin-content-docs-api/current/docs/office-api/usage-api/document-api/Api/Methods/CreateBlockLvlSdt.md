# CreateBlockLvlSdt

创建新的块级容器。

## 语法

```javascript
expression.CreateBlockLvlSdt();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## 示例

在文档中插入带有文本的块级文本内容控件。

```javascript editor-docx
// How do I add a structured text container to a document?

// Place a labeled block of editable content at the beginning of a document.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
