//1:Estudiante 80%
//2:Trainee  50%
//3:Junior  15%
const descuentos ={
 1:80,
 2:50,
 3:15
}
const $form = document.querySelector("#form");
const $totalPagarScreen = document.querySelector(".text-pagar");
const precioTicket = 200;




$form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const formData = new FormData($form);
   //calculo el descuento
   const totalPagarOriginal = formData.get("number") *precioTicket;
   const descuento = totalPagarOriginal - ((descuentos[formData.get("category")]/100) * totalPagarOriginal);

   $totalPagarScreen.textContent = descuento;
   e.target.reset();
});