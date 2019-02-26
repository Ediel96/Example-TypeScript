"use strict";
class person {
    constructor(theName) { this.name = theName; }
    year(nowYear = 0) {
        console.log(`${this.name} have year ${nowYear}`);
    }
}
class soccerPlayer extends person {
    constructor(name) { super(name); }
    year(nowYear = 25) {
        console.log("Gooolll de  Colombia");
        super.year(nowYear);
    }
}
class programer extends person {
    constructor(name) { super(name); }
    year(nowYear = 23) {
        console.log("better programer");
        super.year(nowYear);
    }
}
let carlos = new soccerPlayer(" Carlos is futbolista");
let Edwar = new programer("Edwar is good programer");
carlos.year(19);
Edwar.year();
