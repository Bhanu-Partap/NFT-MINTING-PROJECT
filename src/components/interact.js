import WalletIcon from "@mui/icons-material/Wallet";
import MUITypography from "components/MUI/MUITypography";
import WalletSignature from "components/MUI/WalletSignature";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decodeData } from "../../helpers/decodeData";
import LocalStorageService from "../../services/LocalStorageService";
import { SNACKBAR_OPEN } from "../../store/actions/common/actions";
import { walletConnection } from "../../store/actions/wallet";
import types from "../../store/constants/walletTypes";
import MUIBadge from "../MUI/MUIBadge";
import MUIButton from "../MUI/MUIButton";

function WalletConnect({ handleProceed }) {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);

  const dispatch = useDispatch();
  const walletData = useSelector((state) => state.wallet.wallectStatus);
  const encryptedWalletAddress = LocalStorageService.getWalletAddress();
  const WalletInfo = encryptedWalletAddress
    ? JSON.parse(decodeData(encryptedWalletAddress))
    : walletData && walletData.walletStatus
    ? walletData
    : null;

  const isWalletConnect =
    walletData && walletData.walletStatus
      ? true
      : WalletInfo && WalletInfo.walletStatus
      ? true
      : false;

  useEffect(() => {
    const connectToMetaMask = async () => {
      try {
        // Connect to MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the default signer (i.e. the MetaMask account currently selected in the browser)
        const signer = provider.getSigner();

        // Listen for network and account changes
        provider.on("networkChanged", async () => {
          setSigner(await provider.getSigner());
        });
        provider.on("accountsChanged", async () => {
          setSigner(await provider.getSigner());
        });

        setProvider(provider);
        setSigner(signer);
        setAddress(await signer.getAddress());
      } catch (error) {
        console.error(error);
      }
    };

    connectToMetaMask();
  }, []);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length === 0) {
          setSigner(null);
          setAddress(null);

          LocalStorageService.disconnectWallet();

          const WalletAddress = {
            walletStatus: false,
            walletAddress: null,
          };
          dispatch({ type: types.CONNECT_WALLET, payload: WalletAddress });
        }
      });
      window.ethereum.on("disconnected", () => {
        setSigner(null);
        setAddress(null);

        LocalStorageService.disconnectWallet();
        const WalletAddress = {
          walletStatus: false,
          walletAddress: null,
        };
        dispatch({ type: types.CONNECT_WALLET, payload: WalletAddress });
      });
    }
  }, []);

  const logout = async () => {
    try {
      setSigner(null);
      setAddress(null);

      LocalStorageService.disconnectWallet();
      const WalletAddress = {
        walletStatus: false,
        walletAddress: null,
      };
      dispatch({ type: types.CONNECT_WALLET, payload: WalletAddress });
      dispatch({
        type: SNACKBAR_OPEN,
        open: true,
        message: "Wallet disconnected successfully",
        alertSeverity: "success",
        variant: "alert",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signMessage = async () => {
    try {
      const message = "Hello user, Welcome back to MetaMask!";
      const signature = await signer.signMessage(message);
      setAddress(await signer.getAddress());
      const data = { walletId: await signer.getAddress() };

      //backend hit
      await dispatch(walletConnection(data));
    } catch (error) {
      setSigner(null);
      setAddress(null);

      console.error(error);
    }
  };

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Connect to MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Send a JSON-RPC request to MetaMask to request the user to connect
        const accounts = await provider.send("eth_requestAccounts", []);

        // Get the signer for the connected account
        const newSigner = provider.getSigner(accounts[0]);
        setSigner(newSigner);
        setAddress(await newSigner.getAddress());
        const data = { walletId: await newSigner.getAddress() };

        await dispatch(walletConnection(data));
      } catch (error) {
        setSigner(null);
        setAddress(null);

        console.error(error);
      }
    } else {
      window.open("https://metamask.io/download/", "_blank");
    }
  }

  return (
    <>
      {isWalletConnect ? (
        <MUIButton
          variant="contained"
          disableRipple
          startIcon={
            <MUIBadge>
              <WalletIcon fontSize="small" />
            </MUIBadge>
          }
          onClick={logout}
          size="small"
          className="mui-wallet-button"
          tooltip
          title={
            <>
              <MUITypography className="mui-wallet-tooltip-text">
                Wallet is connected to :
              </MUITypography>
              <WalletSignature
                className="mui-wallet-tooltip-signature"
                wadd={WalletInfo && WalletInfo?.walletAddress}
                textColor="#44b700"
              />
            </>
          }
          placement="bottom"
        >
          <MUITypography className="mui-wallet-button-typography">
            Disconnect
          </MUITypography>
        </MUIButton>
      ) : (
        // </MUITooltip>
        <MUIButton
          variant="contained"
          startIcon={<WalletIcon />}
          onClick={signer && address ? signMessage : connectWallet}
          size="small"
          className="mui-wallet-button"
        >
          <MUITypography className="mui-wallet-button-typography">
            Connect Wallet
          </MUITypography>
        </MUIButton>
      )}
    </>
  );
}

export default WalletConnect;








// const getCurrentWalletConnected = async () => {
//   if (window.ethereum) {
//     try {
//       const addressArray = await window.ethereum.request({
//         method: "eth_accounts",
//       });
//       if (addressArray.length > 0) {
//         console.log(addressArray);
//         return {
//           address: addressArray[0],
//           status: true,
//           // status: "👆🏽 Write a message in the text-field above.",
//         };
//       } else {
//         return {
//           address: "",
//           status: false,
//           // status: "🦊 Connect to Metamask using the top right button.",
//         };
//       }
//     } catch (err) {
//       return {
//         address: "",
//         status: false,
//         // status: "😥 " + err.message,
//       };
//     }
//   } else {
//     return {
//       address: "",
//       status: (
//         <span>
//           <p>
//             {" "}
//             🦊{" "}
//             <a target="_blank" href={`https://metamask.io/download.html`}>
//               You must install Metamask, a virtual Ethereum wallet, in your
//               browser.
//             </a>
//           </p>
//         </span>
//       ),
//     };
//   }
// };

// export default getCurrentWalletConnected;
