# GetCategory

返回文档类别。

## 语法

```javascript
expression.GetCategory();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

使用文档中的核心属性获取文档的类别。

```javascript editor-docx
// How do I get the category in a document?

// Get the category using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);
```
