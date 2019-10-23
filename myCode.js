const create = tag => document.createElement(tag);
const appendBody = node => document.body.appendChild(node);
const appendToParent = (parentNode, node) => parentNode.appendChild(node);

let nav_toggle = appendBody(create("input"))
nav_toggle.type = "checkbox"
nav_toggle.id = "nav-toggle"
nav_toggle.hidden = true
let nav = appendBody(create("nav"))
nav.className = "nav"
nav.innerHTML = '<label for="nav-toggle" class="nav-toggle" onclick></label>'

let logo = appendToParent(nav, create("h2"))
logo.className = "logo"
let a = appendToParent(logo, create("a"))
a.href = "#"
a.innerText = "Темы"
let ul = appendToParent(nav, create("ul"))

let li1 = appendToParent(ul, create("li"))
let menu1 = appendToParent(li1, create("a"))
menu1.href = "#"
menu1.id = "menu1"
menu1.innerText = "Добро пожаловать"
let li2 = appendToParent(ul, create("li"))
let menu2 = appendToParent(li2, create("a"))
menu2.href = "#"
menu2.id = "menu2"
menu2.innerText = "Переменные"
let li3 = appendToParent(ul, create("li"))
let menu3 = appendToParent(li3, create("a"))
menu3.href = "#"
menu3.id = "menu3"
menu3.innerText = "Типы переменных"
let li4 = appendToParent(ul, create("li"))
let menu4 = appendToParent(li4, create("a"))
menu4.href = "#"
menu4.id = "menu4"
menu4.innerText = "Встроенные типы данных"
let li5 = appendToParent(ul, create("li"))
let menu5 = appendToParent(li5, create("a"))
menu5.href = "#"
menu5.id = "menu5"
menu5.innerText = "Отображение вывода"
let li6 = appendToParent(ul, create("li"))
let menu6 = appendToParent(li6, create("a"))
menu6.href = "#"
menu6.id = "menu6"
menu6.innerText = "Вывод значений"
let li7 = appendToParent(ul, create("li"))
let menu7 = appendToParent(li7, create("a"))
menu7.href = "#"
menu7.id = "menu7"
menu7.innerText = "Пользовательский ввод"


let article = appendBody(create("article"))
let firstPage = appendToParent(article, create("div"))
firstPage.className = "pages"
firstPage.id = "firstPage"

let lecture = appendToParent(firstPage, create("div"))
lecture.className = "lecture"

let theme = appendToParent(lecture, create("h1"))
theme.id = "theme"
let content = appendToParent(lecture, create("p"))
content.id = "content"

let btnPractice = appendToParent(lecture, create("button"))
btnPractice.classList.add("btnPractice", "myBtn")
btnPractice.innerHTML = "К практике"

let practice = appendToParent(firstPage, create("div"))
practice.className = "practice"

let question = appendToParent(practice, create("h2"))
question.id = "question"

let task = appendToParent(practice, create("div"))
task.id = "task"

let btnCheckRadio = appendToParent(practice, create("button"))
btnCheckRadio.classList.add("btnCheckRadio", "myBtn")
btnCheckRadio.innerHTML = "Проверить"

let btnNext = appendToParent(practice, create("button"))
btnNext.classList.add("btnNext", "myBtn")
btnNext.innerHTML = "Следующее"

let counter = 1 //counts unlocked pages
let pgNum = 1 //counts current page number
let pages = document.querySelector(".pages")

createNewPage() //creating first page

menu1.onclick = () => {
    pgNum = 1;
    createNewPage()
}
menu2.onclick = () => {
    if (counter < 2) alert("Задание заблокировано")
    else {
        pgNum = 2;
        createNewPage()
    }
}
menu3.onclick = () => {
    if (counter < 3) alert("Задание заблокировано")
    else {
        pgNum = 3;
        createNewPage()
    }
}
menu4.onclick = () => {
    if (counter < 4) alert("Задание заблокировано")
    else {
        pgNum = 4;
        createNewPage()
    }
}
menu5.onclick = () => {
    if (counter < 5) alert("Задание заблокировано")
    else {
        pgNum = 5;
        createNewPage()
    }
}
menu6.onclick = () => {
    if (counter < 6) alert("Задание заблокировано")
    else {
        pgNum = 6;
        createNewPage()
    }
}
menu7.onclick = () => {
    if (counter < 7) alert("Задание заблокировано")
    else {
        pgNum = 7;
        createNewPage()
    }
}

