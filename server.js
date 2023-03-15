const serve = require('serve');
const port = process.env.PORT || 5000;

const app = serve('./build', {
    port: port,
    ignore: ['node_modules']
});

console.log(`Server running on port ${port}`);