class Character {

    constructor(name, race, title = null, fictionalDoB = null, minimalAge = null, sourcePostDate = null, sources = null) {
        this.name = name;
        this.race = race;
        this.title = title;
        this.fictionalDoB = fictionalDoB;
        this.minimalAge = minimalAge;
        this.sourcePostDate = sourcePostDate;
        this.sources = sources;
    }

    age() {
        if (!this.minimalAge || !this.sourcePostDate) {
            return null
        } else {
            return calculateAge(this.minimalAge, this.sourcePostDate)
        }
    }

}
