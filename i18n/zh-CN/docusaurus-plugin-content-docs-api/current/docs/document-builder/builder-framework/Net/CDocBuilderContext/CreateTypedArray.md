# CreateTypedArray（创建类型化数组）

创建一个 Uint8Array 值，类似于 JS 中的 `Uint8Array`。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderContext.CreateTypedArray` 方法。

## 语法

```cs
CDocBuilderValue^ CreateTypedArray(array | <Byte>^ aBuffer);
```

## 参数

| 参数     | 类型               | 描述         |
| -------- | ------------------ | ------------ |
| aBuffer  | array \| \<Byte\>^ | 数组缓冲区。 |

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
array<System::Byte>^ aBuffer = gcnew array<Byte>(1500);
CValue oTypedArray = oContext.CreateTypedArray(aBuffer);
CDocBuilder.Destroy();
```