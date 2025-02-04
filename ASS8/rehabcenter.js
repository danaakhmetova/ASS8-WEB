//task-1
// alert("hello!")

//task-3, 7, 8, 5
/*let patientName = "Дана Ахметова";
let patientAge = 18;
console.log("Patient Name:", patientName);
console.log("Patient Age:", patientAge);
document.getElementById("patientName").textContent = patientName;
document.getElementById("patientAge").textContent = patientAge;*/

//task-4 and 6
//We declared a variables and assigned it to value
/*let servicePrice = 10000;
let serviceCount = 3;
//Outputting rice and service count followed by the value
console.log("Service Price:", servicePrice);
console.log("Number of Service:", serviceCount);
//Calculates total cost by multiplying variables
console.log("Total cost:", servicePrice * serviceCount);*/

//task-8
/*let patientAge = 18;
console.log("Initial age:", patientAge);
patientAge = 21;
console.log("Changed age:", patientAge);*/

//task-9 
/*const centerName = "DARU";
console.log("Name of center:", centerName);
document.getElementById("clinicName").innerHTML = "Реабилитационный центр - " + centerName;*/

//task-10, 11
/*let servicePrice = 5000;
let serviceCount = 3;
let serviceTotal = servicePrice * serviceCount;
console.log("Price of Service:", servicePrice);
console.log("Number of Service:", serviceCount);
console.log("Total cost:", serviceTotal);*/

//task-12
/*let discount = 1000;
let servicePrice = 5000;
servicePrice -= discount;
console.log("Новая цена со скидкой:", servicePrice);
document.getElementById("offerText").textContent = "Скидка 20% на послеоперационную реабилитацию! Цена: " + servicePrice;*/


//task-13, 55, 16
let patientName = "Дана Ахметова";
let patientAge = 18;
let isRegistered = true;
let patientDiagnosis = "Травма колена";
let patientServices = ["Спортивная реабилитация", "Массаж", "Пилатес"];


console.log("Patient Registration:", isRegistered, "Type:", typeof isRegistered);
console.log("Patient Services:", patientServices, "Type:", typeof patientServices);


document.getElementById("patientName").textContent = patientName;
document.getElementById("patientAge").textContent = patientAge;
document.getElementById("patientRegistration").textContent = isRegistered ? "Да" : "Нет";
document.getElementById("patientDiagnosis").textContent = patientDiagnosis;
document.getElementById("services").textContent = patientServices.join(", ");


//task-14
function changeBackground(){
    document.body.style.backgroundColor = "#A8D5BA";
    console.log("Background color is changed to: #A8D5BA");
}

//task-15
/*const patientInfo = {
    firstName: "Дана",
    lastName: "Ахметова",
    age: 18,
    services: ["Спортивная реабилитация", "Массаж", "Пилатес"]
}
console.log("Инфоомация про пациента:", patientInfo);*/

//task-16, 18
/*let patient = {
    name: "Дана",
    age: 18,
    isRegistered: true,
    diagnosis: "Реабилитация после травмы",
    services: ["Физиотерапия", "Массаж", "Пилатес"]
};
document.getElementById("patientName").textContent = patient.name;
document.getElementById("patientAge").textContent = patient.age;
document.getElementById("patientRegistration").textContent = patient.isRegistered ? "Да" : "Нет";
document.getElementById("patientDiagnosis").textContent = patient.diagnosis;
document.getElementById("services").textContent = patient.services.join(", ");*/


//task-17 
let patient = {
    name: "Дана Ахметова",
    recoveryStatus: "В процессе восстановления",
    getRecoveryInfo: function() {
        return ("Пациент " + this.name + " находится в статусе: " + this.recoveryStatus);
    }
};
function showRecoveryInfo() {
    document.getElementById("recoveryStatus").innerText = patient.getRecoveryInfo();
}

//task-19
/*function Patient(name, age, diagnosis){
    this.name = name;
    this.age = age;
    this.diagnosis = diagnosis;
}
const firstPatient = new Patient("Dana", 18, "Knee Injury");
const secondPatient = new Patient("Aidar", 30, "Rehabilitation after injury");

console.log("First Patient:", firstPatient);
console.log("Second Patient:", secondPatient);*/

//task-20
/*function bookConsultation(){
    document.getElementById("message").innerHTML = "Запись на консультацию прошла успешно!"
}*/

//task-21
/*let message = "Здравствуй, ";
message += "Пользователь!";
document.getElementById("welcomeMessage").innerHTML = message;*/


