

class Car {
   

    constructor(nome, preco, alturacacamba, alturaveiculo, alturasolo, capacidadecarga, motor, potencia, volumecacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturacacamba;
        this.alturaVeiculo = alturaveiculo;
        this.alturaSolo = alturasolo;
        this.capacidadeCarga = capacidadecarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumecacamba;
        this.roda = roda;
        this.image = image;
    }
} 

let carArr = [
    new Car('XL Cabine Simples 2.2 Diesel 4X4 MT 2022', 183850, 511, 1821, 232, 1234, 2.2, 160, 1420, 'Aço Estampado 16', 'img/XL Cabine.jpg'),
    new Car('XLS 2.2 Diesel 4X4 AT 2022', 220690, 511, 1821, 232, 1076, 2.2, 160, 1180, 'Aço Estampado 16', 'img/xls 2.2 diesel.jpg'),
    new Car('Storm 3.2 Diesel 4X4 AT 2022', 222790, 511, 1821, 232, 1040, 3.2, 200, 1180, 'Liga Leve 17', 'img/storm.jpg')
];

let carsToCompare = [];

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car) {       
        if(el.checked) {
            if (carsToCompare.length < 2) {
                carsToCompare.push(carClass);
            } else {
                alert("Você só pode comparar 2 carros por vez!");
                el.checked = false; 
            }
        } else {
            const index = GetCarArrPosition(carsToCompare, carClass);
            if (index !== -1) {
                carsToCompare.splice(index, 1); 
            }
        }
    } else {
        throw "You need to set a Car Class";
    }
  }

  function ShowCompare() {
    carsToCompare = [];
    const checkboxes = document.querySelectorAll(".checkbox:checked");

    checkboxes.forEach(cb => {
        const textModel = cb.parentElement.parentElement.querySelector(".textmodel").innerText;
        const car = carArr.find(c => c.nome === textModel);
        if (car) carsToCompare.push(car);
    });

    if (carsToCompare.length < 2) {
        alert("Você precisa selecionar 2 carros para comparar!");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}


function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
    carsToCompare = [];
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
}

function UpdateCompareTable() {
    if (carsToCompare.length < 2) {
        alert("Selecione 2 carros para comparar");
        return;
    }

    const car1 = carsToCompare[0];
    const car2 = carsToCompare[1];

    document.getElementById("compare_image_0").innerHTML = `<img src="${car1.image}" alt="${car1.nome}">`;
    document.getElementById("compare_image_1").innerHTML = `<img src="${car2.image}" alt="${car2.nome}">`;

    document.getElementById("compare_modelo_0").innerText = car1.nome;
    document.getElementById("compare_modelo_1").innerText = car2.nome;

    document.getElementById("compare_alturacacamba_0").innerText = car1.alturaCacamba + " mm";
    document.getElementById("compare_alturacacamba_1").innerText = car2.alturaCacamba + " mm";

    document.getElementById("compare_alturaveiculo_0").innerText = car1.alturaVeiculo + " mm";
    document.getElementById("compare_alturaveiculo_1").innerText = car2.alturaVeiculo + " mm";

    document.getElementById("compare_alturasolo_0").innerText = car1.alturaSolo + " mm";
    document.getElementById("compare_alturasolo_1").innerText = car2.alturaSolo + " mm";

    document.getElementById("compare_capacidadecarga_0").innerText = car1.capacidadeCarga + " kg";
    document.getElementById("compare_capacidadecarga_1").innerText = car2.capacidadeCarga + " kg";

    document.getElementById("compare_motor_0").innerText = car1.motor;
    document.getElementById("compare_motor_1").innerText = car2.motor;

    document.getElementById("compare_potencia_0").innerText = car1.potencia + " cv";
    document.getElementById("compare_potencia_1").innerText = car2.potencia + " cv";

    document.getElementById("compare_volumecacamba_0").innerText = car1.volumeCacamba + " L";
    document.getElementById("compare_volumecacamba_1").innerText = car2.volumeCacamba + " L";

    document.getElementById("compare_roda_0").innerText = car1.roda;
    document.getElementById("compare_roda_1").innerText = car2.roda;

    document.getElementById("compare_preco_0").innerText = car1.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    document.getElementById("compare_preco_1").innerText = car2.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

