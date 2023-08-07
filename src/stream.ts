import {
  UNISWAP_V2_INTERFACEABI,
  _wssProvider,
  getTransaction,
} from "./common";
import { Settings } from "./config";

export const StreamData = async () => {
  // console.log(await Settings.WSS_URL, _wssProvider);
  _wssProvider.on("pending", async (txhash: string) => {
    const transactionData = await getTransaction(txhash);

    if (transactionData) {
      const { to: router, hash: txhash } = transactionData;

      if (router?.toLowerCase() == Settings.UNISWAP_ROUTER_V2.toLowerCase()) {
        const decodedDATA = UNISWAP_V2_INTERFACEABI.parseTransaction({
          data: transactionData.data,
        });

        const methodName = decodedDATA?.name;
        console.log("-->", methodName);

        if (methodName == "swapETHForExactTokens") {
          let path = decodedDATA?.args.path;
          // let token1 = path[0];
          let token = path[1];

          if (token.toLowerCase() == Settings.BUSDADDRESS.toLowerCase()) {
            let newPath = [Settings.WETHADDRESS, Settings.BUSDADDRESS];
            console.log("==>", token);
          }
        }
      }
    }
  });
};
