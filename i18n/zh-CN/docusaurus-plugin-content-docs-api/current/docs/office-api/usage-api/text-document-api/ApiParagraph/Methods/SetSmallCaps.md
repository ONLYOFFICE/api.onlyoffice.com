# SetSmallCaps

指定此段落中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean |  | 指定当前段落的内容是否显示为小两磅的大写字母。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例指定此段落中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。

```javascript editor-docx
// How to create a paragraph with the font set to small capitalized letters.

// Make the paragraph text letters lowercase.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to small capitalized letters.");
paragraph.SetSmallCaps(true);
```
