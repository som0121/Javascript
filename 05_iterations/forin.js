
const myObject = {

    js: 'javascript',
    css: 'cascading style sheets',
    html: 'Hypertext markup language'
}

for (const key in myObject) {

    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}\n`);
}

const programming = ["js", "html", "css"]

for (const key in programming) {

    console.log(programming[key]);
}

const map = new Map()

