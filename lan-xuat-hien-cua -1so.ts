let count = 0
function lanXuatHienCua1so(numbers : number[], value : number): number{
    let count : number = 0
    for (let i = 0; i < numbers.length ; i++) {
        if(numbers[i]== value){
            count ++;
        }
    }
   if (count == 0){
       console.log("k có số này")
   }else {
       console.log("phần tử " + value + " xuất hiện " + count + " lần trong mảng " )
   }
   return count
}
let numbers = [1,1,1,1,2,2,2]
console.log(lanXuatHienCua1so(numbers,1))

