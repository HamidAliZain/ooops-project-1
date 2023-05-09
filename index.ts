import inquirer from "inquirer"
let personalityQuestion = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: 'what is your name',
    },
    {
        name: "personality",
        type: "list",
        message: 'what is your personality',
        choices: ["Extrovert", "Introvert"]
    },
])


class Person {
    personality!: string
     GetPersonality() {
             return this.personality = personalityQuestion.personality
     }
}
class Student {
    name!: string
    stdName() {
        return this.name = personalityQuestion.name
    }
}

const person = new Student().stdName()
const personality = new Person().GetPersonality()

console.log(`
Your name is ${person} and your personality is ${personality}`)
 

