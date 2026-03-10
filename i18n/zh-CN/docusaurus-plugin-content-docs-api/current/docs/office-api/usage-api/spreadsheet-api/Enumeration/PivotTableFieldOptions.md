# PivotTableFieldOptions

向数据透视表报表添加行、列和页字段的设置。

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| addToTable | boolean | 指定是否仅将字段应用于数据透视表报表。如果为 `true`，指定的字段将添加到报表中而不替换现有字段。如果为 `false`，现有字段将被新字段替换。 |
| columns | number \| string \| number[] \| string[] | 要作为列添加或添加到系列轴的字段名称或 ID 数组。 |
| pages | number \| string \| number[] \| string[] | 要作为页面添加或添加到页面区域的字段名称或 ID 数组。 |
| rows | number \| string \| number[] \| string[] | 要作为行添加或添加到类别轴的字段名称或 ID 数组。 |
