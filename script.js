function decimalToBinary(num) {
	let arr=[];
	
  while(num!=0){
	arr.push(num%2)
	  num=Math.floor(num/2)
	
  }
	let str=""
	for(let i=arr.length-1;i>=0;++i)
		{
			str=str+arr[i];
		}
	return str;
}

window.decimalToBinary = decimalToBinary;
