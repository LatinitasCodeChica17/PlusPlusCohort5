this is a readme for the flexbox challenge!


# Flexbox

There are two main concepts in flexbox:
- the continer
- the items in the container


## First Steps
1. define your container with a display of `flex`
    - `flex` will span the whole width of your page (similar to block-level elements)
    - `inline-flex` will be the width of the content (more like a span to wrap arount content)
2. Declaring `flex` on the parent element (in this case, the container) will *always* turn the child elements(divs) into flex items.


## Flex-direction
Flex direction sets the axis for which you items display.
### row:
 (default) sets the items in the container next to each other
  - main axis
    - left to right
  - cross axis
    - top to bottom

### column:
sets the items inside stacked vertically
  - main axis
    - top to bottom
  - cross axis
    - left to right

## Flex-wrap
a property that goes on the flex container (default value is `nowrap`)
  - wrap
    - makes your items in the container wrap to a new line
    - by default, flex items will try to stretch thier way top to bottom of their container (since we have a height declared on the parent container), but when we use `wrap`, the browser figures out how to strech vertically across the container's height by using the width of the items inside
  - wrap-reverse
    - makes the items stacked bottom up


## Spacing (margin)
a property that goes on the flex item

- Padding and border are part of the box model, whereas margin is not.
    - this means you'll have to calculate your margin using `calc()` if you need to manage your breakpoints.
      - `width: calc(33.333333% - [margin]);`

## Ordering
The order property is designed to lay the items out in ordinal groups. You can also use negative values with order, which can be quite useful. If you want to make one item display first and leave the order of all other items unchanged, you can give that item order of -1. As this is lower than 0 the item will always be displayed first.

-infiinity to infinity! (but not 0 ;)

```
.box3 {
  order: -1
}
```

**The one caviat:** Using `order` changes the order in which items are painted onto the DOM, and the order in which they appear visually. **It does not change the sequential navigation order of the items.** Therefore, if a user is tabbing between the items, they could find themselves jumping around your layout in a very confusing way.

## Alignment and centering
This is the meat and potatoes of flexbox!

### justify-content

### align-items

### align-content

### align-self

## Understanding Sizing with the flex property

### flex-grow

### flex-shrink

### flex-basis

## How flexbox and wrpaping work together