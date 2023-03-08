import { Card } from "./card";

export class User {
    id : Number;
    nome : String;
    cognome : String;
    email : String;

    constructor(id : Number, nome : String, cognome : String, email : String) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getCognome() {
        return this.cognome;
    }

    setEmail(email: string) {
        this.email = email;
    }

    
}