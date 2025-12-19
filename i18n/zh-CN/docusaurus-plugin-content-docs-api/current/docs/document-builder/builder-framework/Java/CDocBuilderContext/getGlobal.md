# getGlobal

返回当前上下文的全局对象。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.getGlobal` 方法。

## 语法

```java
CDocBuilderValue getGlobal();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilder.dispose();
```