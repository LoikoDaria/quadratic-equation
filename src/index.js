module.exports = function solveEquation(equation) {
  // your implementation
  let xQuad=' * x^2 ';
  let x=' * x ';
  
  let array=equation.split(xQuad);
  let array2=array[1].split(x);
  
  let a=Number(array[0]);
  let b=Number(array2[0].replace(/\s/g,''));
  let c=Number(array2[1].replace(/\s/g,''));
  
  let D=(b*b)-4*a*c;
  
  let x1=Math.round((-b+Math.sqrt(D))/(2*a));
  let x2=Math.round((-b-Math.sqrt(D))/(2*a));
  
  return result = [x1,x2].sort(function(a,b){
		return a-b;
  });;
  
}
