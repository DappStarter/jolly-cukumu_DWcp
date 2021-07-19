require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach rival punch pumpkin inside light army gift'; 
let testAccounts = [
"0x17ec21058881e061c2c113e0af94dbf492642a3210883de4dbddff7d84623a85",
"0xae166ca8c0387934b9ca368f4c37ceb5669d070f619da60f44be716022deef69",
"0x8e640c084e2f0e8682d64c021480666c738695ab3ef4b842de189306d8003667",
"0x4df2e4a4d660e08fc6d458b23f632c3f3212f343aaf1d974799d1edf747e4c41",
"0xd9036309bc329ccf820bd3c80bd382811af1dd3a9d5b229905a119d831ae377a",
"0xa54a536eb42f593a07f77731d2ddf05a09d41a8f09bbb0aa423cf4796463910c",
"0x73ba91d700a072b281305b6c38279d2f891beef6031422c29da446005958a961",
"0x9b55c8c6ebe0823b024e0ab444dd870062795394eb8539e6ae9a0178efffc6cc",
"0xe241856701c7ced3cfa1a5a6259880042dbf7006049ccc7d3b7c114156c1b294",
"0x25a7a0bbceb3daf569e1ab47774800ab7ee0c5f98db7082f8807cde467a7c205"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


