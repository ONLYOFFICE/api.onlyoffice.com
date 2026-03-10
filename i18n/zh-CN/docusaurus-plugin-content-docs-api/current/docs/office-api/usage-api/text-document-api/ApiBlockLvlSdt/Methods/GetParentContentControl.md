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

此示例展示如何获取包含内容控件的内容控件。

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a parent block text content control.");
doc.AddElement(0, blockLvlSdt);
let innerSdt = Api.CreateBlockLvlSdt();
innerSdt.GetContent().GetElement(0).AddText("This is a block text content control added in another content control.");
blockLvlSdt.AddElement(innerSdt, 0);
innerSdt.GetParentContentControl().SetAlias("Parent content control");

```