//task-22
/*let patientName = "Дана";
let welcomeMessage = "Добро Пожаловать, " + patientName + "!";
let upperCaseMessage = welcomeMessage.toUpperCase()
document.getElementById("welcomeMessage").innerHTML = upperCaseMessage;*/

//task-23
/*let text = "Послеоперационная реабилитация: Программы для восстановления после операций в области ортопедии, неврологии и кардиологии. Мы предлагаем индивидуальные планы реабилитации, сочетающие современные технологии и профессиональный подход для достижения оптимальных результатов."
let index = text.indexOf("Послеоперационная реабилитация");
document.getElementById("search").innerHTML = "Услуга под " + index + " индексом";*/

//task-24
/*let patientName = "Дана Ахметова";
let age = 18;
let diagnosis = "Реабилитация после травмы";
let patientInfo = `Пациент: ${patientName}, Возраст: ${age}, Диагноз: ${diagnosis}.`;
document.getElementById("profile").innerHTML = patientInfo;*/

//task-25
/*let servicePrice = 5000;
let serviceCount = 3;
let totalCost = servicePrice * serviceCount;
console.log("Service Price:", servicePrice);
console.log("Number of Services:", serviceCount);
console.log("Total Cost:", totalCost);*/

//task-26
/*let patients = 1000000000000000n; 
let costPerPatient = 5000n;
let totalCost = patients * costPerPatient;
console.log("Number of patients:", patients);
console.log("Cost per patient:", costPerPatient);
console.log("Total cost:", totalCost);*/

//task-27
/*let servicePrice = 5432.535696;
let serviceCount = 3;
let totalCost = servicePrice * serviceCount;
let roundedCost = totalCost.toFixed(2);
console.log("Service Price:", servicePrice);
console.log("Number of Services:", serviceCount);
console.log("Total Cost (rounded):", roundedCost);*/

//task-28
/*console.log("Maximum number in JS:", Number.MAX_VALUE);
console.log("Minimum positive number in JS:", Number.MIN_VALUE);
console.log("Positive infinity:", Number.POSITIVE_INFINITY);
console.log("Negative infinity:", Number.NEGATIVE_INFINITY);
console.log("Not a Number:", Number.NaN);
console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 0); */

//task-29
/*let services = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
let listElement = document.getElementById("servicesList");
for (let i = 0; i < services.length; i++) {
    listElement.innerHTML += "<li>" + services[i] + "</li>";
}*/
//task-30
/*let services = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
services.sort();
console.log("Отсортированные услуги:", services);
let filteredServices = services.filter(function(service) {
    return service.includes("реабилитация"); 
});
console.log("Категория реабилитационная:", filteredServices);*/
//task-31
function checkService() {
    let serviceInput = document.getElementById("servicesInput").value;
    let resultMessages = document.getElementById("resultingMessage");
    let services = ["Послеоперационная реабилитация", "Лечение хронических заболеваний", "Спортивная реабилитация", "Профилактическое оздоровлениеs"];

    if (serviceInput === "") {
        resultMessages.textContent = "Введите название услуги!";
        resultMessages.style.color = "red";
        return;
    }
    let found = services.includes(serviceInput);

    if (found) {
        resultMessages.textContent = "Услуга найдена: " + serviceInput;
        resultMessages.style.color = "green";
    } else {
        resultMessages.textContent = "Услуга не найдена!";
        resultMessages.style.color = "red";
    }
}
//task-32
/* let services = [
    {name: "Послеоперационная реабилитация", price: 30000},
    {name: "Лечение хронических заболеваний", price: 50000},
    {name: "Спортивная реабилитация", price: 100000},
    {name: "Профилактическое оздоровление", price: 25000}
 ]
 services.sort(function(a,b){return a.price-b.price});
 console.log(services); */
 //task-33
 let services = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
let servicesList = document.getElementById("servicesList");
services.forEach(function(service) {
    let listItem = document.createElement("li");
    listItem.textContent = service;
    servicesList.appendChild(listItem);
})
//task-34
/*const services = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
console.log("Список услуг:", services);*/
//task-35, 36
function updateDateTime() {
    let now = new Date();
    let formattedDate = now.toLocaleDateString("ru-RU");
    let formattedTime = now.toLocaleTimeString("ru-RU");

    document.getElementById("currentDateTime").textContent =" " + formattedDate + " | " + formattedTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);
//task-37
/*let currentDate = new Date();
let year = currentDate.getFullYear(); 
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate(); 
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
console.log("Год:", year);
console.log("Месяц:", month);
console.log("День:", day);
console.log("Часы:", hours);
console.log("Минуты:", minutes);
console.log("Секунды:", seconds);*/
//task-38
function setBookingDate() {
    let bookingDate = new Date();
    bookingDate.setDate(bookingDate.getDate() + 7);

    let formattedDate = bookingDate.toLocaleDateString("ru-RU", {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });

    document.getElementById("availableDate").textContent = formattedDate;
}
setBookingDate();

