# GetCreator

返回文档作者。

## 语法

```javascript
expression.GetCreator();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

使用文档中的核心属性获取当前文档的创建者。

```javascript editor-docx
// How do I get the creator in a document?

// Get the creator using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);
```
