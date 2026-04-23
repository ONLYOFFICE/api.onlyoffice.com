# AddText

向当前内容控件添加文本。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | String |  | 将添加到内容控件的文本。 |

## 返回值

boolean

## 示例

此示例向内容控件添加文本。

```javascript editor-docx
// Creates a block content control in the current document and adds a text to it.

// How to add a text to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
```
