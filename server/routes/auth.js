import express from 'express';
import User from '../models/User.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import generateToken from '../utils/generateToken.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// @desc Sign Up user
// @route POST /api/users/signup
// @access Public/User
router.post(
  '/signup',
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    if (user) {
      generateToken(req, res, user._id);

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  })
);

// @desc Sign In user
// @route POST /api/users/signin
// @access Public/User
router.post(
  '/signin',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(req, res, user._id);

      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        isSeller: user.isSeller,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  })
);

// @desc Signout user / Clear Cookie
// @route POST /api/users/signout
// @access Public/User
// In your auth.js (backend)
router.post('/signout', (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0), // Expire immediately to clear the cookie
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

router.get(
  '/protect',
  protect, // Use the protect middleware to verify JWT
  asyncHandler(async (req, res) => {
    res.json({
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      isAdmin: req.user.isAdmin,
    });
  })
);

export { router as authRoutes };
