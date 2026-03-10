# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

## 语法

```javascript
expression.SetSpacing(nSpacing);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSpacing | 必需 | [twips](../../Enumeration/twips.md) |  | 以二十分之一磅（1/1440 英寸）为单位测量的文本间距值。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例设置以二十分之一磅为单位测量的文本间距。

```javascript editor-docx
// How to specify the spacing value of paragraph.

// Indicate the paragraph text space.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
paragraph.SetSpacing(2);
```
