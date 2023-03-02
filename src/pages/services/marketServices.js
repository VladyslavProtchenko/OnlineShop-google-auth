export const marketServices ={

    filter(arr,rate,price) {
        
        let newArr = [...arr]
        if(!arr) return [];

        if(rate === false) {
            newArr = newArr.sort((a,b)=> a.rating-b.rating)
        } else if( rate === true) {
            newArr = newArr.sort((a,b)=>b.rating - a.rating)
        } 

        if(price === false) {
            newArr = newArr.sort((a,b)=>a.price - b.price)
        } else if( price === true) {
            newArr = newArr.sort((a,b)=>b.price - a.price)
        }

        return newArr;
    }
}