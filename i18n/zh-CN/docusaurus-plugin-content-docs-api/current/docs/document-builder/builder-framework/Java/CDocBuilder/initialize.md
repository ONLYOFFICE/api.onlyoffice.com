# initialize (初始化)

将 ONLYOFFICE 文档生成器初始化为一个库，以便应用程序能够使用它。此方法仅设置主要文档生成器资源（icu 文件等）的目录。如果不调用此方法，文档生成器将从当前进程目录中查找资源。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.initialize` 方法。

## 语法

```java
static void initialize(String directory = 0);
```

## 参数

| 参数      | 类型     | 默认值 | 描述                          |
| --------- | -------- | ------ | ----------------------------- |
| directory | String   | 0      | 主要文档生成器资源的路径。    |

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilder.dispose();
```