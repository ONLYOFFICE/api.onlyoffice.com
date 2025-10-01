# 鼠标释放事件

当鼠标按钮在插件 iframe 内释放时，向插件发送事件。

## 语法

```javascript
expression.MouseUpWindow(frameId, x, y);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| 名称    | 必填/选填 | 数据类型 | 默认值 | 描述         |
| ------- | --------- | -------- | ------ | ------------ |
| frameId | 必填      | string   |        | iframe 的 ID |
| x       | 必填      | number   |        | X 坐标       |
| y       | 必填      | number   |        | Y 坐标       |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("MouseUpWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", 70, 40]);
```
