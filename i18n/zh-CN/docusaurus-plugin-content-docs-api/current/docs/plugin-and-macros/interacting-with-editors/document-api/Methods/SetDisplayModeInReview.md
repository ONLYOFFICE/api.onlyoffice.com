# SetDisplayModeInReview

设置修订的显示模式。

## 语法

```javascript
expression.SetDisplayModeInReview(sMode);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sMode | 可选 | string | "edit" | 显示模式：**edit** - 显示所有更改，**simple** - 显示所有更改但关闭气泡提示，**final** - 显示所有已接受的更改，**original** - 显示所有已拒绝的更改。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("SetDisplayModeInReview", ["edit"]);
```
