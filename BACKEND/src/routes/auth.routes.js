/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const { Router } = require('express');
const jwt = require('jsonwebtoken');

let refreshTokens = [];
const authRoutes = Router();

authRoutes.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);

authRoutes.post(
  '/login',
  async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');
            return next(error);
          }
          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);
              const data = {
                _id: user._id,
                email: user.email,
                name: user.name,
                image: user.image,
                role: user.role
              };
              const token = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
                { expiresIn: '60m' }
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.JWT_SECRET
              );
              refreshTokens.push(refreshToken);
              return res.json({
                token,
                refreshToken
              });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }
);

authRoutes.post('/logout', (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== token);

  res.send('Logout successful');
});

module.exports = authRoutes;
