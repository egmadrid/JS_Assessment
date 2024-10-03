/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. 
   When the NFT is ready, you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eyeColor, shirtColor, accessories) {
    const metadata = {
        "Name" : name,
        "EyeColor" : eyeColor,
        "ShirtColor" : shirtColor,
        "Accessories" : accessories
    }
    NFT.push(metadata);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFT.length ; i++) {
        console.log("Minted NFT " + (i + 1));
        console.log("Name: " + NFT[i].Name);
        console.log("Eye Color: " + NFT[i].EyeColor);
        console.log("Shirt Color: " + NFT[i].ShirtColor);
        console.log("Accessories: " + NFT[i].Accessories + "\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Number of Minted NFTs: " + NFT.length);
}

// call your functions below this line
mintNFT("Kyle", "Brown", "Orange", "Ushanka Hat");
mintNFT("Stan", "Blue", "Brown", "Beanie");
mintNFT("Craig", "Green", "Blue", "Chullo Hat");
listNFTs();
getTotalSupply();
