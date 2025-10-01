# 鼠标移动事件

当鼠标按钮在插件 iframe 内移动时，向插件发送事件。

## 语法

```javascript
expression.MouseMoveWindow(frameId, x, y);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称**    | **必填/选填** | **数据类型** | **默认值** | **描述**       |
| ------- | --------- | -------- | ------ | ---------- |
| frameId | 必填      | 字符串   |        | iframe 的 ID |
| x       | 必填      | 数字     |        | X 坐标     |
| y       | 必填      | 数字     |        | Y 坐标     |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MouseMoveWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", 70, 40]);
```
