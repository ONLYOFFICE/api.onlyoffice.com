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

此示例设置容器的标签属性。

```javascript editor-docx
// Creates a block content control and sets a label to it.

// How to set a label to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel(2147483647);
doc.AddElement(0, blockLvlSdt);
let label = blockLvlSdt.GetLabel();
let paragraph = doc.GetElement(1);
paragraph.AddText("Label: " + label);
```
