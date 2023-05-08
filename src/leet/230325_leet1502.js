function canMakeArithmeticProgression(arr) {
    if (arr.length < 2)
        return true;
    const a = arr.sort((v1, v2) => v1 - v2);
    let diff = a[1] - a[0];
    for (let i = 1; i < a.length - 1; ++i) {
        if (a[i + 1] - a[i] !== diff)
            return false;
    }
    return true;
}
