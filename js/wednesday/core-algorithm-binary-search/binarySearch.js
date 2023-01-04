function binarySearch(iter, mass) {
    let left = 0;
    let right = mass.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;
        if (mass[mid] === iter)
            return (mid);
        else if (mass[mid] < iter)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return (-1);
}

module.exports = { binarySearch };