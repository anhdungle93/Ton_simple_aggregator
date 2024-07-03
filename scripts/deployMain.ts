import { toNano, address } from '@ton/core';
import { Main } from '../wrappers/Main';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const main = provider.open(Main.createFromConfig({
        number: 0,
        address: address("UQD5G4TCiK5IZixGq_C5O86lnmwnFhTxaB5NHeWTHEoRJF0j"),
        owner_address: address("UQD5G4TCiK5IZixGq_C5O86lnmwnFhTxaB5NHeWTHEoRJF0j"),
    }, await compile('Main')));

    await main.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(main.address);

    // run methods on `main`
}