btnPractice.onclick = () => {
    practice.style.display = 'flex';
    lecture.style.display = 'none';
}

btnCheckRadio.onclick = () => { //detects type of task and checks if it correct
    if (pgNum == 1 || pgNum == 2 || pgNum == 6) {
        let correct = document.querySelector(".correct")
        if (correct.checked) allCorrect()
        else smthWrong()
    }
    if (pgNum == 3) {
        let input3_1 = document.querySelector("#input3_1")
        let input3_2 = document.querySelector("#input3_2")
        if (input3_1.value == "int" && input3_2.value == "=") allCorrect()
        else smthWrong()
    }
    if (pgNum == 4) {
        let input4_1 = document.querySelector("#input4_1")
        let input4_2 = document.querySelector("#input4_2")
        if (input4_1.value == "bool" && input4_2.value == "string") allCorrect()
        else smthWrong()
    }
    if (pgNum == 5) {
        let input5_1 = document.querySelector("#input5_1")
        let input5_2 = document.querySelector("#input5_2")
        if (input5_1.value == "WriteLine" && input5_2.value == '"Learning C#"') allCorrect()
        else smthWrong()
    }
    if (pgNum == 7) {
        let input7_1 = document.querySelector("#input7_1")
        let input7_2 = document.querySelector("#input7_2")
        if (input7_1.value == "Console" && input7_2.value == "ReadLine") allCorrect()
        else smthWrong()
    }
}

function allCorrect() {
    pages.style.backgroundColor = "#9ac48d";
    btnNext.style.display = 'block'
    counter++
    pgNum++
}

function smthWrong() {
    pages.style.backgroundColor = "#ffb3b1"
}
btnNext.onclick = createNewPage

