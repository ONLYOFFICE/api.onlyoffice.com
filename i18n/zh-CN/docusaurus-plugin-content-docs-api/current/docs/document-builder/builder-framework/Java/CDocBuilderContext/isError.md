# isError

检查JS中的错误。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.isError` 方法。

## 语法

```java
boolean isError();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
boolean errorValue = context.isError();
CDocBuilder.dispose();
```