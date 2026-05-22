# SetCreator

设置文档作者。

## 语法

```javascript
expression.SetCreator(sCreator);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCreator | 必需 | string |  | 文档作者。 |

## 返回值

此方法不返回任何数据。

## 示例

在文档的核心属性中存储作者姓名。

```javascript editor-docx
// How do I set the creator field in a document's metadata in a document?

// Attribute ownership of the document by writing the author's name into the built-in properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);
```
