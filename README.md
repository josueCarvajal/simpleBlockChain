# Primitive block chain project



## High level summary of block chain

If you are familiarized in security you may had hear from Chaining Block Ciphers (CBC), in which those are used for some cryptographic algorithms to be more secure. The idea is similar as in block chain, we are basically chaining different blocks of data and comparing each node of the chain with the Proof of work.

The block in the block chain contains 3 major components:
- Data: Any content, usually the transactional information
- Hash: The hash of the current block, this allows to validate the integrity of the block
- Previous Hash: This is how we are chaining the blocks. A new node always points to the previous one


This list of blocks can be seen as simple linked list, in which you have an initial node, but in linked lists the node points to the newer node, here in blockchain the new node points to the previous one.

This project here is just a just a very primitive and simple blockchain test just to show how the chaining and blocks works in blockchain (For sure, in a very high level and not cin omplex way).

Here we are building each block Using the index (to get the position of the block in the chain/array), timestamp, data, hash and previous hash.

Note: requires crypto-js from npm
![](output.PNG)
