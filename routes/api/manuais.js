const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Manual = require('../../models/Manual');

// Upload de PDF
router.post('/', async (req, res) => {
  try {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No  file uploaded' });
    }

    const file = req.files.file;

    file.mv(
      `${__dirname}/../../client/public/uploads/manuais/${file.name}`,
      err => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }

        res.json({
          fileName: file.name,
          filePath: `/uploads/manuais/${file.name}`
        });
      }
    );

    const newManual = new Manual({
      name: file.name,
      size: file.size,
      path: `/uploads/manuais/${file.name}`
    });

    const manual = await newManual.save();

    res.send(manual);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Listar PDFs
router.get('/', auth, async (req, res) => {
  try {
    const manuais = await Manual.find().sort({ date: -1 });
    res.json(manuais);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
