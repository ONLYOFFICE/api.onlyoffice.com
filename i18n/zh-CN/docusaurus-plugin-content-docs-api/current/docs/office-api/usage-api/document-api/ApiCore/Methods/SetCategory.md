# SetCategory

设置文档类别。

## 语法

```javascript
expression.SetCategory(sCategory);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCategory | 必需 | string |  | 文档类别。 |

## 返回值

此方法不返回任何数据。

## 示例

通过文档的核心属性为文档分配类别。

```javascript editor-docx
// How do I tag a document with a category in its metadata in a document?

// Record which group or type a document belongs to so it can be filtered later in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);
```
