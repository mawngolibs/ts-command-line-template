import { CommandModule } from 'yargs';
import chalk from 'chalk';

const command: CommandModule = {
    command: ['index', '$0'],
    describe: 'Sample command',
    handler: (args) => console.log(chalk.green(`${args.hi ? 'Hi' : 'Hello'} World!`)),
    builder: (yargs) => yargs
        .option('hi', {
            describe: 'Say \'Hi\' instead',
            boolean: true,
        }),
};

export default command;
