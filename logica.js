const promediopais = 31.193806

document.getElementById("comparar").addEventListener("click", ()=>{
    let consumo = (document.getElementById("consumo").value)
    if (isNaN(consumo) || consumo <= 0) {
        document.getElementById("mensaje-consumo").innerHTML="<p> Ingresa un valor valido en KW </p>";
        return;
    }else{
    let consumoanualKWh = consumo*12
    let consumoanualTWh = consumoanualKWh/1000000000
    let porcentaje = (consumoanualTWh/promediopais)*100
    document.getElementById("mensaje-consumo").innerHTML= `<p> Consumo anual: ${consumoanualKWh} KWh</p>
    <p> Equivale a ${consumoanualTWh} TWh</p>
    <p> Esto representa el ${porcentaje}% del consumo anual promedio del país</p>`
    }
})




