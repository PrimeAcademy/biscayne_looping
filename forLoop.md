# The Anatomy of a For Loop

---

```js
for (A; B; C) {

}
```

* `A`: What value should the loop's "iterator" start at.
  * `let i = 0`
  * Our loop will start at `0`
  * Think of `i` as the *index* for an array you're looping through.
  * **This is how you control where your loop starts.**

* `B`: When does the loop stop?!
  * An experssion that evaluates to `true` or `false`.
  * If it evaluates to `true`, that causes the loop to run one time!
  * **This is how you control when your loop ends.**

* `C`: Modify the value of the loops "iterator" variable. (Add or subtract from it!)
  * `i++`
  * **This is how you control how your loop iterates.**

---

Here's MDN's more formal description of what `A`, `B`, and `C` are:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#syntax
