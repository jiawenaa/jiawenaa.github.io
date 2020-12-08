var  jiawenaa = function () {
    function chunk(array,size){   
        let b = []
        for(var i = 0 ; i < array.length ; i){
            let c = size
            let a = []
            while(c){
                if(array[i]){
                    a.push(array[i])
                    i++
                    c--
                }else{
                    break
                }
                
            }
            b.push(a)
        }
        return b
    }
    return {
        chunk,
    }
    function compact(array){
        let result = []
        for(var i = 0; i < array.length; i++ ){
            let a = array[i]
            if(a){
                result.push(a)
            }
        }
        return result
    }
    return {
        compact,
    }
}()