// Preguntas es un JSON
// "id" es el número de preguntas
//"q" es la pregunta
//"a" son las respuestas. Se componen de un string y boolean (nombre, y si es correcto o no)
//"b" es el valor de "botón"
const Questions = [{
    id: 0,
    q: "¿A qué canal pertenece originalmente Hey Arnold?",
    a: [{ text: "Cartoon Network", isCorrect: false },
    { text: "Nickelodeon", isCorrect: true },
    { text: "DiscoveryKids", isCorrect: false }
    ],
    b: "Siguiente"
  
  },
  {
    id: 1,
    q: "¿Qué animal es Coraje?",
    a: [{ text: "Gato", isCorrect: false },
    { text: "Perico", isCorrect: false },
    { text: "Perro", isCorrect: true }
    ],
    b: "Siguiente"
  
  },
  {
    id: 2,
    q: "¿Cómo se llama el perro de los Rugrats?",
    a: [{ text: "Blue", isCorrect: false },
    { text: "Firulais", isCorrect: true },
    { text: "Ren", isCorrect: false }
    ],
    b: "Comenzar de nuevo"
  
  }
  
  ]
  
  // Empezar
  var start = true;
  
  // Iterar a lo largo de los numeros de preguntas
  function iterate(id) {
  
    // Mostrar resultado arriba de la pregunta
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Crea variable caja de pregunta
    const question = document.getElementById("question");
  
    // Cambiar texto por el de cada pregunta del JSON
    question.innerText = Questions[id].q;
  
    // Crea variables para llamar a las opciones
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
  
    // Cambiar texto por el de cada opción del JSON
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
  
    // Crea variable para llamar al botón
    const next = document.getElementById('next');
  
    // Cambiar texto por el de cada resultado del JSON
    next.innerText = Questions[id].b;
  
    // Ver si las opciones son true según JSON
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
  
    // Se crea variable para ver si está seleccionada opción
    var selected = "";
  
    // Selecciona op1 y cambia a amarillo, se guarda en variable si es correcta o no
    op1.addEventListener("click", () => {
      op1.style.backgroundColor = "lightgoldenrodyellow";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightskyblue";
      selected = op1.value;
    })
  
    // Selecciona op2 y cambia a amarillo, se guarda en variable si es correcta o no
    op2.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightgoldenrodyellow";
      op3.style.backgroundColor = "lightskyblue";
      selected = op2.value;
    })
  
    // Selecciona op3 y cambia a amarillo, se guarda en variable si es correcta o no
    op3.addEventListener("click", () => {
      op1.style.backgroundColor = "lightskyblue";
      op2.style.backgroundColor = "lightskyblue";
      op3.style.backgroundColor = "lightgoldenrodyellow";
      selected = op3.value;
    })
    
    // Se crea otra variable que se llama evaluate y llama al botón de revisar
    const evaluate = document.getElementsByClassName("evaluate");
  
    // Cuando haces click, te dice si estás bien o si debes intentar de nuevo 
    evaluate[0].addEventListener("click", () => {
      if (selected == "true") {
        result[0].innerHTML = "¡Bien! 🤩";
        result[0].style.color = "green";
      } else {
        result[0].innerHTML = "Intenta otra vez ☹️";
        result[0].style.color = "red";
      }
    })
  }
  
  // Empieza por la primera pregunta
  if (start) {
    iterate("0");
  }
  
  // Llamamos al botón siguiente
  const next = document.getElementsByClassName('next')[0];
  var id = 0;
  
  // Al hacer clic, la variable start cambia de valor, indicando que no estamos en la primera pregunta
  next.addEventListener("click", () => {
    start = false;
    // Si no estamos en el final, avanza uno y corre la función iterate.
    if (id < 2) {
      id++;
      iterate(id);
      // El console log muestra en cuál vas y si está funcionando el código.
      console.log(id);
    } else {
      // Cuando SI estamos en el final, el id vuelve al principio (pregunta 1) y vuelve a iterar.
      id = 0;
      iterate(id)
    }
  
  })
