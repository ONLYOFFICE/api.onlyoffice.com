# GetPageImage

返回页面图像。

## 语法

```javascript
expression.GetPageImage(nPage, oParams);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPage | 必需 | number |  | 页面索引。 |
| oParams | 可选 | object | &#123;&#125; | 图像参数。 |
| oParams.maxSize | 可选 | number |  | 较大图像边的大小，以像素为单位。 |
| oParams.annotations | 可选 | boolean | false | 指定是否渲染批注。 |
| oParams.fields | 可选 | boolean | false | 指定是否渲染字段。 |
| oParams.drawings | 可选 | boolean | false | 指定是否渲染图形。 |

## 返回值

canvas