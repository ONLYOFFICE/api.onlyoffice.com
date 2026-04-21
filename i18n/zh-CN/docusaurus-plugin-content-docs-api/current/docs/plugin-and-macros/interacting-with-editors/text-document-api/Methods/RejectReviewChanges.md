# RejectReviewChanges

拒绝审阅修订。

## 语法

```javascript
expression.RejectReviewChanges(isAll);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAll | 可选 | boolean | false | 指定是拒绝所有更改（**true**）还是仅拒绝当前选择的更改（**false**）。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("RejectReviewChanges", [true]);
```
