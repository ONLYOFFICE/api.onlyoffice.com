# AnimationEffectType

Animation effect type.

## Type

Enumeration

## Values

- "entranceAppear"
- "entranceFade"
- "entranceFlyIn"
- "entranceFloatIn"
- "entranceSplit"
- "entranceWipe"
- "entranceCircle"
- "entranceBox"
- "entranceDiamond"
- "entrancePlus"
- "entranceWheel"
- "entranceRandomBars"
- "entranceGrowAndTurn"
- "entranceZoom"
- "entranceSwivel"
- "entranceBounce"
- "entranceBlinds"
- "entranceCheckerboard"
- "entrancePeekIn"
- "entranceStrips"
- "entranceExpand"
- "entranceRiseUp"
- "entranceCenterRevolve"
- "entranceSpinner"
- "entranceFloatUp"
- "entranceFloatDown"
- "entranceSpiralIn"
- "entranceWedge"
- "entranceDissolveIn"
- "entrancePinwheel"
- "exitDisappear"
- "exitFadeOut"
- "exitFlyOut"
- "exitFloatOut"
- "exitSplitOut"
- "exitWipeOut"
- "exitCircleOut"
- "exitBoxOut"
- "exitDiamondOut"
- "exitPlusOut"
- "exitWheelOut"
- "exitRandomBarsOut"
- "exitShrinkAndTurn"
- "exitZoomOut"
- "exitSwivelOut"
- "exitBounceOut"
- "exitSpiralOut"
- "exitCollapse"
- "emphasisPulse"
- "emphasisColorPulse"
- "emphasisTeeter"
- "emphasisSpin"
- "emphasisGrowShrink"
- "emphasisDesaturate"
- "emphasisDarken"
- "emphasisLighten"
- "emphasisTransparency"
- "emphasisObjectColor"
- "emphasisComplementaryColor"
- "emphasisLineColor"
- "emphasisFillColor"
- "emphasisFontColor"
- "emphasisBlink"
- "emphasisShimmer"
- "emphasisWave"
- "pathCircle"
- "pathSquare"
- "pathDiamond"
- "pathHeart"
- "pathStar"
- "pathHexagon"
- "pathOctagon"
- "pathRight"
- "pathLeft"
- "pathUp"
- "pathDown"


## Example

This example adds an entrance fade animation to a shape.

```javascript editor-pptx
let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oSlide.AddObject(oShape);
let oTimeLine = oSlide.GetTimeLine();
let oMainSequence = oTimeLine.GetMainSequence();
oMainSequence.AddEffect(oShape, 'entranceFade', 'onclick');

```
