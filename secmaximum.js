let arr=[10,20,60,30,40,80];
let max=arr[0];
let secmax=arr[0];

function secondmaximum(){
	for(let i=0;i<arr.length;i++)
	{
		if(arr[i]>max)
		{
        secmax= max;
        max=arr[i];
}
  else if(arr[i]>secmax)
{
	secmax=arr[i]
}
}
return console.log(secmax);
}
secondmaximum()

