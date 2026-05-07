# GetParentContentControl

返回包含当前内容控件的内容控件。

## 语法

```javascript
expression.GetParentContentControl();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null

## 示例

获取文档中包含该内容控件的内容控件。

```javascript editor-docx
// How to get the parent content control for a block-level content control in a document?

// Get the parent content control and display the result in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a parent block text content control.");
doc.AddElement(0, blockLvlSdt);
let innerSdt = Api.CreateBlockLvlSdt();
innerSdt.GetContent().GetElement(0).AddText("This is a block text content control added in another content control.");
blockLvlSdt.AddElement(innerSdt, 0);
innerSdt.GetParentContentControl().SetAlias("Parent content control");
```
