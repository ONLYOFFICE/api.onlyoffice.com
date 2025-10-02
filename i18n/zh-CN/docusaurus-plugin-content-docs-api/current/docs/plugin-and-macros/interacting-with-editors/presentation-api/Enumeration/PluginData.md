# 插件数据

插件对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| canRemoved | boolean | 指定插件是否可以被移除（**true** 为可移除，**false** 为不可移除）。 |
| guid | string | 插件标识符，必须为 *asc.&#123;UUID&#125;* 类型。 |
| obj | object | 安装插件的[配置](https://api.onlyoffice.com/zh-CN/docs/plugin-and-macros/structure/configuration/)。版本信息将从配置中获取，并与当前版本比较以检查是否需要更新。 |
| url | string | 插件配置的 URL。 |
## 类型

Object（对象）



## 示例

```javascript
let plugin = {
    "url": "https://example.com/plugin/config.json",
    "guid": "asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}",
    "canRemoved": true,
    "obj": {
        "baseUrl": "",
        "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
        "version": "1.0",
        "minVersion": "6.3.0",
        ...
    }
};
```
