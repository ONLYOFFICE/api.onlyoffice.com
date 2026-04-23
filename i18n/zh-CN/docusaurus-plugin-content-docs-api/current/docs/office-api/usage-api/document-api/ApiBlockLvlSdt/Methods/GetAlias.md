# GetAlias

返回当前容器的别名属性。

## 语法

```javascript
expression.GetAlias();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取容器的别名属性。

```javascript editor-docx
// Creates a block content control, adds a text to it, returns its alias, and writes it to the second paragraph of the document.

// How to return an alias of the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias 'OnlyOffice'.");
blockLvlSdt.SetAlias("OnlyOffice");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Alias: " + blockLvlSdt.GetAlias());
```
