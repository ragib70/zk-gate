# zk-gate

It is a privacy-based login protocol, which allows users to login into any 3rd party app by proving their identity via ZKPs and minting an NFT which acts as a pass for them for secured login.

#The problem zkGATE solves

##Problem:

Privacy and data security are major concerns in the digital era. While logging into any app when we click on sign in with Google, the 3rd party app has all the access to our personal data which Google has in its database. Even though the app might strictly require only a few information fields like email, location, etc. It can save other info fields in its own database.

##Consequences:

The lack of protection of these databases can have serious consequences. Data breaches can lead to identity theft and other harmful outcomes. We always keep seeing the large dataset of user's confidential information being sold out on the dark web.

##Solution: zkGATE - Protecting Privacy and Confidentiality

zkGATE is a login protocol which 3rd party apps can integrate, through which only those information which is required by the app is passed to it while the rest information is encrypted as a zero-knowledge proof. 

##zkGATE steps to protect user privacy and confidentiality:

*Integrate with 3rd party app: Any app that wants users to give the secure login mechanism needs to integrate zkGATE as a login option. Once done, the 3rd party app will be visible on the zkGATE page to generate NFT. The 3rd party app will be having a public key and a private key. The private key is shared securely with zkGATE at the time the app integrates zkGATE into it.  

Google Authorisation: A user who wants to login into the 3rd party app needs to get the zkGATE NFT. For this, to get the trusted authorization of the user, he is prompted to get the Google sign-in data. Through this process, the 3rd party app gets the trust of Google that the user signing in has a Google-authorized account.

Generating Proof: Once the personal information from Google is fetched only those data fields which are required by the 3rd party app is passed down while the other data fields are encrypted as nullifier into the proof. To protect from fake proofs, we use the HASH(secretKey) === publicKey of the 3rd party app. Since the secret key is securely protected at the zkGATE and will only be used to generate proof after Google authorization, hackers cannot bypass this check.

Minting NFT: Once the above processes are completed, the user gets an NFT minted on their wallet address. In the NFT metadata, the proof is written, and now the user gets redirected to the 3rd party app page.

Login: The user comes on the 3rd party app page and clicks on login using zkGATE. This causes in the backend to verify whether the user has an NFT with valid proof. If yes access is granted in the app, else access is denied. 

##Future Scope

We have used ERC1155 token standard for the NFT. The reason is to share the NFT with other users in case of sharing the account.
Example - Let’s suppose Instagram has integrated zkGATE. Now user1 wants to give access of its account to user2 for a day. User1 can mint another NFT with his own proof into NFT’s metadata with a day timestamp. By this user2 gets access of the user1’s account without the knowledge of his userID and Password, and since the validity of the NFT is only for a day he will loose access after a day, and can’t even try to alter the password to indefinitely to get the user1 logged out. Full control remains with the true owner of the account.

Since it acts as a bridge between web2 apps to use web3 authentication along the Google authorization, we want more apps to integrate zkGATE.

##Challenges we ran into

Figuring out the circom circuit to convert this use case into zero-knowledge took days.

Integrating Google authorization using Google auth2 API was a bit challenging.

For demo purpose, we're required to build another app that has integrated zkGATE into it as a login solution, which was like making another project in a small time frame.
