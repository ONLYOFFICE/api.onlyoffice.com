# RGB

从红、绿、蓝分量创建 RGB 颜色。

## 语法

```javascript
expression.RGB(r, g, b);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量 (0-255)。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量 (0-255)。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量 (0-255)。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

从红、绿、蓝值创建自定义颜色并将其应用于文档中的文本。

```javascript editor-docx
// How do I set text color using red, green, and blue values in a document?

// Color paragraph text with a specific RGB combination in a document.

const doc = Api.GetDocument();
const color = Api.RGB(186, 218, 85);
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in RGB color.');
paragraph.SetColor(color);
```
