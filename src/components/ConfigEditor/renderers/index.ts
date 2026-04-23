import { TextControl, textControlTester } from './controls/TextControl'
import { BooleanControl, booleanControlTester } from './controls/BooleanControl'
import { EnumControl, enumControlTester } from './controls/EnumControl'
import { OneOfControl, oneOfControlTester } from './controls/OneOfControl'
import { ArrayControl, arrayControlTester } from './complex/ArrayControl'
import { ObjectRenderer, objectRendererTester } from './layouts/ObjectRenderer'

export const renderers = [
    { tester: textControlTester, renderer: TextControl },
    { tester: booleanControlTester, renderer: BooleanControl },
    { tester: enumControlTester, renderer: EnumControl },
    { tester: oneOfControlTester, renderer: OneOfControl },
    { tester: arrayControlTester, renderer: ArrayControl },
    { tester: objectRendererTester, renderer: ObjectRenderer },
]
