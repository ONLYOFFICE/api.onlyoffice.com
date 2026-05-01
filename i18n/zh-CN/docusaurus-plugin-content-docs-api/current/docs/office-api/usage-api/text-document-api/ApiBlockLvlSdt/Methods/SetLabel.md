# SetLabel

设置当前容器的标签属性。

## 语法

```javascript
expression.SetLabel(label);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| label | 必需 | number |  | 将添加到当前容器的标签。可以是从 **-2147483647** 到 **2147483647** 的正整数或负整数。 |

## 返回值

boolean

## 示例

为文档中的容器设置标注属性。

```javascript editor-docx
// Create a block content control and set a label to it in a document.

// How to set a label to the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel(2147483647);
doc.AddElement(0, blockLvlSdt);
let label = blockLvlSdt.GetLabel();
let paragraph = doc.GetElement(1);
paragraph.AddText("Label: " + label);
```
