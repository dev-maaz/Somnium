// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Adjust the path to your User model

// router.get('/users', async (req, res) => {
//     const page = parseInt(req.query.page) || 1; // Current page number, default is 1
//     const limit = parseInt(req.query.limit) || 10; // Number of items per page, default is 10

//     const skipIndex = (page - 1) * limit; // Calculate the index of the first item on the page

//     try {
//         const users = await User.find()
//             .skip(skipIndex)
//             .limit(limit)
//             .exec();

//         const totalUsers = await User.countDocuments(); // Get total count of all documents in the collection

//         res.json({
//             users: users,
//             currentPage: page,
//             totalPages: Math.ceil(totalUsers / limit),
//             totalUsers: totalUsers
//         });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;