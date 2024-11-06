function findRestaurant(list1: string[], list2: string[]): string[] {
    let map: Map<string, number> = new Map();

    for(let i = 0 ; i < list1.length ; i++){
        map.set(list1[i],i);
    }

    let minIndexSum = Infinity;
    let result: string[] = [];

    for(let j = 0 ; j < list2.length ; j++){
        const restaurant = list2[j];

        if(map.has(restaurant)){
            const indexSum = map.get(restaurant)! + j;

            if(indexSum < minIndexSum){
                minIndexSum = indexSum;
                result = [restaurant];
            }
            else if(indexSum == minIndexSum){
                result.push(restaurant);
            }
        }
    }

    return result

   
}
