let a, b, result, base_loop=true, operation_loop=true;
let add= (a, b)=>{
	a= parseFloat(a);
	b= parseFloat(b);
	return a+b;
}
let sustract= (a, b)=>{
	a= parseFloat(a);
	b= parseFloat(b);
	return a-b;
}
let multiply= (a, b)=>{
	a= parseFloat(a);
	b= parseFloat(b);
	return a*b;
}
let divide= (a, b)=>{
	a= parseFloat(a);
	b= parseFloat(b);
	return a/b;
}
let power= (a, b)=>{
	a= parseFloat(a);
	b= parseFloat(b);
	return Math.pow(a,b);
}
let root= (a)=>{
	a= parseFloat(a);
	return Math.sqrt(a);
}
while(base_loop==true){
	let operation= prompt(`Ingrese la operación que desea realizar:     1.Suma     2.Resta     3.Multiplicación     4.División     5.Potencia     6.Raíz cuadrada`);
	operation= parseInt(operation);
	switch(operation){
		case 1:
			while(operation_loop==true){
				a= prompt("Ingrese el valor inicial");
				if(a.includes(",")){
					alert(`Los decimales deben escribirse con "."`);
				}
				else{
					b= prompt("Ingrese la cantidad que quiere sumar");
					if(b.includes(",")){
						alert(`Los decimales deben escribirse con "."`);
					}
					else{
						result=add(a,b);
						result= result.toFixed(2);
						alert(`El resultado de la suma es: ` + result);
						operation_loop=false;
					}
				}
			}
			base_loop=false;
			break;
		case 2:
			while(operation_loop==true){
				a= prompt("Ingrese el valor inicial");
				if(a.includes(",")){
					alert(`Los decimales deben escribirse con "."`);
				}
				else{
					b= prompt("Ingrese la cantidad que quiere restar");
					if(b.includes(",")){
						alert(`Los decimales deben escribirse con "."`);
					}
					else{
						result=sustract(a,b);
						result= result.toFixed(2);
						alert(`El resultado de la resta es: ` + result);
						operation_loop=false;
					}
				}
			}
			base_loop=false;
			break;
		case 3:
			while(operation_loop==true){
				a= prompt("Ingrese el valor inicial");
				if(a.includes(",")){
					alert(`Los decimales deben escribirse con "."`);
				}
				else{
					b= prompt("Ingrese la cantidad por la que desea multiplicar");
					if(b.includes(",")){
						alert(`Los decimales deben escribirse con "."`);
					}
					else{
						result=multiply(a,b);
						result= result.toFixed(2);
						alert(`El resultado de la multiplicación es: ` + result);
						operation_loop=false;
					}
				}
			}
			base_loop=false;
			break;
		case 4:
			while(operation_loop==true){
				a= prompt("Ingrese el valor inicial");
				if(a.includes(",")){
					alert(`Los decimales deben escribirse con "."`);
				}
				else{
					b= prompt("Ingrese la cantidad por la que desea dividir");
					if(b.includes(",")){
						alert(`Los decimales deben escribirse con "."`);
					}
					else{
						result=divide(a,b);
						result= result.toFixed(2);
						alert(`El resultado de la división es: ` + result);
						operation_loop=false;
					}
				}
			}
			base_loop=false;
			break;
		case 5:
			while(operation_loop==true){
				a= prompt("Ingrese la base");
				if(a.includes(",")){
					alert(`Los decimales deben escribirse con "."`);
				}
				else{
					b= prompt("Ingrese el exponente");
					if(b.includes(",")){
						alert(`Los decimales deben escribirse con "."`);
					}
					else{
						result=power(a,b);
						result= result.toFixed(2);
						alert(`El resultado de la potencia es: ` + result);
						operation_loop=false;
					}
				}
			}
			base_loop=false;
			break;
		case 6:
			while(operation_loop==true){
				a= prompt("Ingrese el valor del cual desea hallar su raíz cuadrada");
				if(a.includes(",")){
					alert(`Los decimales deben escribirse con "."`);
				}
				else{
					result=root(a);
					result= result.toFixed(2);
					alert(`La raíz cuadrada de ` + a +` es: ` + result);
					operation_loop=false;
				}
			}
			base_loop=false;
			break;
		default:
			alert("Ingrese una opción válida");
	}
}
