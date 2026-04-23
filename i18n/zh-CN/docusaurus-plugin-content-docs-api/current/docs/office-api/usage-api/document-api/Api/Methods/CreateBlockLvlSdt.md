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

此示例展示如何向文档添加块级容器。

```javascript editor-docx
// How to create a block text content control, add a text to it, and add this container to the document.

// Creates a block level container and adds it to the ApiDocument class.

let doc = Api.GetDocument();
var blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
