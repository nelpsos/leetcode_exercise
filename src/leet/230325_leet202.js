function isHappy(n) {
    let a = { [n]: true };
    let x = n;
    while (x !== 1) {
        let p = 0;
        let ns = String(x);
        for (let c of ns) {
            p += Number(c) ** 2;
        }
        x = p;
        if (a[x])
            return false;
        a[x] = true;
    }
    return true;
}
console.log(isHappy(19));
console.log(isHappy(2));
