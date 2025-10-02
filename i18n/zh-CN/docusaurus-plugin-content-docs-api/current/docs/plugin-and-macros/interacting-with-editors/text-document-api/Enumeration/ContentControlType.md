# 内容控件类型

指定内容控件类型的数值：\
- **1** - 块级内容控件\
- **2** - 行内内容控件\
- **3** - 行级内容控件\
- **4** - 单元格级内容控件

## 类型

Enumeration（枚举）

## 取值

- 1
- 2
- 3
- 4


## 示例

```javascript
let contentControlType = 1;
window.Asc.plugin.executeMethod ("AddContentControl", [contentControlType, {"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
