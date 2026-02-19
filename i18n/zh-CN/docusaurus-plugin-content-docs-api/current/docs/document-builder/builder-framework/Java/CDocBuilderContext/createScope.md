# createScope

创建一个[上下文作用域](../CDocBuilderContextScope/CDocBuilderContextScope.md)，该作用域为在本地作用域内执行的所有操作设置执行上下文。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.createScope` 方法。

## 语法

```java
CDocBuilderContextScope createScope();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderContextScope scope = context.createScope();
CDocBuilder.dispose();
```