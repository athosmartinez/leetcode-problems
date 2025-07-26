function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let input = x;
    let reversed = 0;

    while (input > 0) {
        reversed = (reversed * 10) + (input % 10);
        input = Math.floor(input / 10);
    }

    return x === reversed;
}