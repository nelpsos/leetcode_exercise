function areAlmostEqual(s1, s2) {
    function swapCharAt(str, i1, i2) {
        return (str.substring(0, i1) +
            str[i2] +
            str.substring(i1 + 1, i2) +
            str[i1] +
            str.substring(i2 + 1));
    }
    let swaps = [];
    for (let i = 0; i < s1.length; ++i) {
        if (s1[i] !== s2[i])
            swaps.push(i);
        if (swaps.length === 2)
            return s1 === swapCharAt(s2, swaps[0], swaps[1]);
    }
    return swaps.length === 0;
}
