{
    const number = [1,1,2,2,3,2,4,4,5,4,4]

    function removeDuplicates(array: number[]): number[] {
        const uniqueArray: number[] = []
        for(const num of array) {
            if(!uniqueArray.includes(num)){
                uniqueArray.push(num)
            }
        }
        return uniqueArray
    }

    console.log(removeDuplicates(number));
    
}