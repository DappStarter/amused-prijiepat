require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift return situate coil harvest clog blue trend'; 
let testAccounts = [
"0x9db35dc664056f5c22299474b9502e3de7a7d1eb45938d06a5f53f2aab716d14",
"0x28797b56e05ca301e9e2f9b34e465be8d43ff6fe719d22e9d7952fdee5841625",
"0x177a922b951f984792452083deca84e4d0dd2208514e56a319fc011b7b99c576",
"0x0664b7ae8dba38aad16d9bbe78e895db39759e9ebf4ca88c17e6ef45a0311052",
"0x322bdf3a5eff8b611cc06beb8af5d59aaf48ce074d53bed659b71cce6dd6abc7",
"0x19a8f5e595ebdc261f803360d9b98d96ee945508b42d6c00866842805e0b8272",
"0x5fcb37b63ea959ad67b3bfdfa85a2d8e9d417ca541409d91817d2732f3178461",
"0xa14f5ee86a6010b620d30f734b5c69938803d2a11782dedcc30a9c72360104e5",
"0xd3dd24a4c3b371901376aa0dc18e79a0a8ab192c602f00650ff1a28bb3042b29",
"0x6a96c2e0d04549cdd1344c001ea4d9de3cba46352b185110879541d4870ca141"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
