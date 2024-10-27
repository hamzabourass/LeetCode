function twoSum(nums: number[], target: number): number[] {
    let map =  new Map();
 
    for(let i : number = 0 ; i < nums.length ; i++){
        let comp = target - nums[i];
 
        if(map.has(comp)){
           return [map.get(comp)!,i];
        }
        
        map.set(nums[i],i);
 
    }
 
    return []
 }
 