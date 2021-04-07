const { Router } = require ('express');
const spellService = require('../services/SpellService');


module.exports = Router()

    .post('/', async (req, res, next) => {

        spellService
            .create(req.body)
            .then(spell => res.send(spell))
            .catch(next);
    })

    .get('/', async (req, res, next) => {
        spellService
          .getAll()
          .then(spells => res.send(spells))
          .catch(next);
      })

      .get('/:id', async (req, res, next) => {
        spellService
          .getByID(req.params.id)
          .then(spell => res.send(spell))
          .catch(next);
      })

      .put('/:id', async (req, res, next) => {
        spellService
        .updateById(req.params.id, req.body)
        .then(spell => res.send(spell))
        .catch(next);
      })

      .delete('/:id', async (req, res, next) => {
        spellService
        .deleteById(req.params.id)
        .then(spell => res.send(spell))
        .catch(next);
      })

    //   .get('/', async (req, res, next) => {
    //       spellService
    //         .getFromAPI()
    //         .then(spell => res.send(spell))
    //         .catch(next);
    //   })