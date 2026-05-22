# SetSubject

设置文档主题。

## 语法

```javascript
expression.SetSubject(sSubject);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSubject | 必需 | string |  | 文档主题。 |

## 返回值

此方法不返回任何数据。

## 示例

设置文档核心属性中的主题字段。

```javascript editor-docx
// How do I define a subject for a document's metadata?

// Categorize or describe document content by writing a subject string to its metadata in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);
```
