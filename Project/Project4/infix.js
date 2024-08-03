let input = document.querySelector('input');
let button = document.querySelector('button');
let priority = (a) => 
{
    if(a=='+' || a=='-')
    {
        return 2;
    }
    if(a=='*'||a=='/')
    {
        return 3;
    }
};
button.addEventListener('click', (e) => {  
    e.preventDefault()
    let str=input.value;
    let arr=[];
    for(let i=0;i<str.length;i++)
    {
        arr[i]=str[i];
    }
    let res=[];
    let stk=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]=='+'|| arr[i]=='-'||arr[i]=='*'||arr[i]=='/')
        {
            if(stk.length==0)
            {
                stk.push(arr[i]);
            }
            else{
                if(priority(arr[i])>priority(stk[stk.length-1]))
                {
                    stk.push(arr[i]);
                }
                else{
                    while(stk.length!=0 && priority(arr[i])<=priority(stk[stk.length-1]))
                    {
                        let a=stk.pop();
                        res.push(a);
                    }
                    stk.push(arr[i]);
    
                }
            }
        }
               
        else
        {
            res.push(arr[i]);

        }
    }
    while(stk.length!=0)
    {

        res.push(stk.pop());
    }
  let div = document.querySelector('#app');
  div.innerText =res;
});
