import axios from "axios";
import boxen from "boxen";
import chalk from "chalk";

const boxOptions = {
    title: 'Data',
    borderStyle: 'round',
    padding: 1,
    borderColor: 'yellow'
}

export class IPTracker {

    constructor(ip) {
        this.ip = ip;
    }

    async makeRequest(){
        try {
            if (!this.ip) {
                throw new Error("No IP address to request");
                return;
            }

            const url = `http://ip-api.com/json/${this.ip}`;
            const response = await axios.get(url);
            const data = response.data;

            //
            const country = chalk.bold.green(`Country: ${chalk.bold.blue(data.country)}\n`);
            const city = chalk.bold.green(`City: ${chalk.bold.blue(data.city)}\n`);
            const region = chalk.bold.green(`CCAA/State: ${chalk.bold.blue(data.region)}\n`);
            const zipCode = chalk.bold.green(`Zip/Postal Code: ${chalk.bold.blue(data.zip)}\n`);
            const timezone = chalk.bold.green(`Time Zone: ${chalk.bold.blue(data.timezone)}\n`);
            const latandlon = chalk.bold.green(`Latitude: ${chalk.bold.blue(data.lat)}\n`) + chalk.bold.green(`Longitude: ${chalk.bold.blue(data.lon)}\n`);
            const org = chalk.bold.green(`Organization: ${chalk.bold.blue(data.isp)}`);
            //

            const content = country + city + region + zipCode + timezone + latandlon + org;
            console.log(boxen(content, boxOptions));
        } catch (e) {
            console.error(e);
        }
    }
}