const express = require('express');
const router = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocumentOne = require('../swagger/index.json');
const swaggerDocumentTwo = require('../swagger/nudge2.json');

var options = {}

router.use('/api-docs-one', swaggerUi.serveFiles(swaggerDocumentOne, options), swaggerUi.setup(swaggerDocumentOne));

router.use('/api-docs-two', swaggerUi.serveFiles(swaggerDocumentTwo, options), swaggerUi.setup(swaggerDocumentTwo));

module.exports = router