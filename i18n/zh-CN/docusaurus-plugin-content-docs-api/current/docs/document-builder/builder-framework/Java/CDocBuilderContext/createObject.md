# createObject

创建一个空对象，类似于 JS 中的 `{}`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.createObject` 方法。

## 语法

```java
CDocBuilderValue createObject();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue objectValue = context.createObject();
CDocBuilder.dispose();
```