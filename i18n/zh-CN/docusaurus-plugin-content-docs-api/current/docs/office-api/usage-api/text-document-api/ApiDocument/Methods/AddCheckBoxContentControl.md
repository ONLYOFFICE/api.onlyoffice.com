# AddCheckBoxContentControl

向文档添加新的复选框内容控件。

## 语法

```javascript
expression.AddCheckBoxContentControl(checkBoxPr);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkBoxPr | 必需 | [ContentControlCheckBoxPr](../../Enumeration/ContentControlCheckBoxPr.md) |  | 复选框的配置对象。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

此示例展示如何向文档添加复选框内容控件：

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddCheckBoxContentControl({checked : true});
```
