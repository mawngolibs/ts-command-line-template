import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import info from "./commands/info";

yargs(hideBin(process.argv))
  .command(info)
  .argv;
