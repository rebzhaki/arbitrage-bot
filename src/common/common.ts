import { ethers } from "ethers";
import { Settings } from "../config";
import { UNISWAP_ABI_v2, UNISWAP_ABI_v3 } from "../constants/uniswap-ABI";
import { SUSHISWAP_ABI_V2 } from "../constants/sushiswap-ABI";

export const _wssProvider = new ethers.WebSocketProvider(Settings.WSS_URL);

export const getTransaction = async (txHash: string) => {
  try {
    return _wssProvider.getTransaction(txHash);
  } catch (error) {
    console.log("error getting the txhash", error);
  }
};

export const UNISWAP_V3_INTERFACEABI = new ethers.Interface(UNISWAP_ABI_v3);
export const UNISWAP_V2_INTERFACEABI = new ethers.Interface(UNISWAP_ABI_v2);
export const SUSHISWAP_V2_INTERFACEABI = new ethers.Interface(SUSHISWAP_ABI_V2);
