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
    function drop(array,n=1){
        while(n != 0 && array){
            array.shift()
            n--
        }
        return array
    }
    function dropRight(array,n=1){
        while(n != 0 && array){
            array.pop()
            n--
        }
        return array      
    }
    function fill(array, value, start=0, end=array.length){
        for(var i = start; i < end; i++){
            array[i] = value
        }
        return array
    }
    function flatten(arr){
        var b = []
        for(var i = 0 ; i < arr.length ; i++){
            var a = arr[i]
            if(a.length > 1){
                for (var j = 0; j < a.length ; j++){
                    b.push(arr[i][j])
                }
            }else{
                b.push(arr[i])
            }
        }
        return b
    }
    function flattenDeep(arr){
        var result = []
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i].length > 1){
                flattenDeep(arr[i])
            }else{
                result.push(arr[i])
            }
        }
        return result
    }
    function head(arr){
        if(!arr){
            return undefined
        }
        else{
            return arr[0]
        }
    }
    function initial(arr){
        if(!arr){
            return null
        }else{
            arr.pop()
            return arr
        }
    }
    function indexOf(array, value, fromIndex=0){
        
        for(var i = fromIndex; i < array.length; i++){
            if(array[i] === value){
                return i
            }
        }
        return undefined
    }
    function differenceBy(array, values, iteratee=_.identity){
        var result = []

    }
    function findIndex(array, predicate=_.identity, fromIndex=0){
        for(var i = fromIndex; i < array.length ; i++){
            if(xxx){//条件为predivate输入的任何类型参数可以匹配上arr[i]的某项值
                return i
            }else{
                return -1
            }
        }
    }
    function fromPairs(pairs){
        if(!pairs){
            return {}
        }
        var result = {}
        for(var i = 0 ; i < pairs.length ; i++){
            for(var j = 0 ; j < 2 ; j += 2){
                result[pairs[i][j]] = pairs[i][j+1]
            }
        }
        return result
    }
    function join(array,separator = ','){
        if(!array){
            return null
        }
        var result = ''
        for(var i = 0 ; i < array.length; i++){
            result += array[i]
            if(i + 1 < array.length){
                result += separator
            }
        }
        return result
    }
    function last(array){
        if(!last){
            return undefined
        }else{
            return array.pop()
        }
    }
    function lastIndexOf(array,value,fromIndex=array.length-1){
        if(fromIndex < 0){
            return -1
        }
        for(var i = fromIndex - 1 ; i < array.length ; i++){
            if(array[i] === value){
                return i
            }
        }
        return -1
    }
    function pull(array){
        var arr = []
        var map = {}
        for(var i = 0 ; i < array.length; i++){
            arr.push(array[i])
        }
        for(var j = 1 ; j < arguments.length ; j++){
            if(!map.arguments[j]){
                map[arguments[j]] = 1
            }
        }
        for(var k = 0 ; k < arr.length; k++){
            var m = 0
            if(arr[k] in map){

            }else{
                array[m] = arr[k]
                m++
            }
        }
        while(m != arr.length){
            array.pop()
            m++
        }
        return array
    }
    function reverse(array){
        if(!array||array.length == 1){
            return array
        }
        var a = []
        for(var i = 0 ; i < array.length ;i++){
            a.push(array[i])
        }
        var j = 0
        for(var i = array.length - 1 ; i >= 0 ;i--){
            array[j] = a[i]
            j++ 
        }
        return array
               
    }
    function sortedIndex(array, value){
        var start = 0 , end = array.length - 1
        var mid
        while(start < end){
            mid = start + Math.floor(end - start)
            if(array[mid] == value){
                return mid
            }else if(array[mid] > value){
                end = mid
            }else{
                start = mid
            }
            if(start + 1 == end || start == end){
                return end
            }
        }
        
    }
    return {
        chunk,
        compact,
        concat,
        difference,
        drop,
        dropRight,
        fill,
        flatten,
        flattenDeep,
        head,
        initial,
        indexOf,
        differenceBy,
        findIndex,
        fromPairs,
        join,
        last,
        lastIndexOf,
        pull,
        reverse,
        sortedIndex,
    }
}()