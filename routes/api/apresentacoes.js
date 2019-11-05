const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Apresentacao = require('../../models/Apresentacao');

// Upload de apresentação
router.post('/', async (req, res) => {
  try {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(
      `${__dirname}/../../client/public/uploads/apresentacoes/${file.name}`,
      err => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }

        res.json({
          fileName: file.name,
          filePath: `/uploads/apresentacoes/${file.name}`
        });
      }
    );

    const newApresentacao = new Apresentacao({
      name: req.body.name,
      fileName: file.name,
      size: file.size,
      path: `/uploads/apresentacoes/${file.name}`
    });

    const apresentacao = await newApresentacao.save();

    res.send(apresentacao);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Listar apresentações
router.get('/', auth, async (req, res) => {
  try {
    const apresentacoes = await Apresentacao.find().sort({ date: -1 });
    res.json(apresentacoes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
