// Elementos del DOM
const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const continueButton = document.getElementById('continue-button');
const resetButton = document.getElementById('back-button')

// Estado del juego
let storyStep = 0;

// Función para mostrar la historia y opciones en cada paso
function displayStory(text, imageUrl = '', choices = []) {
    storyElement.innerHTML = text;
    choicesElement.innerHTML = '';

    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Imagen de la historia";
        img.style.width = "500px"; // Tamaño opcional
        img.style.height = "auto";
        storyElement.appendChild(img); // Añadir imagen al elemento de historia
    }

    // Crear botones para cada opción de elección
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = choice.action;
        choicesElement.appendChild(button);
    });

    // Mostrar el botón de continuar si no hay opciones
    continueButton.style.display = choices.length === 0 ? 'block' : 'none';

    
}

// Función para avanzar en la historia
function nextStory() {
    storyStep++;
    switch (storyStep) {
        case 1:
            displayStory(
                "En un pequeño pueblo llamado Zolkin, donde las montañas se abrazan al cielo y los ríos cantan historias antiguas, vivían dos comunidades: los Mayak, que valoraban la conexión con la naturaleza y la espiritualidad, y los Urbanitas, que habían llegado de tierras lejanas trayendo consigo tecnología y una visión pragmática de la vida.",
                "Imagenes/Pueblo.jpg",
                []
            );
            break;
        case 2:
            displayStory(
                "En ese pueblo vivía una niña llamada Izel, quien creció entre ambas culturas, viendo la espiritualidad de los Mayak y la visión innovadora de los Urbanitas.",
                "Imagenes/Izel.jpg",
                []
            );
            break;
        case 3:
            displayStory(
                "El pueblo tenía una fuente especial, el Árbol de Vida, alimentado por la energía positiva de los Mayak. Con la llegada de los Urbanitas, el árbol comenzó a debilitarse y Zolkin sufrió las consecuencias, donde la vida se veía cada vez más amenazada.",
                "Imagenes/Arbol.jpg",
                []
            );
            break;
        case 4:
            displayStory(
                "El árbol convocó a Izel, quien no tenía prejuicios hacia ninguna cultura, para salvar a su pueblo. Aquí comienza la historia de cómo Izel intentará salvar Zolkin.",
                '',
                []
            );
            break;
        case 5:
            displayStory(
                "Izel: Hoy el día está más oscuro de lo normal, parece que es más pronto de lo que creí. Siento una presión en el pecho, no es solo sobre el árbol, es sobre unir a nuestra gente.\n Izel necesita visitar con una tribu...",
                '',
                [
                    { text: 'Visitar los Mayak', action: goToMayak },
                    { text: 'Visitar los Urbanitas', action: goToUrbanitas }
                ]
            );
            break;
    }
}

function goToMayak() {
    displayStory(
        "Rumbo hacia los Mayak, el pueblo de Izel, donde la fuerza reside en el espíritu y su fuerte conexión con el árbol. Izel encuentra a un viejo conocido, Víctor.",
        'Imagenes/Victor.jpg',
        [
            { text: 'Hablar con Víctor', action: hablarConVictor },
            { text: 'Ignorar a Víctor', action: ignorarVictor }
           
        ]
    );
}

function hablarConVictor() {
    displayStory(
        "Víctor: ¡Izel!... Hola...\n\n" +
        "Izel: Oh, hola Víctor\n\n" +
        "Víctor: Que día más espantoso. Izel, ¿recuerdas que te dije que el fin se acerca? Esto es de lo que te hablaba.\n\n" +
        "Izel: Sí, justamente por eso me dirijo a mi pueblo, necesito hablar con ellos.\n\n" +
        "Víctor: Oh, podrías llevarle esto a tu gente, es una idea para recuperar la energía del árbol.\n\n" +
        "Izel: Claro, Víctor. Nos vemos, hasta luego.\n\n" +
        "Luego de llegar donde los Mayak, Izel empieza a hablar con ellos y les propone diversas ideas sobre cómo rescatar el árbol.\n" +
        "Líder Mayak: No podemos dañar nuestra energía, debemos intentar reparar todo esto con nuestro espíritu.",
        '',
        []
    );
    continueButton.onclick = ofrecerRecado;
}

function ignorarVictor() {
    displayStory(
        "Izel decide no hablar con Víctor y continúa hacia el pueblo Mayak.\n\n" +
        "Luego de llegar donde los Mayak, Izel empieza a hablar con ellos y les propone diversas ideas sobre qué hacer para rescatar el árbol." +
        "Aun así, ninguno accede y persisten en su creencia de que su energía lo salvará, pero esto no será suficiente.",
        'Imagenes/conversar.jpg',
        []
    );
    continueButton.onclick = Mayak2;
}

