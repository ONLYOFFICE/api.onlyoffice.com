# 设置审阅显示模式

设置审阅中的显示模式。

## 语法

```javascript
expression.SetDisplayModeInReview(sMode);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sMode | 选填 | string | "edit" | 显示模式：**edit** - 显示所有修订，**simple** - 显示所有修订但关闭修订注释框提示，**final** - 显示所有已接受的修订，**original** - 显示所有已拒绝的修订。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SetDisplayModeInReview", ["edit"]);
```
