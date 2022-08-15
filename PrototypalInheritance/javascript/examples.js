// 1

let aboutMe = {
    name: 'Prince',
    city: 'Surat',
    getIntro: function(){
        console.log(this.name + " from " + this.city);
    }
}

let aboutYou = {
    name: 'Prince'
}

aboutYou.__proto__ = aboutMe;