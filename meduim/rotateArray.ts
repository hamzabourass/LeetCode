function rotate(nums: number[], k: number): void {
    
    k = k % nums.length;

    if (k === 0) return;

    const rotatedPart = nums.splice(nums.length - k);
    nums.unshift(...rotatedPart);
}