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

设置文档中当前文档的主题。

```javascript editor-docx
// How can I set subject using a core properties in a document?

// Set subject for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);
```
