# ToJSON

将 ApiBlockLvlSdt 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

将文档中的块级内容控件对象转换为 JSON 对象。

```javascript editor-docx
// Create a block content control and convert it into the JSON object in a document.

// How to create the JSON object from the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetAlias("№1");
let json = blockLvlSdt.ToJSON(false, true);
let blockLvlSdtFromJSON = Api.FromJSON(json);
blockLvlSdtFromJSON.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdtFromJSON);
```
