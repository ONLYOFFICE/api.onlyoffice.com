# 添加内容控件图片

向文档添加一个空的内容控件图片。

## 语法

```javascript
expression.AddContentControlPicture(commonPr);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| commonPr | 选填 | [内容控件属性](../Enumeration/ContentControlProperties.md) | &#123;&#125; | 公共内容控件属性。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("AddContentControlPicture", [{"Id" : 7, "Tag" : "{tag}", "Lock" : 0}]);
```
