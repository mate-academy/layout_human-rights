- make sure all links work and test is present
- make sure there is an empty line at the end of the file ([find out why](https://evanhahn.com/newline-necessary-at-the-end-of-javascript-files/))
- elements of type block (e.g. `div`) are already 100% wide, there is no need to write this in styles
- after you open the tag, you have to add at least one more level of indentation before you close this tag 

 GOOD example:
```
<div>
  <div>
    some text
  </div
</div>
```

 BAD example:
```
<div>
<div>
some text
</div
</div>
```
- do not add extra files to the PR, use `git add <file_name>` instead of `git add.` or use `.gitignore` file ([gitignore](https://git-scm.com/docs/gitignore))
- check the [style guide](https://mate-academy.github.io/style-guides/htmlcss.html)
- `*` selector is used to add styles to EACH element of the file, you don't usually need this and this is too heavy for the big page, 
that's why this is better to add this style to those elements you really need
- if you have some similar styles among different blocks, consider creating a new class with similar styles and assign it to the elements you need
- avoid styling with tags, there could be more tags of this type, and you don't need them to have styles you previously added
- do not reset paddings for `body`, it doesn't have it by default
- check your class names again and make sure they are meaningful and describe the element behavior or its appearance
- styles for `body` is usually written at the beginning of the file
