/* This file is generated and managed by tsync */

/** Generate: tsync -i src-tauri/src/constants/store.rs -o lib/store/generated.ts */
export const STORE = ".notwallet.dat";

export const STORE_WALLET = "wallet.json";

export const WALET_0 = "wallet_0";

export interface SolanaWallet {
  mnemonic: string;
  pubkey: string;
  privkey: string;
}