function Mayak2() {
    displayStory(
        "Izel, al ver que no están llegando a nada, piensa si debería ir directamente con los Urbanitas o hablar con Víctor.",
        '',
        [
            { text: 'Hablar con Víctor', action: hablarConVictor2 },
            { text: 'Ir directamente donde los Urbanitas', action: finalUrbanitas }
        ]
    );
}

function finalUrbanitas() {
    displayStory(
        "Izel llega directamente con los Urbanitas. Luego de hablar un rato con ellos, deciden intentar salvar el árbol sin la ayuda de los Mayak.",
        '',
        []
    );
    continueButton.onclick = finalNeutral2;
}

function hablarConVictor2() {
    displayStory(
        "Izel: Hola Víctor, discúlpame por haberme ido así.\n\n" +
        "Víctor: Tranquila, Izel, no te preocupes.\n\n" +
        "Izel: Fui a hablar con mi gente, pero no me escuchan.\n\n" +
        "Víctor: Entiendo, los Mayak siempre han sido un poco necios. Aun así, mi gente está dispuesta a ayudar. Mira esto.\n\n" +
        "Izel recibe una carta de Víctor con unas instrucciones para cooperar con los Mayak."+
        "Izel al ver esto decide ir corriendo con los urbanitas para que le expliquen mas y asi llegar a un acuerdo con los mayak para cooperar",
        '',
        []
    )
    continueButton.onclick = Mayak3;
}
function Mayak3() {
    displayStory(
        "Luego de llegar donde los Urbanitas se dirigen corriendo donde el lider, al hablar con el se da cuenta que su actitud es muy diferente a lider Mayak." +
        "Izel entiende mejor el plan de los Urbanitas, juntar el poder de los Mayak y la tecnologia urbanitas es asombroso y parece ser la unica forma de salvar el arbol."+
        "Aun asi Izel ya habia hablado con los mayak y auquel hombre parece no cooperar",
        '',
        [  
        ]
    )
    continueButton.onclick = Mayak4;
}


function Mayak4() {
    displayStory(
        "Izel decide hacer el ultimo intento dirigiendose donde el lider mayak, le explica el plan, pero este definitivamente decide no cooperar" +
        "marcando de esta manera un no rotundo, Izel vuelve donde el lider Urbanita y le cuenta como el lider Mayak decidio no cooperar, aun asi los urbanitas intentan por su cuenta salvar el arbol con ayuda unicamente de izel",
        '',
        []
    )
    continueButton.onclick = finalNeutral;
}





function ofrecerRecado() {
    displayStory(
        "Izel entrega el recado de Víctor. El líder Mayak lo toma, lo lee, y lo rechaza enojado, retirándose sin decir una palabra. Izel, asombrada, lee el contenido de la propuesta, tras leer va directamente hacia los Urbanitas",   
        '',
        [])
        continueButton.onclick = goToUrbanitas;
}

function goToUrbanitas() {
    displayStory(
        "Al llegar Izel se da cuenta que los Urbanitas son un mundo completamente diferente, entre tanta gente encuentra a Victor.",
        'Imagenes/Urbanitas.jpg',
        []
        
    );
    continueButton.onclick = urbanitasParte2;
}

function urbanitasParte2(){
    displayStory(
        "Izel: Victor por fin te veo, lei la carta, ahora comprendo, pero el lider Mayak no creo que quiera cooperar con el plan.\n\r Victor: Aun asi tenemos que convencerlo, de lo contrario sera nuestro fin.", 
        '',
        []
    );
    continueButton.onclick = urbanitasParte3;
}

function urbanitasParte3(){
    displayStory("Izel y victor llegan donde los Mayak, y nuevamente se encuentra con el lider, esta vez Izel le explica mejor el plan de la nota de Victor, mientras que Victor le demuestra como con ayuda de la energia de Izel y la tecnologia que lleva Victor como le dan vida nuevamente a una hoja marchita.\n Sin embargo el lider seguia dudando, aun asi logran convencerlo. ",
        "Imagenes/revivicion.jpg", 
        []
    );
    continueButton.onclick = urbanitasParte4;
}

