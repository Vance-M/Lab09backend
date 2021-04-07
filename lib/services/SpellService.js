const Spell = require('../models/Spell.js');
const request = require('superagent');

module.exports = class spellService {

    static async create({ url, name }) {
        const spell = await Spell.insert({ url, name });
        return spell;
    }

    static async getAll(){
        const spells = await Spell.getAll();
        return spells;
    }

    static async getByID(id) {
        const spell = await Spell.getByID(id);
        return spell;
    }

    static async updateById(id, { url, name }) {
        const spell = await Spell.update({ id, name });
        return spell;
    }

    static async deleteById(id) {
        const spell = await Spell.delete(id);
        return spell;
      }

    // static async getFromAPI() {
    //     const APIspells = await request.get(`https://www.dnd5eapi.co/api/spells`)
    //     return APIspells;
    // }      
}