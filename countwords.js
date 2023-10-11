var paragraph=`Javascript is a lightweight  "Interpreted " programming language ! It is designed for creating network centric applications. It is complicmentary to and integrated with java, Java script is very easy to implement , Because it is integrated with html. As a result, it is open and cross platform , especially when they collapse. Javascript is everywhere , It comes installed on every modern web browser and so tolearn javascript. It is need any special environment setup, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.`
paragraph=paragraph.toLowerCase();

paragraph=paragraph.replace(/[,.!#$@%&""]/g,'')

paragraph=paragraph.split(" ");

var newarray=[]
var number='8';
var count=1;
for(let i=0;i<paragraph.length;i++){
	if(paragraph[i]!=number){
        for(let j=i+1;j<paragraph.length;j++){//its code for counting which word is occure highest time;
			if(paragraph[i]==paragraph[j]){
				count++;
				paragraph[j]=number;
			}
		}
		
		newarray.push([paragraph[i],count]);
		count=1;
	}
}


for(let k=0;k<newarray.length;k++){//its code for decending the array based on count
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
		}
	}
}
var top=newarray.slice(0,3);
console.log(top);

var text=""

for(let z=0;z<newarray.length;z++){//print the top three words along with count;
	
	text=text+"<h1>"+newarray[z][0]+"------------>"  +newarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;
