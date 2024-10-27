function removeDuplicates(nums: number[]): number {
    
    if(nums.length == 0) return 0
    
        let count = 1;
        let j = 0;
        for(let i : number = 1 ; i < nums.length ; i++){
            if( nums[i] != nums[j]){
                j++;
                nums[j] = nums[i];
                count++;
            }
        }
        return count;
    };