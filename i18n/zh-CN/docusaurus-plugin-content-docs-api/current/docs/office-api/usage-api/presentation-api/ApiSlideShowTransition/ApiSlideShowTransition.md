# ApiSlideShowTransition

表示 ApiSlideShowTransition 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetAdvanceOnClick](./Methods/GetAdvanceOnClick.md) | boolean | 返回幻灯片是否在鼠标单击时切换。 |
| [GetAdvanceOnTime](./Methods/GetAdvanceOnTime.md) | boolean | 返回幻灯片是否在指定时间后切换。 |
| [GetAdvanceTime](./Methods/GetAdvanceTime.md) | number \| undefined | 返回幻灯片切换时间（以毫秒为单位）。 |
| [GetClassType](./Methods/GetClassType.md) | "slideShowTransition" | 返回 ApiSlideShowTransition 类的类型。 |
| [GetDuration](./Methods/GetDuration.md) | number | 返回幻灯片放映切换效果的持续时间（以毫秒为单位）。 |
| [GetEntryEffect](./Methods/GetEntryEffect.md) | [EntryEffect](../Enumeration/EntryEffect.md) | 返回幻灯片放映切换效果的进入效果。 |
| [GetSpeed](./Methods/GetSpeed.md) | [TransitionSpeed](../Enumeration/TransitionSpeed.md) | 返回切换速度（类似于 PowerPoint VBA 的 Speed 属性）。根据 OOXML spd 属性逻辑将持续时间映射为速度：- fast（快）：duration &lt;= 500ms - medium（中）：500ms &lt; duration &lt;= 750ms - slow（慢）：duration &gt; 750ms |
| [SetAdvanceOnClick](./Methods/SetAdvanceOnClick.md) | boolean | 设置幻灯片是否在鼠标单击时切换。 |
| [SetAdvanceOnTime](./Methods/SetAdvanceOnTime.md) | boolean | 设置幻灯片是否在指定时间后切换。 |
| [SetAdvanceTime](./Methods/SetAdvanceTime.md) | boolean | 设置幻灯片切换时间（以毫秒为单位）。 |
| [SetDuration](./Methods/SetDuration.md) | boolean | 设置幻灯片放映切换效果的持续时间（以毫秒为单位）。 |
| [SetEntryEffect](./Methods/SetEntryEffect.md) | boolean | 设置幻灯片放映切换效果的进入效果。 |
| [SetSpeed](./Methods/SetSpeed.md) | boolean | 设置切换速度（类似于 PowerPoint VBA 的 Speed 属性）。根据标准值将速度转换为持续时间：- fast（快）= 500ms - medium（中）= 750ms - slow（慢）= 1000ms |
