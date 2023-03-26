function isHappy(n) {
    let a = { [n]: true };
    let x = n;
    while (x !== 1) {
        console.log(a);
        x = 0;
        let ns = String(x);
        for (let c of ns) {
            console.log(c);
            x += Number(c) ** 2;
        }
        console.log(x);
        if (a[x])
            return false;
        a[x] = true;
    }
    return true;
}
console.log(isHappy(19));
console.log(isHappy(2));
