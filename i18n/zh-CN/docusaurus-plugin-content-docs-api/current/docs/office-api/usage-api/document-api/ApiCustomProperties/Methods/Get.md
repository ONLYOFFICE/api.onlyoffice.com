# Get

根据名称返回自定义属性的值。

## 语法

```javascript
expression.Get(name);
```

`expression` - 表示 [ApiCustomProperties](../ApiCustomProperties.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 自定义属性名称。 |

## 返回值

string \| number \| Date \| boolean \| null

## 示例

此示例演示如何根据名称获取自定义属性的值。

```javascript editor-docx
const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

customProps.Add("ExistingProp", "#123456");

const existingProp = customProps.Get("ExistingProp");
const nonExistentProp = customProps.Get("NonExistentProp");

const paragraph = doc.GetElement(0);
paragraph.AddText("Existing Property Value: " + existingProp);
paragraph.AddText("\nNon-Existent Property Value: " + nonExistentProp);

```
