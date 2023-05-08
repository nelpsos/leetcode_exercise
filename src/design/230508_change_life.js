class ObserverExample {
    go() {
        const button = document.createElement("button");
        button.addEventListener("click", (event) => console.log("Don't do that!"));
        button.addEventListener("click", (event) => console.log("Go for it!"));
    }
}
const example = new ObserverExample();
example.go();
