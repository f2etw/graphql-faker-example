import fs from 'fs';
import { printSchema } from 'graphql';
import server from './server';

fs.writeFileSync('./schema.graphql', printSchema(server));
