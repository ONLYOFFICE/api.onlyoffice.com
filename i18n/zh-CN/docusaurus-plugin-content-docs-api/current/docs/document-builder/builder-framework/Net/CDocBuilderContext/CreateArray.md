# CreateArray（创建数组）

创建一个数组值，类似于 JavaScript 中的 `new Array(length)`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateArray` 方法。

## 语法

```cs
CDocBuilderValue^ CreateArray(int nLength);
```

## 参数

| 参数名  | 类型 | 描述         |
| ------- | ---- | ------------ |
| nLength | int  | 数组的长度。 |

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oArray = oContext.CreateArray(2);
CDocBuilder.Destroy();
```