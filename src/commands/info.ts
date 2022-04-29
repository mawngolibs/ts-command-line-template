import { CommandModule } from "yargs";
import chalk from "chalk";

interface Args {
  build: boolean,
  all: boolean,
}

interface Meta {
  name: string,
  version: string,
  description?: string,
  homepage?: string,
  author?: string,
  license?: string,
}

function main(args: Args) {
  const meta = process.env.META as unknown as Meta;
  if (Object.keys(meta).length) {
    console.log(`${meta.name} v${meta.version}`);

    if (meta.description) console.log(meta.description);
    if (args.all) {
      console.log("--");
      if (meta.homepage) console.log(`Homepage: ${meta.homepage}`);
      if (meta.author) console.log(`Author: ${meta.author} (${meta.license ?? "No License"})`);
    }
  } else {
    console.log("No information provided.");
  }

  if (args.build) {
    console.log(chalk.gray(`Build at ${process.env.BUILD_DATE}`));
  }

  console.log(chalk.green("\nUse options '--help' for more command."));
}

const command: CommandModule<unknown, Args> = {
  command: ["info", "$0"],
  describe: "Show tool information",
  handler: main,
  builder: (yargs) => yargs
    .option("build", {
      describe: "Show build time",
      boolean: true,
      default: false
    })
    .option("all", {
      alias: "a",
      describe: "Show verbose information",
      boolean: true,
      default: false
    })
};

export default command;
