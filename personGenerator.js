
const personGenerator = {

    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    firstNameMaleJson: `{                                      
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{                                    
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Светлана",
            "id_3": "Анна",
            "id_4": "Вероника",
            "id_5": "Татьяна",
            "id_6": "Валентина",
            "id_7": "Ева",
            "id_8": "Елизавета",
            "id_9": "Ольга",
            "id_10": "Галина"
        }
    }`,

    middlenameJson: `{
        "count" : 10,
        "list" : {
            "id_1": "Максимов",
            "id_2": "Андреев",
            "id_3": "Викторов",
            "id_4": "Антонов",
            "id_5": "Валериев",
            "id_6": "Юрьев",
            "id_7": "Денисов",
            "id_8": "Сергеев",
            "id_9": "Алексеев",
            "id_10": "Александров"  
        }
    }`,

    bdatesJson: `{
        "count" : 12,
        "list" : {
            "id_1": ["января", "15"],
            "id_2": ["февраля", "11"],
            "id_3": ["марта", "01"],
            "id_4": ["апреля", "22"],
            "id_5": ["мая", "12"],
            "id_6": ["июня", "09"],
            "id_7": ["июля", "25"],
            "id_8": ["августа", "27"],
            "id_9": ["сентября", "04"],
            "id_10": ["октября", "30"],
            "id_11": ["ноября", "18"],
            "id_12": ["декабря", "21"]
        }
    }`,

    professionJson: `{
        "unisex" : {
            "1": "Разработчик",
            "2": "Дизайнер",
            "3": "Кассир",
            "4": "Врач",
            "5": "Педагог",
            "6": "Юрист",
            "7": "Экономист",
            "8": "Депутат",
            "9": "Актер",
            "10": "Ученый",
            "11": "Повар",
            "12": "Журналист",
            "13": "Инженер",
            "14": "Менеджер",
            "15": "Официант",
            "16": "Парикмахер",
            "17": "Оператор ПК",
            "18": "Писатель",
            "19": "Технолог",
            "20": "Тренер"
        },
        "male" : {
            "21": "Дальнобойщик",
            "22": "Шахтер",
            "23": "Строитель",
            "24": "Слесарь",
            "25": "Охранник",
            "26": "Пожарный",
            "27": "Военный",
            "28": "Тракторист",
            "29": "Грузчик",
            "30": "Сварщик"
        },
        "female" : {
            "21": "Аккаунт-менеджер",
            "22": "Няня",
            "23": "Швея",
            "24": "Домохозяйка",
            "25": "Стюардесса",
            "26": "Медсестра",
            "27": "Секретарь",
            "28": "Уборщица",
            "29": "Маникюрша",
            "30": "Косметолог"
        }
    }`,

  

    Gender_Parameter: '',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        this.randomIntNumber() == 0 ? this.Gender_Parameter = 'Мужчина' : this.Gender_Parameter = 'Женщина';
        return this.Gender_Parameter;
    },

    randomFirstName: function () {
        if (this.Gender_Parameter == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else if(this.Gender_Parameter == 'Женщина') {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function () {

        let surname = this.randomValue(this.surnameJson);
        if (this.Gender_Parameter == 'Женщина') {
            surname += 'a';
        }
        return surname;
    },

    randomMiddleName: function () {
        let middlename = this.randomValue(this.middlenameJson);
        this.Gender_Parameter == 'Мужчина' ? middlename += 'ич' : middlename += 'на';
        return middlename;
    },

    randomBirthDates: function () {
        let year = this.randomIntNumber(2001, 1983);
        let dateArr = this.randomValue(this.bdatesJson);
        let month = dateArr[0];
        let day = this.randomIntNumber(dateArr[1], 1) ;

        return day + ' ' + month + ' ' + year;
    },
    
    randomProfessions: function(){
        const obj = JSON.parse(this.professionJson);
        let genderProf = obj.unisex;
        if (this.Gender_Parameter == 'Мужчина'){
            genderProf = Object.assign(genderProf, obj.male);
        }
        else if(this.Gender_Parameter == 'Женщина'){
            genderProf = Object.assign(genderProf, obj.female);
        }
        
        const count = Object.keys(genderProf).length;
        
        return genderProf[this.randomIntNumber(count, 1)];
    },


    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.middlename = this.randomMiddleName();
        this.person.birthDates = this.randomBirthDates();
        this.person.professions = this.randomProfessions();
    


        return this.person;
    }
};