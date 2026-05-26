# SetIdentifier

设置文档标识符。

## 语法

```javascript
expression.SetIdentifier(sIdentifier);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sIdentifier | 必需 | string |  | 文档标识符。 |

## 返回值

此方法不返回任何数据。

## 示例

通过文档的核心属性为文档分配唯一标识符。

```javascript editor-docx
// How do I store a custom ID string in a document's metadata in a document?

// Link a document to an external system by embedding its tracking ID in the built-in properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);
```
