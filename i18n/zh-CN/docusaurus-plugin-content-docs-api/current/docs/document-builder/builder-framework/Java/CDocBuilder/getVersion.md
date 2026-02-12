# getVersion

返回 ONLYOFFICE 文档构建器引擎版本。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.getVersion` 方法。

## 语法

```java
String getVersion();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
String version = builder.getVersion();
CDocBuilder.dispose();
```