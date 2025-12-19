# toInt

将 `CDocBuilderValue` 对象转换为整数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.toInt` 方法。

## 语法

```java
int toInt();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
int intValue = global.toInt();
CDocBuilder.dispose();
```