# createNull

创建一个空值，类似于 JS 中的 `null`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.createNull` 方法。

## 语法

```java
CDocBuilderValue createNull();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue nullValue = context.createNull();
CDocBuilder.dispose();
```