# Sequence Boilerplate (WIP)

Boilerplate created with the Sequence CLI. https://gitlab.com/sequence-templates/sequence-cli

#### Build tools

- ESLint
- PostCSS (Autoprefix)
- PostCSS (px2rem)
- Prettier
- SASS (SCSS)

#### Frameworks & Libraries

- [SCSS Framework](#scss-framework)
- Optional - Locomotive Scroll <sup>(Nuxt2 template only)</sup>
- Optional - Lodash <sup>(Nuxt2 template only)</sup>
- Optional - Ethers.js <sup>(Nuxt2 template only)</sup>
<!-- - [Extensions](#extensions) -->

<br />

# SCSS Framework

Front-end toolkits like Bootstrap and Tailwind CSS are great, however they are often bloated with unneeded CSS. And while there are tools out there that can strip that unwanted code out, at Sequence we find we have little use for them. Our websites are designed to be bespoke, and with that comes a bespoke development framework unique to the Sequence development team.

Our SCSS framework comes with some very useful classes, functions, mixins and variables to assist in speedy and consistent front-end development across all of our projects. Please fully read this README to better familiarise yourself with the tools available to you before getting started.

- [Static Classes](#static-classes)
- [Generated Classes](#generated-classes)
- [Functions](#functions)
- [Mixins](#mixins)

<br />

## Static Classes

Static classes are commonly used across our projects. To avoid re-writing the same styles over and over again, the following classes are available to you. (These files **SHOULD NOT** be modified).

- [Flex](#flex)
- [Grid](#grid)
- [Horizontal Alignment (Flex & Grid)](#horizontal-alignment-for-both-flex-and-grid)
- [Vertical Alignment (Flex & Grid)](#vertical-alignment-for-both-flex-and-grid)
- [Horizontal & Vertical Alignment (Flex & Grid)](#horizontal--vertical-alignment-for-both-flex-and-grid)
- [Opacity](#opacity)
- [Position](#position)
- [Z-index](#z-index)
- [Other](#other)

<sub>/framework/\_classes.scss (Not Editable)</sub>

<br />

#### Flex

```bash
.flex {
  display: flex;
  flex-wrap: wrap;
}

.flex--inline     { display: inline-flex; }
.flex--nowrap     { flex-wrap: nowrap; }
.flex--revwrap    { flex-wrap: wrap-reverse; }
.flex--dir-rev    { flex-direction: row-reverse; }
.flex--dir-c      { flex-direction: column; }
.flex--dir-c-rev  { flex-direction: column-reverse; }
```

<br />

#### Grid

```bash
.grid              { display:grid; }
.grid--inline      { display: inline-grid; }
.grid--flow-den    { grid-auto-flow: dense; }
.grid--flow-r-den  { grid-auto-flow: row dense; }
.grid--flow-c      { grid-auto-flow: column; }
.grid--flow-c-den  { grid-auto-flow: column dense; }
```

<br />

#### Horizontal Alignment (for both Flex and Grid)

```bash
// justify-items
.justifyI--start    { justify-items: start; }
.justifyI--center   { justify-items: center; }
.justifyI--end      { justify-items: end; }
.justifyI--stretch  { justify-items: stretch; }

// justify-content
.justifyC--start    { justify-content: start; }
.justifyC--center   { justify-content: center; }
.justifyC--end      { justify-content: end; }
.justifyC--stretch  { justify-content: stretch; }
.justifyC--between  { justify-content: space-between; }
.justifyC--around   { justify-content: space-around; }
.justifyC--evenly   { justify-content: space-evenly; }
```

<br />

#### Vertical Alignment (for both Flex and Grid)

```bash
// align-items
.alignI--start     { align-items: start; }
.alignI--center    { align-items: center; }
.alignI--end       { align-items: end; }
.alignI--stretch   { align-items: stretch; }
.alignI--baseline  { align-items: baseline; }

// align-content
.alignC--start    { align-content: start; }
.alignC--center   { align-content: center; }
.alignC--end      { align-content: end; }
.alignC--stretch  { align-content: stretch; }
.alignC--between  { align-content: space-between; }
.alignC--around   { align-content: space-around; }
.alignC--evenly   { align-content: space-evenly; }
```

<br />

#### Horizontal & Vertical Alignment (for Grid)

```bash
// place-items
.placeI--center  { place-items: center;}

// place-content
.placeC--center  { place-content: center; }
```

<br />

#### Opacity

```bash
.o--0  { opacity: 0; }
.o--1  { opacity: 0.1; }
.o--2  { opacity: 0.2; }
.o--3  { opacity: 0.3; }
.o--4  { opacity: 0.4; }
.o--5  { opacity: 0.5; }
.o--6  { opacity: 0.6; }
.o--7  { opacity: 0.7; }
.o--8  { opacity: 0.8; }
.o--9  { opacity: 0.9; }
```

<br />

#### Position

```bash
.pos--rel  { position: relative; }
.pos--abs  { position: absolute; }
.pos--fix  { position: fixed; }
.pos--sti  { position: sticky; }
```

<br />

#### Position Alignment

```bash
// horizontal alignment
.x--left   { left: 0; }
.x--right  { right: 0; }
.x--center {
  left: 50%;
  transform: translateX(-50%);
}

// vertical alignment
.y--top    { top: 0; }
.y--bottom { bottom: 0; }
.y--center {
  top: 50%;
  transform: translateY(-50%);
}

// horizontal & vertical alignment
.xy--center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

// all edges
.inset  { inset: 0; }
```

<br />

#### Text Alignment & Transform

```bash
// text alignment
.ta--left    { text-align: left; }
.ta--center  { text-align: center; }
.ta--right   { text-align: right; }

// text transform
.tt--capital  { text-transform: capitalize; }
.tt--lower    { text-transform: lowercase; }
.tt--upper    { text-transform: uppercase; }
```

<br />

#### Z-index

```bash
.z--0    { z-index: -1; }
.z--1    { z-index: 1; }
.z--2    { z-index: 2; }
.z--3    { z-index: 3; }
.z--4    { z-index: 4; }
.z--5    { z-index: 5; }
.z--6    { z-index: 6; }
.z--7    { z-index: 7; }
.z--8    { z-index: 8; }
.z--9    { z-index: 9; }
.z--10   { z-index: 10; }
.z--max  { z-index: 999; }
```

<br />

#### Other

```bash
.noList {
  list-style: none;
  padding: 0;
}

// available as mixin @include buttonReset
.buttonReset {
  cursor: pointer;
  border: 0;
  outline: 0;
  appearance: none;
  border-radius: 0;
  background: transparent;
  padding: 0;
  margin: 0;
}

.noEdgeMargin > :first-child,
.noFirstMargin > :first-child {
  margin-top: 0 !important;
}

.noEdgeMargin > :last-child,
.noLastMargin > :last-child {
  margin-bottom: 0 !important;
}
```

<br />

## Generated Classes

The following set of classes are all generated based on the values within the **\_variables.scss** file. The values in this file can be updated to generate the relevant styles needed for the specific project.

- [Colors](#colors)
- [Containers](#containers)
- [Fonts](#fonts)
- [Grid](#grid)
- [Spacing](#spacing)
- [SVG's](#svgs)

<br />

#### Colors

Color classes are generated based on the following variables inside the **\_variables.scss** file:

- $CUSTOM_NAME
- $fontcolors
- $bgcolors
- $fillcolors

<sub>\_variables.scss (Editable)</sub>

```bash
$white: #fff;
$black: #000;
$error: #fd413b;
$success: #25ab47;

$fontcolors: (
  'white':   $white,
  'black':   $black,
  'error':   $error,
  'success': $success
);

$bgcolors: (
  'white':   $white,
  'black':   $black,
);

$fillcolors: (
  'error':   $error,
  'success': $success
);
```

<sub>Exports as:</sub>

```bash
// global variables
$white: #fff;
$black: #000;
$error: #fd413b;
$success: #25ab47;

// classes
.fc--white      { color: \#fff; }
.fc--black      { color: \#000; }
.fc--error      { color: \#fd413b; }
.fc--success    { color: \#25ab47; }

.bg--white      { background-color: \#fff; }
.bg--black      { background-color: \#000; }

.fill--error    { fill: \#fd413b; }
.fill--success  { fill: \#25ab47; }
```

<br />

#### Containers

Container classes are generated based on the following variables inside the **\_variables.scss** file:

- $containers
- $containerPadding

<sub>\_variables.scss (Editable)</sub>

```bash
$containers: (
  'large':   1600,
  'medium':  1400
);

$containerPadding: (
  'sssl':  88,
  'xxxl':  40,
  'l':     32,
  'xs':    24
);
```

<sub>Exports as:</sub>

```bash
.container {
  margin: 0 auto;
  width: 100%;
  padding: 0 88px;

  @media (max-width: 1400px)  { padding: 0 40px; }
  @media (max-width: 960px)   { padding: 0 32px; }
  @media (max-width: 500px)   { padding: 0 24px; }
}

.container--large   { max-width: 1600px; }
.container--medium  { max-width: 1400px; }
```

<br />

#### Fonts

Font classes are generated based on the following variables inside the **\_variables.scss** file:

- $CUSTOM_NAME
- $fontfamilies
- $fontsizes
- $fontweights
- $lineheights
- $letterspacing

<sub>\_variables.scss (Editable)</sub>

```bash
$sans: 'Arial', sans-serif;
$serif: 'Times New Roman', serif;

$fontFamilies: (
  'sans':  $sans,
  'serif': $serif
);

$fontSizes: (12, 14, 16, 18, 20);
$fontWeights: (300, 600, 700);
$lineHeights: (120, 140, 160, 180);
$letterSpacing: (
  't20': -0.02,
  't10': -0.01,
  'l00': 0,
  'l10': 0.01,
  'l20': 0.02,
);
```

<sub>Exports as:</sub>

```bash
// global variables
$sans: 'Arial', sans-serif;
$serif: 'Times New Roman', serif;

// classes
.ff--sans   { font-family: 'Arial', sans-serif; }
.ff--serif  { font-family: 'Times New Roman', serif; }

.fs--12   { font-size: 0.75rem; }
.fs--14   { font-size: 0.875rem; }
.fs--16   { font-size: 1rem; }
.fs--18   { font-size: 1.125rem; }
.fs--20   { font-size: 1.25rem; }

.fw--300  { font-weight: 300; }
.fw--600  { font-weight: 600; }
.fw--700  { font-weight: 700; }

.lh--120  { line-height: 1.2; }
.lh--140  { line-height: 1.4; }
.lh--160  { line-height: 1.6; }
.lh--180  { line-height: 1.8; }

.ls--t20  { letter-spacing: 0.02em; }
.ls--t10  { letter-spacing: 0.01em; }
.ls--l00  { letter-spacing: 0em; }
.ls--l10  { letter-spacing: 0.01em; }
.ls--l20  { letter-spacing: 0.02em; }
```

<br />

#### Grid

Grid classes are generated based on the following variables inside the **\_variables.scss** file:

- $gapsizes

<sub>\_variables.scss (Editable)</sub>

```bash
$gapsizes: (16, 24, 32, 40);
```

<sub>Exports as:</sub>

```bash
// classes
.gap--16  { gap: 1rem; }
.gap--24  { gap: 1.5rem; }
.gap--32  { gap: 2rem; }
.gap--40  { gap: 2.5rem; }
```

<br />

#### Spacing

Spacing classes are generated based on the following variables inside the **\_variables.scss** file:

- $spaceAddPaddings
- $spaceAmounts
- $spaceSides

<sub>\_variables.scss (Editable)</sub>

```bash
$spaceAddPaddings: false;
$spaceAmounts: (40, 80);
$spaceSides: (
  'top',
  'bottom'
);
```

<sub>Exports as:</sub>

```bash
// classes
.mt--40  { margin-top: 2.5rem; }
.mt--80  { margin-top: 5rem; }
.mb--40  { margin-bottom: 2.5rem; }
.mb--80  { margin-bottom: 5rem; }

// $spaceAddPaddings === true
.pt--40  { padding-top: 2.5rem; }
.pt--80  { padding-top: 5rem; }
.pb--40  { padding-bottom: 2.5rem; }
.pb--80  { padding-bottom: 5rem; }
```

<br />

#### SVG's

SVG classes are generated based on the following variables inside the **\_variables.scss** file:

- $svgs

<sub>\_variables.scss (Editable)</sub>

```bash
$svgs: (
  'discord'   24 32,
  'email'     24 32,
  'facebook'  24 32,
  'github'    24 32,
  'instagram' 24 32
)
```

<sub>Exports as:</sub>

```bash
// classes
.icon--discord    { width: 1.5rem; height: 2rem; }
.icon--email      { width: 1.5rem; height: 2rem; }
.icon--facebook   { width: 1.5rem; height: 2rem; }
.icon--github     { width: 1.5rem; height: 2rem; }
.icon--instagram  { width: 1.5rem; height: 2rem; }
```

<br />

## Functions

Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviours in a readable way. Here are a few at your disposal.

- [getVW](#getvwvalue)
- [getREM](#getremvalue)
- [lighten](#lightenvalue)
- [darken](#darkenvalue)
- [svgURL](#svgurl)

<br />

#### getVW($value)

There may come a time where you want to convert a PX value into a VW value. This function helps with that.

```bash
@function getVW($target) {
  $vwContext: calc(1920 * 0.01) * 1px;
  @return math.div($target, $vwContext) + vw;
}

// how to use
.image  { width: getVW(500px); }

// output
.image  { width: 26.0416666667vw; }
```

<br />

#### getREM($value)

By default, all PX values are automatically converted into REM values (thanks to the PostCSS plugin 'px2rem') making it unlikely to ever need this function. However we decided to keep it in, just in case.

```bash
@function getREM($px) {
  @return math.div($px, 16px) + rem;
}

// how to use
.logo  { width: getREM(200px); }

// output
.logo  { width: 12.5rem; }
```

<br />

#### lighten($value)

Add a white tint to any property that accepts a color.

```bash
@function lighten($color, $percentage) {
  @return mix(white, $color, $percentage);
}

// how to use
.header  { color: lighten($error, 50%); }
.logo    { background-color: lighten($error, 50%); }

// output
.header  { color: \#fea09d; }
.logo    { background-color: \#fea09d; }
```

<br />

#### darken($value)

Add a black tint to any property that accepts a color.

```bash
@function darken($color, $percentage) {
  @return mix(black, $color, $percentage);
}

// how to use
.header  { color: darken($error, 50%); }
.logo    { background-color: darken($error, 50%); }

// output
.header  { color: \#7f211e; }
.logo    { background-color: \#7f211e; }
```

<br />

#### svgURL($value)

This might look a little intimidating, but essentially this function lets us use SVG code as a background image. This is good to use on ::before and ::after pseudo-elements.

```bash
@function str-replace($string, $search, $replace: "") {
  $index: str-index($string, $search);

  @if ($index) {
    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
  }

  @return $string;
}

@function svg-url($svg, $fill: null) {
  $svg: if($fill, str-replace($svg, "<svg", "<svg fill='#{$fill}'"), $svg);
  $svg: str-replace($svg, "<svg", "<svg xmlns='http://www.w3.org/2000/svg' ");
  $svg: str-replace($svg, "<", "%3C");
  $svg: str-replace($svg, ">", "%3E");
  $svg: str-replace($svg, "\"", "'");
  $svg: str-replace($svg, "#", "%23");
  $svg: str-replace($svg, "&", "%26");

  @return url("data:image/svg+xml,#{$svg}");
}

// how to use
.caret {
  background-size: 24px 24px;
  background-image: svgURL('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="9.85" y="6.27" width="2.15" height="6.26"/><path d="M2.15,0,.54,4.12V21H6.27v3H9.49l3-3h4.65l6.27-6.27V0ZM21.31,13.61l-3.58,3.58H12l-3,3v-3H4.12v-15H21.31Z"/><rect x="15.58" y="6.27" width="2.15" height="6.26"/></svg>')
}

// output
.caret {
  background-size: 24px 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='9.85' y='6.27' width='2.15' height='6.26'/%3E%3Cpath d='M2.15,0,.54,4.12V21H6.27v3H9.49l3-3h4.65l6.27-6.27V0ZM21.31,13.61l-3.58,3.58H12l-3,3v-3H4.12v-15H21.31Z'/%3E%3Crect x='15.58' y='6.27' width='2.15' height='6.26'/%3E%3C/svg%3E")
}
```

<br />

## Mixins

The @mixin directive lets you create CSS code that is to be reused throughout the website. The @include directive is created to let you use (include) the mixin.

- [Breakpoints](#include-breakpointxl)
- [Button Reset](#include-buttonreset)
- [Placeholder](#include-placeholder-)
- [Truncate](#include-truncate)
- [Transition - Inview FadeIn](#include-inviewfadein)
- [Transition - Inview FadeIn Up](#include-inviewfadeinup)

<br />

#### @include breakpoint(xl);

```bash
$breakpoints: (
  'sssl': 1920,
  'ssl':  1600,
  'sl':   1500,
  'xxxl': 1400,
  'xxl':  1200,
  'xl':   1080,
  'l':    960,
  'm':    750,
  's':    600,
  'xs':   500,
  'xxs':  400,
  't':    350
);

@mixin breakpoint($name) {
  @media (#{$breakpointMode}-width: #{inspect(map-get($breakpoints, $name))} + px) {
    @content;
  }
}

// how to use
@include breakpoint(xl) {
  // styles here will only apply below 1080px width
}

// output
@media screen and (max-width: 1080px) {
  // styles here will only apply below 1080px width
}
```

<br />

#### @include buttonReset;

```bash
@mixin buttonReset {
  cursor: pointer;
  border: 0;
  outline: 0;
  appearance: none;
  border-radius: 0;
  background: transparent;
  padding: 0;
  margin: 0;
}

// how to use
.button {
  @include buttonReset;
  background: red;
}

// output
.button {
  cursor: pointer;
  border: 0;
  outline: 0;
  appearance: none;
  border-radius: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  background: red;
}
```

<br />

#### @include placeholder {};

```bash
@mixin placeholder {
  &::placeholder {
    @content;
  }
}

// how to use
.input {
  color: red;

  @include placeholder {
    color: grey
  };
}

// output
.input               { color: red; }
.input::placeholder  { color: grey; }
```

<br />

#### @include truncate;

```bash
@mixin truncate($overflow: ellipsis) {
  overflow: hidden;
  text-overflow: $overflow;
  white-space: nowrap;
}

// how to use
.header  {
  @include truncate;
  max-width: 200px;
}

// output
.header  {
  overflow: hidden;
  text-overflow: $overflow;
  white-space: nowrap;
  max-width: 200px;
}
```

<br />

#### @include inviewFadeIn;

```bash
@mixin inviewFadeIn {
  opacity: 0;
  transition: opacity 0.5s ease;

  &.is-inview {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
}

// how to use
.header  {
  @include inviewFadeIn;
}

// output
.header  {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.header.is-inview {
  opacity: 1;
  transition: opacity 0.5s ease;
}
```

<br />

#### @include inviewFadeInUp;

```bash
@mixin inviewFadeInUp {
  transform: translateY(60px);
  opacity: 0;
  transition: transform 0.8s ease, opacity 0.8s ease;

  &.is-inview {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.8s ease, opacity 0.8s ease;
  }
}

// how to use
.header  {
  @include inviewFadeIn;
}

// output
.header  {
  transform: translateY(60px);
  opacity: 0;
  transition: transform 0.8s ease, opacity 0.8s ease;
}

.header.is-inview {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.8s ease, opacity 0.8s ease;
}
```
