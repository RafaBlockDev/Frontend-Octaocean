import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import "./main.css";
import abi from "../../contracts/abi.json";
import { useAccount, useBalance } from "wagmi";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const Main = () => {
  const { data: signer } = useSigner();
  const [mintAmount, setMintAmount] = useState(1);
  const [pricePerMint, setPricePerMint] = useState(null);
  const [proofAddress, setProofAddress] = useState(null);
  const { address } = useAccount();
  const { data } = useBalance({
    address
  });
  const userAddress = address;

  // Contract interactions

  const mintContract = "0x70E083F440096c3b0D215FFE50365C51897d0a86";

  useEffect(() => {
    if (!signer || !userAddress) return;

    const fetchPrice = async () => {
      if(!signer || !userAddress) return;

      const priceNFT = ethers.utils.parseUnits("0.1", "ether");
      setPricePerMint(priceNFT);
    }
    fetchPrice();

  }, []);

  const mint = async () => {
    const contract = new ethers.Contract(mintContract, abi, signer);
    const nftPrice = await contract.price();

    try {
      console.log("User address:", userAddress)
      console.log("Price of NFT is:", nftPrice)
      await contract.mint({value: nftPrice});
      console.log("NFT minted succesfully")
    } catch (error) {
      alert(error.code);
    }
  };

  const handleAmountChange = (change) => {
    if (change === -1) {
      if (mintAmount < 2) return;
      setMintAmount(mintAmount - 1);
    } else if (change === +1) setMintAmount(mintAmount + 1);
  };

  return (
    <div className='main'>
      <div className='main-title'>
        <img
          src={"main.gif"}
          width='50%'
          alt='img'
          className='main-title-img'
        />
      </div>
      <div className='main-mint'>
        <h1 className='main-title-top'>
          Public Sale 0.1 ETH
        </h1>

        <button className='mint-button' onClick={mint}>
          Mint
        </button>

        <div className='main-mint-buttons'>
          <button
            className='mint-amount-button'
            onClick={() => handleAmountChange(-1)}>
            -
          </button>
          <div className='main-mint-amount'>{mintAmount}</div>
          <button
            className='mint-amount-button'
            onClick={() => handleAmountChange(+1)}>
            +
          </button>

        </div>
      </div>
      <br/>
      <div className="main-mint">
        <CrossmintPayButton
            clientId="bf797826-9530-4888-9399-42030fa70438"
            environment="production"
            mintConfig={{
              "type":"erc-721",
              "totalPrice": "0.1",
              "_quantity":"5"
            }}
            />
      </div>
    </div>
  );
};
export default Main;