function createNewPage() {
    practice.style.display = 'none';
    lecture.style.display = 'flex';
    btnNext.style.display = 'none'
    pages.style.backgroundColor = "white"
    switch (pgNum) {
        case 1:
            theme.innerHTML = "Добро пожаловать в C#!"
            content.innerHTML = "C# - это элегантный объектно-ориентированный язык программирования, который позволяет разработчикам создавать разнообразие защищенных и надёжных приложений, которые запускаются на .Net Framework. Вы можете использовать С# для создания Windows приложений, Веб-сервисов, мобильных приложений, клиент-серверных приложений, приложений баз данных, и многого, многого другого."
            question.innerHTML = "C# приложения запускаются:"
            task.innerHTML = '<li><input class="wrong" type="radio" name="dva" /> с помощью Java</li><li><input class="wrong" type="radio" name="dva" /> только на Linux</li><li><input class="correct" type="radio" name="dva" /> на .Net Framework</li>'
            break;
        case 2:
            theme.innerHTML = "Переменные"
            content.innerHTML = "Программы используют данные для выполнения заданий. Создание переменной резервирует место в памяти для хранения значений. Она называется переменной, потому что информация, хранящаяся в этой локации, может быть изменена при выполнении программы. Для использования переменной, она должна быть объявлена с указанием имени и типа данных. Имя переменной, также известное, как идентификатор, может содержать буквы, цифры и символ нижнего подчеркивания (_) и должно начинаться с буквы или нижнего подчеркивания. Хоть именем переменной может быть любой набор букв и цифр, наилучший идентификатор является описанием информации, которую он содержит. Это очень важно для создания ясного, понятного и читаемого кода!"
            question.innerHTML = "Какие имена переменных являются подходящими для языка C#?"
            task.innerHTML = '<li><input class="wrong" type="radio" name="dva" />1Star</li><li><input class="wrong" type="radio" name="dva" />#PersonName#</li><li><input class="correct" type="radio" name="dva" />Bad_Var</li>'
            break;
        case 3:
            theme.innerHTML = "Типы переменных"
            content.innerHTML = 'Тип данных определяет информацию, которая может храниться в переменной, размер необходимой памяти и операции, которые могут выполняться с переменной. <br> Например, для хранения целочисленного значения (целого числа) в переменной, используйте ключевое слово int.<br> Строка кода, выполняющая действие, называется выражением. Каждое выражение на языке C# должно заканчиваться точкой с запятой.<br>Вы можете присвоить значение переменной при ее объявлении: <br> int myAge = 18 <br> или позже в вашей программе: <br> int myAge; <br>   myAge = 18; '
            question.innerHTML = "Заполните пустые места, чтобы объявить переменную num целочисленного типа и просвойте ей 42"
            task.innerHTML = "<input id='input3_1' class='lilInput'></input> num; <br> num <input id='input3_2' class='lilInput'></input>42"
            break;
        case 4:
            theme.innerHTML = "Встроенные типы данных"
            content.innerHTML = "Существует множество встроенных типов данных в языке С#. Наиболее часто используемыми являются: <br> int - целое число. <br> float - число с плавающей точкой. <br> double - число с плавающей точкой. <br> char - один символ. <br> bool - булевый тип, который может иметь только два значения: True или False. <br> string - последовательность символов. <br> Значения типа char присваиваются с помощью одинарных кавычек, а значения типа string требуют использования двойных кавычекю <br> Вы узнаете, как выполнять различные операции с переменными в последующих уроках!"
            question.innerHTML = "Заполните пустые места корректными типами данных"
            task.innerHTML = "<input id='input4_1' class='bigInput'></input> a = false; <br> double b = 4.22; <br> <input id='input4_2' class='bigInput'></input> c = `Hi`; <br> int d=11;"
            break;
        case 5:
            theme.innerHTML = "Отображение вывода"
            content.innerHTML = 'Большинству приложений необходим некоторый пользовательский ввод для получения вывода в качестве результата.<br>Для отображения текста в окне консоли вам необходимо использовать методы Console.Write или Console.WriteLine. <br>Разница между ними в том, что за методом Console.WriteLine следует конец строки, который передвигает курсор на следующую строку, после вывода текста. <br> Такая строчка кода выведет Hello World! в oкно консоли: <br><br>Console.WriteLine("Hello World!");<br><br> Обратите внимание на скобки после метода. Это способ передачи информации или аргументов в методы. Строковые аргументы должны быть заключены в кавычки.'
            question.innerHTML = 'Дополните фрамент кода так, чтобы он выводил "Learning C#".'
            task.innerHTML = "Console.<input id='input5_1' class='bigInput'></input>(<input id='input5_2' class='bigInput'></input>);"
            break;
        case 6:
            theme.innerHTML = "Вывод значений"
            content.innerHTML = 'Мы можем вывести значения переменных в окно консоли: <br><br>static void Main(string[]args)<br>{<br>  int x = 89;<br>  Console.WriteLine(x)<br>}<br>//Outputs 89<br><br> Для отображения форматированной строки используйте следующий синтаксис:<br><br>static void Main(string[]args)<br>{<br>  int x = 10;<br>  double y = 20;  Console.WriteLine("x = {0}; y = {1}, x, y};<br>}<br>//Output: x = 10; y = 20<br><br>Как видите, значение х заменяет {0}, а значение у заменяет {1}. '
            question.innerHTML = 'Что выведет следующий код?<br><br>int a = 4;<br>int b = 2;<br>Console.Write(a);<br>Console.Write(b);'
            task.innerHTML = '<li><input class="wrong" type="radio" name="dva" />24</li><li><input class="wrong" type="radio" name="dva" />2</li><li><input class="correct" type="radio" name="dva" />42</li><li><input class="wrong" type="radio" name="dva" />4</li>'
            break;
        case 7:
            theme.innerHTML = "Пользовательский ввод"
            content.innerHTML = 'Вы также можете предложить пользователю ввести данные, а зтем использовать метод Console.ReadLine чтобы присвоить введенные данные строковой переменной.<br>Слдующий пример спрашивает, как зовут пользователя, а затем выводит сообщение, которое включает введенные данные:<br><br>static void Main(string[] args)<br>{<br>  string yourName;<br>  Console.WriteLine("What is your name?");<br>  yourName = Console.ReadLine();<br>  Console.WriteLine("Hello {0}", yourName);<br>}<br><br>Метод Console.ReadLine ждёт, пока пользователь введет данные, а затем присваивает их к переменной. Следующее выражение выводи форматированную строку, содержащую Hello с введете Давид, в выводе будет Hello David.<br><br>Обратите внимание на пустые скобки в методе ReadLine. Это значит, что он не принимает никаких аргументов.'
            question.innerHTML = 'Дополните фрагмент кода так, чтобы он примал пользовательский ввод и сохранял его в переменной temp.'
            task.innerHTML = "string temp;<br>temp = <input id='input7_1' class='bigInput'></input>.<input id='input7_2' class='bigInput'></input>(); "
            break;
    }
}