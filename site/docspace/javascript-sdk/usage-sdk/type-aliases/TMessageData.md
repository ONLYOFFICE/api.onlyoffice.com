# Type Alias: TMessageData

> **TMessageData** = `object`

Defined in: [types/index.ts:324](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L324)

The message data structure.

## Properties

### commandData?

> `optional` **commandData**: `object`

Defined in: [types/index.ts:326](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L326)

The command data payload.

***

### commandName

> **commandName**: `string`

Defined in: [types/index.ts:328](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L328)

The name of the command to execute in the DocSpace frame.

***

### eventReturnData?

> `optional` **eventReturnData**: [`TEventReturnData`](TEventReturnData.md)

Defined in: [types/index.ts:330](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L330)

The event return data.

***

### error?

> `optional` **error**: `object`

Defined in: [types/index.ts:332](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L332)

The error information.

#### message

> **message**: `string`

The error message.

#### code?

> `optional` **code**: `number`

The error code.

***

### frameId

> **frameId**: `string`

Defined in: [types/index.ts:339](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L339)

The frame unique identifier.

***

### methodReturnData?

> `optional` **methodReturnData**: `object`

Defined in: [types/index.ts:341](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L341)

The method return data.

***

### type

> **type**: [`TMessageTypes`](TMessageTypes.md)

Defined in: [types/index.ts:343](https://github.com/ONLYOFFICE/docspace-sdk-js/blob/master/src/types/index.ts#L343)

The message type.
