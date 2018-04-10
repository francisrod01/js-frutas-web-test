const fruitsRouter = (router, db) => {
  // On routes that end in /fruits
  router.route('/fruits')
    // Get all fruits.
    .get(async (req, res, next) => {
      try {
        const fruits = await db.all('SELECT * FROM Fruit LIMIT 10');

        res.json(fruits);
      }
      catch (err) {
        res.status(500).send(err);
        next(err);
      }
    });

  router.route('/fruits/:id')
    // Get a fruit.
    .get(async (req, res, next) => {
      try {
        const sql = 'SELECT * FROM Fruit WHERE id = ?';
        const { params } = req;

        const fruit = await db.get(sql, [params.id]);

        res.json(fruit);
      }
      catch (err) {
        res.status(500).send(err);
        next(err);
      }
    });
};

module.exports = fruitsRouter;
