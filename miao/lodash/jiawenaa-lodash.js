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
    function concat(array, [values]){
        let result = []
        let a = [values]
        let b = a.length
        for(var i = 0; i < array.length ; i++){
            result.push(array[i])
        }
        for(var i = 0; i < b; i++){
            result.push(a[i])
        }
        return result
    }
    return {
        chunk,
        compact,
        concat,
    }
}()