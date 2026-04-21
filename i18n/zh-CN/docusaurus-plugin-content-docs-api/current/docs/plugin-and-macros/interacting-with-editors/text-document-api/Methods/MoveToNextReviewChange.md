# MoveToNextReviewChange

浏览审阅修订。

## 语法

```javascript
expression.MoveToNextReviewChange(isForward);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isForward | 可选 | boolean | true | 指定是导航到下一个（**true**）还是上一个（**false**）审阅修订。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MoveToNextReviewChange", [true]);
```
