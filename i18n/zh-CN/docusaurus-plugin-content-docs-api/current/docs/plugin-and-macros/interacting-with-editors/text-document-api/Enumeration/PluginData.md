# PluginData

插件对象。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| canRemoved | boolean | 指定是否可以删除插件（**true**）或不可以（**false**）。 |
| guid | string | 插件标识符。必须是 *asc.&#123;UUID&#125;* 类型。 |
| obj | object | 已安装插件的[配置](https://api.onlyoffice.com/docs/plugin-and-macros/structure/configuration/)。版本从配置中获取并与当前版本进行比较以检查更新。 |
| url | string | 插件配置的 URL。 |
## 类型

Object



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
