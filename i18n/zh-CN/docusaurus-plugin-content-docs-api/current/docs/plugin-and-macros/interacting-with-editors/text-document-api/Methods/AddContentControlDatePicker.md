# 添加内容控件日期选择器

向文档添加一个空的内容控件日期选择器。

## 语法

```javascript
expression.AddContentControlDatePicker(datePickerPr, commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| datePickerPr | 可选 | [内容控件日期选择器属性](../Enumeration/ContentControlDatePickerProperties.md) | &#123;&#125; | 内容控件日期选择器属性。 |
| commonPr | 可选 | [内容控件属性](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 公共内容控件属性。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [
    {
        "DateFormat" : "DD\ MMMM\ YYYY",
        "Date" : new window.Date()
    },
    {
        "Id" : 7,
        "Tag" : "{tag}",
        "Lock" : 0
    }
]);
```
