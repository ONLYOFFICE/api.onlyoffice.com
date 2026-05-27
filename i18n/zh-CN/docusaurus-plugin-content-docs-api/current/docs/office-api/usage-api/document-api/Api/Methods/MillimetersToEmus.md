# MillimetersToEmus

将毫米转换为英制度量单位 (EMU)。
结果为整数值。

## 语法

```javascript
expression.MillimetersToEmus(mm);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | 必需 | [mm](../../Enumeration/mm.md) |  | 以毫米为单位的值。 |

## 返回值

[EMU](../../Enumeration/EMU.md)

## 示例

将毫米值转换为英制度量单位并在文档中显示结果。

```javascript editor-docx
// How do I translate a measurement from millimeters to English metric units in a document?

// Show the equivalent English metric unit value for a given number of millimeters in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 0.2001;
const emus = Api.MillimetersToEmus(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + emus + ' emus (value is rounded to integer).');
doc.Push(paragraph);
```
