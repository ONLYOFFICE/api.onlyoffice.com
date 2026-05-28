# SetTitle

设置文档标题。

## 语法

```javascript
expression.SetTitle(sTitle);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | 必需 | string |  | 文档标题。 |

## 返回值

此方法不返回任何数据。

## 示例

设置文档核心属性中的标题。

```javascript editor-docx
// How do I give a document a formal title in its metadata?

// Name a document for easier identification in file managers and document management systems in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);
```
