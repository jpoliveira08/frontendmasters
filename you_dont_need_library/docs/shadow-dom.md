Shadow DOM
A private, islated DOM tree within a web component that is separate from the main document's DOM tree

- Allows more control over styling and ecapsulation of functionality of a Custom Element

- By default, CSS decclared in the main DOM won't be applied to the Shadow DOM

- CSS declared in the Shadow DOM applies only on there

- It can be opened or closed defining visibility from the outer DOM (Like private methods)


```
class MyElement extendes HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadown({ mode: "open" });
    }

    connectedCallback() {
        this.root.appendChild( ... )
    }
}
```