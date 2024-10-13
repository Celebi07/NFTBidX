import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
 
const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);
const moduleAddress = "0xdfcd9ed51f8097cb616646b7a8ce6f41f8d8f1f9ed056179d895d9b30c2f7bdc";

const create_Collection = async ({account} : any) => {
  console.log(account)
    if (!account) return [];
    console.log(account);
    // change this to be your module account address
    const moduleAddress = "0xcbddf398841353776903dbab2fdaefc54f181d07e114ae818b1a67af28d1b018";
    console.log("hey")
    try {
      const collection_created = await aptos.getAccountResource(
        {
          accountAddress:account,
          resourceType:`${moduleAddress}::MyNFTMarketplace::Project`
        }
      );
      console.log(collection_created);
      
    } catch (e: any) {
      console.log(e);
    }
  };

  export {create_Collection};