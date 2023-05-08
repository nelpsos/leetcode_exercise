function nextGreaterElement(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; ++i) {
        let max = nums1[i];
        let maxIndex = -1;
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; ++j) {
            if (max < nums2[j]) {
                maxIndex = nums2[j];
                break;
            }
        }
        result.push(maxIndex);
    }
    return result;
}
