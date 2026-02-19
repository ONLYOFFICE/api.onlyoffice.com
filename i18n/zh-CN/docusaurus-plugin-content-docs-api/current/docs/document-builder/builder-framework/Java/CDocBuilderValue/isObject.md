# isObject

如果 `CDocBuilderValue` 对象是一个对象，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.isObject` 方法。

## 语法

```java
boolean isObject();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolObject = global.isObject();
CDocBuilder.dispose();
```