# createUndefined

创建一个未定义值，类似于 JavaScript 中的 `undefined`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.createUndefined` 方法。

## 语法

```java
CDocBuilderValue createUndefined();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue undefinedValue = context.createUndefined();
CDocBuilder.dispose();
```