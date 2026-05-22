# ContentControlDatePickerProperties

内容控件日期选择器属性。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Date | object | 当前日期和时间。 |
| DateFormat | string | 日期的显示格式。 |

## 示例

```javascript
let date = new window.Date();
let controlDatePickerPr = {
    "DateFormat" : "DD\ MMMM\ YYYY",
    "Date" : date
};
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [controlDatePickerPr, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
