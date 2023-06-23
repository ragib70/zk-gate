pragma circom 2.1.4;

include "../circomlib/circuits/poseidon.circom";

template poseidonHasher() {
    // The public outputs
    signal input hash;

    // The private inputs
    signal input sec_key;

    // Hash the preimage and check if the result matches the hash.
    component hasher = Poseidon(1);
    hasher.inputs[0] <== sec_key;

    hash === hasher.out;
}

component main {public [hash]}= poseidonHasher();