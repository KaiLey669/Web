import chalk from 'chalk';

//const orange = chalk.hex('#FFA500');
const orange = chalk.bgHex('#FFA500').black;
const log = console.log;

log(chalk.bgRed.black('Никакого'));
log(orange('Гейства.'));
log(chalk.bgYellow.black('Только'));
log(chalk.bgGreen.black('Жёсткий'));
log(chalk.bgCyan.black('Мужской'));
log(chalk.bgBlue.black('Пакетный'));
log(chalk.bgMagenta.black('Менеджер.'));