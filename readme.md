# figures

> Unicode symbols with Windows CMD fallbacks

[![](screenshot.png)](index.js)

[*and more...*](index.js)

Windows CMD only supports a [limited character set](http://en.wikipedia.org/wiki/Code_page_437).

## Install

```
$ npm install figures
```

## Usage

See the [source](index.js) for supported symbols.

```js
const figures = require('figures');

console.log(figures('✔︎ check'));
// On non-Windows OSes:  ✔︎ check
// On Windows:           √ check

console.log(figures.tick);
// On non-Windows OSes:  ✔︎
// On Windows:           √

console.log(figures.main.tick);
// On all OSes:  ✔︎

console.log(figures.windows.tick);
// On all OSes:  √
```

## API

### figures(string)

Returns the input with replaced fallback Unicode symbols on Windows.

All the below [figures](#figures) are attached to the main export as shown in the example above.

#### string

Type: `string`

String where the Unicode symbols will be replaced with fallback symbols depending on the OS.

### figures.main

Symbols to use when not running on Windows.

### figures.windows

Symbols to use when running on Windows.


## Figures

`Windows` characters are only shown when they differ from the `Main` ones.

| Name                                        | Main | Windows |
| ------------------------------------------- | :--: | :-----: |
| tick                                        | `✔`  |   `√`   |
| info                                        | `ℹ`  |   `i`   |
| warning                                     | `⚠`  |   `‼`   |
| cross                                       | `✖`  |   `×`   |
| square                                      | `█`  |         |
| squareSmall                                 | `◻`  |   `□`   |
| squareSmallFilled                           | `◼`  |   `■`   |
| squareDarkShade                             | `▓`  |         |
| squareMediumShade                           | `▒`  |         |
| squareLightShade                            | `░`  |         |
| squareTop                                   | `▀`  |         |
| squareBottom                                | `▄`  |         |
| squareLeft                                  | `▌`  |         |
| squareRight                                 | `▐`  |         |
| squareCenter                                | `■`  |         |
| circle                                      | `◯`  |  `( )`  |
| circleFilled                                | `◉`  |  `(*)`  |
| circleDotted                                | `◌`  |  `( )`  |
| circleDouble                                | `◎`  |  `( )`  |
| circleCircle                                | `ⓞ`  |  `(○)`  |
| circleCross                                 | `ⓧ`  |  `(×)`  |
| circlePipe                                  | `Ⓘ`  |  `(│)`  |
| circleQuestionMark                          | `?⃝ ` |  `(?)`  |
| radioOn                                     | `◉`  |  `(*)`  |
| radioOff                                    | `◯`  |  `( )`  |
| checkboxOn                                  | `☒`  |  `[×]`  |
| checkboxOff                                 | `☐`  |  `[ ]`  |
| checkboxCircleOn                            | `ⓧ`  |  `(×)`  |
| checkboxCircleOff                           | `Ⓘ`  |  `( )`  |
| questionMarkPrefix                          | `?⃝ ` |   `？`  |
| bullet                                      | `●`  |         |
| dot                                         | `․`  |         |
| ellipsis                                    | `…`  |         |
| pointer                                     | `❯`  |   `>`   |
| pointerSmall                                | `›`  |   `›`   |
| triangleUp                                  | `▲`  |         |
| triangleUpSmall                             | `▴`  |         |
| triangleUpOutline                           | `△`  |   `∆`   |
| triangleDown                                | `▼`  |         |
| triangleDownSmall                           | `▾`  |         |
| triangleLeft                                | `◀`  |   `◄`   |
| triangleLeftSmall                           | `◂`  |         |
| triangleRight                               | `▶`  |   `►`   |
| triangleRightSmall                          | `▸`  |         |
| lozenge                                     | `◆`  |   `♦`   |
| lozengeOutline                              | `◇`  |   `◊`   |
| home                                        | `⌂`  |         |
| hamburger                                   | `☰`  |   `≡`   |
| smiley                                      | `㋡` |   `☺`   |
| mustache                                    | `෴`  |  `┌─┐`  |
| heart                                       | `♥`  |         |
| star                                        | `★`  |   `✶`   |
| play                                        | `▶`  |   `►`   |
| musicNote                                   | `♪`  |         |
| musicNoteBeamed                             | `♫`  |         |
| nodejs                                      | `⬢`  |   `♦`   |
| arrowUp                                     | `↑`  |         |
| arrowDown                                   | `↓`  |         |
| arrowLeft                                   | `←`  |         |
| arrowRight                                  | `→`  |         |
| arrowLeftRight                              | `↔`  |         |
| arrowUpDown                                 | `↕`  |         |
| almostEqual                                 | `≈`  |         |
| notEqual                                    | `≠`  |         |
| lessOrEqual                                 | `≤`  |         |
| greaterOrEqual                              | `≥`  |         |
| identical                                   | `≡`  |         |
| infinity                                    | `∞`  |         |
| subscriptZero                               | `₀`  |         |
| subscriptOne                                | `₁`  |         |
| subscriptTwo                                | `₂`  |         |
| subscriptThree                              | `₃`  |         |
| subscriptFour                               | `₄`  |         |
| subscriptFive                               | `₅`  |         |
| subscriptSix                                | `₆`  |         |
| subscriptSeven                              | `₇`  |         |
| subscriptEight                              | `₈`  |         |
| subscriptNine                               | `₉`  |         |
| oneHalf                                     | `½`  |         |
| oneThird                                    | `⅓`  |         |
| oneQuarter                                  | `¼`  |         |
| oneFifth                                    | `⅕`  |         |
| oneSixth                                    | `⅙`  |         |
| oneSeventh                                  | `⅐`  |  `1/7`  |
| oneEighth                                   | `⅛`  |         |
| oneNinth                                    | `⅑`  |  `1/9`  |
| oneTenth                                    | `⅒`  |  `1/10` |
| twoThirds                                   | `⅔`  |         |
| twoFifths                                   | `⅖`  |         |
| threeQuarters                               | `¾`  |         |
| threeFifths                                 | `⅗`  |         |
| threeEighths                                | `⅜`  |         |
| fourFifths                                  | `⅘`  |         |
| fiveSixths                                  | `⅚`  |         |
| fiveEighths                                 | `⅝`  |         |
| sevenEighths                                | `⅞`  |         |
| line                                        | `─`  |         |
| lineBold                                    | `━`  |         |
| lineDouble                                  | `═`  |         |
| lineDashed0                                 | `┄`  |         |
| lineDashed1                                 | `┅`  |         |
| lineDashed2                                 | `┈`  |         |
| lineDashed3                                 | `┉`  |         |
| lineDashed4                                 | `╌`  |         |
| lineDashed5                                 | `╍`  |         |
| lineDashed6                                 | `╴`  |         |
| lineDashed7                                 | `╶`  |         |
| lineDashed8                                 | `╸`  |         |
| lineDashed9                                 | `╺`  |         |
| lineDashed10                                | `╼`  |         |
| lineDashed11                                | `╾`  |         |
| lineDashed12                                | `−`  |         |
| lineDashed13                                | `–`  |         |
| lineDashed14                                | `‐`  |         |
| lineDashed15                                | `⁃`  |         |
| lineVertical                                | `│`  |         |
| lineVerticalBold                            | `┃`  |         |
| lineVerticalDouble                          | `║`  |         |
| lineVerticalDashed0                         | `┆`  |         |
| lineVerticalDashed1                         | `┇`  |         |
| lineVerticalDashed2                         | `┊`  |         |
| lineVerticalDashed3                         | `┋`  |         |
| lineVerticalDashed4                         | `╎`  |         |
| lineVerticalDashed5                         | `╏`  |         |
| lineVerticalDashed6                         | `╵`  |         |
| lineVerticalDashed7                         | `╷`  |         |
| lineVerticalDashed8                         | `╹`  |         |
| lineVerticalDashed9                         | `╻`  |         |
| lineVerticalDashed10                        | `╽`  |         |
| lineVerticalDashed11                        | `╿`  |         |
| lineDownLeft                                | `┐`  |         |
| lineDownLeftArc                             | `╮`  |         |
| lineDownBoldLeftBold                        | `┓`  |         |
| lineDownBoldLeft                            | `┒`  |         |
| lineDownLeftBold                            | `┑`  |         |
| lineDownDoubleLeftDouble                    | `╗`  |         |
| lineDownDoubleLeft                          | `╖`  |         |
| lineDownLeftDouble                          | `╕`  |         |
| lineDownRight                               | `┌`  |         |
| lineDownRightArc                            | `╭`  |         |
| lineDownBoldRightBold                       | `┏`  |         |
| lineDownBoldRight                           | `┎`  |         |
| lineDownRightBold                           | `┍`  |         |
| lineDownDoubleRightDouble                   | `╔`  |         |
| lineDownDoubleRight                         | `╓`  |         |
| lineDownRightDouble                         | `╒`  |         |
| lineUpLeft                                  | `┘`  |         |
| lineUpLeftArc                               | `╯`  |         |
| lineUpBoldLeftBold                          | `┛`  |         |
| lineUpBoldLeft                              | `┚`  |         |
| lineUpLeftBold                              | `┙`  |         |
| lineUpDoubleLeftDouble                      | `╝`  |         |
| lineUpDoubleLeft                            | `╜`  |         |
| lineUpLeftDouble                            | `╛`  |         |
| lineUpRight                                 | `└`  |         |
| lineUpRightArc                              | `╰`  |         |
| lineUpBoldRightBold                         | `┗`  |         |
| lineUpBoldRight                             | `┖`  |         |
| lineUpRightBold                             | `┕`  |         |
| lineUpDoubleRightDouble                     | `╚`  |         |
| lineUpDoubleRight                           | `╙`  |         |
| lineUpRightDouble                           | `╘`  |         |
| lineUpDownLeft                              | `┤`  |         |
| lineUpBoldDownBoldLeftBold                  | `┫`  |         |
| lineUpBoldDownBoldLeft                      | `┨`  |         |
| lineUpDownLeftBold                          | `┥`  |         |
| lineUpBoldDownLeftBold                      | `┩`  |         |
| lineUpDownBoldLeftBold                      | `┪`  |         |
| lineUpDownBoldLeft                          | `┧`  |         |
| lineUpBoldDownLeft                          | `┦`  |         |
| lineUpDoubleDownDoubleLeftDouble            | `╣`  |         |
| lineUpDoubleDownDoubleLeft                  | `╢`  |         |
| lineUpDownLeftDouble                        | `╡`  |         |
| lineUpDownRight                             | `├`  |         |
| lineUpBoldDownBoldRightBold                 | `┣`  |         |
| lineUpBoldDownBoldRight                     | `┠`  |         |
| lineUpDownRightBold                         | `┝`  |         |
| lineUpBoldDownRightBold                     | `┡`  |         |
| lineUpDownBoldRightBold                     | `┢`  |         |
| lineUpDownBoldRight                         | `┟`  |         |
| lineUpBoldDownRight                         | `┞`  |         |
| lineUpDoubleDownDoubleRightDouble           | `╠`  |         |
| lineUpDoubleDownDoubleRight                 | `╟`  |         |
| lineUpDownRightDouble                       | `╞`  |         |
| lineDownLeftRight                           | `┬`  |         |
| lineDownBoldLeftBoldRightBold               | `┳`  |         |
| lineDownLeftBoldRightBold                   | `┯`  |         |
| lineDownBoldLeftRight                       | `┰`  |         |
| lineDownBoldLeftBoldRight                   | `┱`  |         |
| lineDownBoldLeftRightBold                   | `┲`  |         |
| lineDownLeftRightBold                       | `┮`  |         |
| lineDownLeftBoldRight                       | `┭`  |         |
| lineDownDoubleLeftDoubleRightDouble         | `╦`  |         |
| lineDownDoubleLeftRight                     | `╥`  |         |
| lineDownLeftDoubleRightDouble               | `╤`  |         |
| lineUpLeftRight                             | `┴`  |         |
| lineUpBoldLeftBoldRightBold                 | `┻`  |         |
| lineUpLeftBoldRightBold                     | `┷`  |         |
| lineUpBoldLeftRight                         | `┸`  |         |
| lineUpBoldLeftBoldRight                     | `┹`  |         |
| lineUpBoldLeftRightBold                     | `┺`  |         |
| lineUpLeftRightBold                         | `┶`  |         |
| lineUpLeftBoldRight                         | `┵`  |         |
| lineUpDoubleLeftDoubleRightDouble           | `╩`  |         |
| lineUpDoubleLeftRight                       | `╨`  |         |
| lineUpLeftDoubleRightDouble                 | `╧`  |         |
| lineUpDownLeftRight                         | `┼`  |         |
| lineUpBoldDownBoldLeftBoldRightBold         | `╋`  |         |
| lineUpDownBoldLeftBoldRightBold             | `╈`  |         |
| lineUpBoldDownLeftBoldRightBold             | `╇`  |         |
| lineUpBoldDownBoldLeftRightBold             | `╊`  |         |
| lineUpBoldDownBoldLeftBoldRight             | `╉`  |         |
| lineUpBoldDownLeftRight                     | `╀`  |         |
| lineUpDownBoldLeftRight                     | `╁`  |         |
| lineUpDownLeftBoldRight                     | `┽`  |         |
| lineUpDownLeftRightBold                     | `┾`  |         |
| lineUpBoldDownBoldLeftRight                 | `╂`  |         |
| lineUpDownLeftBoldRightBold                 | `┿`  |         |
| lineUpBoldDownLeftBoldRight                 | `╃`  |         |
| lineUpBoldDownLeftRightBold                 | `╄`  |         |
| lineUpDownBoldLeftBoldRight                 | `╅`  |         |
| lineUpDownBoldLeftRightBold                 | `╆`  |         |
| lineUpDoubleDownDoubleLeftDoubleRightDouble | `╬`  |         |
| lineUpDoubleDownDoubleLeftRight             | `╫`  |         |
| lineUpDownLeftDoubleRightDouble             | `╪`  |         |
| lineCross                                   | `╳`  |         |
| lineBackslash                               | `╲`  |         |
| lineSlash                                   | `╱`  |         |

## Other characters

If you cannot find the character you're looking for in the table above, please look at this full list of [cross-platform terminal characters](https://github.com/ehmicky/cross-platform-terminal-characters).

## Unsupported terminals

The following terminals are not officially supported:

- xterm
- Linux Terminal (kernel)
- cmder

They can display most but not all of the symbols listed above.

## Related

- [log-symbols](https://github.com/sindresorhus/log-symbols) - Colored symbols for various log levels

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-figures?utm_source=npm-figures&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
