# SetModified

设置文档最后修改的日期。

## 语法

```javascript
expression.SetModified(oModified);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oModified | 必需 | Date |  | 文档最后修改的日期。 |

## 返回值

此方法不返回任何数据。

## 示例

设置文档的最后修改日期。

```javascript editor-docx
// How do I update the modification timestamp of a document?

// Correct or backdate the recorded edit time to reflect when a document was actually changed in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);
```
