const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error...');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & Get token
// @access  Public
router.post(
  '/',
  [
    check('email', 'Por favor digite um e-mail válido.').isEmail(),
    check('password', 'Senha é obrigatória.').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, manter } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Credencias inválidas.' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Credencias inválidas.' }] });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };

      if (manter) {
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 360000 },
          (error, token) => {
            if (error) throw error;
            res.json({ token });
          }
        );
      } else {
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (error, token) => {
            if (error) throw error;
            res.json({ token });
          }
        );
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
