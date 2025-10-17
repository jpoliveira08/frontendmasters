const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                // Different ways to read a property
                // link.href
                // link.getAttribute("href")
                // event.target.href
                const url = event.target.getAttribute("href");
                Router.go(url);
            })
        })
        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            // You can fake url
            // history.pushState({ route }, null,'/something/something/' + route);
            history.pushState({ route }, null, route);
        }

        let pageElement = null;
        switch (route) {
            // Remove from the DOM and inset other element on it
            // Based on the <main> element inject/remove dom elements
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu"
                break
            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your Order"
                break;
        }
        if (pageElement) {
            document.querySelector("main").children[0]?.remove();

            // Quick dirty way to clean the HTML element - innerHTML = ""
            document.querySelector("main").appendChild(pageElement);
        }

        // Good idea when setting a router to set scrollX and scrollY to 0
        // Because for large page with long content, the user might be at the 
        // bottom of the page and when the router is called, the user will be 
        // at the bottom of the page
        window.scrollX = 0;
        window.scrollY = 0;
    }
}

export default Router;