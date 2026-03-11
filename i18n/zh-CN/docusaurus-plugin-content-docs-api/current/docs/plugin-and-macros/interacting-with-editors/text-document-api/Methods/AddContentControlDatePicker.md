# AddContentControlDatePicker

向文档添加空的内容控件日期选择器。

## 语法

```javascript
expression.AddContentControlDatePicker(datePickerPr, commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| datePickerPr | 可选 | [ContentControlDatePickerProperties](../Enumeration/ContentControlDatePickerProperties.md) | &#123;&#125; | 内容控件日期选择器属性。 |
| commonPr | 可选 | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 通用内容控件属性。 |

## 返回值

此方法不返回任何数据。

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
