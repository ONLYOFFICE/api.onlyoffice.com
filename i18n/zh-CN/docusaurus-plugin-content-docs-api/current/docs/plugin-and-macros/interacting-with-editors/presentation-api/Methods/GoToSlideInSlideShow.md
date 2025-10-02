# 幻灯片放映中跳转到指定幻灯片

显示具有特定索引的幻灯片。

## 语法

```javascript
expression.GoToSlideInSlideShow(nSlideIndex);
```

`expression` - 一个表示 [Api](Methods.md) 类的变量。

## 参数

| **名称**    | **必填/选填** | **数据类型** | **默认值** | **描述**       |
| ----------- | ------------ | ------------ | ---------- | -------------- |
| nSlideIndex | 必填         | number       |            | 幻灯片索引。   |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("GoToSlideInSlideShow", [2]);
```
