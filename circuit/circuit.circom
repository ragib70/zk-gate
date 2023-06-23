pragma circom 2.0.0;

include "../circomlib/circuits/poseidon.circom";

template zkGate() {
    // The public outputs
    signal output nullifier;

    // The private inputs
    signal input sec_key;
    signal input name;
    signal input location;
    signal input contact_number;
    signal input photo;
    signal input account_address;

    // The public inputs
    signal input pub_key;

    // Hash the preimage and check if the result matches the hash.
    component hasher = Poseidon(1);
    hasher.inputs[0] <== sec_key;

    hasher.out === pub_key;

    // The nullifier is being used here to make the proof unique and encrypt user's private information.
    component nullifierHasher = Poseidon(6);
    nullifierHasher.inputs[0] <== name;
    nullifierHasher.inputs[1] <== location;
    nullifierHasher.inputs[2] <== contact_number;
    nullifierHasher.inputs[3] <== photo;
    nullifierHasher.inputs[4] <== sec_key;
    nullifierHasher.inputs[5] <== account_address;

    nullifier <== nullifierHasher.out;
}

component main {public [pub_key]} = zkGate();