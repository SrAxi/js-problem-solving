## Implement jQuery

**Level:** Medium

**This exercise will assess the candidate's knowledge in:**

- JavaScript knowledge
- DOM API

**Problem:**

```html

<div id="id" class="box"></div>

<style>
    .box {
        width: 100px;
        height: 100px;
        background: red;
    }
    
    .my-class {
        background: blue;
        color: white;
    }
</style>
```

```javascript
/**
 Given above HTML code, create `$`, so that the following code works:
 */

const el = $('#id').addClass('my-class').text('Hi mum!')

/**
 Whenever this works, create logic so that after 2 seconds the div is hidden using .hide() on the element.
 And after another 2 seconds, it'll show up again using .show() on the element.
 */
```

