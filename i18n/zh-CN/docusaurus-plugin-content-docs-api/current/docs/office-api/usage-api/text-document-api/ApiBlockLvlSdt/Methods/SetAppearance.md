# SetAppearance

设置内容控件的可视化效果。

## 语法

```javascript
expression.SetAppearance(type);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | "boundingBox" \| "hidden" |  | 所需的可视化类型。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例添加内容控件并更改其外观。

```javascript editor-docx
let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.SetAppearance("hidden");
contentControl.GetContent().GetElement(0).AddText("This is a content control with a hidden appearance");
doc.Push(contentControl);
```
