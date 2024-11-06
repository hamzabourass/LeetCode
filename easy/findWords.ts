function findWords(words: string[]): string[] {
    const firstRow = "qwertyuiop";
    const secondRow = "asdfghjkl";
    const thirdRow = "zxcvbnm";
    
    let arr : Array<string> = [];


    for(let i : number = 0 ; i < words.length ; i++){

        let fCount : number = 0;
        let sCount : number = 0;
        let tCount : number = 0;
        
        var output = words[i].toLowerCase().split('');
        
        for(let j : number = 0 ; j < output.length ; j++){
            if(firstRow.includes(output[j])){
                fCount++;
                continue;
            }
            else if(secondRow.includes(output[j])){
                sCount++;
                continue;
            }
            else if(thirdRow.includes(output[j])){
                tCount++;
                continue;
            }
        }

        if (fCount === output.length || sCount === output.length || tCount === output.length) {
            arr.push(words[i]);
        }

    }

    return arr;
    
};