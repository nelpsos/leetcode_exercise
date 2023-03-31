function countOdds(low, high) {
    if (low % 2 == 1 && high % 2 == 1)
        return ((high - low) >> 1) + 1;
    else {
        const a = high - low;
        return a % 2 == 1 ? (a >> 1) + 1 : a >> 1;
    }
}
