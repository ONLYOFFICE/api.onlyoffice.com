# SetPicture

设置图片内容控件的内容（图像）。
此方法通过从提供的 URL 设置图像来更新内容控件中的图片。
URL 应该是指向图像的互联网链接。

## 语法

```javascript
expression.SetPicture(imageUrl);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | 必需 | string |  | 用于内容控件的图像 URL。目前仅支持互联网 URL。 |

## 返回值

boolean