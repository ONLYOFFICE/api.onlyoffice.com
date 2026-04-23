# SetLastModifiedBy

设置最后修改文档的用户名称。

## 语法

```javascript
expression.SetLastModifiedBy(sLastModifiedBy);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLastModifiedBy | 必需 | string |  | 最后修改文档的用户名称。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置最后修改当前文档的用户名称。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);

```
