const { listarEventos, listarEvento, criarEvento, editarEvento, deletarEvento } = require("../controllers/eventosController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await listarEventos());
});
router.get("/:id", async (req, res) => {
    res.send(await listarEvento(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await criarEvento(req.body));
});
router.post("/:id", async (req, res) => {
    res.send(await editarEvento(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
    res.send(await deletarEvento(req.params.id));
});

module.exports = router;