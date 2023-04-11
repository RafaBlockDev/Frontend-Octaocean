const ethers = require("ethers");
const fs = require("fs");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

let whitelist = fs.readFileSync("./lista19.csv", "utf-8").split("\n");
let leaves = [];

let whitelistProofs = {
  proofs: {},
};
let totalCount = 0;
let finalAddress = [];
let sale = 1;
for (let i = 1; i < whitelist.length; i++) {
  let tokens = whitelist[i].trim().split(",");
  let address = tokens[0];

  if (address.length == 42 && address.startsWith("0x")) {
    if (finalAddress.includes(address)) {
      console.log("Already:", address);
      continue;
    } else {
      finalAddress.push(address);

      leaves.push(
        ethers.utils.solidityPack(["address", "uint256"], [address, sale])
      );
      whitelistProofs["proofs"][address] = { sale: sale };
      totalCount += 2;
    }
  } else {
    console.log("address", address);
  }
}
console.log("total:", totalCount);

let merkleTree = new MerkleTree(leaves, keccak256, {
  hashLeaves: true,
  sortPairs: true,
});
whitelistProofs["root"] = merkleTree.getHexRoot();

for (let address in whitelistProofs["proofs"]) {
  let leaf = ethers.utils.solidityKeccak256(
    ["address", "uint256"],
    [address, whitelistProofs["proofs"][address]["sale"]]
  );
  let proof = merkleTree.getHexProof(leaf);
  whitelistProofs["proofs"][address]["proof"] = proof;
}

fs.writeFileSync(
  `./whitelist-oficial.json`,
  JSON.stringify(whitelistProofs, null, "\t"),
  "utf-8"
);

