# SetKeywords

设置文档关键字。

## 语法

```javascript
expression.SetKeywords(sKeywords);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKeywords | 必需 | string |  | 字符串格式的文档关键字。 |

## 返回值

此方法不返回任何数据。

## 示例

在文档的核心属性中保存关键词列表。

```javascript editor-docx
// How do I add searchable keywords to a document's metadata in a document?

// Improve discoverability by tagging the document with relevant terms stored in its built-in properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);
```
