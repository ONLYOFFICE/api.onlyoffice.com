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

此示例演示如何使用 ApiCore 设置文档的类别。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);

```
