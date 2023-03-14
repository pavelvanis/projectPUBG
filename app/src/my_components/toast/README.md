


# Toast
This is library for toast

### Default toast settings
```js
const DEFAULT_OPTIONS = {
    autoClose: 5000,
    position: 'top-right',
    canClose: true,
    onClose: () => { }
}
```
### Attributes
#### text: 
> Text to be displayed in the toast
>```js
>text: "Some text in the toast"
>```
 - - - 
 #### autoClose:  
> The time after which the toast will close itself.>>1. You can set the value on `false`
> -- this will set the toast to never disappear
>```js 
>autoClose: false
>```
>2. You can set the time after which the toast disappears
>```js
>autoClose: 5000
>```
 - - -

 #### position: 
> Position where you want place your toast.
> -- You can combine several positions
> ```js 
>position: "top-left"
>```
> ```js 
>position: "top-right"
>```
> ```js 
>position: "top-middle"
>```
>```js
>position: "bottom-left"
>```
> ```js 
>position: "bottom-right"
>```
> ```js 
>position: "bottom-middle"
>```
 - - -
#### canClose:
> Determines whether the user can close the toast.
> You can use `false` or `true`
 - - -
 #### onClose: 
> Method that is executed after the toast is closed
enter code here> ```js
>new  Toast({
>    text: "Some text",
>    autoClose: false,
>    onClose: () => alert("Some action")
>})
>```

&nbsp;
### Methods
 #### update()
> A method by which you can change the attributes of a toast
>```js
>const  toast =  new  Toast({
>	text: "You cant do anything",
>	autoClose: false,
>	canClose: false
>})
>
>setTimeout(() => {
>	toast.update({
>		text: "You can do something now",
>		canClose: true,
>		autoClose: 5000
>	})
>}, 4000)
>```
 - - -
 #### remove()
> Removes toast.
>```js
>const  toast =  new  Toast({
>	text: "Some text",
>	autoClose: false,
>	canClose: false
>})
>
>setTimeout(() => {
>	toast.remove()
>}, 4000)
>```
> -- This code will create new `Toast` and then method `setTimeout` which removes `toast` after 4 seconds remove.
 