//task-39
/*let num1 = 10.75;
let num2 = -5;
console.log("Округлённое число (Math.round):", Math.round(num1)); 
console.log("Модуль числа (Math.abs):", Math.abs(num2));
console.log("Случайное число (Math.random):", Math.random());
console.log("Максимум (Math.max):", Math.max(3, 7, 1, 12, 9));
console.log("2 в степени 3 (Math.pow):", Math.pow(2, 3));*/

//task-40
function bookConsultation() {
    let consultationID = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "Вы успешно записались! Ваш ID: " + consultationID;
}

//task-41
let availableServices = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
function checkServiceAvailble() {
    let userInput = document.getElementById("serviceInput").value;
    
    if (userInput === "") {
        document.getElementById("resultMessage").textContent = "Пожалуйста, введите название услуги!";
        return;
    }

    let isAvailable = availableServices.includes(userInput);
    
    if (isAvailable) {
        document.getElementById("resultMessage").textContent = "Услуга "  + userInput + " доступна!";
    } else {
        document.getElementById("resultMessage").textContent = "Услуга " + userInput +  " не найдена!";
    }
}

//task-42, 43
    function checkDiscount() {
    let ageInput = document.getElementById("patientAgeInput").value;
    let offerText = document.getElementById("offerText");

    if (ageInput === "") {
        offerText.textContent = "Введите возраст пациента!";
        offerText.style.color = "red";
        return;
    }

    let patientAge = parseInt(ageInput);

    if (isNaN(patientAge) || patientAge <= 0 || patientAge >= 120) {
        offerText.textContent = "Некорректный возраст!";
        offerText.style.color = "red";
        return;
    }

    let discountMessage;
    let discountPercent = 0;

    if (patientAge < 18) {
        discountMessage = "Детский тариф! Скидка 50% на все услуги.";
        discountPercent = 50;
        offerText.style.color = "blue";
    } else if (patientAge >= 60) {
        discountMessage = "Скидка 30% для пожилых пациентов!";
        discountPercent = 30;
        offerText.style.color = "green";
    } else {
        discountMessage = "Обычный тариф. Доступны бонусные программы!";
        offerText.style.color = "black";
    }
    offerText.textContent = discountMessage;
}
//task-44
function selectTreatment() {
    let diseaseType = document.getElementById("diseaseType").value;
    let resultText = document.getElementById("treatmentResult");
    let treatmentMethod;

    switch (diseaseType) {
        case "rehab":
            treatmentMethod = "Процедуры для восстановления после операции: физиотерапия, массаж, ЛФК.";
            break;
        case "chronic":
            treatmentMethod = "Длительный курс терапии и поддерживающее лечение (медикаменты + физиопроцедуры).";
            break;
        case "sports":
            treatmentMethod = "Спортивная реабилитация: кинезитерапия, восстановительные упражнения, массаж.";
            break;
        case "prevention":
            treatmentMethod = "Комплексные оздоровительные программы: йога, пилатес, лечебная физкультура.";
            break;
        default:
            treatmentMethod = "Пожалуйста, проконсультируйтесь с врачом для определения индивидуального лечения.";
    }

    resultText.textContent = "Метод лечения: " + treatmentMethod;
}
//task-45
/*let services = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
let servicesListElement = document.getElementById("servicesList");
for (let i = 0; i < services.length; i++) {
    let listItem = document.createElement("li"); 
    listItem.textContent = services[i]; 
    servicesListElement.appendChild(listItem); 
}*/
//task-46
/*let patient = {
    name: "Алексей",
    age: 45,
    diagnosis: "Спортивная травма",
    treatment: "Физиотерапия"
};
for (let key in patient) {
    console.log(key + ": " + patient[key]);
}*/
//task-47
/*let services = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
for (let service of services) {
    console.log("Услуга: " + service);
}*/
//task-48
/*let totalPatients = 5;
let counter = 1;
while (counter <= totalPatients) {
    console.log("Пациент под номером:" + counter + " зарегистрирован.");
    counter++;
}*/
//task-49
/*let services = [
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
];
let searchService = "Спортивная реабилитация";
for (let i = 0; i < services.length; i++) {
    console.log("Проверяем:", services[i]);

    if (services[i] === searchService) {
        console.log("Услуга найдена:", services[i]);
        break;
    }
}*/
//task-51, 52
/*let servicesSet = new Set([
    "Послеоперационная реабилитация",
    "Лечение хронических заболеваний",
    "Спортивная реабилитация",
    "Профилактическое оздоровление"
]);
servicesSet.add("Спортивная реабилитация");
console.log("Список уникальных услуг:");
for (let service of servicesSet) {
    console.log(service);
}
console.log("Есть ли Спортивная реабилитация?", servicesSet.has("Спортивная реабилитация"));
console.log("Есть ли Массаж?", servicesSet.has("Массаж"));*/
//task-53, 54
/*let servicesMap = new Map([
    [1, "Послеоперационная реабилитация"],
    [2, "Лечение хронических заболеваний"],
    [3, "Спортивная реабилитация"],
    [4, "Профилактическое оздоровление"]
]);
console.log("Список услуг:");
servicesMap.forEach(function(value, key) {
    console.log("Код:", key, value);
});
let serviceCode = 3;
console.log("Услуга с кодом", serviceCode + ":", servicesMap.get(serviceCode));
console.log("Есть ли услуга с кодом 2?", servicesMap.has(2));
console.log("Есть ли услуга с кодом 5?", servicesMap.has(5));*/
//task-56
/*let priceStr = "5000";
let quantityStr = "3";
let price = Number(priceStr);
let quantity = Number(quantityStr);
let totalCost = price * quantity;
console.log("Цена за услугу:", price, "(Тип:", typeof price + ")");
console.log("Количество услуг:", quantity, "(Тип:", typeof quantity + ")");
console.log("Общая стоимость:", totalCost);*/
//task-57
/*let patient = {
    patientName: "Айгуль",
    patientAge: 22,
    patientDiagnosis: "Спортивная травма",
    patientTreatment: "Физиотерапия"
};
let name = patient.patientName;
let age = patient.patientAge;
let diagnosis = patient.patientDiagnosis;
let treatment = patient.patientTreatment;

console.log("Имя пациента:", name);
console.log("Возраст пациента:", age);
console.log("Диагноз:", diagnosis);
console.log("Лечение:", treatment);*/
//task-58
/*let number = 5;
console.log("Умножение на 2:", number << 1); 
console.log("Деление на 2:", number >> 1);*/
//task-59
function validatePhoneNumber() {
    let phoneInput = document.getElementById("phoneInput").value;
    let phoneMessage = document.getElementById("phoneMessage");
    let phonePattern = /^\+?[0-9]{10,15}$/; 

    if (phonePattern.test(phoneInput)) {
        phoneMessage.textContent = "Мы напишем вам по поводу консультации!"
        phoneMessage.style.color = "green";
    } else {
        phoneMessage.textContent = "Ошибка! Некорректный номер.";
        phoneMessage.style.color = "red";
    }
}
//task-60
/*let price = 5000;
let quantity = 3;
let discount = 10;
let totalCost1 = price * quantity - price * discount / 100; 
let totalCost2 = (price * quantity) - (price * discount / 100);

console.log("Без скобок:", totalCost1);
console.log("Со скобками:", totalCost2);*/

