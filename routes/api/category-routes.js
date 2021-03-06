const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// GET all categories
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      res.status(500).json(err);
    });
});
//====================================
// GET one category by ID
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({ message: 'No category with that ID was found' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
//=======================================
// CREATE a new category
router.post('/', (req, res) => {
  // create a new category
  // expect req.body to look like
  // {
  //   category_name: bread
  // }
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({ message: 'No category with this ID was found' })
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//======================================================
// DELETE a category
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if(!dbCategoryData) {
        res.status(404).json({ message: 'No category with this ID was found'})
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//======================================================
module.exports = router;
