# ToJSON

将 ApiSection 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

此示例将 ApiSection 对象转换为 JSON 对象。

```javascript editor-docx
// How to get a JSON from the section object.

// Convert the section to json and add it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a page size set in the current document section.");
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let json = section.ToJSON(false, true);
let sectionFromJSON = Api.FromJSON(json);
let type = sectionFromJSON.GetClassType();
paragraph.AddLineBreak();
paragraph.AddText("Class type = " + type);
```
