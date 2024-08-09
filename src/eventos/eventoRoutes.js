const { listarTarefas, criar, deletar } = require('../controllers/tarefaController');

const router = require('express').Router();

// router.get('/', async (req, res) => {
//     res.send(await listarTarefas());
// });
// router.get('/:id', (req, res) => {
//     res.send('um evento');
// });
// router.post('/', async (req, res) => {
//     res.send(await criar(req.body));
// });
// router.put('/:id', (req, res) => {
//     res.send('editar uma evento');
// });
// router.delete('/:id', async (req, res) => {
//     res.send(await deletar(req.params.id));
// });

module.exports = router;