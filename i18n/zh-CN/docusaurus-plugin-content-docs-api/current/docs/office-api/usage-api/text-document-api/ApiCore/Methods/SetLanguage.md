# SetLanguage

设置文档语言。

## 语法

```javascript
expression.SetLanguage(sLanguage);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLanguage | 必需 | string |  | 文档语言。 |

## 返回值

此方法不返回任何数据。

## 示例

使用文档中的核心属性设置当前文档的语言。

```javascript editor-docx
// How can I set language using a core properties in a document?

// Set language for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLanguage("en-US");

const language = core.GetLanguage();
let paragraph = doc.GetElement(0);
paragraph.AddText("Language: " + language);
```
