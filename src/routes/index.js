const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.json(
        [
            {
                "id": 1,
                "title": "Aliens", 
                "img": "https://media.istockphoto.com/photos/alien-picture-id664373658?k=20&m=664373658&s=612x612&w=0&h=P8uEUpwcgPpacphVCSQgCdynx5IyIj3AHf67blr-e7Y="
            },
            {
                "id": 2,
                "title": "Terminator",
                "director": "John Wayne",
                "year": 1989,
                "rating": 9.5
            }
        ]
    );
})
 
module.exports = router;