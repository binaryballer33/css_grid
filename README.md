# CSS Responsive Layout Practice

## CSS Grid

[CSS Grid Video](https://www.youtube.com/watch?v=68O6eOGAGqA&t=2s)

- Grid has a steeper learning curve than FlexBox
  - Grid has more CSS Selectors to learn
- Grid is more customizable than FlexBox
  - Can build layouts pretty simply and exactly the way you want
    - Can have rows and columns structured exactly the way you want
- CSS Grid Selectors
  - `grid` - sets the display to grid ***( display: grid )***
        - gets rid of all of the margin and padding the child elements had
  - `gap` - gets you margin and padding between other grid child elements ***( gap: 16px )***
        - gap can be in px, rem, percentages ( 1.5rem, 250px, 25% )
  - `grid-template-column` 
  - allows you to define your elements per row
    - ***( grid-template-column: repeat(4 , fr )*** ) will give 4 columns per row
    - the height of each column by default will be equal to the tallest column
    - columns can be in px, rem, percentages ( 1.5rem, 250px, 25% )
  - `grid-column` - shorthand for grid-column-start and grid-column-end
    - making a column that spans up 2 column spaces
    - ***( grid-column: span 2 )***
  - `grid-column-start` - define where you want the column to start
    - ***( grid-column-start: 1 )***
  - `grid-column-end` - define where you want the column to end
    - ***( grid-column-end: 3 )*** the column will span 2, the 3 is not inclusive
    - could do ***( grid-column-start: 1 )*** ***( grid-column-end: 3 ) with*** ***( grid-column: 1 / 3 )***
  - `grid-auto-columns` - any auto generated column will be the exact same height
    - ***(grid-auto-columns: 1fr)***
  - `grid-template-row` - defines how many rows you want on your layout
  - `grid-row` - shorthand for grid-row-start
    - making a row that spans up 2 row spaces
    - ***( grid-row: span 2 )***
  - `grid-row-start` - define where you want the row to start
    - ***( grid-row-start: 1 )***
- `grid-row-end` - define where you want the row to end
  - ***( grid-row-end: 3 )*** the row will span 2 rows, the 3 is not inclusive
  - you can replace ***( grid-row-start: 1 )*** ***( grid-row-end: 3 ) with*** ***(grid-row: 1 / 3 )***
- `grid-auto-rows` - any auto generated row will be the exact same height
  - ***(grid-auto-rows: 1fr)***

- `grid-template-areas` - defines in a readable format the page layout ( rows & columns )

## FlexBox

[FlexBox Video](https://www.youtube.com/watch?v=phWxA89Dy94)

[Play Around With Flex Simulator](https://codepen.io/enxaneta/full/adLPwv/)

- display: flex
- `justify-content, justify-items, justify-self & align-content, align-items, align-self` all use these values below
  - flex-start
  - flex-end
  - space-around
  - space-evenly
  - space-between
- flex-direction
  - values are ( `row & column`)

To `center` something you will mostly be using `justify-content: center` for the x-axis and `align-items: center` for the y-axis UNLESS you change the flex-direction to column, then these two selectors do the OPPOSITE of what I just wrote

## Positioning

[Positioning Video](https://www.youtube.com/watch?v=jx5jmI0UlXU)

- relative ( the default )
- absolute ( take's element off the dom, but relative to the parents position )
- static
- sticky
- fixed

## CSS Units

[CSS Units Video](https://www.youtube.com/watch?v=N5wpD9Ov_To)

- 1rem or em = 16px
  - .5 em/rem = 8px
  - 1 em/rem = 16px
  - 1.5 em/rem = 24px

- 16px aka 1 em/rem is usually the default font-size in most browsers

- Usually better to use percentages for widths in a lot of scenarios instead of pixels(px)
- if you use pixels try to only use it for max-values css selectors like max-width or max-height

## Aspect Ratios

[Aspect Ratios](https://www.youtube.com/watch?v=tStiWGcnkWI)

- Best to use aspect ratios like 16/9 "landscape" or 4/3 "potrait" when declaring image sizes
- in order to use aspect ratios you will have to first give the image a width or height
- better to get the image a width using a percentage then declare the aspect ratio for portrait or landscape mode

## Media Queries

 [Media Queries](https://www.youtube.com/watch?v=K24lUqcT0Ms)

- @media by default include ( @media screen @media print, etc )
- if you are doing mobile first development then you will be using a lot of @media screen and (min-width: 900px)
- if you are doing desktop first development then you will be using a lot of @media screen and (max-width: 900px)
