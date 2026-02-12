# 添加内容控件复选框

向文档添加一个空的内容控件复选框。

## 语法

```javascript
expression.AddContentControlCheckBox(checkBoxPr, commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkBoxPr | 选填 | [内容控件复选框属性](../Enumeration/ContentControlCheckBoxProperties.md) | &#123;&#125; | 内容控件复选框属性。 |
| commonPr | 选填 | [内容控件属性](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 公共内容控件属性。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("AddContentControlCheckBox", [
    {
        "Checked" : false,
        "CheckedSymbol" : 9756,
        "UncheckedSymbol" : 9744
    },
    {
        "Id" : 7,
        "Tag" : "{tag}",
        "Lock" : 0
    }
]);
```
