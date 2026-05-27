# EmusToMillimeters

将英制度量单位 (EMU) 转换为毫米。

## 语法

```javascript
expression.EmusToMillimeters(emu);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位 (EMU) 为单位的值。 |

## 返回值

[mm](../../Enumeration/mm.md)

## 示例

在文档中显示从内部单位转换为毫米的测量值。

```javascript editor-docx
// How do I show a size value in millimeters inside a document?

// Write the millimeter equivalent of a raw numeric measurement into a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 780000;
const millimeters = Api.EmusToMillimeters(emus);
paragraph.AddText(emus + ' emus are equal to ' + millimeters + ' millimeters.');
doc.Push(paragraph);
```
