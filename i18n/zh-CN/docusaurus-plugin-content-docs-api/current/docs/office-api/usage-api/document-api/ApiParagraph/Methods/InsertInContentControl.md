# InsertInContentControl

用富文本内容控件包装段落对象。

## 语法

```javascript
expression.InsertInContentControl(nType);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nType | 必需 | number |  | 定义此方法是返回 ApiBlockLvlSdt（nType === 1）还是 ApiParagraph（除 1 以外的任何值）对象。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## 示例

此示例用富文本内容控件包装段落对象。

```javascript editor-docx
// How to insert the paragraph object into the another element.

// Add paragraph to the content control.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph inserted into the content control.");
let blockLvlSdt = paragraph.InsertInContentControl(1);
doc.AddElement(0, blockLvlSdt);
```
