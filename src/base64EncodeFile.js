import { readFileSync } from 'fs';

export default file => new Buffer(readFileSync(file)).toString('base64');
