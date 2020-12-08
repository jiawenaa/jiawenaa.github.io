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
    function difference(array, ...values){
        var a = array.length
        var b = arguments.length 
        var map = {}
        var result = []
        for(var i = 1; i < b ;i++){
            if(Array.isArray(arguments[i])){
                let c = arguments[i].length
                for(var j = 0; j < c; j++){
                    if(arguments[i][j] in map){
                        continue    
                    }else{
                        map[arguments[i][j]] = 1
                    }
                }
            }else{
                map[arguments[i]] = 1
            }
        }
        for(var i = 0;i < a; i++){
            if(array[i] in map){
                continue
            }else{
                result.push(array[i])
            }
        }
        return result   
    }
    return {
        chunk,
        compact,
        concat,
        difference,
    }
}()