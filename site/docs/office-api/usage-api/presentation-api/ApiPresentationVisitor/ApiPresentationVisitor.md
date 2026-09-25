# ApiPresentationVisitor

Class representing a presentation visitor. It walks slides, layouts, masters, speaker notes, drawings (including
the drawings nested in groups, table cells and chart titles) and the paragraphs and runs of their text.
Assign functions to the hooks to be notified; return true from a hook to skip the subtree of that node.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Stop](./Methods/Stop.md) | boolean | Stops the traversal. No further hooks are called after the current one returns. |
| [Traverse](./Methods/Traverse.md) | boolean | Traverses the object the visitor was created from and calls the assigned hooks for every node. |
