"use client"; // This component uses client-side features

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { InputTransactionData, useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptosConfig = new AptosConfig({ network: Network.TESTNET });
const aptos = new Aptos(aptosConfig);
export default function SellNFTForm() {
  // State to manage form input
  const [nftData, setNftData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    royalties: "",
    category: "",
    additionalInfo: "",
  });
  const {account,signAndSubmitTransaction} = useWallet();
  // State to manage success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Create a router instance for redirection
  const router = useRouter();
  const mint_nft = async () => {
    console.log(account?.address)
      if (!account) return [];
      console.log(account);
      // change this to be your module account address
      const moduleAddress = "0xdfcd9ed51f8097cb616646b7a8ce6f41f8d8f1f9ed056179d895d9b30c2f7bdc";
      console.log("hey")
      try{
      const transaction:InputTransactionData = {
        data: {
          function:`${moduleAddress}::Project::mint_nft`,
          functionArguments:[[1],[1],[1],1]
        }
      }
      const response = await signAndSubmitTransaction(transaction);
      // wait for transaction
      await aptos.waitForTransaction({transactionHash:response.hash});
      console.log(response);
    }catch(e) {
        console.log(e);
    }
    };

  // Handle input change
  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setNftData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    
    // Simulate form submission logic (e.g., sending data to an API)
    console.log("NFT Data Submitted:", nftData);
    await mint_nft();
    // Set submitted state to true
    setIsSubmitted(true);

    // Redirect after a delay to show the success message
    setTimeout(() => {
      // Redirect to the landing page (e.g., "/")
      router.push("/");
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <section className="flex justify-center items-center p-10 bg-[#110229]">
      {isSubmitted ? (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-black text-center">
          <h2 className="text-3xl font-semibold mb-4">Form Submitted Successfully!</h2>
          <p className="mb-4">Thank you for submitting your NFT details.</p>
          <p className="text-gray-600">Redirecting to the landing page...</p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
        >
          <h2 className="text-3xl font-semibold mb-4 text-black text-center">Sell Your NFT</h2>
          
          <label className="block mb-2 text-black" htmlFor="title">Title</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={nftData.title} 
            onChange={handleChange} 
            required 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black bg-white"
          />

          <label className="block mb-2 text-black" htmlFor="description">Description</label>
          <textarea 
            name="description" 
            id="description" 
            value={nftData.description} 
            onChange={handleChange} 
            required 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black bg-white" 
            rows="4"
          />

          <label className="block mb-2 text-black" htmlFor="imageUrl">Image URL</label>
          <input 
            type="url" 
            name="imageUrl" 
            id="imageUrl" 
            value={nftData.imageUrl} 
            onChange={handleChange} 
            required 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black bg-white"
          />

          <label className="block mb-2 text-black" htmlFor="price">Price (in ETH)</label>
          <input 
            type="number" 
            name="price" 
            id="price" 
            value={nftData.price} 
            onChange={handleChange} 
            required 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black bg-white"
          />

          <label className="block mb-2 text-black" htmlFor="royalties">Royalties (%)</label>
          <input 
            type="number" 
            name="royalties" 
            id="royalties" 
            value={nftData.royalties} 
            onChange={handleChange} 
            required 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black bg-white"
          />

          <label className="block mb-2 text-black" htmlFor="category">Category</label>
          <select 
            name="category" 
            id="category" 
            value={nftData.category} 
            onChange={handleChange} 
            required 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black bg-white"
          >
            <option value="">Select a category</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="collectibles">Collectibles</option>
            <option value="photography">Photography</option>
          </select>

          <label className="block mb-2 text-black" htmlFor="additionalInfo">Additional Info</label>
          <textarea 
            name="additionalInfo" 
            id="additionalInfo" 
            value={nftData.additionalInfo} 
            onChange={handleChange} 
            className="border border-gray-300 rounded p-2 mb-4 w-full text-black bg-white" 
            rows="4"
          />

          <button 
            type="submit" 
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded hover:opacity-80 transition"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
