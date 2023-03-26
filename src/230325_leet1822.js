function arraySign(nums) {
    let negative = 0;
    for (let num of nums) {
        if (num === 0) {
            return 0;
        }
        if (num < 0) {
            negative++;
        }
    }
    return negative % 2 ? -1 : 1;
}
