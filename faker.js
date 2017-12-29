import faker from 'graphql-tower-faker';
import server from './server';

faker(server, { port: 9002 });
