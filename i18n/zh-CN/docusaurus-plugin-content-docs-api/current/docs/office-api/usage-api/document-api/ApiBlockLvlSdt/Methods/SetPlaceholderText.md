# SetPlaceholderText

设置当前内容控件的占位符文本。

## 语法

```javascript
expression.SetPlaceholderText(text);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 将设置到当前内容控件的文本。 |

## 返回值

boolean

## 示例

此示例演示如何设置内容控件的占位符文本。

```javascript editor-docx
// Creates a block content control and sets the placeholder text to it.

// How to add the placeholder text to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.SetPlaceholderText("Enter your name here");
```
