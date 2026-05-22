# ThemeColor

创建主题颜色。

## 语法

```javascript
expression.ThemeColor(name);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 可选 | [SchemeColorId](../../Enumeration/SchemeColorId.md) | "tx1" | 主题颜色名称。如果提供的名称不受支持，将使用 'tx1' 颜色。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

将主题颜色应用于文档中的段落文本。

```javascript editor-docx
// How do I color text using the document's theme palette in a document?

// Set the font color of a paragraph to one of the built-in theme accent colors in a document.

const doc = Api.GetDocument();
const color = Api.ThemeColor('accent6');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in theme color.');
paragraph.SetColor(color);
```
