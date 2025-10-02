# 获取所有批注

返回文档中的所有批注。

## 语法

```javascript
expression.GetAllComments();
```

`expression` - 一个表示 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

[批注](../Enumeration/comment.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetAllComments", null, function (comments) {
    Comments = comments;
    addComments (comments);
});
```
