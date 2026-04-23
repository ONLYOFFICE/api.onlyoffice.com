# SetAlias

设置当前容器的别名属性。

## 语法

```javascript
expression.SetAlias(alias);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| alias | 必需 | string |  | 将添加到当前容器的别名。 |

## 返回值

boolean

## 示例

此示例设置容器的别名属性。

```javascript editor-docx
// Creates a block content control and sets an alias to it.

// How to set an alias to the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with alias '№1'.");
blockLvlSdt.SetAlias("№1");
doc.AddElement(0, blockLvlSdt);
let alias = blockLvlSdt.GetAlias();
let paragraph = doc.GetElement(1);
paragraph.AddText("Alias: " + alias);
```