function urbanitasParte4(){
    displayStory("Luego de convencer al lider de los mayak, ambos pueblos se reunen y llevando a cabo el plan de unir fuerzas, dirigen toda su energia y tecnologia hacia el arbol"+
        "Al primcipio parece que no es suficiente, el arbol no parece tomar forma, Izel comienza a ensar que todo fue en vano...",
        "", 
        []
    );
    continueButton.onclick = urbanitasParte5;
}

function urbanitasParte5(){
    displayStory("La gente alrededor del arbol notan como los lideres de cada pueblo estaban dando lo mejor de si, asi que deciden ayudarlos cada pueblo con su energia, Izel logra ver un chispazo de esperanza, y motiva a los demas a ayudarlos,"+
        "Izel: ¡¡¡Parece ser que esta funcionando, lo vamos a Lograr!!!!",
        "", 
        []
    );
    continueButton.onclick = urbanitasParte6;
}

function urbanitasParte6(){
    displayStory("Es asi como despues de tanto esfuerzo, Izel sintiendo una calma que recorre todo su cuerpo y mirando a todo su alrededor, ambos pueblos unidos, juntos, luchando por un bien común, El arbol se logor salvar y meses depues ambos pueblos se unen para ser uno solo. FIN. ",
        '',
        []
    );
    continueButton.onclick = urbanitasParte6;
}


// Escenas de Unir Esfuerzos
function unirEsfuerzos() {
    displayStory(
        "Siento que la única manera de salvar este árbol es si los Mayak y los Urbanitas unen fuerzas. ¿Deberíamos empezar con los Mayak compartiendo sus conocimientos o dejar que los Urbanitas muestren su tecnología primero?",
        [
            { text: 'Que los Mayak compartan primero', action: finalExitoso },
            { text: 'Que los Urbanitas compartan primero', action: finalExitoso }
        ]
    );
}



// Finales
function finalExitoso() {
    displayStory(
        "Después de tanto esfuerzo y dudas, finalmente lo logramos. El árbol sagrado ha vuelto a florecer. Veo a los Mayak y los Urbanitas trabajando juntos. Es una mezcla de alivio, orgullo y esperanza. El pueblo de Tzolk'in ha cambiado para siempre, y en mi corazón, siento que este es solo el comienzo de algo mucho más grande. FIN."
    );
}

 

function finalNeutral() {
    displayStory(
        "Tras el rechazo de su líder, Izel se siente decepcionada. Comprende las ideas de los Urbanitas, pero no logra comprender a su líder. Sin embargo, no se da por vencida y decide ayudar a los Urbanitas en un último intento por salvar su pueblo, donde nació y creció." +
        "Todos los Urbanitas, dispuestos a ayudar, se reúnen...",
        '',
        []
    );
    continueButton.onclick = finalNeutral2;
}

function finalNeutral2() {
    displayStory(
        "Izel comienza a reunir toda su energía y la dirige hacia los Urbanitas, quienes la canalizan directamente al árbol. Pero este no reacciona. Intentan una y otra vez, pero nada, nada, nada." +
        "No es suficiente. Este último y desesperado intento parece ser el final...",
        '',
        []
    );
    continueButton.onclick = finalNeutral3;
}

function finalNeutral3() {
    displayStory(
        "Izel, con un último grito, logra dirigir toda su energía hacia los Urbanitas. Víctor, al ver esto, usa toda su tecnología y, con la ayuda de los demás Urbanitas, le dan una última chispa de vida al árbol." +
        "Contra todo pronóstico, el árbol logra recuperar algo de su fuerza, pero no es suficiente. Tiempo después, Izel se recupera, pero se da cuenta de que su pueblo no es el mismo. Lo último que recuerda es a Víctor. Izel: '¿Perdí el conocimiento? ¿Por cuánto tiempo?'",
        '',
        []
    );
    continueButton.onclick = finalNeutral4;
}

function finalNeutral4() {
    displayStory(
        "Izel se asoma a la ventana y el panorama no es nada alentador. Decide salir para echar un mejor vistazo. Al salir, se encuentra con una enfermera de su tribu, quien le cuenta lo sucedido: Izel ha dormido por 2 años y ahora los dos pueblos están en guerra." +
        "Izel queda muda ante estas palabras: 'No es posible... ¿Dos años?'. Su mundo se ha sumido en el caos, su esfuerzo no fue suficiente, y ahora no hay nada que hacer. Mayak y Urbanitas pelean por los pocos recursos restantes. Al parecer, este es el FIN.",
        '',
        []
    );
   resetButton.onclick = nextStory;
}


// Iniciar la historia
nextStory();
continueButton.onclick = nextStory;
