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

使用文档中的核心属性设置当前文档的创建者。

```javascript editor-docx
// How to set creator for a core properties in a document?

// Set creator and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreator("John Smith");

const creator = core.GetCreator();
const paragraph = doc.GetElement(0);
paragraph.AddText("Creator: " + creator);
```