//task-61
/*function checkDiscount() {
    let ageInput = document.getElementById("patientAgeInput");
    let offerText = document.getElementById("offerText");

    try {
        if (ageInput === "") {
            throw new Error("Введите настоящий возраст!");
        }

        let patientAge = parseInt(ageInput);

        if (isNaN(patientAge) || patientAge <= 0 || patientAge >= 120) {
            throw new Error("Некорректный возраст! Введите число от 1 до 120.");
        }

        let discountMessage = "Обычный тариф. Доступны бонусные программы!";
        offerText.style.color = "black";

        if (patientAge < 18) {
            discountMessage = "Детский тариф! Скидка 50% на все услуги.";
            offerText.style.color = "blue";
        } else if (patientAge >= 60) {
            discountMessage = "Скидка 30% для пожилых пациентов!";
            offerText.style.color = "green";
        }

        offerText.textContent = discountMessage;
    } catch (error) {
        offerText.textContent = error.message;
        offerText.style.color = "red";
    }
}*/

//task-62
/*let hospitalName = "Центр реабилитации";

function handlePatient() {
    let patientName = "Алексей"; 
    let age = 45;
    console.log("Пациент:", patientName, " Возраст:", age, " Больница:", hospitalName);
}

handlePatient();
console.log("Больница:", hospitalName);
console.log("Пациент:", typeof patientName);

function updateHospital() {
    hospitalName = "Медицинский центр"; 
}
console.log("До обновления:", hospitalName);
updateHospital();
console.log("После обновления:", hospitalName);*/




































