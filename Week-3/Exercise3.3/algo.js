function createIncrement() 
{
    let count = 0;
    function increment() 
    {
        
        count++;
        console.log("asdasd", count)
    }
    let message = `Count is ${count}`;
    function log() 
    {
        console.log(count,"My Count")
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

/*

My Output


asdasd 1
asdasd 2
asdasd 3
3 My Count
Count is 0
*/