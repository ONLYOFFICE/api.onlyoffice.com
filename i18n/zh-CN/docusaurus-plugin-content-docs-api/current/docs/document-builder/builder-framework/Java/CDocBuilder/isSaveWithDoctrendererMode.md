# isSaveWithDoctrendererMode

指定在构建文档或保存文件时从编辑器获取内容时是否使用doctrenderer模式。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.isSaveWithDoctrendererMode` 方法。

## 语法

```java
boolean isSaveWithDoctrendererMode();
```

## 示例

### Java

```java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
boolean doctrendererMode = builder.isSaveWithDoctrendererMode();
CDocBuilder.dispose();
```