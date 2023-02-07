//Given reducer method:
function add(a,b){
    return a+b
}

//Create a method called memoize such that:

const memoize = (fn) => {

let cache = {};
return (...args) => {
    let n = args[0];
    let k = args[1];
    if (n == undefined)
    {
        console.log("No Computed return",k)
        return k
    }
    else if( k== undefined)
    {
        console.log("No Computed return",n)
        return n
    }
    else
    {
        console.log(n,k,"Numbers")
        let key = n+"::"+k
        console.log(key,"the key")
        if(key in cache)
        {
            console.log("From Cache",cache[key])
            return cache[key]
        }
        else
        {
            let result = fn(n,k);
            cache[key] = result;
            console.log("From Function Computed ",result)
            return result;
        }
    }
}


}


const memoizeAdd = memoize(add);

//then calling...
memoizeAdd(100,100);//returns 200
memoizeAdd(100);//returns 100
memoizeAdd(100,200)//returns 300
memoizeAdd(100,100)//returns 200 without computing
