function removeElement(nums: number[], val: number): number {

    if(nums.length == 0) return 0;
    let j = 0;
    for(let i : number = 0; i < nums.length ; i++){

        if(nums[i] !==  val){
           nums[j] = nums[i];
           j++;
        }
    }
    return j;
    
};