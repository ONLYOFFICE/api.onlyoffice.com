# SetCreated

设置文档创建日期。

## 语法

```javascript
expression.SetCreated(oCreated);
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCreated | 必需 | Date |  | 文档创建日期。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何设置当前文档的创建日期。

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreated(new Date('20 January 2000'));

const createdDate = core.GetCreated().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Created: " + createdDate);

```
