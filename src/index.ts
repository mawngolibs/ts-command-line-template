import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import hello from './commands/hello';

yargs(hideBin(process.argv))
    .command(hello)
    .argv;
