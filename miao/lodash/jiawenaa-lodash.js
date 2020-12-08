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
    function concat(){
        let result = []
        var a = arguments.length
        for(var i = 0; i < a ; i++){
            let b = arguments[i]
            let c = b.length
            if(Array.isArray(arguments[i])){
                for(var j = 0; j < c ; j++){
                    result.push(b[j])
                }
            }else{
                result.push(arguments[i])
            }
        }
        return result
    }
    function difference(){
        
    }
    return {
        chunk,
        compact,
        concat,
    }
}()