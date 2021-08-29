// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model.js');


router.get('/', async (req, res, next) => {
    console.log("in the router get")
    try {
        console.log("in the try router get")
        const resources = await Resource.getAll() 
        console.log("resources: ", resources)
        res.status(200).json(resources)
      } catch (err) {
        next(err)
      }
});

router.post('/', async (req, res, next) => {
  const resourceData = req.body;

  console.log("resourceData: ", resourceData);
  try {
      const postedResource = await Resource.create(resourceData)
      console.log("postedResource: ", postedResource);
      res.status(201).json(postedResource);
    } catch (err) {
      console.log("Error in create: ", err)
      next(err)
    }
});

module.exports = router;