# ApiPivotItem

表示 ApiPivotItem 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Caption | string | 返回数据透视项的标题。 |
| Field | string | 返回数据透视项的字段。 |
| Name | string | 返回数据透视项的名称。 |
| Parent | string | 返回数据透视项的父级。 |
| Value | string | 返回数据透视表字段中指定项的名称。 |
| Visible | boolean | 返回或设置数据透视项的可见性。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetCaption](./Methods/GetCaption.md) | string | 返回数据透视项的标题。 |
| [GetName](./Methods/GetName.md) | string | 返回数据透视项的名称。 |
| [GetParent](./Methods/GetParent.md) | [ApiPivotField](../ApiPivotField/ApiPivotField.md) | 返回数据透视项的父级。 |
| [GetValue](./Methods/GetValue.md) | string | 返回数据透视表字段中指定项的名称。 |
| [GetVisible](./Methods/GetVisible.md) | boolean | 返回数据透视项的可见性。 |
| [SetVisible](./Methods/SetVisible.md) | 无 | 设置数据透视项的可见性。💡 隐藏其他项时，至少必须保留一个可见项。 |
