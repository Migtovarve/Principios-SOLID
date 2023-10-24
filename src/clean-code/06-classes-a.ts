(()=>{

    type Gender = 'M'|'F'

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthdate:Date;

        // constructor (name:string, gender:Gender, birthdate: Date) {
        //     this.name=name;
        //     this.gender=gender;
        //     this.birthdate=birthdate;
        // }

        /*No se aplica el principio de responsabilidad unica.*/
        constructor( 
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ) {  
        }




    }

    class User extends Person {
        public lastAccess: Date
        constructor(
            public email:string,
            public role: string,
            name: string,
            gender:Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date()
        }
    }

    class UserSettings extends User {
        constructor (
            public workingDirectory: string,
            public lastOpenFolder: string,
            email:string,
            role:string,
            name:string,
            gender:Gender,
            birthdate:Date,
        ) {
            super(email,role,name,gender, birthdate);
        }
    }

    const userSetting = new UserSettings(
        '/usr/home',
        '/home',
        'user@mail.com',
        'admin',
        'Miguel',
        'M',
        new Date('1995-09-26')
    )

    console.log({userSetting});

})();