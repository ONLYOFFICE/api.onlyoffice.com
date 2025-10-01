# 内容控件日期选择器属性

内容控件日期选择器属性。

## 属性

| 名称 | 类型 | 说明 |
| ---- | ---- | ---- |
| Date | object | 当前日期和时间。 |
| DateFormat | string | 日期的显示格式。例如：*"MM/DD/YYYY"、"dddd, mmmm dd, yyyy"、"DD MMMM YYYY"、"MMMM DD, YYYY"、"DD-MMM-YY"、"MMMM YY"、"MMM-YY"、"MM/DD/YYYY hh:mm AM/PM"、"MM/DD/YYYY hh:mm:ss AM/PM"、"hh:mm"、"hh:mm:ss"、"hh:mm AM/PM"、"hh:mm:ss AM/PM"*。 |
## 类型

Object（对象）



## 示例

```javascript
let date = new window.Date();
let controlDatePickerPr = {
    "DateFormat" : "DD\ MMMM\ YYYY",
    "Date" : date
};
window.Asc.plugin.executeMethod ("AddContentControlDatePicker", [controlDatePickerPr, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
