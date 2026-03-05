# ApiSlideShowTransition

Represents the ApiSlideShowTransition class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetAdvanceOnClick](./Methods/GetAdvanceOnClick.md) | boolean | Returns whether the slide advances on mouse click. |
| [GetAdvanceOnTime](./Methods/GetAdvanceOnTime.md) | boolean | Returns whether the slide advances after a specified time. |
| [GetAdvanceTime](./Methods/GetAdvanceTime.md) | number \| undefined | Returns the slide advance time in milliseconds. |
| [GetClassType](./Methods/GetClassType.md) | "slideShowTransition" | Returns the type of the ApiSlideShowTransition class. |
| [GetDuration](./Methods/GetDuration.md) | number | Returns the transition duration in milliseconds for the slide show transition. |
| [GetEntryEffect](./Methods/GetEntryEffect.md) | [EntryEffect](../Enumeration/EntryEffect.md) | Returns the entry effect for the slide show transition. |
| [GetSpeed](./Methods/GetSpeed.md) | [TransitionSpeed](../Enumeration/TransitionSpeed.md) | Returns the transition speed (similar to PowerPoint VBA Speed property). Maps duration to speed based on OOXML spd attribute logic: - fast: duration &lt;= 500ms - medium: 500ms &lt; duration &lt;= 750ms - slow: duration &gt; 750ms |
| [SetAdvanceOnClick](./Methods/SetAdvanceOnClick.md) | boolean | Sets whether the slide advances on mouse click. |
| [SetAdvanceOnTime](./Methods/SetAdvanceOnTime.md) | boolean | Sets whether the slide advances after a specified time. |
| [SetAdvanceTime](./Methods/SetAdvanceTime.md) | boolean | Sets the slide advance time in milliseconds. |
| [SetDuration](./Methods/SetDuration.md) | boolean | Sets the transition duration in milliseconds for the slide show transition. |
| [SetEntryEffect](./Methods/SetEntryEffect.md) | boolean | Sets the entry effect for the slide show transition. |
| [SetSpeed](./Methods/SetSpeed.md) | boolean | Sets the transition speed (similar to PowerPoint VBA Speed property). Converts speed to duration based on standard values: - fast = 500ms - medium = 750ms - slow = 1000ms |
