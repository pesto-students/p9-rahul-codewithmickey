function createStack()
{ 
    
    // Write your code here...
    let items = [];

    return {
        push:num=>{
            items.push(num)
        },
        pop:()=>{
            items.pop()
        }
    }
}

const stack=createStack();

stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log(stack.items);// => undefined