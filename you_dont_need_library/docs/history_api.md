Pushing a new URL: the second argument is unused
history.pushState(optional_State, null, "/new-url");

To listen for changes in URL within the same page navigation
```
window.addEventListener("popstate", event => {
    let url = location.href;
});
```

Every time the UI is changing we get the popstate event being fired
note: this won't be fired if the user clicks on an external link or changes the URL manually