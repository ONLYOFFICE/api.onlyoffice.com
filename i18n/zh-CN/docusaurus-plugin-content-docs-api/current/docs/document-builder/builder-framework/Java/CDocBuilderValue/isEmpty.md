# isEmpty

如果 `CDocBuilderValue` 对象为空，则返回 true。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.isEmpty` 方法。

## 语法

```java
boolean isEmpty();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolEmpty = global.isEmpty();
CDocBuilder.dispose();
```