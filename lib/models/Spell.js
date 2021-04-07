const pool = require('../utils/pool');

module.exports = class Spell {
    id;
    url;
    name;

    constructor(row) {
        this.id = row.id;
        this.url = row.url;
        this.name = row.name;
    }

    static async insert(spell) {
        const { rows, }
        = await pool.query(
            'INSERT INTO spells (url, name) VALUES ($1, $2) RETURNING *',
            [
            spell.url,
            spell.name
            ]);
        return new Spell(rows[0]);
    }

    static async getAll() {
        const { rows }
         = await pool.query(
             'SELECT * FROM spells'
         );
         return rows;
    }

    static async getByID(id) {
        const { rows }
         = await pool.query(
          'SELECT * FROM spells WHERE id=$1',
          [id]);
    
        return new Spell(rows[0]);
      }

    static async update(spell) {
        const { rows }
         = await pool.query(
          `UPDATE spells SET name = $1 WHERE id = $2 RETURNING *`,
          [
            spell.name,
            spell.id
          ]);
        return new Spell(rows[0]);
      }

      static async delete(id) {
        const { rows }
         = await pool.query(
          `DELETE FROM spells WHERE id=$1 RETURNING *`,
          [id]);
          return new Spell(rows[0]);
      }
}