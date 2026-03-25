# SearchAndReplace

查找并替换文本。

## 语法

```javascript
expression.SearchAndReplace(oProperties);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oProperties | 必需 | Object |  | 查找和替换的属性。 |
| oProperties.searchString | 必需 | string |  | 搜索字符串。 |
| oProperties.replaceString | 必需 | string |  | 替换字符串。 |
| oProperties.matchCase | 可选 | string | true | 是否区分大小写。 |

## 返回值

boolean

## 示例

此示例展示如何进行查找和替换。

```javascript editor-docx
// How to search for a specific word and replace it with another one.

// Search the first string and replace it with the second one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
doc.SearchAndReplace({"searchString": "first", "replaceString": "second"});
```
