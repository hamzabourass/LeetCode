function testSolution() {
    const testCases: { input: number[], expected?: number[] }[] = [
        { input: [] },
        { input: [4, 0, 1, -2, 3] },
        { input: [5, -3] },
        { input: [4, 0, 1, -2, 3] },
        { input: [0, 0, 0, 0] },
        { input: [-1, -2, -3] },
        { input: [1000, -1000, 500, -500, 0] },
        { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { input: [1, -1, 1, -1, 1, -1] },
    ];

    testCases.forEach((testCase, index) => {
        const result = solution(testCase.input);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input:    ${JSON.stringify(testCase.input)}`);
        console.log(`Output:   ${JSON.stringify(result)}`);
        console.log('----------------------------------');
    });
}

function solution(a: number[]) {
    const l: number = a.length;
    let b: number[] = [];
    if (l == 0) {
        return [];
    }
    if (l == 1) {
        return b = a;
    }

    for (let i = 0; i < l; i++) {
      b[i] = a[i];

      if(i > 0){
        b[i] += a[i-1];
      }

      if( i < l-1){
        b[i]+=a[i+1];    
      }
    }



    return b;
}

testSolution();
